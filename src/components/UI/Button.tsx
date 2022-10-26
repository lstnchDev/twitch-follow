import styles from './css/button.module.scss'

interface IButton{
    title: string,
    onClick: any,
}

const Button = ({title, onClick}: IButton)=>{
    return (
        <button onClick={onClick}
            className={styles.button}>
            {title}
        </button>   
     )
}

export default Button
