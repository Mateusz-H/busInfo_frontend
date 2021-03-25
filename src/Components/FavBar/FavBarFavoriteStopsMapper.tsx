import { observer } from "mobx-react";
import React from "react";
import { store } from "../../stores/store";
import { FavBarFavoriteStopsItem } from "./FavBarFavoriteStopsItem";

export const FavBarFavoriteStopsMapper = observer(() => {
  return (
    <>
      {store.getFavoritesStops.map((stopName) => (
        <FavBarFavoriteStopsItem stopName={stopName} />
      ))}
    </>
  );
});
