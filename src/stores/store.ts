import {observable, action, computed, makeObservable} from "mobx";
import {normalizeString} from "../utils/stringFunctions";

export class Store{
    constructor() {
        makeObservable(this)
    }

    @observable stops={};
    @observable normalizedStops={} as any;
    @observable timetable={} as any;
    @observable selectedStop: string|undefined;

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
    @computed get getStopsList(){
        return Object.keys(this.stops);
    }
    @computed get getNormalizedStopsList(){
        return Object.keys(this.normalizedStops)
    }
}
export const store=new Store();