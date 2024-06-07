"use client"

import React, { useState } from 'react';
import styles from './Votings.module.css';

function Page() {
    const [isActiveExpanded, setIsActiveExpanded] = useState(true);
    const [isCompletedExpanded, setIsCompletedExpanded] = useState(true);

    const toggleActiveExpand = () => {
        setIsActiveExpanded(!isActiveExpanded);
    };

    const toggleCompletedExpand = () => {
        setIsCompletedExpanded(!isCompletedExpanded);
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
                                    <th>Type</th>
                                    <th>Title</th>
                                    <th>Closes</th>
                                    <th>Votes</th>
                                    <th>Turnout</th>
                                    <th>Voters</th>
                                    <th className={styles['reports-header']}>Reports</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.variantone}>Political</div></td>
                                    <td className={styles.name}>Spring Prom Court</td>
                                    <td className={styles.time}>3d 10h 47m</td>
                                    <td style={getVotesPadding(0)}>0</td>
                                    <td>0.00%</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainer}></div></td>
                                </tr>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.varianttwo}>Corporate</div></td>
                                    <td className={styles.name}>Board of Directors</td>
                                    <td className={styles.time}>4d 8h 15m</td>
                                    <td style={getVotesPadding(100)}>100</td>
                                    <td>0.00%</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainer}></div></td>
                                </tr>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.variantthree}>Community</div></td>
                                    <td className={styles.name}>Board of Directors</td>
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
                    <div className={styles.active} onClick={toggleCompletedExpand}>
                        <p className={styles.title}>UNDER CONSTRUCTION</p>
                        <button className={`${styles.button} ${isCompletedExpanded ? styles.minus : styles.plus}`}>
                            {isCompletedExpanded ? '-' : '+'}
                        </button>
                    </div>
                    <div className={`${styles.hide} ${isCompletedExpanded ? styles.show : ''}`}>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.types}>
                                    <th>Type</th>
                                    <th>Title</th>
                                    <th>Voters</th>
                                    <th className={styles['reports-header']}>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.variantone}>Political</div></td>
                                    <td className={styles.name}>Spring Prom Court</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainertwo}></div></td>
                                </tr>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.varianttwo}>Corporate</div></td>
                                    <td className={styles.name}>Board of Directors</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainertwo}></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.active} onClick={toggleCompletedExpand}>
                        <p className={styles.title}>COMPLETED</p>
                        <button className={`${styles.button} ${isCompletedExpanded ? styles.minus : styles.plus}`}>
                            {isCompletedExpanded ? '-' : '+'}
                        </button>
                    </div>
                    <div className={`${styles.hide} ${isCompletedExpanded ? styles.show : ''}`}>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.types}>
                                    <th>Type</th>
                                    <th>Title</th>
                                    <th>Votes</th>
                                    <th>Turnout</th>
                                    <th>Voters</th>
                                    <th className={styles['reports-header']}>Reports</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.variantone}>Political</div></td>
                                    <td className={styles.name}>Spring Prom Court</td>
                                    <td style={getVotesPadding(0)}>0</td>
                                    <td>0.00%</td>
                                    <td style={getVotesPadding(9)}>9</td>
                                    <td className={styles.reports}><div className={styles.gifContainer}></div></td>
                                </tr>
                                <tr className={styles.content}>
                                    <td className={styles.fix}><div className={styles.varianttwo}>Corporate</div></td>
                                    <td className={styles.name}>Board of Directors</td>
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
