import styles from "../page.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function Packages() {
    return (
        <div className={styles.packages} id="Packages">
            <h1>Pregled osnovnih usluga 
            Osnovni paketi</h1>
            <p>Za uspešno poslovanje neophodan je dobar knjigovođa, koji će znati kako da evidentira sve poslovne promene koje se dešavaju u Vašem poslovanju, analizira ih i na vreme Vam ukaže na eventualne probleme ukoliko do njih dođe ili Vam da savete kako da unapredite poslovanje.</p>
            <div className={styles.packageChoise}>
                <div className={styles.package1}>
                    <h3>Plan1</h3>
                    <div className={styles.mouthlyPayment}><h2>9,999.00din</h2><p>/mesecno</p></div>
                    <p><FaCheckCircle color="#cacaca"/> 14 contents in total</p>
                    <p><FaCheckCircle color="#cacaca"/> Including 12 Feed Designs</p>
                    <p><FaCheckCircle color="#cacaca"/> Including 2 story designs</p>
                    <p><FaCheckCircle color="#cacaca"/> Post Carousel included</p>
                    <p><FaCheckCircle color="#cacaca"/> FREE 12 Caption Copywriting</p>
                    <p><FaCheckCircle color="#cacaca"/> FREE Viral Hastag Optimization</p>
                    <button className={styles.packagesButtons}>Purchase</button>
                </div>
                <div className={styles.package2}>
                    <h3>Plan2</h3>
                    <div className={styles.mouthlyPayment}><h2>19,999.00din</h2><p>/mesecno</p></div>
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
                    <h3>Plan3</h3>
                    <div className={styles.mouthlyPayment}><h2>39,999.00din</h2><p>/mesecno</p></div>
                    <p><FaCheckCircle color="#cacaca"/> Get 66 contents in total</p>
                    <p><FaCheckCircle color="#cacaca"/> Includes 4 Video Reels (NEW)</p>
                    <p><FaCheckCircle color="#cacaca"/> Includes 48 Feed designs</p>
                    <p><FaCheckCircle color="#cacaca"/> Includes 14 Story Designs</p>
                    <p><FaCheckCircle color="#cacaca"/> Include Post Carousel</p>
                    <p><FaCheckCircle color="#cacaca"/> FREE 52 Caption Copywriting</p>
                    <p><FaCheckCircle color="#cacaca"/> FREE Viral Hastag Optimization</p>
                    <p><FaCheckCircle color="#cacaca"/> FREE Admin Posting</p>
                    <button className={styles.packagesButtons}>Purchase</button>
                </div>
            </div>
        </div>
    )
}