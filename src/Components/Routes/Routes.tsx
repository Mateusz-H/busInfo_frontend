import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FavBar } from "../FavBar/FavBar";
import { SearchBar } from "../SearchBar/SearchBar";
import { Timetable } from "../Timetable/Timetable";

export const Routes = () => (
  <BrowserRouter>
      <Route path="/">
          <FavBar/>
      </Route>
    <Switch>
      <Route exact path="/">
        <SearchBar />
      </Route>
      <Route path="/timetable">
        <Timetable />
      </Route>
    </Switch>
  </BrowserRouter>
);
