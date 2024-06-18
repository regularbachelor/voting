"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./login.module.css";

export default function SignInUpForm() {
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [twoFactorCode, setTwoFactorCode] = useState("");
    const router = useRouter();
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageStyle, setMessageStyle] = useState({});
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [usersCount, setUsersCount] = useState(0);

    useEffect(() => {
        applyTheme();
        fetchUsersCount();
    }, []);

    const fetchUsersCount = async () => {
        try {
            const response = await fetch("/api/getUsersCount");
            const data = await response.json();
            setUsersCount(data.count);
        } catch (error) {
            console.error("Error fetching users count:", error);
        }
    };

    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        applyTheme();
    }, []);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
        resetForm();
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
        resetForm();
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setMessage("");
        setMessageStyle({});
        setTermsAccepted(false);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_ROOT_URL + "/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const savedTheme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', savedTheme);
                window.location.href = "/cabinet/cards";
            } else {
                setMessage("Error");
                setMessageStyle({ color: "red" });
            }
        } catch (error) {
            console.error("Login error:", error);
            setMessage("Error");
            setMessageStyle({ color: "red" });
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            setMessageStyle({ color: "red" });
            return;
        }

        const birthDate = new Date(dateOfBirth);
        const cutoffDate = new Date("2010-01-01");

        if (birthDate > cutoffDate) {
            setMessage("Ви не досягли мінімального віку для користування застосунком");
            setMessageStyle({ color: "red" });
            return;
        }

        try {
            const formattedDateOfBirth = birthDate.toISOString().split('T')[0];
            const response = await fetch(process.env.NEXT_PUBLIC_ROOT_URL + "/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, birthday: formattedDateOfBirth }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Реєстрація успішна. Увійдіть у свій кабінет");
                setMessageStyle({ color: "green" });
            } else if (data.error === "Email is already in use") {
                setMessage("Email is already in use");
                setMessageStyle({ color: "red" });
            } else if (data.error === "Invalid password format") {
                setMessage('Invalid password format');
                setMessageStyle({
                    color: "red",
                    fontSize: "12px"
                });
            } else {
                throw new Error(data.error || "Registration error");
            }
        } catch (error) {
            console.error("Signup error:", error);
            setMessage("Error");
            setMessageStyle({ color: "red" });
        }
    };

    return (
        <div className={styles.bigone}>
            <div className={styles.page}>
                <Head>
                    <title>Sign In/Up Form</title>
                </Head>

                <div className={styles.blurred}></div>
                <div className={styles.blurredtwo}></div>
                <div
                    className={`${styles.container} ${isRightPanelActive ? styles.rightPanelActive : ""}`}
                    id="container"
                >
                    <div className={`${styles.formContainer} ${styles.signUpContainer} ${!isRightPanelActive ? styles.hiddenForm : ''}`}>
                        <form className={styles.form} onSubmit={handleSignupSubmit}>
                            <h1 className={styles.h1}>Зареєструватися</h1>
                            <span className={styles.tostart}>Ласкаво просимо на безпечну платформу для голосування</span>
                            <input
                                className={styles.input}
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                className={styles.input}
                                type="date"
                                placeholder="Date of Birth"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                required
                            />

                            <input
                                className={styles.input}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength="8"
                            />
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className={styles.button}>Зареєструватися</button>
                            <div className={styles.swap}>
                                Вже є аккаунт?
                                <div className={styles.swaplink} onClick={handleSignInClick}>
                                    Увійти
                                </div>
                            </div>
                            <div
                                style={messageStyle}
                                className={styles.message}
                                dangerouslySetInnerHTML={{ __html: message }}
                            ></div>
                        </form>
                    </div>
                    <div className={`${styles.formContainer} ${styles.signInContainer} ${isRightPanelActive ? styles.hiddenForm : ''}`}>
                        <form className={styles.form} onSubmit={handleLoginSubmit}>
                            <h1 className={styles.h1}>Увійти</h1>
                            <p className={styles.tostart}>Ласкаво просимо на безпечну платформу для голосування</p>
                            <input
                                className={styles.input}
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="2FA Code"  // New input field for 2FA code
                                value={twoFactorCode}
                                onChange={(e) => setTwoFactorCode(e.target.value)}
                                required
                            />
                            <button type="submit" className={styles.button}>Log in</button>
                            <div className={styles.swap}>
                                Немає облікового запису
                                <div className={styles.swaplink} onClick={handleSignUpClick}>
                                    Зареєструватися
                                </div>
                            </div>
                            <div
                                style={messageStyle}
                                className={styles.message}
                                dangerouslySetInnerHTML={{ __html: message }}
                            ></div>
                        </form>
                    </div>
                    <div className={styles.overlayContainer}>
                        <div className={styles.overlay}>
                            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                                <h1 className={styles.hello}>Вітаємо!</h1>
                                <p className={styles.p}>Ласкаво просимо на безпечну платформу для голосування</p>
                                <div className={styles.avatarbox}>
                                    <div className={styles.inneravatar}>
                                        <Image
                                            src="/avatar.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatar}
                                        />
                                        <Image
                                            src="/avatartwo.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatartwo}
                                        />
                                        <Image
                                            src="/avatarthree.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatartwo}
                                        />
                                        <Image
                                            src="/avatarfour.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatartwo}
                                        />
                                        <Image
                                            src="/avatarfive.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatartwo}
                                        />
                                    </div>
                                    <p className={styles.txt}>{usersCount} користувачів вже на нашій платформі</p>
                                </div>
                            </div>
                            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                                <h1 className={styles.hello}>Вітаємо!</h1>
                                <p className={styles.p}>Будь ласка, вкажіть свою електронну адресу</p>
                                <div className={styles.avatarbox}>
                                    <div className={styles.inneravatar}>
                                        <Image
                                            src="/avatar.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatar}
                                        />
                                        <Image
                                            src="/avatartwo.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatартwo}
                                        />
                                        <Image
                                            src="/avatarthree.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatартwo}
                                        />
                                        <Image
                                            src="/avatarfour.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatартwo}
                                        />
                                        <Image
                                            src="/avatarfive.svg"
                                            alt="Settings icon"
                                            height="32"
                                            width="32"
                                            className={styles.avatартwo}
                                        />
                                    </div>
                                    <p className={styles.txt}>{usersCount} користувачів вже на нашій платформі</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
