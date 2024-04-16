import styles from "../page.module.css";

export default function Map() {
    return (
        <div>
        <h1 className={styles.mapHeader}>Наша локација на мапи</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d11479.644999806978!2d20.897755999999998!3d44.00256054999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDAwJzE1LjMiTiAyMMKwNTMnNDQuMCJF!5e0!3m2!1ssr!2srs!4v1711360447417!5m2!1ssr!2srs" width="1440" height="400" loading="lazy"></iframe>
        </div>
    )}