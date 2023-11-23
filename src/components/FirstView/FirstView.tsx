import styles from './FirstView.module.scss'
import Defenth from './screens/Defenth/Defenth'
import Offer from './screens/Offer/Offer'
import Region from './screens/Region/Region'

export default function FirstView() {

    return(
        <div className={styles.first}>
            <Offer></Offer>
            <Defenth></Defenth>
            <Region></Region>
        </div>
    )
}