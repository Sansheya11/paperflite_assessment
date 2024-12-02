import styles from "./styles.module.css";

export const LeftNav = () => {
  return (
    <div className={styles.leftnavContainer}>
      <div className={styles.topIcons}>
        <img src="/crossicon.png" alt="Icon 1" className={styles.icon} />
        <img src="Component 2.png" alt="Icon 2" className={styles.icon} />
        <img src="Component 9.png" alt="Icon 3" className={styles.icon} />
        <img src="Component 8.png" alt="Icon 4" className={styles.icon} />
        <img src="Component 6.png" alt="Icon 5" className={styles.icon} />
        <img src="Component 7.png" alt="Icon 5" className={styles.icon} />
      </div>
      <div className={styles.middleGap}></div>
      <div className={styles.bottomIcons}>
        <img src="motif.png" alt="Icon 6" className={styles.icon} />
        <img src="Icons.png" alt="Icon 7" className={styles.icon} />
      </div>
    </div>
  );
};
