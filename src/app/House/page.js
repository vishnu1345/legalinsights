import React from "react";
import Styles from "./house.module.css";
import Card from "../../../components/Card/card";
import HamburgerMenu from "../../../components/Hamburger/hamburger";
export default function House(){
    return(
        <div className={Styles.main}>
            <HamburgerMenu/>
            <div className={Styles.cardmain}>
                <Card title ="House" link1 = "https://drive.google.com/file/d/11C3mFV8DqUNkRxEzUBIq9fecxBnIvrR4/view" text1 = "Establishment Act" text2= "Completion Certificate" link2 = "" text3 = "No Dues Certificate" link3 = "" text4 = "Non Encumbrance Certificate" link4 = ""/>
            </div>
 
        </div>
    )
}