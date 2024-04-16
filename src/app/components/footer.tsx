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
        Можете нас пронаћи и на друштвеним мрежама.{" "}
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
        <h6>Брзе везе</h6>
        <ul className={styles.footerBar}>
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
        </ul>
      </div>
      <div className={styles.contact}>
        <h6>Контактирајте Нас</h6>
        <div className={styles.contactNo}>
        <TfiEmail color="lightskyblue"/> 
          <p>olja.bogicevic65@gmail.com</p>
          <p>agencijaolja@mts.rs</p>
        <IoLocationSharp color="green"/>
          <p>Зоре Радуловић 14а, 34000 Крагујевац, Србија</p>
        <PiPhoneDisconnectDuotone color="orange"/>
          <p>+381 66 331 573</p>
          <p>+381 34 331 573</p>
        </div>
      </div>
    </div>
  );
}
