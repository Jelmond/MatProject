import NewHouseCard from './NewHouseCard/NewCouseCard'
import styles from './ThirdView.module.scss'

export default function ThirdView() {

    return (
        <div className={styles.main}>
            <div className={styles.banner}>
                <img src='/Banner.png'/>
                <div className={styles.text}>
                    <p>
                        Рыночная площадка
                    </p>
                    <p>
                        Мы предоставляем полный комплекс услуг по продаже, покупке и застройки недвижимости.
                    </p>
                </div>
            </div>
            <div className={styles.houses}>
                <NewHouseCard/>
                <NewHouseCard/>
                <NewHouseCard/>
                <NewHouseCard/>
                <NewHouseCard/>
                <NewHouseCard/>
                <NewHouseCard/>
                <NewHouseCard/>
                <NewHouseCard/>
            </div>
        </div>
    )
}