import React from "react";
import Image from "next/image";
import styles from './smallcard.module.css'
export default function Smallcard(props){
    return(
        <>
        <div className={styles.Card}>
        <h3 className={styles.heading}>{props.title}</h3>
        {/* <Image src={props.img} width={50} height={50} alt="error" className={styles.img}/> */}
        </div>
        </>
    )
}