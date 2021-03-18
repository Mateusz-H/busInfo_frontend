import {observable, action, computed, makeObservable} from "mobx";
import {normalizeString} from "../utils/stringFunctions";

export class Store{
    constructor() {
        makeObservable(this)
    }

    @observable stops={};
    @observable normalizedStops={} as any;
    @observable timetable={} as any;
    @observable selectedStop="";
    @observable stopsFilter="";
    @observable filteredStops=[];
    @observable searchBarFocused = false;

    @action setStops(stopsList:any){
        this.stops=stopsList;
        this.setNormalizedStops();
    }
    @action setNormalizedStops(){
        this.getStopsList.forEach(stopName=>{
        this.normalizedStops[normalizeString(stopName)]=stopName;
        })
    }
    @action setTimetable(stopName:string,timetable:any){
        this.timetable[stopName]=timetable;
    }
    @action setCurrentStop(stopName:string){
        this.selectedStop=stopName;
    }
    @action setStopsFilter(stopsFilter:string){
        this.stopsFilter=stopsFilter;
    }
    @action setSearchBarFocused(focused:boolean){
        this.searchBarFocused=focused;
    }
    @computed  get getFilteredStops(){
        const normalizedFilter = normalizeString(this.stopsFilter)
        return this.getNormalizedStopsList.filter(stopName=>stopName.indexOf(normalizedFilter)>-1);
    }
    @computed get getNumberOfFilteredStops(){
        return this.getFilteredStops.length;
    }
    @computed get getStopsList(){
        return Object.keys(this.stops);
    }
    @computed get getNormalizedStopsList(){
        return Object.keys(this.normalizedStops)
    }
    @computed get getVisibilityOfStopsList(){
        return store.getNumberOfFilteredStops && store.searchBarFocused
    }
    @computed get getCurrentTimetable(){
        return this.timetable[this.selectedStop]
    }
}
export const store=new Store();