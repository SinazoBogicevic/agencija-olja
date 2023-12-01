import React from "react"
import Image, { StaticImageData } from "next/image"
import accounting from "../accounting.png"
import styles from '../page.module.css'

export default function Navbar() {
    return (
    <nav className={styles.navigation}>
      <div className={styles.navigationIcon}>
        <Image src={accounting} alt={""} width={60} height={60}/>
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
            <a href="">Language</a>
          </li>
        </ul>
    </nav>
    )
}