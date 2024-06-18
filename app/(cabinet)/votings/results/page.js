import React from 'react';
import styles from './Results.module.css';

const candidatesPresident = [
    { id: 1, name: 'Arnold Smith', imageUrl: '/arnold.png', percentage: '50.45%', rawVotes: 5 },
    { id: 2, name: 'Tiffany Dodson', imageUrl: '/tiffany.png', percentage: '30.27%', rawVotes: 3 },
    { id: 3, name: 'Andres Jones', imageUrl: '/andres.png', percentage: '19.28%', rawVotes: 2 },
];

const candidatesSecretary = [
    { id: 4, name: 'Julia Frank', imageUrl: '/julia.png', percentage: '40.12%', rawVotes: 4 },
    { id: 5, name: 'Diana Vega', imageUrl: '/diana.png', percentage: '41.12%', rawVotes: 4 },
    { id: 6, name: 'Brett Gibson', imageUrl: '/brett.png', percentage: '19.76%', rawVotes: 2 },
];

const getMaxPercentage = (candidates) => {
    return Math.max(...candidates.map(candidate => parseFloat(candidate.percentage)));
};

function ResultsPage() {
    const maxPercentagePresident = getMaxPercentage(candidatesPresident);
    const maxPercentageSecretary = getMaxPercentage(candidatesSecretary);

    return (
        <div className={styles.cont}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.overall}>ЗАГАЛЬНА</div>
                    <div className={styles.download}>ЗАВАНТАЖИТИ</div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.position}>Президент</h2>
                        <span className={styles.totalVotes}>10 голосів</span>
                    </div>
                    {candidatesPresident.map(candidate => (
                        <div key={candidate.id} className={styles.candidate}>
                            <img src={candidate.imageUrl} alt={candidate.name} className={styles.image} />
                            <span className={styles.name}>{candidate.name}</span>
                            <div className={styles.progressContainer}>
                                <div className={`${styles.progress} ${parseFloat(candidate.percentage) === maxPercentagePresident ? styles.maxProgress : ''}`} style={{ width: candidate.percentage }}></div>
                            </div>
                            <span className={styles.percentage}>{candidate.percentage}</span>
                            <span className={styles.rawVotes}>всього голосів {candidate.rawVotes}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.position}>Секретар</h2>
                        <span className={styles.totalVotes}>10 голосів</span>
                    </div>
                    {candidatesSecretary.map(candidate => (
                        <div key={candidate.id} className={styles.candidate}>
                            <img src={candidate.imageUrl} alt={candidate.name} className={styles.image} />
                            <span className={styles.name}>{candidate.name}</span>
                            <div className={styles.progressContainer}>
                                <div className={`${styles.progress} ${parseFloat(candidate.percentage) === maxPercentageSecretary ? styles.maxProgress : ''}`} style={{ width: candidate.percentage }}></div>
                            </div>
                            <span className={styles.percentage}>{candidate.percentage}</span>
                            <span className={styles.rawVotes}>всього голосів {candidate.rawVotes}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ResultsPage;
