import { observer } from "mobx-react";
import React from "react";
import { GiRoundStar } from "react-icons/gi";
import {store} from "../../stores/store";
import { TimetableSelectedStopStyled } from "./_styled";
const addStopToFavorite=(stopName:string)=>()=>{

}
export const TimetableSelectedStop = observer(()=><TimetableSelectedStopStyled>
    <span>{store.selectedStop}</span><GiRoundStar onClick={addStopToFavorite(store.selectedStop)}/>
    </TimetableSelectedStopStyled>
)