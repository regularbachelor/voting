"use client"

import React, { useState } from 'react';
import styles from './Ongoing.module.css';

const vicePresidentCandidates = [
  { id: 1, name: 'Arnold Smith', details: 'Arnold Smith details...', imageUrl: '/arnold.png' },
  { id: 2, name: 'Tiffany Dodson', details: 'Tiffany Dodson details...', imageUrl: '/tiffany.png' },
  { id: 3, name: 'Andres Jones', details: 'Andres Jones details...', imageUrl: '/andres.png' },
];

const secretaryCandidates = [
  { id: 4, name: 'Julia Frank', details: 'Julia Frank details...', imageUrl: '/julia.png' },
  { id: 5, name: 'Diana Vega', details: 'Diana Vega details...', imageUrl: '/diana.png' },
  { id: 6, name: 'Brett Gibson', details: 'Brett Gibson details...', imageUrl: '/brett.png' },
];

function Page() {
  const [selectedVicePresidentId, setSelectedVicePresidentId] = useState(null);
  const [selectedSecretaryId, setSelectedSecretaryId] = useState(null);
  const [showDetails, setShowDetails] = useState(null);

  const handleSelectVicePresident = (id) => {
    setSelectedVicePresidentId(id);
  };

  const handleSelectSecretary = (id) => {
    setSelectedSecretaryId(id);
  };

  const handleShowDetails = (id) => {
    setShowDetails(id);
  };

  const handleHideDetails = () => {
    setShowDetails(null);
  };

  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.top}>
          <h1 className={styles.title}>Рада директорів</h1>
          <div className={styles.textbox}>
            <p className={styles.txt}>Закривається</p>
            <p className={styles.txtwo}>10/6/2024 12:24 PM EST</p>
          </div>
          <div className={styles.textbox}>
            <p className={styles.txt}>Інструкції</p>
            <p className={styles.txthree}>Будь ласка, зробіть свій вибір для голосування в Раді директорів.</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.candidate}>
            <h1 className={styles.purpose}>Віце-президент</h1>
            <img src='/star.svg' className={styles.star} alt="star" />
          </div>
          <p className={styles.txtfour}>Потрібна відповідь на це запитання.</p>
          {vicePresidentCandidates.map(candidate => (
            <div
              key={candidate.id}
              className={`${styles.button} ${selectedVicePresidentId === candidate.id ? styles.selected : ''}`}
              onClick={() => handleSelectVicePresident(candidate.id)}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedVicePresidentId === candidate.id}
                readOnly
              />
              <img src={candidate.imageUrl} className={styles.image} alt={candidate.name} />
              <span className={styles.name}>{candidate.name}</span>
              <span
                className={styles.details}
                onMouseEnter={() => handleShowDetails(candidate.id)}
                onMouseLeave={handleHideDetails}
              >
                details
              </span>
              {showDetails === candidate.id && (
                <div className={styles.detailsPopup}>
                  {candidate.details}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.candidate}>
            <h1 className={styles.purpose}>Секретар</h1>
            <img src='/star.svg' className={styles.star} alt="star" />
          </div>
          <p className={styles.txtfour}>Потрібна відповідь на це запитання.</p>
          {secretaryCandidates.map(candidate => (
            <div
              key={candidate.id}
              className={`${styles.button} ${selectedSecretaryId === candidate.id ? styles.selected : ''}`}
              onClick={() => handleSelectSecretary(candidate.id)}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedSecretaryId === candidate.id}
                readOnly
              />
              <img src={candidate.imageUrl} className={styles.image} alt={candidate.name} />
              <span className={styles.name}>{candidate.name}</span>
              <span
                className={styles.details}
                onMouseEnter={() => handleShowDetails(candidate.id)}
                onMouseLeave={handleHideDetails}
              >
                деталі
              </span>
              {showDetails === candidate.id && (
                <div className={styles.detailsPopup}>
                  {candidate.details}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.nextbox}>
          <div className={styles.txtfour}>
            Сторінка 1 з 2
          </div>
          <div className={styles.next}>
            ДАЛІ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
