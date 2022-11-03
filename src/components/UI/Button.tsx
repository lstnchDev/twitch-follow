import styles from './css/button.module.scss'

interface IButton{
    title: string,
    onClick: React.MouseEventHandler,
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
