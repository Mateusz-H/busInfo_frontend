import { io } from "socket.io-client";
import {store} from "./stores/store"
import ReactDOM from 'react-dom';
import * as React from 'react';
import {App} from "./Components/App";
ReactDOM.render((
    <App/>
), document.getElementById('root'));
