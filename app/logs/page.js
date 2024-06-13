import React from 'react';
import styles from './Audit.module.css';
import DateRangeComp from './Date/Date';

const actions = [
  { date: '2024-06-13', time: '10:00:00', userId: 1, type: 'Login', status: 'Success', signature: 'e73a5b1c7f2e4d8c9a6b0d3f7e2a5b1c', details: '', comments: '' },
  { date: '2024-06-13', time: '10:05:00', userId: 2, type: 'Registration', status: 'Success', signature: '4d53e8f3e5d9c0b7c1f8e3b6d2f4e', details: '', comments: '' },
  { date: '2024-06-13', time: '10:10:00', userId: 1, type: 'Voting', status: 'Success', signature: 'b39c4d2e4f6e0b1c8d2f9e4c7b3f5d', details: 'Candidate: Goncharenko', comments: '' },
  { date: '2024-06-13', time: '10:15:00', userId: 3, type: 'Password change', status: 'Failure', signature: '5c68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: 'Incorrect password', comments: 'Incorrect password' },
  { date: '2024-06-14', time: '10:20:00', userId: 1, type: 'Login', status: 'Success', signature: 'a68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: '' },
  { date: '2024-06-14', time: '10:20:00', userId: 1, type: 'Login', status: 'Success', signature: 'a68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: '' },
  { date: '2024-06-14', time: '10:20:00', userId: 1, type: 'Login', status: 'Success', signature: 'a68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: '' },
  { date: '2024-06-14', time: '10:20:00', userId: 1, type: 'Login', status: 'Success', signature: 'a68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: '' },
  { date: '2024-06-13', time: '10:00:00', userId: 1, type: 'Login', status: 'Success', signature: 'e73a5b1c7f2e4d8c9a6b0d3f7e2a5b1c', details: '', comments: '' },
  { date: '2024-06-13', time: '10:05:00', userId: 2, type: 'Registration', status: 'Success', signature: '4d53e8f3e5d9c0b7c1f8e3b6d2f4e', details: '', comments: '' },
  { date: '2024-06-13', time: '10:10:00', userId: 1, type: 'Voting', status: 'Success', signature: 'b39c4d2e4f6e0b1c8d2f9e4c7b3f5d', details: 'Candidate: Goncharenko', comments: '' },
  { date: '2024-06-13', time: '10:15:00', userId: 3, type: 'Password change', status: 'Failure', signature: '5c68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: 'Incorrect password' },
  { date: '2024-06-14', time: '10:20:00', userId: 1, type: 'Login', status: 'Success', signature: 'a68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: '' },
  { date: '2024-06-13', time: '10:00:00', userId: 1, type: 'Login', status: 'Success', signature: 'e73a5b1c7f2e4d8c9a6b0d3f7e2a5b1c', details: '', comments: '' },
  { date: '2024-06-13', time: '10:05:00', userId: 2, type: 'Registration', status: 'Success', signature: '4d53e8f3e5d9c0b7c1f8e3b6d2f4e', details: '', comments: '' },
  { date: '2024-06-13', time: '10:10:00', userId: 1, type: 'Voting', status: 'Success', signature: 'b39c4d2e4f6e0b1c8d2f9e4c7b3f5d', details: 'Candidate: Goncharenko', comments: '' },
  { date: '2024-06-13', time: '10:15:00', userId: 3, type: 'Password change', status: 'Failure', signature: '5c68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: 'Incorrect password' },
  { date: '2024-06-14', time: '10:20:00', userId: 1, type: 'Login', status: 'Success', signature: 'a68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: '' },
  { date: '2024-06-13', time: '10:00:00', userId: 1, type: 'Login', status: 'Success', signature: 'e73a5b1c7f2e4d8c9a6b0d3f7e2a5b1c', details: '', comments: '' },
  { date: '2024-06-13', time: '10:05:00', userId: 2, type: 'Registration', status: 'Success', signature: '4d53e8f3e5d9c0b7c1f8e3b6d2f4e', details: '', comments: '' },
  { date: '2024-06-13', time: '10:10:00', userId: 1, type: 'Voting', status: 'Success', signature: 'b39c4d2e4f6e0b1c8d2f9e4c7b3f5d', details: 'Candidate: Goncharenko', comments: '' },
  { date: '2024-06-13', time: '10:15:00', userId: 3, type: 'Password change', status: 'Failure', signature: '5c68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: 'Incorrect password' },
  { date: '2024-06-14', time: '10:20:00', userId: 1, type: 'Login', status: 'Success', signature: 'a68d9e0d7e1c9b2d3f0e5d8c4f6e7b', details: '', comments: '' },
];

function Page() {

  let previousDate = null;
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.filters}>
          <div className={styles.dashboard}>
            <div className={styles.header}>
              <div className={styles.headerContainer}>
                <h1>Audit logs</h1>
              </div>
            </div>

            <div className={styles.boxes}>
              <input className={styles.search__input} type="text" placeholder="Search" />
              <div className={styles.dropdown}>
                <select className={styles.dropdown__select}>
                  <option value="">No Filters</option>
                  <option value="vote">Vote</option>
                  <option value="vote">Login</option>
                  <option value="registration">Registration</option>
                </select>
              </div>
              <div className={styles.range}>
                <DateRangeComp />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>User ID</th>
                <th>Action Type</th>
                <th>Status</th>
                <th>Signature</th>
                <th>Action Details</th>
              </tr>
            </thead>
            <tbody>
              {actions.map((action, index) => {
                const showDate = action.date !== previousDate;
                previousDate = action.date;
                return (
                  <React.Fragment key={index}>
                    {showDate && (
                      <tr className={styles.row}>
                        <td className={styles.date} colSpan="8">{action.date}</td>
                      </tr>
                    )}
                    <tr className={styles.row}>
                      <td className={styles.cell}></td>
                      <td className={styles.cell}>{action.time}</td>
                      <td className={styles.cell}>{action.userId}</td>
                      <td className={styles.cell}>{action.type}</td>
                      <td className={styles.cell}>{action.status}</td>
                      <td className={styles.cell}>{action.signature}</td>
                      <td className={styles.cell}>{action.details}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
