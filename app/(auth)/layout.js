import React from 'react';
import { Roboto } from "next/font/google";
import styles from './auth.module.css'
import './globals.css'

const roboto = Roboto({
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "Voting platform",
  description: "Made with next",
  icon: '/icon.svg'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <div className={styles.full}>
        <div style={{ display: 'flex' }}  className={styles.main}>
          <div className="container">{children}</div>
        </div>
        </div>
      </body>
    </html>
  );
}
