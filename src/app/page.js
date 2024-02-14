"use client"
// import Image from "next/image";
import styles from "./page.module.css";
import Card from "../../components/Card/card";
// import Hamburger from "../../components/Hamburger/hamburger";
// import Hamburger from "../../components/Hamburger/hamburger";
import HamburgerMenu from "../../components/Hamburger/hamburger";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import ChatComponent from "../../components/Chat/chat";
import Smallcard from "../../components/smallcard/smallcard";
export default function Home() {
 
    const [text, setText] = useState('');
    const originalText = "One Stop Solution For All Your Legal Needs";
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= originalText.length) {
          setText(originalText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust the interval duration as needed
  
      return () => clearInterval(interval);
    }, []);
  return (
    
    <>
    <div className={styles.Home}>
      {/* <h1>Hello</h1> */}
      <div className={styles.nav}>
      <HamburgerMenu/>
      <div className={styles.flash}>
        <p>Legal Insights</p>
      </div>
      <div className={styles.search}>
      <input
        type="text"
        placeholder="  Search..."
        // value={searchQuery}
        // onChange={handleSearch}
        className={styles.bar}
      />
        <Image src="/search.svg" height={50} width={50} alt="error" className={styles.searchicon}/>
      </div>
      </div>

      <div className={styles.text}><h1>{text}</h1></div>

      <div className={styles.card1}>
      <Smallcard title="Real Estate" />
      </div>
      <div className={styles.card2}>
      <Smallcard title="Documents" />
      </div>
      <div className={styles.card3}>
      <Smallcard title="Vehicles" />
      </div>

    <Image src="/chatbotfinal2.svg" height={50} width={50} alt="error" className={styles.chat}/>

      {/* <Smallcard title="Real Estate" className={styles.card2}/>
      <Smallcard title="Real Estate" className={styles.card3}/> */}
    </div>
     {/* <ChatComponent/> */}
    </>
    
  );
}
