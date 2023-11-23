import styles from './SecondView.module.scss'

export default function HouseInfo() {

    return(
        <div className={styles.houseInfo}>
            <img className={styles.gigaImage} src='gigaImage.png'/>
            <img className={styles.status} src='/Status.png'/>
            <div className={styles.description}>
                <p>
                    Описание
                </p>
                <p>
                    Очаровательный дом с тремя спальнями и тремя ванными комнатами, просторным домиком с одной спальней и одной ванной комнатой, жилыми помещениями для родственников. Очаровательная гостиная с камином и потрясающими деталями в стиле ар-деко. Официальная столовая. Реконструированная кухня с отделкой из белого гранита и приборами из нержавеющей стали. Прекрасная главная спальня с обновленной ванной и прекрасным видом на бассейн. В гостевых спальнях есть гардеробные из кедра. Восхитительный задний двор
                </p>
            </div>
            <img src='/Content.png' className={styles.content}/>
        </div>
    )
}