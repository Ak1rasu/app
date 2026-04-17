import { useEffect, useState } from 'react';
import styles from './Cookie.module.css';

export default function CookieClicker() {

    // 💾 LOAD SAVED DATA
    const [score, setScore] = useState(() => {
        return Number(localStorage.getItem("score")) || 0;
    });

    const [upgrades, setUpgrades] = useState(() => {
        return JSON.parse(localStorage.getItem("upgrades")) || {
            cursor: 0,
            grandma: 0,
            bakery: 0
        };
    });

    // 🏪 UPGRADE DATA
    const upgradeData = {
        cursor: { baseCost: 10, cps: 1 },
        grandma: { baseCost: 25, cps: 5 },
        bakery: { baseCost: 100, cps: 20 }
    };

    // 🍪 CLICK
    function cookieClick() {
        setScore(prev => prev + 1);
    }

    // 🏪 BUY UPGRADE
    function buyUpgrade(type) {
        const cost = Math.round(
            upgradeData[type].baseCost * Math.pow(1.15, upgrades[type])
        );

        if (score >= cost) {
            setScore(prev => prev - cost);

            setUpgrades(prev => ({
                ...prev,
                [type]: prev[type] + 1
            }));
        }
    }

    // ⏱️ PASSIVE INCOME
    useEffect(() => {
        const interval = setInterval(() => {
            let cps = 0;

            cps += upgrades.cursor * upgradeData.cursor.cps;
            cps += upgrades.grandma * upgradeData.grandma.cps;
            cps += upgrades.bakery * upgradeData.bakery.cps;

            if (cps > 0) {
                setScore(prev => prev + cps);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [upgrades]);

    // 💾 SAVE SCORE
    useEffect(() => {
        localStorage.setItem("score", score);
    }, [score]);

    // 💾 SAVE UPGRADES
    useEffect(() => {
        localStorage.setItem("upgrades", JSON.stringify(upgrades));
    }, [upgrades]);

    return (
        <section className={styles.cookieClicker}>

            <button className={styles.cookie} onClick={cookieClick}></button>

            <div className={styles.container}>

                <div className={styles.score}>
                    {score} Cookies
                </div>

                <div className={styles.shop}>
                    <h3>Upgrades</h3>

                    <button onClick={() => buyUpgrade("cursor")}>
                        🖱 Cursor ({upgrades.cursor}) • +1/sec • Cost:{" "}
                        {Math.round(10 * Math.pow(1.15, upgrades.cursor))}
                    </button>

                    <button onClick={() => buyUpgrade("grandma")}>
                        👵 Grandma ({upgrades.grandma}) • +5/sec • Cost:{" "}
                        {Math.round(25 * Math.pow(1.15, upgrades.grandma))}
                    </button>

                    <button onClick={() => buyUpgrade("bakery")}>
                        🏭 Bakery ({upgrades.bakery}) • +20/sec • Cost:{" "}
                        {Math.round(100 * Math.pow(1.15, upgrades.bakery))}
                    </button>
                </div>

            </div>

        </section>
    );
}