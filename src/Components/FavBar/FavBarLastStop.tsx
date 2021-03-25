import { observer } from "mobx-react";
import React from "react";
import { BiCalendarAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FavBarItemStyled } from "./_styled";
import { store } from "../../stores/store";

export const FavBarLastStop = observer(() =>
  store.getIsTimetableUnLoaded ? null : (
    <NavLink exact to="/timetable">
      <FavBarItemStyled unactive={store.getIsTimetableUnLoaded}>
        <BiCalendarAlt />
      </FavBarItemStyled>
    </NavLink>
  )
);
