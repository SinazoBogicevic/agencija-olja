import styles from "../page.module.css";
import fiveStars from "../fiveStars.png";
import zdravko from "../zdravko.png";
import malutas from "../malutas.jpeg";
import apollo from "../apollo.png";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className={styles.happyClients} id="Clients">
      <div className={styles.happyClientsTitle}>
        <h1>
        Šta naši klijenti <span className={styles.darkBlueTitle}>govore </span> o nama
        </h1>
        <p>
        Povratne informacije naših klijenata i partnera su podsticaj da se uvek poboljšavamo.
        Zadovoljstvo nam je i čast da sarađujemo sa kompanijama koje su lideri u svojim oblastima. Naši klijenti su su kompanije različite veličine koje se proizvodnjom, trgovinom i raznim uslužnim delatnostima. Naši klijenti su kompanije koje su prepoznale značaj partnerskih odnosa, saradnje i međusobnog uvažavanja. Sa našim klijentima delimo jasnu viziju konstantnog unapređenja poslovanja, međusobne podrške i dugoročne saradnje. Na taj način možemo svim našim klijentima biti pouzdan partner kome se uvek mogu obratiti za pomoć i konsultacije u vezi sa našim iskustvom kako u poslovanju, tako i u domenu informacionih tehnologija kroz deljenje znanja i praktičnih poslovnih iskustava.
        Efikasnim korišćenjem novih tehnologija uspeli smo da uspostavimo saradnju sa klijentima koji su na različitim lokacijama širom regiona. 
        Iskreno verujemo da rezultati ankete naših klijenata mogu da pruže dovoljno informacija i razloga koji govore o tome zašto su naši klijenti izabrali baš nas.
        </p>
      </div>
      <div>
        <div className={styles.client1}>
          <Image
            src={malutas}
            width={150}
            className={styles.clientPicture1}
            alt={""}
          />
          <div className={styles.containerClient1}>
            <p>
            "Za deceniju saradnje mogu reći samo pohvale.
            Tim, koji je spoj znanja i iskustva je svojim profesionalnim odnosom,
             i pruzenom uslugom, dokazao sa pravom da su jedan od lidera 
             u poslu kojim se bave."
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Tatjana Sekulic</h2>
                <p>Generalni Direktor Turisticke Agencije Malutas Travel </p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
        <div className={styles.client2}>
          <Image
            src={apollo}
            width={150}
            className={styles.clientPicture1}
            alt={""}
          />
          <div className={styles.containerClient1}>
            <p>
              “ Njihov profesionalizam i digitalizovana 
              usluga su nam u mnogome olaksali poslovanje. Za svaku preporuku.""
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Blagana Jaglic</h2>
                <p>Generalni Direktor Turisticke Agencije Apollo Travel</p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
        <div className={styles.client3}>
          <Image
            src={zdravko}
            className={styles.clientPicture1}
            alt={""}
          />
          <div className={styles.containerClient1}>
            <p>
              “ Osećaj koji sam pre 11 godina stekao 
              kada sam upoznao Olgicu, nije me prevario do danas. 
              Da bi bio uspešan i cenjen moraš najpre biti dobar čovek! 
              Ja sam imao sreće, upoznao sam Olgicu!”
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Zdravko Mirovic</h2>
                <p>Generalni Direktor Turisticke Agencije Apolo Travel</p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
