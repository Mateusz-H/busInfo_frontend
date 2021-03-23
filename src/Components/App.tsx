import * as React from 'react';
import {observer} from "mobx-react";
import {SearchBar} from "./SearchBar/SearchBar";
import {Timetable} from "../Components/Timetable/Timetable";
import { StyledApp } from './_styled';
import { Routes } from './Routes/Routes';
export const App=observer(()=>{
    return <StyledApp>
        <Routes/>
    </StyledApp>
})