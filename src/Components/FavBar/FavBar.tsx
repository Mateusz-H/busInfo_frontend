import React from "react";
import { FavBarFavoriteStopsMapper } from "./FavBarFavoriteStopsMapper";
import { FavBarLastStop } from "./FavBarLastStop";
import { FavBarSearch } from "./FavBarSearch";
import { FavBarStyled } from "./_styled";

export const FavBar = () => (
  <FavBarStyled>
    <FavBarSearch />
    <FavBarLastStop />
    <FavBarFavoriteStopsMapper/>
  </FavBarStyled>
);
