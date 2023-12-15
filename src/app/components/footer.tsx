import React from "react"
import Image, { StaticImageData } from "next/image"
import facebook from "../facebook.png"
import instagram from "../instagram.png"
import twitter from "../twitter.png"
import linkedin from "../linkedin.png"
import smArt from "../smArt.png"
import styles from '../page.module.css'

export default function Footer() {
    return(
        <div className={styles.footer}>
        <div className={styles.smart}>
            <Image src={smArt} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi sit amet neque tortor. </p>
            <div className={styles.socialMedia}>
                <a href="https://www.linkedin.com/"> <Image src={linkedin} alt="" className={styles.socialMediaImg}/> </a>
                <a href="https://www.instagram.com/"> <Image src={instagram} alt="" className={styles.socialMediaImg}/> </a>
                <a href="https://twitter.com/"> <Image src={twitter} alt="" className={styles.socialMediaImg}/> </a>
                <a href="https://www.facebook.com/"> <Image src={facebook} alt="" className={styles.socialMediaImg}/> </a>
            </div>
        </div>
        <div className={styles.quickLinks}>
            <h6>Quick Links</h6>
            <ul className={styles.footerBar}> 
                <li><a href="">About us</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Pircing</a></li>
                <li><a href="">Testimonial</a></li>
            </ul>
        </div>
        <div className={styles.contact}>
            <h6>Contact Us</h6>
            <div>
                <p>hello@website.com</p>
                <p>Riverside Building, County Hall, London SE1 7PB, United Kingdom</p>
                <p>+02 5421234560</p>
            </div>
        </div>
       </div>
    ) 
}