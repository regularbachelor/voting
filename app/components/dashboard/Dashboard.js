"use client"

import React, { useState } from 'react';
import styles from './Dashboard.module.css'
import Image from 'next/image';

function Dashboard() {
    const [menuOpenOne, setMenuOpenOne] = useState(false);
    const [menuOpenTwo, setMenuOpenTwo] = useState(false);
    const [menuOpenThree, setMenuOpenThree] = useState(false);
    const [menuOpenFour, setMenuOpenFour] = useState(false);

    const toggleMenuOne = () => {
        setMenuOpenOne(!menuOpenOne);
    };

    const toggleMenuTwo = () => {
        setMenuOpenTwo(!menuOpenTwo);
    };

    const toggleMenuThree = () => {
        setMenuOpenThree(!menuOpenThree);
    };

    const toggleMenuFour = () => {
        setMenuOpenFour(!menuOpenFour);
    };
    return (
        <div className={styles.main}>
            <div className={styles.mask}></div>
            <div className={styles.content}>
                <div className={styles.titleblock}>
                    <h1 className={styles.title}>Dashboard</h1>
                    <div className={styles.share}>
                        <svg
                            fill="#000000"
                            height="20px"
                            width="20px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            className={styles.sharesvg}
                        >
                            <g>
                                <g>
                                    <path d="M512,241.7L273.643,3.343v156.152c-71.41,3.744-138.015,33.337-188.958,84.28C30.075,298.384,0,370.991,0,448.222v60.436
      l29.069-52.985c45.354-82.671,132.173-134.027,226.573-134.027c5.986,0,12.004,0.212,18.001,0.632v157.779L512,241.7z
       M255.642,290.666c-84.543,0-163.661,36.792-217.939,98.885c26.634-114.177,129.256-199.483,251.429-199.483h15.489V78.131
      l163.568,163.568L304.621,405.267V294.531l-13.585-1.683C279.347,291.401,267.439,290.666,255.642,290.666z"/>
                                </g>
                            </g>
                        </svg>
                        <p className={styles.sharetext}>
                            Share
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.mainbox}>
                <div className={styles.holder}>
                    <div className={styles.sonboxone}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <h1 className={styles.num}>3</h1>
                                <p className={styles.text}>Total Votings</p>
                            </div>
                            <div className={styles.right}>
                                <Image
                                    src="/database.svg"
                                    width={100}
                                    height={100}
                                    className={styles.mark}
                                />
                            </div>
                        </div>
                        <div className={styles.bottom} onClick={toggleMenuOne}>
                            <p className={styles.btext}>More info
                                <span
                                    className={styles.arrow}
                                    style={{ transform: menuOpenOne ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >&#9662;</span>
                            </p>
                            <div className={`${styles.menu} ${menuOpenOne ? styles.show : ''}`}>
                                <div className={styles.menuitem}>Detail 1</div>
                                <div className={styles.menuitem}>Detail 2</div>
                                <div className={styles.menuitem}>Detail 3</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sonboxtwo}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <h1 className={styles.num}>3</h1>
                                <p className={styles.text}>Total Candidates</p>
                            </div>
                            <div className={styles.right}>
                                <Image
                                    src="/tie.svg"
                                    width={100}
                                    height={100}
                                    className={styles.mark}
                                />
                            </div>
                        </div>
                        <div className={styles.bottom} onClick={toggleMenuTwo}>
                            <p className={styles.btext}>More info
                                <span
                                    className={styles.arrow}
                                    style={{ transform: menuOpenTwo ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >&#9662;</span>
                            </p>
                            <div className={`${styles.menu} ${menuOpenTwo ? styles.show : ''}`}>
                                <div className={styles.menuitem}>Detail 1</div>
                                <div className={styles.menuitem}>Detail 2</div>
                                <div className={styles.menuitem}>Detail 3</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sonboxthree}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <h1 className={styles.num}>3</h1>
                                <p className={styles.text}>Total Voters</p>
                            </div>
                            <div className={styles.right}>
                                <Image
                                    src="/group.svg"
                                    width={100}
                                    height={100}
                                    className={styles.mark}
                                />
                            </div>
                        </div>
                        <div className={styles.bottom} onClick={toggleMenuThree}>
                            <p className={styles.btext}>More info
                                <span
                                    className={styles.arrow}
                                    style={{ transform: menuOpenThree ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >&#9662;</span>
                            </p>
                            <div className={`${styles.menu} ${menuOpenThree ? styles.show : ''}`}>
                                <div className={styles.menuitem}>Detail 1</div>
                                <div className={styles.menuitem}>Detail 2</div>
                                <div className={styles.menuitem}>Detail 3</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sonboxfour}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <h1 className={styles.num}>3</h1>
                                <p className={styles.text}>No of Votings</p>
                            </div>
                            <div className={styles.right}>
                                <Image
                                    src="/notepad.svg"
                                    width={100}
                                    height={100}
                                    className={styles.mark}
                                />
                            </div>
                        </div>
                        <div className={styles.bottom} onClick={toggleMenuFour}>
                            <p className={styles.btext}>More info
                                <span
                                    className={styles.arrow}
                                    style={{ transform: menuOpenFour ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >&#9662;</span>
                            </p>
                            <div className={`${styles.menu} ${menuOpenFour ? styles.show : ''}`}>
                                <div className={styles.menuitem}>Detail 1</div>
                                <div className={styles.menuitem}>Detail 2</div>
                                <div className={styles.menuitem}>Detail 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard