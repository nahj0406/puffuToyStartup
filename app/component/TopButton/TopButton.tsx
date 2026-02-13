"use client"
import styles from "./TopButton.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

function TopButton () {

   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
         const handleScroll = () => {
            setScrolled(window.scrollY > 0);
         };
      
         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const onTopButtonClick: React.MouseEventHandler<HTMLDivElement> = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <div className={clsx(styles.topToggleBtn, scrolled ? styles.scroll : "")} onClick={onTopButtonClick}>
         <img src={'/img/arrow_bottom_icon.png'}/>
         <span>TOP</span>
      </div>
   )
}

export default TopButton;