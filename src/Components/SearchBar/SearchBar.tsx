import React, { useState } from "react";
import { SearchBarInput } from "./SearchBarInput";
import { SearchBarList } from "./SearchBarList";
import { normalizeString } from "../../utils/stringFunctions";
import { SearchBarStyled } from "./_styled";
import { observer } from "mobx-react";
import { store } from "../../stores/store";

const handleChange = (e: any) => {
  store.setStopsFilter(e.target.value);
};
const handleFocus = () => {
  store.setSearchBarFocused(true);
};
const handleBlur = () => {
  setTimeout(()=>store.setSearchBarFocused(false),1);
};
export const SearchBar = observer(() => {
  return (
    <SearchBarStyled>
      <SearchBarInput
        value={store.stopsFilter}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <SearchBarList />
    </SearchBarStyled>
  );
});
