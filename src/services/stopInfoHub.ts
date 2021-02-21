import {io, Socket} from "socket.io-client";
import {store} from "../stores/store";

export class StopInfoHub {
    hubConnection:Socket;

    constructor() {
        this.hubConnection=io("http://localhost:4000/",{path:"/api",transports:["websocket"]});
        this.getStops();
        this.initializeDataReceivers();
    }
    getStops(){
        this.hubConnection.emit("getStops");
    }
    initializeDataReceivers(){
        this.timetableReceive();
        this.stopsReceive()
    }
    joinToStopChannel(stopName:string){
        this.hubConnection.emit("joinToStopChannel",stopName)
    }
    timetableReceive(){
        this.hubConnection.on("timetableReceive",(stopName:string,timetable: any)=>store.setTimetable(stopName,timetable))
    }
    stopsReceive(){
        this.hubConnection.on("stopsReceive",(stops:any)=>store.setStops(stops))
    }
}

export const stopInfoHub = new StopInfoHub();
