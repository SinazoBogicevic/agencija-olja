"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import vector from "../vector.png";
import expand from "../expand.png";
import styles from "../page.module.css";

export default function Navbar() {
  const [showLanguages, setShowLanguages] = useState(false);
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationIcon}>
        <Image src={vector} alt={""} />
        <p>Finanxe</p>
      </div>
      <ul className={styles.navigationBar}>
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
            Language <Image src={expand} alt={""} width={10} />
          </p>
          {showLanguages && (
            <ul className={styles.language}>
              <li>
                <a href="">English 🇬🇧</a>
              </li>
              <li>
                <a href="">Serbian</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
