"use client"

import React, { useState } from 'react';
import styles from './Setup.module.css';

function Page() {
    const [questions, setQuestions] = useState([{ question: '', option: '' }]);

    const addQuestion = () => {
        setQuestions([...questions, { question: '', option: '' }]);
    };

    const handleQuestionChange = (index, field, value) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = value;
        setQuestions(newQuestions);
    };

    const removeQuestion = (index) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <h1 className={styles.title}>Створити голосування</h1>
                <div className={styles.field}>
                    <label className={styles.label}>Назва голосування</label>
                    <input className={styles.input} placeholder="Enter voting title" />
                </div>
                {questions.map((q, index) => (
                    <div key={index} className={styles.questionBox}>
                        <button
                            className={styles.removeButton}
                            onClick={() => removeQuestion(index)}
                        >
                            &times;
                        </button>
                        <div className={styles.field}>
                            <label className={styles.label}>Питання</label>
                            <input
                                className={styles.input}
                                placeholder="Question"
                                value={q.question}
                                onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Варіант</label>
                            <input
                                className={styles.input}
                                placeholder="Option"
                                value={q.option}
                                onChange={(e) => handleQuestionChange(index, 'option', e.target.value)}
                            />
                        </div>
                    </div>
                ))}
                <button className={styles.addButton} onClick={addQuestion}>Додати запитання</button>
                <div className={styles.field}>
                    <label className={styles.label}>Надіслати</label>
                    <input className={styles.input} placeholder="ДД. ММ. ГГГГ" />
                </div>
                <button className={styles.submitButton}>Надіслати</button>
            </div>
        </div>
    );
}

export default Page;