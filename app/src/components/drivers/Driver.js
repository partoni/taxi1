import React from "react";

export const Driver = (props)=>{
   

    debugger;
    return(
        <div>
            {props.driver?<div>Водитель {props.driver.name}</div>:<div>нет водителей</div>}
        </div>
    )
}