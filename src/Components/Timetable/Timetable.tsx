import {observer} from "mobx-react";
import React from "react";
import {store} from "../../stores/store";

export const Timetable = observer(()=>{
    return store.getCurrentTimetable ?  <table>
        <thead>
        <tr>
            <th>Linia</th>
            <th>Kierunek</th>
            <th>Przewidywany czas przyjazdu</th>
            <th>Teoretyczny czas przyjazdu</th>
            <th>tripId</th>
        </tr>
        </thead>
        <tbody>
        {store.getCurrentTimetable.map((x:any)=>{
           return <tr>
                <td>{x.busId}</td>
                <td>{x.headsign}</td>
                <td>{x.estimatedTime}</td>
                <td>{x.theoreticalTime}</td>
                <td>{x.tripId}</td>
            </tr>
        })}
        </tbody>
    </table>:null})