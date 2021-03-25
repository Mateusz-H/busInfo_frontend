import { io, Socket } from "socket.io-client";
import { store } from "../stores/store";

export class StopInfoHub {
  hubConnection: Socket;

  constructor(uri: string) {
    this.hubConnection = io(uri, { path: "/api", transports: ["websocket"] });
    this.getStops();
    this.initializeDataReceivers();
  }
  getStops() {
    this.hubConnection.emit("getStops");
  }
  initializeDataReceivers() {
    this.timetableReceive();
    this.stopsReceive();
  }
  joinToStopChannel(stopName: string) {
    if (
      store.selectedStop &&
      store.selectedStop !== stopName &&
      !store.favoriteStops.has(store.selectedStop)
    ) {
      this.leaveSymbolChannel(store.selectedStop);
    }
    this.hubConnection.emit("joinToStopChannel", stopName);
  }
  leaveSymbolChannel(stopName: string) {
    this.hubConnection.emit("leaveSymbolChannel", stopName);
  }
  timetableReceive() {
    this.hubConnection.on(
      "timetableReceive",
      (stopName: string, timetable: any) =>
        store.setTimetable(stopName, timetable)
    );
  }
  stopsReceive() {
    this.hubConnection.on("stopsReceive", (stops: any) =>
      store.setStops(stops)
    );
  }
}
