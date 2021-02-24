import { observer } from "mobx-react"
import React from "react"
import {store} from "../../stores/store";

export const SearchBarList = observer(({filter}:any)=>{
  return <div>
      {store.getNormalizedStopsList.filter(x=>x.indexOf(filter)>-1).map(x=>{
          return <p>{store.normalizedStops[x]}</p>
          }
      )}
  </div>
})