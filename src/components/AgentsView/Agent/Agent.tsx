import styles from './Agent.module.scss'

export default function Agent() {

    return(
        <div className={styles.agent}>
            <img src='/agent.png'/>
            <div className={styles.info}>
                <div className={styles.text}>
                    <p>
                        +375-29-582-57-71
                    </p>
                    <p>
                        MTS
                    </p>
                </div>
                <div className={styles.text}>
                    <p>
                        +375-29-582-57-71
                    </p>
                    <p>
                        LIFE
                    </p>
                </div>
                <div className={styles.text}>
                    <p>
                        +375-29-582-57-71
                    </p>
                    <p>
                        A1
                    </p>
                </div>
                <div className={styles.social}>
                    <img src='/whats.png'/>
                    <p>
                        WhatsApp
                    </p>
                </div>
            </div>
        </div>
    )
}