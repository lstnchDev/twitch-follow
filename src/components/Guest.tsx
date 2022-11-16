import styles from "./css/guest.module.scss"
import Oauth2 from "./auth/Oauth2"

const Guest = ()=>{
    return (
        <div className={styles.guest}>
            <h3>Пожалуйста, пройдите авторизацию через твич, чтобы получить доступ к информации</h3>
            <Oauth2 />
        </div>
    )
}

export default Guest