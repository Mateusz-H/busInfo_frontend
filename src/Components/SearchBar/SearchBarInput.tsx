import React from "react";
import { preventDefault } from "../../utils/eventsFunctions";
import {
  SearchBarFormStyled,
  SearchBarInputStyled,
  SearchBarLabelStyled,
} from "./_styled";
import {store} from "../../stores/store";
import {observer} from "mobx-react";

export const SearchBarInput = observer(({ value, onChange,onFocus }: any) => {
  return (
    <SearchBarFormStyled autoComplete="off" onSubmit={preventDefault}>
      <SearchBarInputStyled
          isVisible={store.getVisibilityOfStopsList}
        onFocus={onFocus}
        id="stopName"
        type="text"
          autoFocus
        value={value}
        onChange={onChange}
        required
      />
      <SearchBarLabelStyled htmlFor="stopName">
        Type your stop name
      </SearchBarLabelStyled>
    </SearchBarFormStyled>
  );
});
