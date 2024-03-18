import { useEffect, useState } from "react";
import { getTime } from "../../utils/getTime";
import ColonImage from "../../assets/icons/colon.svg?react";
import styles from "./Header.module.css";
import { timerDuration } from "../../configs/config";

export const Header = ({ setIsTimeOut }) => {
  const [time, setTime] = useState(timerDuration);

  const isRed = time <= 30;
  const minutes = getTime(time).minutes;
  const seconds = getTime(time).seconds;

  useEffect(() => {
    setTimeout(() => {
      if (time <= 0) {
        setIsTimeOut(true);
        return;
      }

      setTime((prev) => prev - 1);
    }, 1000);
  }, [setIsTimeOut, time]);

  return (
    <header className={styles.header}>
      <h2>Скидка действует:</h2>
      <div className={styles.minutes}>
        <span
          className={isRed ? `${styles.count} ${styles.red}` : styles.count}
        >
          {minutes}
        </span>
        <span className={styles.label}>минут</span>
      </div>
      <div
        className={isRed ? `${styles.divider} ${styles.red}` : styles.divider}
      >
        <ColonImage />
      </div>
      <div className={styles.seconds}>
        <span
          className={isRed ? `${styles.count} ${styles.red}` : styles.count}
        >
          {seconds}
        </span>
        <span className={styles.label}>секунд</span>
      </div>
    </header>
  );
};
