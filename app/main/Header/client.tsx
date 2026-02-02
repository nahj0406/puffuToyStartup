"use client";

import styles from "./Header.module.css";
import { useState } from "react";
import clsx from "clsx";

export function OuterMenu() {
  const [openMenu, setMenu] = useState<boolean>(false);
  const openClass = openMenu && styles.active;

  const moveAnchor = (id: string) => {
   // document.getElementById(id)?.scrollIntoView({
   //    behavior: 'smooth',
   //    block: 'start',
   // });

   const el = document.getElementById(id);
   if (!el) return;

   // :root에 설정된 --header-h 값 가져옴.
   const headerH = parseFloat(
      getComputedStyle(document.documentElement)
         .getPropertyValue('--header-h')
   ) || 0;
   // 사파리에서도 적용 잘 되는데 만약 버벅이면 getComputedStyle 문제임.

   const y =
      el.getBoundingClientRect().top +
      window.scrollY - headerH;

   window.scrollTo({ top: y, behavior: 'smooth' });

   setMenu(false);
  };


  return (
    <>
      <nav className={clsx(styles.outer, openClass)}>
        <ul>
          <li onClick={()=> moveAnchor('section1')}>사업 소개</li>
          <li onClick={()=> moveAnchor('section2')}>창업 경쟁력</li>
          <li onClick={()=> moveAnchor('section3')}>창업 패키지</li>
          <li onClick={()=> moveAnchor('section4')}>창업 절차</li>
          <li onClick={()=> moveAnchor('section5')}>창업 문의</li>
        </ul>
      </nav>

      <div className={styles.btn_box}>
        <img
          onClick={() => setMenu(true)}
          className={clsx(styles.open_icon, openMenu && styles.unActive)}
          src="/img/header/menu_open.png"
          alt="탭메뉴"
        />
        <img
          onClick={() => setMenu(false)}
          className={clsx(styles.close_icon, openClass)}
          src="/img/close_icon.png"
          alt="닫기 버튼"
        />
      </div>
    </>
  );
}
