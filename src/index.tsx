import ReactDOM from "react-dom";
import * as React from "react";
import { App } from "./Components/App";
import { StopInfoHub } from "./services/stopInfoHub";

export const stopInfoHub = new StopInfoHub("http://localhost:4000");
ReactDOM.render(<App />, document.getElementById("root"));
