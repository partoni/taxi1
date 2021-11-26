import React from "react";
import { Route } from "react-router";
import { Drivers } from "../drivers/drivers";
import Dispetchers from "../dispetchers/Dispetchers";
import style from "./Content.module.css"
import DriversConteiner from "../drivers/DriversConteiner";
import {Login} from "../login/Login"
import  DriverConteiner  from "../drivers/DriverConteiner";

const Content = ()=>{

    return(
        <div className={style.con}>
          <Route  path="/drivers" component= {DriversConteiner}/>
          <Route path="/dispetchers" component= {Dispetchers}/>          
          <Route path="/registration" component={Login}/>
          <Route path="/driver/:driverId" component={DriverConteiner}/>
        </div>
    )
}
export default Content