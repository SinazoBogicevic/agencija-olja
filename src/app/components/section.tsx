import { ReactNode } from "react";
import styles from "../page.module.css";

export type SectionProps = {
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
  style?: string | undefined;
};

export function Section({ title, subtitle, children, style }: SectionProps) {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.textContainer}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={style}>{children}</div>
    </div>
  );
}

export default Section;
