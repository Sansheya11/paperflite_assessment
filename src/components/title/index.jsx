import { Input } from "../../widgets/input"

import styles from "./styles.module.css"

export const Title = ({onSearch}) => {

    return (
        <div className={styles.titleContainer}>
            <div>
                <div className={styles.titlefont}>Collections</div>
                <p className={styles.description}>personalized content storyboards</p>
            </div>
            <div><Search onSearch={onSearch} /></div>
        </div>
    )
}



export const Search = ({ onSearch }) => {
    return (
      <div className={styles.searchWrapper}>
        {/* Search Box */}
        <div className={styles.searchbox}>
          <div className={styles.searchContainer}>
            <span className={styles.searchIcon}>
              <img src="Path 977.png" alt="Search" />
            </span>
            <Input onChange={onSearch} className={styles.searchInput} />
            <span className={styles.endIcon}>
              <img src="crossicon.png" alt="End Icon" />
            </span>
          </div>
           {/* Box Next to Search Box */}
        <div className={styles.iconBox}>
          <img src="fan.png" alt="Action" className={styles.iconImage} />
        </div>
        </div>
  
       
  
        {/* Bottom Section */}
        <div className={styles.bottomActions}>
          <div className={styles.actionBox}>
            <img src="Text.png" alt="Text Icon" className={styles.iconImage} />
            {/* <span>Text</span> */}
          </div>
          <div className={styles.actionBox}>
            <img src="Lineicon.png" alt="Delete Icon" className={styles.iconImage} />
            {/* <span>Delete</span> */}
          </div>
          <div className={styles.actionBox}>
            <img src="Delete.png" alt="Other Icon" className={styles.iconImage} />
            {/* <span>Other</span> */}
          </div>
          <div className={styles.createBox}>
            <img src="Collection.png" alt="Plus Icon" className={styles.iconImage} />
            <span>Create Collection</span>
          </div>
        </div>
      </div>
    );
  };