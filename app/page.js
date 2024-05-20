import React from 'react'
import styles from './page.module.css'


function page() {
  return (
    <div className={styles.main}>
    <div className={styles.mask}></div>
    <h1 className={styles.title}>Dashboard</h1>
    </div>
  )
}

export default page