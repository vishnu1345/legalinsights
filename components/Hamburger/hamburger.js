// "use client"
// import React from "react";
// import Styles from './hamburger.module.css'
// import { useState } from "react";
// export default function Hamburger(){
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [bgBlur, setBgBlur] = useState("transparent")

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//         setBgBlur(isMenuOpen ? "transparent" : "rgb(0 0 0 / 78%)");
    
//       };
//     return(
//         <>
//         <div className={Styles.menu} onClick={toggleMenu}>
//             <div className={Styles.line}></div>
//             <div className={Styles.line}></div>
//             <div className={Styles.line}></div>
//         </div>
//         <div className={`${Styles.hamburger} ${isMenuOpen ? Styles.show : ''} `}>
//             <div className={Styles.buttons}>
//             <div className={`${Styles.slideOut1} ${Styles.hbBtn}`}>
//                 <h1 classname={Styles.pointer}>Home</h1>
//               </div>
//             <div className={`${Styles.slideOut2} ${Styles.hbBtn}`}>
//                 <h1 classname={Styles.pointer}>Home</h1>
//               </div>
//             <div className={`${Styles.slideOut3} ${Styles.hbBtn}`}>
//                 <h1 classname={Styles.pointer}>Home</h1>
//               </div>
//             <div className={`${Styles.slideOut4} ${Styles.hbBtn}`}>
//                 <h1 classname={Styles.pointer}>Home</h1>
//               </div>
//             </div>
//         </div>
//         </>
//     )
// }
"use client"
// import React, { useState } from "react";
// import Styles from './hamburger.module.css'

// export default function Hamburger() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <>
//             <div className={`${Styles.menu} ${isMenuOpen ? Styles.cross : ''}`} onClick={toggleMenu}>
//                 <div className={Styles.line}></div>
//                 <div className={Styles.line}></div>
//                 <div className={Styles.line}></div>
//             </div>
//             <div className={`${Styles.hamburger} ${isMenuOpen ? Styles.show : ''}`}>
//                 <div className={Styles.buttons}>
//                     <div className={`${Styles.slideOut1} ${Styles.hbBtn}`}>
//                         <h1 className={Styles.pointer}>Home</h1>
//                     </div>
//                     <div className={`${Styles.slideOut2} ${Styles.hbBtn}`}>
//                         <h1 className={Styles.pointer}>About</h1>
//                     </div>
//                     <div className={`${Styles.slideOut3} ${Styles.hbBtn}`}>
//                         <h1 className={Styles.pointer}>Services</h1>
//                     </div>
//                     <div className={`${Styles.slideOut4} ${Styles.hbBtn}`}>
//                         <h1 className={Styles.pointer}>Contact</h1>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// components/HamburgerMenu.js
"use client"
import React, { useState } from 'react';
import styles from './hamburger.module.css';
import Link from 'next/link';
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {isOpen && (
                <div className={styles.menu}>

                    {/* <a href="#" className={styles.menuItem}>Home</a>
                    <a href="#" className={styles.menuItem}>About</a>
                    <a href="#" className={styles.menuItem}>Services</a>
                    <a href="#" className={styles.menuItem}>Contact</a> */}
                    <Link href="/" style={{textDecoration: "none"}}>
            <h1>Home</h1>
            </Link>
           
            {/* <Link href="/about" style={{textDecoration: "none"}}>
            <h1 >about</h1>
            </Link> */}
           
           <Link href="/House" style={{textDecoration: "none"}}>
            <h1>Real Estate</h1>
           </Link>

           <Link href="/Docs" style={{textDecoration: "none"}}>
            <h1>Personal Docs</h1>
           
           </Link>

           <Link href="/Vehicles" style={{textDecoration: "none"}}>
            <h1>Vehicles</h1>
           
           </Link>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
