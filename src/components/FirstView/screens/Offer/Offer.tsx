import styles from './Offer.module.scss'

export default function Offer() {

    return(
        <div className={styles.first}>
            <div className={styles.container}>
                <p>
                    Простой способ найти идеальную недвижимость
                </p>
                <p>
                    Мы предоставляем полный комплекс услуг по продаже, покупке и застройке недвижимости
                </p>
            </div>
            <img src='/mainBackImage.png'/>
        </div>
    )
}