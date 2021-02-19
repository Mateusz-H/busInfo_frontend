import {observable,action} from "mobx";

export class Store{
    @observable stops={};


    @action setStops(stops:any){
        this.stops=stops;
    }
}
export const store=new Store();