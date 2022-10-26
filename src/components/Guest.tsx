import Button from "./UI/Button"
import styles from "./css/guest.module.scss"

const Guest = ()=>{
    const loginHandler = ()=>{
        console.log(123)
    }
    return (
        <div className={styles.guest}>
            <h3>Пожалуйста, пройдите авторизацию через твич, чтобы получить доступ к информации</h3>
            <Button onClick={loginHandler} title="Login"/>        
        </div>
    )
}

export default Guest