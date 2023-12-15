import React from "react"
import Image, { StaticImageData } from "next/image"
import contactUs from "../contactUs.png"
import contactUsHeader from "../contactUsHeader.png"
import styles from '../page.module.css'

export default function Contact() {
    return(
        <div className={styles.contactUs}>
            <Image src={contactUs} alt="" className={styles.contactUsImg}/>
            <div>
                <div className={styles.contactUsHeader}>
                    <Image src={contactUsHeader} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed facilisis eleifend quam, non efficitur nisi mattis quis. </p>
                </div>
                {/* <div className={styles.fillin}>
                   <input type="text" placeholder="Full name" />
                   <input type="text" placeholder="Email" />
                   <input type="text" placeholder="Telephone" />
                   <input type="text" placeholder="Service" />
                   <input type="text" placeholder="Message" />
                   <button>Get Started</button>
                </div> */}
            </div>
        </div>
    ) 
}