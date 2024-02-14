"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import styles from "../page.module.css";
import vector from "../vector.png";

export default function Navbar() {
  const [showLanguages, setShowLanguages] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  // open ?  show x : burrger
  return (
    <div className={styles.navigationAll}>
      <nav className={styles.navigation}>
        <div className={styles.navigationIcon}>
          <Image src={vector} alt={""} />
          <p>Finanxe</p>
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
        {/* {!burgerOpen && <ul className={styles.list}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        
        <li>
        <p onClick={() => setShowLanguages((curr) => !curr)}>
            Language <FaChevronDown className={styles.chevronDown}/>
          </p>
        </li>
      </ul>}
      <div>
      {showLanguages && (
            <ul className={styles.language}>
              <li>
                <a href="">English 🇬🇧</a>
              </li>
              <li>
                <a href="">Serbian 🇷🇸</a>
              </li>
            </ul>
          )}
      </div> */}
      </nav>
      
        <div className={clsx(styles.burgerMenu, {
          [styles.hasMaxHeightBurger]: burgerOpen,
          [styles.noMaxHeightBurger]: !burgerOpen,
        })}>
         {burgerOpen && <><ul className={styles.navigationUl}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>
              <p onClick={() => setShowLanguages((curr) => !curr)}>
                Language <FaChevronDown className={styles.chevronDown} />
              </p>
            </li>
          </ul>
          <ul
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
          </ul></>}
        </div>
      
    </div>
  );
}
