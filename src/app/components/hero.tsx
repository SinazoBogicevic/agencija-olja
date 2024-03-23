import Image from "next/image";
import hero from "../hero.jpg";
import styles from "../page.module.css";

export function Hero() {
  return (
    
      <div className={styles.hero} id="Home">
        <div className={styles.heroText}>
          <h1>Sačuvajte svoje finansije za bolju budućnost</h1>
          <p>
            Briga o novcu je univerzalna. Mnogi od nas, iz celog sveta i iz svih sfera života, skoro konstantno se suočavamo sa finansijskim stresom i neizvesnošću koje nam nosi budućnost. Šta ljude najviše brine kada je riječ o finansijama i koji su korisni saveti za finansijsku sigurnost saznajte u nastavku.
          </p>
          <button type="submit">Get Started</button>
        </div>
        <div>
        <Image
          src={hero}
          width={340}
          height={472}
          className={styles.heroImage}
          alt="view of skyscrapers from the bottom-up"
        /></div>
      </div>
    
  );
}
