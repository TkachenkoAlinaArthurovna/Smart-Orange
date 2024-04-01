"use client";
import { useState } from "react";
import Link from "next/link";

import styles from "@/app/Components/Header/header.module.scss";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header__navigation}>
      <div className={styles.header__menu} onClick={toggleMenu}>
        {isMenuOpen ? (
          <img src="./image/close.png" alt="close"></img>
        ) : (
          <img src="./image/menu.png" alt="menu"></img>
        )}
      </div>
      <div className={styles.header__wrapper_list}>
        <ul
          className={`${styles.header__list} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          <Link href="/">
            <li>ГЛАВНАЯ</li>
          </Link>
          <Link href="/">
            <li>ГАЛЕРЕЯ</li>
          </Link>
          <Link href="/">
            <li>ПРОЕКТЫ</li>
          </Link>
          <Link href="/">
            <li>СЕРТИФИКАТЫ</li>
          </Link>
          <Link href="/">
            <li>КОНТАКТЫ</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
