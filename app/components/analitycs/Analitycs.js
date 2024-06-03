import React from 'react'
import styles from './Analitics.module.css'
import Histogram from '../histogram/Histogram'
import Piechart from '../piechart/Piechart'
import Linechart from '../linechart/Linechart'

function Analitycs() {
  return (
    <div className={styles.main}>
      <div className={styles.holder}>
        <div className={styles.titlebox}>
          <h1>Statistics in the form of graphs</h1>
        </div>
        <div className={styles.mainbox}>
          <div className={styles.box}>
            <Histogram />
            <h2>Breakdown of users by age group</h2>
          </div>
          <div className={styles.box}>
            <Linechart />
            <h2>Share of users by country or region</h2>
          </div>
        </div>
        <div className={styles.mainboxtwo}>
          <div className={styles.boxtwo}>
            <div className={styles.chart}>
              <Piechart />
            </div>
            <h2>User activity over time</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analitycs