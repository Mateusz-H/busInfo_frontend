import { observer } from "mobx-react";
import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { store } from "../../stores/store";
import { TimetableSelectedStopStyled } from "./_styled";

const addStopToFavorite = (stopName: string) => () => {
  if (!store.favoriteStops.has(store.selectedStop))
    store.addFavoriteStop(stopName);
  else
    store.removeFavoriteStop(stopName)
};
export const TimetableSelectedStop = observer(() => (
  <TimetableSelectedStopStyled
    favorite={store.favoriteStops.has(store.selectedStop)}
    limitReached={store.favoriteStops.size>=5}
  >
    <span>{store.selectedStop}</span>
    <GiRoundStar title={store.favoriteStops.size>=5?"Osiągnięto maksymalną liczbe ulubionych przystanków":""} onClick={addStopToFavorite(store.selectedStop)} />
  </TimetableSelectedStopStyled>
));
