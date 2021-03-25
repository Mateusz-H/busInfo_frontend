import React from "react";
import {Link, NavLink } from "react-router-dom";
import { FavBarItemStyled } from "../../Components/FavBar/_styled";
import {GiRoundStar} from "react-icons/gi";
import { store } from "../../stores/store";
const setTimetable=(stopName:string)=>()=>{
    store.setCurrentStop(stopName)
}
export const FavBarFavoriteStopsItem = ({ stopName }: any) => {
  return (
    <Link to="/timetable">
      <FavBarItemStyled onClick={setTimetable(stopName)} title={stopName}> <GiRoundStar/></FavBarItemStyled>
    </Link>
  );
};
