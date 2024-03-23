import React from "react";
import Image, { StaticImageData } from "next/image";
import facebook from "../facebook.png";
import instagram from "../instagram.png";
import twitter from "../twitter.png";
import linkedin from "../linkedin.png";
import smArt from "../smArt.png";
import styles from "../page.module.css";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneDisconnectDuotone } from "react-icons/pi";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.smart}>
        <Image src={smArt} alt="" />
        <p>
        Takodje nas mozete pronaci i na drustvenim mrezama.{" "}
        </p>
        <div className={styles.socialMedia}>
          <a href="https://www.linkedin.com/">
            {" "}
            <Image
              src={linkedin}
              alt=""
              className={styles.socialMediaImg}
            />{" "}
          </a>
          <a href="https://www.instagram.com/">
            {" "}
            <Image
              src={instagram}
              alt=""
              className={styles.socialMediaImg}
            />{" "}
          </a>
          <a href="https://twitter.com/">
            {" "}
            <Image
              src={twitter}
              alt=""
              className={styles.socialMediaImg}
            />{" "}
          </a>
          <a href="https://www.facebook.com/">
            {" "}
            <Image
              src={facebook}
              alt=""
              className={styles.socialMediaImg}
            />{" "}
          </a>
        </div>
      </div>
      <div className={styles.quickLinks}>
        <h6>Brze Veze</h6>
        <ul className={styles.footerBar}>
        <li><a href="#Home">Pocetna</a></li>
              <li><a href="#Services">Usluge</a></li>
              <li><a href="#Packages">Paketi</a></li>
              <li><a href="#Companies">Kompanije</a></li>
              <li><a href="#FAQs">FAQs</a></li>
              <li><a href="#Clients">Klijenti</a></li>
              <li><a href="#Contact">Kontaktiraj Nas</a></li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h6>Kontaktiraj Nas</h6>
        <div className={styles.contactNo}>
        <TfiEmail color="lightskyblue"/> 
          <p>olja.bogicevic65@gmail.com</p>
          <p>agencijaolja@mts.rs</p>
        <IoLocationSharp color="green"/>
          <p>Zore Radulovic 14a, 34000 Kragujevac, Srbija</p>
        <PiPhoneDisconnectDuotone color="orange"/>
          <p>+381 66 331 573</p>
          <p>+381 34 331 573</p>
        </div>
      </div>
    </div>
  );
}
