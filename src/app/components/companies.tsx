import styles from "../page.module.css";
import frame from "../frame.png";
import Image from "next/image";

export default function Companies() {
  return (
    <div className={styles.companiesContainer}>
      <div>
        <span>
          Trusted by Top <span className={styles.darkBlueTitle}>companies</span>
        </span>
        <p className={styles.textTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pharetra arcu at mi maximus, id placerat turpis fringilla. Vivamus
          fringilla sem scelerisque auctor interdum.
        </p>
      </div>
        <Image src={frame} className={styles.companiesLine1} alt={""} />
        <Image src={frame} className={styles.companiesLine2} alt={""} />
        <Image src={frame} className={styles.companiesLine3} alt={""} />
    </div>
  );
}
