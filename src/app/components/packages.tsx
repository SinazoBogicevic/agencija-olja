import styles from "../page.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function Packages() {
    return (
        <div className={styles.packages} id="Packages">
            <h1>Packages for social media management</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra arcu at mi maximus, id placerat turpis fringilla. Vivamus fringilla sem scelerisque auctor interdum.</p>
            <div className={styles.packageChoise}>
                <div className={styles.package1}>
                    <h3>Basic Plan</h3>
                    <div className={styles.mouthlyPayment}><h1>$99</h1><p>/Per month</p></div>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> 14 contents in total</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> Including 12 Feed Designs</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> Including 2 story designs</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> Post Carousel included</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> FREE 12 Caption Copywriting</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> FREE Viral Hastag Optimization</p>
                    <button className={styles.packagesButtons}>Purchase</button>
                </div>
                <div className={styles.package2}>
                    <h3>Basic Plan</h3>
                    <div className={styles.mouthlyPayment}><h1>$199</h1><p>/Per month</p></div>
                    <p><FaCheckCircle /> Get 31 contents in total</p>
                    <p><FaCheckCircle /> Includes 2 Video Reels (NEW)</p>
                    <p><FaCheckCircle /> Includes 24 Feed designs</p>
                    <p><FaCheckCircle /> Include 5 Story Designs</p>
                    <p><FaCheckCircle /> Include Post Carousel</p>
                    <p><FaCheckCircle /> FREE 26 Caption Copywriting</p>
                    <p><FaCheckCircle /> FREE Viral Hastag Optimization</p>
                    <button className={styles.packagesButton2}>Purchase</button>
                </div>
                <div className={styles.package3}>
                    <h3>Basic Plan</h3>
                    <div className={styles.mouthlyPayment}><h1>$399</h1><p>/Per month</p></div>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> Get 66 contents in total</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> Includes 4 Video Reels (NEW)</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> Includes 48 Feed designs</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> Includes 14 Story Designs</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> Include Post Carousel</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> FREE 52 Caption Copywriting</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> FREE Viral Hastag Optimization</p>
                    <p><FaCheckCircle color="rgba(0, 182, 255, 1)"/> FREE Admin Posting</p>
                    <button className={styles.packagesButtons}>Purchase</button>
                </div>
            </div>
        </div>
    )
}