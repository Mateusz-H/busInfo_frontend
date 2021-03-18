import { observer } from "mobx-react";
import React from "react";
import { store } from "../../stores/store";
import { stopInfoHub } from "../../index";
import {
  SearchBarListElementStyled,
  SearchBarListOverflowStyled,
  SearchBarListStyled,
} from "./_styled";
const setCurrentStop = (stopName: string) => () => {
  stopInfoHub.joinToStopChannel(stopName);
  store.setCurrentStop(stopName);
  store.setStopsFilter(stopName);
  store.setSearchBarFocused(false)
};
export const SearchBarList = observer(() => {
  return (
    <SearchBarListOverflowStyled>
      <SearchBarListStyled
        numberOfElements={store.getNumberOfFilteredStops}
        className={
          store.getVisibilityOfStopsList
            ? "visible"
            : "hidden"
        }
      >
        {store.getFilteredStops.map((stopName) => {
          return (
            <SearchBarListElementStyled
              key={stopName}
              onClick={setCurrentStop(store.normalizedStops[stopName])}
            >
              {store.normalizedStops[stopName]}
            </SearchBarListElementStyled>
          );
        })}
      </SearchBarListStyled>
    </SearchBarListOverflowStyled>
  );
});
