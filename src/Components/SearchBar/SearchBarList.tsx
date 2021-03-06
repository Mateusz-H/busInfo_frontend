import { observer } from "mobx-react";
import React from "react";
import { store } from "../../stores/store";
import {
  SearchBarListElementStyled,
  SearchBarListOverflowStyled,
  SearchBarListStyled,
} from "./_styled";
import { NavLink } from "react-router-dom";

export const SearchBarList = observer(() => {
  return (
    <SearchBarListOverflowStyled>
      <SearchBarListStyled
        numberOfElements={store.getNumberOfFilteredStops}
        className={store.getVisibilityOfStopsList ? "visible" : "hidden"}
      >
        {store.getFilteredStops.map((stopName) => {
          return (
            <NavLink to="/timetable">
              <SearchBarListElementStyled
                key={stopName}
                onClick={() =>
                  store.setCurrentStop(store.normalizedStops[stopName])
                }
              >
                {store.normalizedStops[stopName]}
              </SearchBarListElementStyled>
            </NavLink>
          );
        })}
      </SearchBarListStyled>
    </SearchBarListOverflowStyled>
  );
});
