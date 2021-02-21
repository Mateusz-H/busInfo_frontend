import * as React from 'react';
import {store} from "../stores/store";
import {observer} from "mobx-react";
import {stopInfoHub} from "../services/stopInfoHub";
export const App=observer(()=>{
    console.log("reloading coz of store")
    return <div>{store.getStopsList.map((x:string)=>{
        return <p onClick={()=>stopInfoHub.joinToStopChannel(x)} key={x}>{x}</p>
    })}</div>
})