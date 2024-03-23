import styles from "../page.module.css";
import frame from "../frame.png";
import Image from "next/image";

export default function Companies() {
  return (
    <div className={styles.companiesContainer} id="Companies">
      <div>
        <h1>
        Uz poverenje vrhunskih  <span className={styles.darkBlueTitle}>kompanija</span>
        </h1>
        <p className={styles.textTitle}>
        Dugogodišnji rad, iskustvo i stečeno poverenje kod klijenata i državnih organa uz stalno usavršavanje garancija je kvaliteta naših usluga, koje stalno prilagodjavamo našim klijentima.
        </p>
      </div>
      <Image src={frame} className={styles.companiesLines} alt={""} />
      <Image src={frame} className={styles.companiesLine2} alt={""} />
      <Image src={frame} className={styles.companiesLines} alt={""} />
    </div>
  );
}
