import { useState } from "react";
import styles from "./styles.module.css";

export const TabNav = ({ dataSource=[],value, onChange = () => {} }) => {
    const [currentValue, setCurrentValue] = useState(value || dataSource[0] )

    if(!dataSource && dataSource.length <0) return null


  return (
    <div className={styles.tabContainer}>
      {dataSource.map((item) => {
        return (
          <button
            key={item.id}
            className={`${styles.items} ${currentValue?.id === item.id ? styles.activeItems: ""}`}
            onClick={() => {
                setCurrentValue(item)
                onChange(item)
            }}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};
