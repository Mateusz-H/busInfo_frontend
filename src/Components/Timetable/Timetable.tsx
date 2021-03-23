import { observer } from "mobx-react";
import React from "react";
import { formatTime } from "../../utils/stringFunctions";
import { store } from "../../stores/store";
import { TimetableStyled } from "./_styled";

export const Timetable = observer(() => {
  return store.getCurrentTimetable ? (
    <TimetableStyled>
      <h1>{store.selectedStop}</h1>
      <table>
        <thead>
          <tr>
            <th>Linia</th>
            <th>Kierunek</th>
            <th>Przewidywany czas</th>
            <th>Teoretyczny czas</th>
            <th title="Czas opóźnienia, jeżeli jest ujemny autobus przyjedzie na przystanek wcześniej">Opóźnienie</th>
          </tr>
        </thead>
        <tbody>
          {store.getCurrentTimetable.slice().sort((a:any,b:any)=>a.delayInSeconds - b.delayInSeconds).map((x: any) => {
            return (
              <tr>
                <td>{x.busId}</td>
                <td>{x.headsign}</td>
                <td>{x.estimatedTime}</td>
                <td>{x.theoreticalTime}</td>
                <td>{formatTime(x.delayInSeconds)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TimetableStyled>
  ) : null;
});
