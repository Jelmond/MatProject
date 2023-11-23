import styles from './Defenth.module.scss'

export default function Defenth() {

    return(
        <div className={styles.defenth}>
            <div className={styles.first}>
                <img src='/graphicImage.png'/>
                <div className={styles.text}>
                    <p>
                        Выгодные предложения 
                    </p>
                    <p>
                        Ва можете найти свой дом мечты даже за 0.000000001$. Вы можете не верить, но эта правда! Вы можете зафиксировать цену, которая вас интересует, и дожидаться оповещения на электронную почту.
                    </p>
                </div>
            </div>
            <div className={styles.second}>
                <div className={styles.text}>
                    <p>
                        Защита данных потребителя
                    </p>
                    <p>
                        Все личные данные, которые вы оставляете на сайте, полностью защищены и конфиденциальны. 
                    </p>
                </div>
                <img src='/cardImage.png'/>
            </div>
        </div>
    )
}