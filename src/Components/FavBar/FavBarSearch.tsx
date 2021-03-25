import React from "react";
import { NavLink } from "react-router-dom";
import { FavBarItemStyled } from "./_styled";
import { BiSearchAlt } from "react-icons/bi";

export const FavBarSearch = () => (
  <NavLink exact to="/">
    <FavBarItemStyled>
      <BiSearchAlt />
    </FavBarItemStyled>
  </NavLink>
);
