import styles from "../page.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function Packages() {
    return (
        <div className={styles.packages} id="Packages">
            <h1>Преглед основних услуга </h1><h1> Основни пакети</h1>
            <p>За успешно пословање неопходан је добар рачуновођа, који ће знати да евидентира све пословне промене које се дешавају у вашем пословању, анализира их и на време укаже на проблеме уколико се појаве или вам да савет како да унапредите своје пословање.</p>
            <div className={styles.packageChoise}>
                <div className={styles.package1}>
                    <h3>ПАУШАЛ</h3>
                    <div className={styles.mouthlyPayment}><h2>9,999.00дин</h2><p>/месечно</p></div>
                    <p>Пружамо подршку паушалцима да се посвете свом примарном послу, а ми ћемо се побринути за све остало. Услуге намењене паушалцима укључују следеће:</p>
                    <p><FaCheckCircle color="#cacaca"/> Подршка у издавању фактура.</p>
                    <p><FaCheckCircle color="#cacaca"/> Вођење књиге КПО.</p>
                    <p><FaCheckCircle color="#cacaca"/> Помоћ у електронском банкарству.</p>
                    <p><FaCheckCircle color="#cacaca"/> Свакодневна доступност за сва питања.</p>
                    <a href="#Contact"><button className={styles.packagesButtons}>Контактирајте нас</button></a>
                </div>
                <div className={styles.package2}>
                    <h3>ПРЕДУЗЕТНИЦИ</h3>
                    <div className={styles.mouthlyPayment}><h2>10,999.00дин</h2><p>/месечно</p></div>
                    <p>Дајемо све од себе да пружимо комплетне услуге предузетницима који воде пословне књиге. Неке од услуга:</p>
                    <p><FaCheckCircle /> Вођење пословних књига по систему двојног књиговодства.</p>
                    <p><FaCheckCircle /> Кадровске услуге - пријава и одјава запослених.</p>
                    <p><FaCheckCircle /> Обрачун зарада и припадајућих пореза и доприноса.</p>
                    <p><FaCheckCircle /> Вођење благајне.</p>
                    <p><FaCheckCircle /> Обрачун амортизације основних средстава.</p>
                    <p><FaCheckCircle /> Израда завршног рачуна (биланс стања, биланс успеха…).</p>
                    <p><FaCheckCircle /> Консултације и савети.</p>
                    <a href="#Contact"><button className={styles.packagesButton2}>Контактирајте нас</button></a>
                </div>
                <div className={styles.package3}>
                    <h3>ДОО</h3>
                    <div className={styles.mouthlyPayment}><h2>15,999.00дин</h2><p>/месечно</p></div>
                    <p>За изградњу стабилног и успешног пословања неопходно је да финансије буду под контролом иу складу са Законом. Пример неке од услуга намењених компанијама:</p>
                    <p><FaCheckCircle color="#cacaca"/> Вођење пословних књига по систему двојног књиговодства.</p>
                    <p><FaCheckCircle color="#cacaca"/> Кадровске услуге - пријава и одјава запослених.</p>
                    <p><FaCheckCircle color="#cacaca"/> Обрачун зарада и припадајућих пореза и доприноса.</p>
                    <p><FaCheckCircle color="#cacaca"/> Вођење благајне.</p>
                    <p><FaCheckCircle color="#cacaca"/> Обрачун амортизације основних средстава.</p>
                    <p><FaCheckCircle color="#cacaca"/> Израда завршног рачуна (биланс стања, биланс успеха…).</p>
                    <p><FaCheckCircle color="#cacaca"/> Консултације и савети.</p>
                    <a href="#Contact"><button className={styles.packagesButtons}>Контактирајте нас</button></a>
                </div>
            </div>
        </div>
    )
}