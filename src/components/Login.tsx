import styles from './css/login.module.scss'

interface ILogin{
    name: string,
    img: string
}

const Login = ({name, img}: ILogin)=>{
    return (
       <div className={styles.profile}>
            <h3>{name}</h3>
            <img src={img} alt="avs" />
       </div>
    )
}

export default Login