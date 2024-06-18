import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.block}>
                <div className={styles.logo}>
                    <h2>eV</h2><Image
                        src="https://i.ibb.co/Wc2Yh1B/pngtree-instagram-bule-tick-insta-blue-star-vector-png-image-6695210.png"
                        width={25}
                        height={25}
                        className={styles.mark}
                    /><h2>ting</h2>
                </div>
                <Link href="/" className={styles.menuItem}>
                    <p className={styles.lnks}>Керівництво користувача</p>
                </Link>
                <Link href="/" className={styles.menuItem}>
                    <p className={styles.lnks}>Форма зворотного зв'язку</p>
                </Link>
                <div className={styles.gifholder}>
                    <div className={styles.gifContainer}></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
