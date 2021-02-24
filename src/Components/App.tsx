import * as React from 'react';
import {observer} from "mobx-react";
import {SearchBar} from "./SearchBar/SearchBar";
export const App=observer(()=>{
    return <div>
        TopBar?
        <SearchBar/>
    </div>
})