import Button from "./UI/Button"
import styles from "./css/mainContent.module.scss"
import { COLOR_MAIN } from "../consts/stylesConsts"

const MainContent = ()=>{
    return (
        <div className={styles.header}>
            <Button title="Login" color="white" bg={COLOR_MAIN}/>
        </div>
    )
}

export default MainContent