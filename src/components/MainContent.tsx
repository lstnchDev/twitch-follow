import Button from "./UI/Button"
import styles from "./css/mainContent.module.scss"
import { useState } from "react"
import Guest from "./Guest"

const MainContent = ()=>{
    const [autorState, setAutor] = useState(false)

   
    return (
        <div className={styles.mainContent}>
            <div className={styles.wrap_mainContent}>
                <Guest />
            </div>
        </div>
    )
}

export default MainContent