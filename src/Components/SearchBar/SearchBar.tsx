import React, {useState} from "react"
import {SearchBarInput} from "./SearchBarInput";
import {SearchBarList} from "./SearchBarList";
import {normalizeString} from "../../utils/stringFunctions";

export const SearchBar=()=>{
    const [value,setValue]=useState("")
    const [normalisedStopName,setStopName]=useState("");
    const handleChange=(e:any)=>{
        setValue(e.target.value)
        setStopName(normalizeString(e.target.value));
    }
    return <div>
        <SearchBarInput value={value} onChange={handleChange}/>
        <SearchBarList filter={normalisedStopName}/>
    </div>
}