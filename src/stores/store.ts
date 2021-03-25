import { action, computed, makeObservable, observable, toJS } from "mobx";
import { stopInfoHub } from "..";
import { normalizeString } from "../utils/stringFunctions";

export class Store {
  constructor() {
    makeObservable(this);
  }

  @observable stops = {};
  @observable normalizedStops = {} as any;
  @observable timetable = {} as any;
  @observable selectedStop = "";
  @observable stopsFilter = "";
  @observable filteredStops = [];
  @observable searchBarFocused = false;
  @observable favoriteStops = new Set();

  @action setStops(stopsList: any) {
    this.stops = stopsList;
    this.setNormalizedStops();
    this.loadFavorites();
    let lastSearchedStop = localStorage.getItem("lastSearchedStop");
    if (lastSearchedStop && stopsList.hasOwnProperty(lastSearchedStop)) {
      this.setCurrentStop(lastSearchedStop);
    }
  }
  @action setNormalizedStops() {
    this.getStopsList.forEach((stopName) => {
      this.normalizedStops[normalizeString(stopName)] = stopName;
    });
  }
  @action setTimetable(stopName: string, timetable: any) {
    this.timetable[stopName] = timetable;
    localStorage.setItem("lastSearchedStop", stopName);
  }
  @action setCurrentStop(stopName: string) {
    this.selectedStop = stopName;
    stopInfoHub.joinToStopChannel(stopName);
    store.setStopsFilter(stopName);
    store.setSearchBarFocused(false);
  }
  @action setStopsFilter(stopsFilter: string) {
    this.stopsFilter = stopsFilter;
  }
  @action setSearchBarFocused(focused: boolean) {
    this.searchBarFocused = focused;
  }
  @action addFavoriteStop(stopName: string) {
    addFavoriteStop(stopName);
    if (this.favoriteStops.size < 5) {
      this.favoriteStops.add(stopName);
      stopInfoHub.joinToStopChannel(stopName);
    }
  }
  @action removeFavoriteStop(stopName: string) {
    removeFavoriteStop(stopName);
    this.favoriteStops.delete(stopName);
    if (this.selectedStop !== stopName)
      stopInfoHub.leaveSymbolChannel(stopName);
  }
  @computed get getFilteredStops() {
    const normalizedFilter = normalizeString(this.stopsFilter);
    if (normalizedFilter)
      return this.getNormalizedStopsList.filter(
        (stopName) => stopName.indexOf(normalizedFilter) > -1
      );
    return this.getNormalizedStopsList;
  }
  @computed get getIsTimetableUnLoaded() {
    return !this.selectedStop;
  }
  @computed get getNumberOfFilteredStops() {
    return this.getFilteredStops.length;
  }
  @computed get getStopsList() {
    return Object.keys(this.stops);
  }
  @computed get getNormalizedStopsList() {
    return Object.keys(this.normalizedStops);
  }
  @computed get getVisibilityOfStopsList() {
    return store.getNumberOfFilteredStops && store.searchBarFocused;
  }
  @computed get getCurrentTimetable() {
    return this.timetable[this.selectedStop];
  }
  @computed get getFavoritesStops() {
    console.log("gettingstops", Array.from(toJS(this.favoriteStops)));
    return Array.from(toJS(this.favoriteStops));
  }

  loadFavorites() {
    const favorites = getFavoriteStops();
    favorites.forEach((stop) => {
      if (this.stops.hasOwnProperty(stop)) {
        this.favoriteStops.add(stop);
        stopInfoHub.joinToStopChannel(stop);
      }
    });
  }
}
function getFavoriteStops(): string[] {
  const favoritesString = localStorage.getItem("favoriteStops");
  if (favoritesString) {
    const favorites = JSON.parse(favoritesString);
    if (Array.isArray(favorites)) return favorites.splice(0, 5);
    localStorage.removeItem("favoriteStops");
  }
  return [];
}
function setFavoriteStops(stops: string[]) {
  const favoritesString = JSON.stringify(stops);
  localStorage.setItem("favoriteStops", favoritesString);
}
function addFavoriteStop(stopName: string) {
  const favorites = getFavoriteStops();
  if (favorites.length < 5) setFavoriteStops([...favorites, stopName]);
}
function removeFavoriteStop(stopName: string) {
  const favorites = getFavoriteStops();
  setFavoriteStops([...favorites.filter((x) => x !== stopName)]);
}
export const store = new Store();
