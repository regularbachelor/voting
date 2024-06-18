"use client"

import React, { useState } from 'react';
import styles from './Votings.module.css';

function Page() {
    const [isActiveExpanded, setIsActiveExpanded] = useState(true);
    const [isCompletedExpanded, setIsCompletedExpanded] = useState(true);
    const [isUnderConstructionExpanded, setIsUnderConstructionExpanded] = useState(true);

    const toggleActiveExpand = () => {
        setIsActiveExpanded(!isActiveExpanded);
    };

    const toggleCompletedExpand = () => {
        setIsCompletedExpanded(!isCompletedExpanded);
    };

    const toggleUnderConstructionExpand = () => {
        setIsUnderConstructionExpanded(!isUnderConstructionExpanded);
    };

    const getVotesPadding = (votes) => {
        const length = votes.toString().length;
        return { paddingLeft: `${25 - (length - 1) * 5}px` };
    };

    return (
        <>
            <div className={styles.mask}></div>
            <div className={styles.main}>
                <div className={styles.box}>
                    <div className={styles.active} onClick={toggleActiveExpand}>
                        <p className={styles.title}>ACTIVE</p>
                        <button className={`${styles.button} ${isActiveExpanded ? styles.minus : styles.plus}`}>
                            {isActiveExpanded ? '-' : '+'}
                        </button>
                    </div>
                    <div className={`${styles.hide} ${isActiveExpanded ? styles.show : ''}`}>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.types}>
                                    <th>Тип</th>
                                    <th>Назва</th>
                                    <th>Закривається</th>
                                    <th>Голоси</th>
                                    <th>Явка</th>
                                    <th>Виборці</th>
                                    <th className={styles['reports-header']}>Звіти</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.variantone}>Політичний</div></td>
                                    <td className={styles.name}>Весняний випускний суд</td>
                                    <td className={styles.time}>3d 10h 47m</td>
                                    <td style={getVotesPadding(0)}>0</td>
                                    <td>0.00%</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainer}></div></td>
                                </tr>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.varianttwo}>Корпоративний</div></td>
                                    <td className={styles.name}>Рада директорів</td>
                                    <td className={styles.time}>4d 8h 15m</td>
                                    <td style={getVotesPadding(100)}>100</td>
                                    <td>0.00%</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainer}></div></td>
                                </tr>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.variantthree}>Спільнота</div></td>
                                    <td className={styles.name}>Рада директорів</td>
                                    <td className={styles.time}>4d 8h 15m</td>
                                    <td style={getVotesPadding(100)}>100</td>
                                    <td>0.00%</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainer}></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.active} onClick={toggleUnderConstructionExpand}>
                        <p className={styles.title}>У РОЗРОБЦІ</p>
                        <button className={`${styles.button} ${isUnderConstructionExpanded ? styles.minus : styles.plus}`}>
                            {isUnderConstructionExpanded ? '-' : '+'}
                        </button>
                    </div>
                    <div className={`${styles.hide} ${isUnderConstructionExpanded ? styles.show : ''}`}>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.types}>
                                    <th>Тип</th>
                                    <th>Назва</th>
                                    <th>Виборці</th>
                                    <th className={styles['reports-header']}>Інформація</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.variantone}>Політичний</div></td>
                                    <td className={styles.name}>Весняний випускний суд</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainertwo}></div></td>
                                </tr>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.varianttwo}>Корпоративний</div></td>
                                    <td className={styles.name}>Рада директорів</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainertwo}></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.active} onClick={toggleCompletedExpand}>
                        <p className={styles.title}>ЗАВЕРШЕНО</p>
                        <button className={`${styles.button} ${isCompletedExpanded ? styles.minus : styles.plus}`}>
                            {isCompletedExpanded ? '-' : '+'}
                        </button>
                    </div>
                    <div className={`${styles.hide} ${isCompletedExpanded ? styles.show : ''}`}>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.types}>
                                    <th>Тип</th>
                                    <th>Назва</th>
                                    <th>Голосів</th>
                                    <th>Явка</th>
                                    <th>Виборці</th>
                                    <th className={styles['reports-header']}>Звіти</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.variantone}>Політичний</div></td>
                                    <td className={styles.name}>Весняний випускний суд</td>
                                    <td style={getVotesPadding(0)}>0</td>
                                    <td>0.00%</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainer}></div></td>
                                </tr>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.varianttwo}>Корпоративний</div></td>
                                    <td className={styles.name}>Рада директорів</td>
                                    <td style={getVotesPadding(100)}>100</td>
                                    <td>0.00%</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainer}></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
