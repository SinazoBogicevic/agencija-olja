"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import styles from "../page.module.css";
import vector from "../vector.jpeg";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [showLanguages, setShowLanguages] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // const changeLanguage = (e:any) => {
  //   const locale = e.target.value;
  //   router.push(pathname, { locale } )
  // };

  // open ?  show x : burrger
  return (
    <div className={styles.navigationAll}>
      <nav className={styles.navigation}>
        <div className={styles.navigationIcon}>
          <Image src={vector} className={styles.navigationLogo} alt={""} />
          <p>Олгица Богићевић</p>
        </div>
        <div>
          {burgerOpen ? (
            <IoClose
              className={styles.burger}
              onClick={() => setBurgerOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              className={styles.burger}
              onClick={() => setBurgerOpen(true)}
            />
          )}
        </div>
        {!burgerOpen && (
          <ul className={styles.list}>
            <li>
              <a href="#Home">Почетна</a>
            </li>
            <li>
              <a href="#Services">Услуге</a>
            </li>
            <li>
              <a href="#Packages">Пакети</a>
            </li>
            <li>
              <a href="#Companies">Компаније</a>
            </li>
            <li>
              <a href="#FAQs">FAQs</a>
            </li>
            <li>
              <a href="#Clients">Клијенти</a>
            </li>
            <li>
              <a href="#Contact">Контактирај Нас</a>
            </li>
            {/* <li className={styles.dropdown}>
              <p onClick={() => setShowLanguages((curr) => !curr)}>
                Language <FaChevronDown className={styles.chevronDown} />
              </p>
              <p>
                Jezik <FaChevronDown className={styles.chevronDown} />
              </p>
              <ul className={styles.languageNav}>
                <li>
                  <a href="">English 🇬🇧</a>
                </li>
                <li>
                  <a href="">Serbian 🇷🇸</a>
                </li>
              </ul>
            </li> */}
          </ul>
        )}
        {
          // showLanguages && (
          //   <ul className={styles.languageNav}>
          //     <li>
          //       <a href="">English 🇬🇧</a>
          //     </li>
          //     <li>
          //       <a href="">Serbian 🇷🇸</a>
          //     </li>
          //   </ul>
          // )
        }
      </nav>
      <div
        className={clsx(styles.burgerMenu, {
          [styles.hasMaxHeightBurger]: burgerOpen,
          [styles.noMaxHeightBurger]: !burgerOpen,
        })}
      >
        {burgerOpen && (
          <>
            <ul className={styles.navigationUl}>
              <li>
                <a href="#Home">Почетна</a>
              </li>
              <li>
                <a href="#Services">Услуге</a>
              </li>
              <li>
                <a href="#Packages">Пакети</a>
              </li>
              <li>
                <a href="#Companies">Компаније</a>
              </li>
              <li>
                <a href="#FAQs">FAQs</a>
              </li>
              <li>
                <a href="#Clients">Клијенти</a>
              </li>
              <li>
                <a href="#Contact">Контактирај Нас</a>
              </li>
              {/* <li>
                <p onClick={() => setShowLanguages((curr) => !curr)}>
                  Jezik <FaChevronDown className={styles.chevronDown} />
                </p>
              </li> */}
            </ul>
            {/* <ul
              className={clsx(styles.language, {
                [styles.hasMaxHeight]: showLanguages,
                [styles.noMaxHeight]: !showLanguages,
              })}
            >
              <li>
                <a href="">English 🇬🇧</a>
              </li>
              <li>
                <a href="">Serbian 🇷🇸</a>
              </li>
            </ul> */}
          </>
        )}
      </div>
    </div>
  );
}
