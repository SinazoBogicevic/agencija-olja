import styles from '../page.module.css'
import { HTMLAttributes, ReactNode } from "react"

export type faqProps = {
    title: ReactNode,
    subtitle: string,
    children: ReactNode,
    style?:string | undefined
}

export function Faqs({title,subtitle,children, style}:faqProps) {
    return (
        <div className={styles.sectionFaqsCards}>
            
            <div className={styles.topFaqsHedder}>
                <h2 className={styles.headings}>{title}</h2>
                <p>{subtitle}</p>
            </div>
            
            <div className={style}>
            {children}
            </div>

        </div>
    )
}

export default Faqs