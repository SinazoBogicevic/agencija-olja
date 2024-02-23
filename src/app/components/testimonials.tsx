import styles from "../page.module.css";
import fiveStars from "../fiveStars.png";
import clientPicture1 from "../clientPicture1.png";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className={styles.happyClients}>
      <div className={styles.happyClientsTitle}>
        <h1>
          What clients <span className={styles.darkBlueTitle}>are saying</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
          eleifend quam, non efficitur nisi mattis quis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Pellentesque pharetra arcu at mi
          maximus, id placerat turpis.
        </p>
      </div>
      <div>
        <div className={styles.client1}>
          <Image
            src={clientPicture1}
            className={styles.clientPicture1}
            alt={""}
          />
          <div className={styles.containerClient1}>
            <p>
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas lobortis nisi at est euismod volutpat.
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Toni MacGyver</h2>
                <p>Regional Research Administrator</p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
        <div className={styles.client2}>
          <Image
            src={clientPicture1}
            className={styles.clientPicture1}
            alt={""}
          />
          <div className={styles.containerClient1}>
            <p>
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas lobortis nisi at est euismod volutpat.
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Toni MacGyver</h2>
                <p>Regional Research Administrator</p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
        <div className={styles.client3}>
          <Image
            src={clientPicture1}
            className={styles.clientPicture1}
            alt={""}
          />
          <div className={styles.containerClient1}>
            <p>
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas lobortis nisi at est euismod volutpat.
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Toni MacGyver</h2>
                <p>Regional Research Administrator</p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
