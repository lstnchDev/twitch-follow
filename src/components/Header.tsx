import { COLOR_MAIN } from "../consts/stylesConsts"
import Button from "./UI/Button"
import styles from './css/header.module.scss'

const Header = ()=>{
    return (
        <div className={styles.header}>
            <Button title="Login" color="white" bg={COLOR_MAIN}/>
        </div>
        )
}

export default Header