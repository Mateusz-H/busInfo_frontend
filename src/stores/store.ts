import {observable, action, computed, makeObservable} from "mobx";

export class Store{
    constructor() {
        makeObservable(this)
    }

    @observable stops={};
    @observable timetable={} as any;

    @action setStops(stopsList:any){
        this.stops=stopsList;
    }
    @action setTimetable(stopName:string,timetable:any){
        this.timetable[stopName]=timetable;
    }
    @computed get getStopsList(){
        return Object.keys(this.stops);
    }
}
export const store=new Store();