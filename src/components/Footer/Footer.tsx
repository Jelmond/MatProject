import styles from './Footer.module.scss'

export default function Footer() {

    return(
        <div className={styles.footer}>
            <img src='/footerImage.png'/>
            <p>
                Mars inc - Мы помогаем осуществятлять мечты 
            </p>
            <div className={styles.socials}>
                <span className={styles.icon}>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4_3427)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33 16.5C33 25.6127 25.6127 33 16.5 33C7.3873 33 0 25.6127 0 16.5C0 7.3873 7.3873 0 16.5 0C25.6127 0 33 7.3873 33 16.5ZM17.0913 12.181C15.4864 12.8485 12.2789 14.2301 7.46885 16.3258C6.68777 16.6364 6.2786 16.9403 6.24136 17.2374C6.17841 17.7396 6.80723 17.9373 7.66353 18.2065C7.78001 18.2432 7.90069 18.2811 8.02441 18.3213C8.86688 18.5952 10.0001 18.9156 10.5893 18.9283C11.1237 18.9398 11.7201 18.7195 12.3786 18.2673C16.8728 15.2336 19.1928 13.7002 19.3384 13.6672C19.4412 13.6439 19.5836 13.6145 19.6801 13.7003C19.7765 13.786 19.767 13.9484 19.7568 13.992C19.6945 14.2576 17.2262 16.5524 15.9488 17.7399C15.5506 18.1102 15.2681 18.3728 15.2104 18.4327C15.081 18.5671 14.9492 18.6942 14.8225 18.8163C14.0398 19.5708 13.4529 20.1366 14.855 21.0606C15.5287 21.5046 16.0679 21.8718 16.6058 22.2381C17.1932 22.6381 17.7791 23.0371 18.5372 23.534C18.7304 23.6606 18.9148 23.7921 19.0945 23.9202C19.7781 24.4076 20.3923 24.8454 21.1511 24.7756C21.592 24.735 22.0474 24.3205 22.2787 23.084C22.8253 20.1618 23.8997 13.8304 24.148 11.2213C24.1698 10.9928 24.1424 10.7002 24.1205 10.5718C24.0985 10.4434 24.0526 10.2604 23.8856 10.1249C23.6879 9.96454 23.3827 9.93071 23.2463 9.93312C22.6257 9.94405 21.6735 10.2751 17.0913 12.181Z" fill="currentColor" fill-opacity="0.79"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4_3427">
                        <rect width="33" height="33" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
                <span className={styles.icon}>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4_3426)">
                        <path d="M16.5 2.87544C20.9086 2.87544 21.4307 2.89415 23.1645 2.969C24.7758 3.03761 25.6459 3.29958 26.226 3.51789C26.993 3.80481 27.5473 4.15411 28.1209 4.70924C28.701 5.2706 29.0555 5.80078 29.352 6.54303C29.5775 7.1044 29.8482 7.95268 29.9191 9.5058C29.9965 11.1899 30.0158 11.6951 30.0158 15.9553C30.0158 20.2216 29.9965 20.7269 29.9191 22.4047C29.8482 23.9641 29.5775 24.8061 29.352 25.3675C29.0555 26.1098 28.6945 26.6462 28.1209 27.2013C27.5408 27.7627 26.993 28.1057 26.226 28.3926C25.6459 28.611 24.7693 28.8729 23.1645 28.9415C21.4242 29.0164 20.9021 29.0351 16.5 29.0351C12.0914 29.0351 11.5693 29.0164 9.83555 28.9415C8.22422 28.8729 7.3541 28.611 6.77402 28.3926C6.00703 28.1057 5.45273 27.7564 4.8791 27.2013C4.29902 26.6399 3.94453 26.1098 3.64805 25.3675C3.42246 24.8061 3.15176 23.9579 3.08086 22.4047C3.00352 20.7206 2.98418 20.2154 2.98418 15.9553C2.98418 11.6889 3.00352 11.1837 3.08086 9.5058C3.15176 7.94645 3.42246 7.1044 3.64805 6.54303C3.94453 5.80078 4.30547 5.26437 4.8791 4.70924C5.45918 4.14787 6.00703 3.80481 6.77402 3.51789C7.3541 3.29958 8.23066 3.03761 9.83555 2.969C11.5693 2.89415 12.0914 2.87544 16.5 2.87544ZM16.5 0C12.0205 0 11.4598 0.0187122 9.7002 0.093561C7.94707 0.16841 6.7418 0.442855 5.69766 0.835811C4.6084 1.24748 3.68672 1.79013 2.77148 2.68208C1.8498 3.56779 1.28906 4.45974 0.863672 5.50762C0.457617 6.52432 0.174023 7.68448 0.0966797 9.38105C0.0193359 11.0901 0 11.6327 0 15.9677C0 20.3027 0.0193359 20.8454 0.0966797 22.5482C0.174023 24.2448 0.457617 25.4112 0.863672 26.4216C1.28906 27.4757 1.8498 28.3677 2.77148 29.2534C3.68672 30.1391 4.6084 30.688 5.69121 31.0934C6.7418 31.4864 7.94062 31.7608 9.69375 31.8357C11.4533 31.9105 12.0141 31.9292 16.4936 31.9292C20.973 31.9292 21.5338 31.9105 23.2934 31.8357C25.0465 31.7608 26.2518 31.4864 27.2959 31.0934C28.3787 30.688 29.3004 30.1391 30.2156 29.2534C31.1309 28.3677 31.698 27.4757 32.117 26.4279C32.523 25.4112 32.8066 24.251 32.884 22.5544C32.9613 20.8516 32.9807 20.309 32.9807 15.974C32.9807 11.639 32.9613 11.0963 32.884 9.39352C32.8066 7.69695 32.523 6.53056 32.117 5.5201C31.7109 4.45974 31.1502 3.56779 30.2285 2.68208C29.3133 1.79637 28.3916 1.24748 27.3088 0.842049C26.2582 0.449093 25.0594 0.174647 23.3062 0.0997984C21.5402 0.0187122 20.9795 0 16.5 0Z" fill="currentColor" fill-opacity="0.79"/>
                        <path d="M16.5 7.76562C11.8207 7.76562 8.02441 11.4395 8.02441 15.9678C8.02441 20.4962 11.8207 24.17 16.5 24.17C21.1793 24.17 24.9756 20.4962 24.9756 15.9678C24.9756 11.4395 21.1793 7.76562 16.5 7.76562ZM16.5 21.2883C13.4643 21.2883 11.0021 18.9056 11.0021 15.9678C11.0021 13.03 13.4643 10.6473 16.5 10.6473C19.5357 10.6473 21.9979 13.03 21.9979 15.9678C21.9979 18.9056 19.5357 21.2883 16.5 21.2883Z" fill="currentColor" fill-opacity="0.79"/>
                        <path d="M27.2895 7.44125C27.2895 8.50161 26.4 9.35614 25.3107 9.35614C24.215 9.35614 23.332 8.49537 23.332 7.44125C23.332 6.38089 24.2215 5.52637 25.3107 5.52637C26.4 5.52637 27.2895 6.38713 27.2895 7.44125Z" fill="currentColor" fill-opacity="0.79"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4_3426">
                        <rect width="33" height="31.9355" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
                <span className={styles.icon}>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4_3428)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.31971 2.31971C0 4.63943 0 8.37293 0 15.84V17.16C0 24.6271 0 28.3605 2.31971 30.6803C4.63943 33 8.37293 33 15.84 33H17.16C24.6271 33 28.3605 33 30.6803 30.6803C33 28.3605 33 24.6271 33 17.16V15.84C33 8.37293 33 4.63943 30.6803 2.31971C28.3605 0 24.6271 0 17.16 0H15.84C8.37293 0 4.63943 0 2.31971 2.31971ZM5.56883 10.0376C5.74758 18.6176 10.0376 23.7738 17.5588 23.7738H17.9851V18.8651C20.7489 19.1401 22.8387 21.1613 23.6775 23.7738H27.5826C26.5101 19.8688 23.6912 17.7101 21.9312 16.8851C23.6912 15.8676 26.1662 13.3926 26.7574 10.0376H23.2099C22.4399 12.7601 20.1576 15.2351 17.9851 15.4688V10.0376H14.4375V19.5526C12.2375 19.0026 9.46007 16.3351 9.33632 10.0376H5.56883Z" fill="currentColor" fill-opacity="0.79"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4_3428">
                    <rect width="33" height="33" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </span>
            </div>
        </div>
    )
}