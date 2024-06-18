"use client"

import React, { useState } from 'react';
import styles from './End.module.css';

function Page() {
  const [isCopied, setIsCopied] = useState(false);

  const signature = "3f7e2a5b1c7f2e4d8c9a6b0d3e73a5b13f7e2a5b1c7f2e4d8c9a6b0d3e73a5b13f7e2a5b1c7f2e4d8c9a6b0d3e73a5b13f7e2a5b1c7f2e4d8c9a6b0d3e73a5b13f7e2a5b1c7f2e4d8c9a6b0d3e73a5b1";

  const handleCopy = () => {
    navigator.clipboard.writeText(signature).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.top}>
          <h1 className={styles.title}>Рада директорів</h1>
          <div className={styles.textbox}>
            <p className={styles.txt}>Closes</p>
            <p className={styles.txtwo}>10/6/2024 12:24 PM EST</p>
          </div>
          <div className={styles.textbox}>
            <p className={styles.txt}>Інструкції</p>
            <p className={styles.txthree}>Будь ласка, зробіть свій вибір для голосування в Раді директорів.</p>
          </div>
        </div>
        <div className={styles.middle}>
          <p className={styles.thankYou}>Дякуємо за голосування!</p>
          <div className={styles.signatureBox}>
            <p className={styles.confirmation}>
              Signature - {signature.slice(0, 30)}...
            </p>
            <button className={styles.copyButton} onClick={handleCopy}>
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className={styles.timestamp}>Час - 10/6/2024 12:29 PM EST</p>
        </div>
        <div className={styles.bottom}>
          <button className={styles.button}>КВИТАНЦІЯ</button>
          <button className={styles.button}>НАЗАД ДО ПАНЕЛІ</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
