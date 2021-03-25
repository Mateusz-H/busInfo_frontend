import { observable, action, computed, makeObservable } from "mobx";
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

  @action setStops(stopsList: any) {
    this.stops = stopsList;
    this.setNormalizedStops();
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
  @computed get getFilteredStops() {
    const normalizedFilter = normalizeString(this.stopsFilter);
    if (normalizedFilter)
      return this.getNormalizedStopsList.filter(
        (stopName) => stopName.indexOf(normalizedFilter) > -1
      );
    return this.getNormalizedStopsList;
  }
  @computed get getIsTimetableUnLoaded(){
    console.log("computing getistimetableactive")
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
}
export const store = new Store();
