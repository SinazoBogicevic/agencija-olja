import styles from '../page.module.css'
import { HTMLAttributes, ReactNode } from "react"

export type SectionProps = {
    title: ReactNode,
    subtitle: string,
    children: ReactNode,
    style?:string | undefined
}

export function Section({title,subtitle,children, style}:SectionProps) {
    return (
        <div className={styles.sectionCards}>
            
            <div className={styles.topHedder}>
                <h2 className={styles.headings}>{title}</h2>
                <p>{subtitle}</p>
            </div>
            
            <div className={style}>
            {children}
            </div>

        </div>
    )
}

export default Section
