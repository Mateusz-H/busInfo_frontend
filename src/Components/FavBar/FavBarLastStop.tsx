import { observer } from "mobx-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { store } from "./../../stores/store";

export const FavBarLastStop = observer(() => (
  <div title={store.selectedStop}>
    <NavLink to="/timetable" >ICO</NavLink>
  </div>
));
