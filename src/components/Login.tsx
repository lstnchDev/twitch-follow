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
        <a href={`https://www.twitch.tv/${name}`} target="_blank" rel="noreferrer">
            <h3>{name}</h3>
            <img src={img} alt="login" />
        </a>
            <Button customClass={false} onClick={onLogoutHandler} title='Logout' nameClass='sadsa'/>
       </div>
    )
}

export default Login