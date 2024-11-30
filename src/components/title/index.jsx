import { Input } from "../../widgets/input"

import styles from "./styles.module.css"

export const Title = ({onSearch}) => {

    return (
        <div className={styles.titleContainer}>
            <div>
                <div>Collections</div>
                <p>content storyboards</p>
            </div>
            <div><Search onSearch={onSearch} /></div>
        </div>
    )
}


export const Search = ({onSearch}) => {

    return (
        <div>
            <Input onChange={onSearch}  />
        </div>
    )
}