import React from "react";
import styles from './card.module.css'
import Image from "next/image";
import Link from "next/link";
export default function Card(props) {
    return(
    
        <div className={styles.Card}>

        <h3 className={styles.heading}>{props.title}</h3>
        {/* <Image src={props.img} width={50} height={50} alt="error" className={styles.img}/> */}
        <div className = {styles.links}>
        <ul>
            <li> <Link href = {props.link1} className = {styles.docs}>{props.text1}</Link></li>
            <br></br>
            <li className={styles.docs}> {props.text2 }</li>
            <br></br>
            <li> <a href = {props.link3} className = {styles.docs}>{props.text3}</a></li>
            <br></br>
            <li> <a href = {props.link4} className = {styles.docs}>{props.text4}</a></li>
        </ul>
        </div>

        </div>
    
    )
}