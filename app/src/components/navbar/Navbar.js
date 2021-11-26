import React from "react";
import n from "./Navbar.module.css"
import {NavLink} from 'react-router-dom'
const Navbar = ()=>{

    return(
        <div className={n.nav}>
            <div><NavLink to = "/dispetchers">диспетчеры</NavLink></div>
            <div><NavLink to="/drivers">водители</NavLink></div>
            <div><NavLink to ="/registration">регистрация</NavLink></div>
        </div>
    )
}
export default Navbar