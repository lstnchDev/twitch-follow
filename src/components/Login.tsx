import styles from './css/login.module.scss'
import Button from './UI/Button'

interface ILogin{
    name: string,
    img: string
    onLogoutHandler: ()=>void
}

const Login = ({name, img, onLogoutHandler}: ILogin)=>{
    return (
       <div className={styles.profile}>
            <h3>{name}</h3>
            <img src={img} alt="login" />
            <Button onClick={onLogoutHandler} title='Logout'/>
       </div>
    )
}

export default Login