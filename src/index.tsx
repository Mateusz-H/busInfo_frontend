import { io } from "socket.io-client";
import {store} from "./stores/store"
import ReactDOM from 'react-dom';
import * as React from 'react';
import {App} from "./Components/App";
ReactDOM.render((
    <App/>
), document.getElementById('root'));
const socket = io("http://localhost:4000/",{path:"/api",transports:["websocket"]});
socket.on("connect",()=>{
    console.log("connected")
    socket.emit("getStops")
})

socket.on("stopsReceive",(stops:any)=>{
    store.setStops(stops);
    }
)
