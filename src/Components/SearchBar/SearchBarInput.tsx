import React from "react"

export const SearchBarInput=({value,onChange}:any)=>{

    return <input autoFocus type="text" value={value} onChange={onChange} placeholder={"Type your stop name"}></input>
}