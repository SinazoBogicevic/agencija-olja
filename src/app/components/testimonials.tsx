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
        Шта наши клијенти <span className={styles.darkBlueTitle}>говоре </span> о нама 
        </h1>
        <p>
        Повратне информације наших клијената и партнера су подстицај да се увек побољшавамо. Задовољство нам је и част да сарађујемо са компанијама које су лидери у својим областима. Наши клијенти су компаније различитих величина које се баве производњом, трговином и разним услужним делатностима. Наши клијенти су компаније које су препознале значај партнерских односа, сарадње и међусобног поштовања. Са нашим клијентима делимо јасну визију сталног унапређења пословања, међусобне подршке и дугорочне сарадње. На овај начин можемо бити поуздан партнер свим нашим клијентима, којима се увек могу обратити за помоћ и консултације у вези са нашим искуством како у пословању тако иу области информационих технологија кроз размену знања и практичних пословних искустава. Ефикасним коришћењем нових технологија успели смо да успоставимо сарадњу са клијентима који се налазе на различитим локацијама широм региона. Искрено верујемо да резултати анкете наших клијената могу дати довољно информација и разлога који говоре о томе зашто су се наши клијенти определили за нас.
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
            "За деценију сарадње могу рећи само похвале.
Тим, који је спој знања и искуства, својим професионалним односом,
и пруженом услугом, доказао је са правом да су један од лидера
у послу којим се баве."
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Татјана Секулић</h2>
                <p> - Генерални Директор Туристичке Агенције Малутас Травел - </p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
        <div className={styles.client2}>
        <Image
            src={zdravko}
            className={styles.clientPicture1}
            alt={""}
          />
          <div className={styles.containerClient1}>
            <p>
              “ Осећај који сам пре 11 година стекао
када сам упознао Олгицу, није ме преварио до данас.
Да би био успешан и цењен мораш најпре бити добар човек!
Ја сам имао среће, упознао сам Олгицу!”
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Здравко Мировић</h2>
                <p> - Генерални Директор Туристичке Агенције Да Гама Травел - </p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
        <div className={styles.client3}>
        <Image
            src={apollo}
            width={150}
            className={styles.clientPicture1}
            alt={""}
          />
          <div className={styles.containerClient1}>
            <p>
              “Њихов професионализам и дигитализована услуга знатно су нам олакшали пословање. За сваку препоруку."
            </p>
            <div className={styles.bodyClient1}>
              <div>
                <h2>Благана Јаглић</h2>
                <p> - Генерални Директор Туристичке Агенције Аполло Травел - </p>
              </div>
              <Image src={fiveStars} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
