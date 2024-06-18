import React from 'react';
import styles from './Create.module.css';

function page() {
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <h1 className={styles.title}>Створити голосування</h1>
                <div className={styles.titlebox}>
                    <p className={styles.txt}>Введіть кількість виборців</p>
                    <input className={styles.num} placeholder="Number of voters"></input>
                </div>
                <div className={styles.options}>
                    <div className={`${styles.optionBox} ${styles.redBorder}`}>
                        <div className={styles.header}>Один переможець</div>
                        <ul>
                            <li>Бюлетень для голосування</li>
                            <li>Інформація про кандидата</li>
                            <li>Тип запитання з одним вибором</li>
                            <li>Результати</li>
                        </ul>
                    </div>
                    <div className={`${styles.optionBox} ${styles.greenBorder}`}>
                        <div className={styles.header}>Три переможці</div>
                        <ul>
                            <li>Усі функції голосвання з одним переможцем</li>
                            <li>Тип питання з вибором відповіді</li>
                        </ul>
                    </div>
                    <div className={`${styles.optionBox} ${styles.purpleBorder}`}>
                        <div className={styles.header}>Декілька переможців</div>
                        <ul>
                            <li>Всі функції трьох переможцівs</li>
                            <li><strong>Кількість переможців налаштовується:</strong></li>
                            <input className={styles.num} placeholder="Enter number"></input>
                        </ul>
                    </div>
                </div>
                <div className={styles.button}>
                    <a className={styles.demoButton} href="#">Перегляньте демонстраційний бюлетень</a>
                </div>
            </div>
        </div>
    );
}

export default page;
