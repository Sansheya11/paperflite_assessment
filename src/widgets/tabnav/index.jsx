import { useState } from "react";
import styles from "./styles.module.css";

export const TabNav = ({ dataSource = [], value, onChange = () => {} }) => {
  const [currentValue, setCurrentValue] = useState(value || dataSource[0]);

  if (!dataSource || dataSource.length < 0) return null;

  return (
    <div className={`${styles.tabContainer} ${styles.tabnve}`}>
      {/* Plus Icon Button */}
      <button
        className={`${styles.items} ${styles.plusButton}`}
        onClick={() => {
          console.log("Create new item clicked");
          // Add your create new action logic here
        }}
      >
        <img src="Plusicon.png" alt="Plus Icon" className={styles.plusIcon} />
      </button>

      {/* Tab Buttons */}
      {dataSource.map((item) => {
        return (
          <button
            key={item.id}
            className={`${styles.items} ${
              currentValue?.id === item.id ? styles.activeItems : ""
            }`}
            onClick={() => {
              setCurrentValue(item);
              onChange(item);
            }}
          >
            {item.name}
          </button>
        );
      })}
           
  

    </div>
    
  );
};
