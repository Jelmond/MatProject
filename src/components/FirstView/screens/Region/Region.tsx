'use client'

import styles from './Region.module.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import Card from './Card/Card';
import Link from 'next/link';


export default function Region() {

    const data = [
        ['Могилёв', '/i 5.png'],
        ['Гродно', '/i 1.png'],
        ['Минск', '/i 2.png'],
        ['Брест', '/i 3.png'],
        ['Витебск', '/i 4.png'],
    ]

    return(

        <div className={styles.region}>
            <p className={styles.title}>
                выбирай любой регион Беларуси
            </p>
            <div className={styles.swiperContainer}>
                <Swiper
                    modules={[Navigation, A11y, Pagination]}
                    slidesPerView={4}
                    loop={true}
                    spaceBetween={0}
                    navigation
                    className={styles.swiper}
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.citySlide}>
                                <img src={item[1]}/>
                                <p>{item[0]}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.examples}>
                <div className={styles.nav}>
                    <p className={styles.lef}>
                        Недавно добавленные
                    </p>
                    <p className={styles.rig}>
                        Просмотреть все
                    </p>
                </div>
                <div className={styles.cards}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
            <div className={styles.startWrapper}>
                <Link href='/auth'><img className={styles.start} src='/startImage.png'/></Link>
            </div>
        </div>
    )
}