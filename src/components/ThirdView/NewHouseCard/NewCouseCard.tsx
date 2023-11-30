import styles from './NewHouseCard.module.scss'
import Link from 'next/link'

export default function NewHouseCard() {

    return (
        <Link href='house-info' className={styles.card}>
            <img src='/houseImage.png'/>
            <div className={styles.info}>
                <div className={styles.location}>
                    <div className={styles.town}>
                        <p className={styles.towtCurrent}>
                            Гродно
                        </p>
                        <p className={styles.distance}>
                            150 м
                        </p>
                    </div>
                    <p className={styles.place}>
                        Улица Погораны 21/16
                    </p>
                </div>
                <div className={styles.money}>
                    <p className={styles.priceText}>
                        Цена за м
                    </p>
                    <div className={styles.price}>
                        $45,545
                    </div>
                </div>
            </div>
        </Link>

    )
}