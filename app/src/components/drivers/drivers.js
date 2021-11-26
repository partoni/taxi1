import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { driversApi, getDriverApi } from "../../api/api";
// import { addDriverAc } from "../../redux/driversReduser";
import NewDriver from "./newDriver";

export  const Drivers =(props)=>{
    // let [drivers,setDrivers]= useState([])
    useEffect(()=>{
      driversApi.getDrivers()
        // .then(res=>props.getDriversAc(res))
      .then(res=>props.getDriversAc(res.data))
        // fetch("/api")
        // .then(d=>d.json())
        // .then(res=>props.getDriversAc(res))
                    },[])
      
   return(
  <div>
      <div>водители</div>
        {props.drivers.lenght==0?<div>нет водителей</div>:
        props.drivers.map((d)=>(<div><NavLink to={"/driver/"+d.id}>{d.name}</NavLink></div>))}
      <NewDriver addDriver={props.addDriverAc}/>
  </div>  
    
   )
}