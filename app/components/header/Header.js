"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

function Header() {
    const [isExpanded, setIsExpanded] = useState(false);


    const toggleHeadertwo = () => {
        setIsExpanded(!isExpanded); 
    };

    return (
        <div>
            <div className={styles.headertwo} style={{
                transform: `translateY(${isExpanded ? '45px' : '0px'})`,
                transition: 'transform 0.3s ease-in-out' 
            }}>
                <Link href="/" className={styles.menuItem}>ПАНЕЛЬ СТАТИСТИКИ</Link>
                <Link href="/votings" className={styles.menuItem}>ГОЛОСУВАННЯ</Link>
                <Link href="/create" className={styles.menuItem}>СТВОРИТИ ГОЛОСУВАННЯ</Link>
                <Link href="/settings" className={styles.menuItem}>НАЛАШТУВАННЯ</Link>
                <Link href="/logs" className={styles.menuItem}>ЖУРНАЛИ АУДИТУ</Link>
            </div>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h2>eV</h2><Image
                        src="https://i.ibb.co/Wc2Yh1B/pngtree-instagram-bule-tick-insta-blue-star-vector-png-image-6695210.png"
                        width={25}
                        height={25}
                        className={styles.mark}
                    /><h2>ting</h2>
                </div>
                <input type="checkbox" role="button" aria-label="Display the menu" className={`${styles.menu} ${isExpanded ? styles.active : ''}`} onChange={toggleHeadertwo} />
            </div>
        </div>
    );
}

export default Header;