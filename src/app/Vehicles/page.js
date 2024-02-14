import React from "react";
import Styles from './vehicles.module.css'
import Card from "../../../components/Card/card";
import HamburgerMenu from "../../../components/Hamburger/hamburger";
export default function Car(){

    return( 
        
        <div className={Styles.main}>
            <HamburgerMenu/>
            <div className={Styles.cardmain}> 
            <Card title= "Vehicles" />
            </div>

        </div>
        
    )
    }