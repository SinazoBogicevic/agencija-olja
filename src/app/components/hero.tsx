import Image from "next/image";
import hero from "../hero.jpg";
import styles from "../page.module.css";

export function Hero() {
  return (
    
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Preserving Your Finances For a Better Future</h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular. Li lingues differe solmen in li grammatica, li
            pronunciation e li plu commun vocabules.
          </p>
          <button type="submit">Get Started</button>
        </div>
        <Image
          src={hero}
          width={340}
          height={472}
          className={styles.heroImage}
          alt="view of skyscrapers from the bottom-up"
        />
      </div>
    
  );
}
