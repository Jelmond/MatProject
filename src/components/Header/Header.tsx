import styles from './Header.module.scss'
import Link from 'next/link'

export default function Header() {

    return(
        <div className={styles.header}>
            <div className={styles.left}>
                <Link href='/'><img src='/logoImage.png'/></Link>
            </div>
            <div className={styles.right}>
                <div className={styles.list}>
                    <Link href='/'><p>Главная</p></Link>
                    <Link href='/houses'><p>Недвижимость</p></Link>
                    <Link href='/agents'><p>Агенты</p></Link>
                    <Link href='/bucket'><p>Проекты</p></Link>
                </div>
            </div>
        </div>
    )
}