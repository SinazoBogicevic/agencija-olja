import Image, { StaticImageData } from "next/image"
import styles from '../page.module.css'

export type CardProps = {
    title: string,
    body: string,
    icon: string | StaticImageData, 

}

export function Card({title,body,icon}:CardProps) {
    return (
        <div className={styles.card}>
            <div>
                <Image 
                src={icon} 
                width={64} 
                height={64} 
                alt=""/>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Card