import React from 'react'
import styles from './Create.module.css'

function page() {
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <h1 className={styles.title}>Create Voting</h1>
                <div className={styles.titlebox}>
                    <p className={styles.txt}>Enter number of voters</p>
                    <input className={styles.num}></input>
                </div>
            </div>
        </div>
    )
}

export default page