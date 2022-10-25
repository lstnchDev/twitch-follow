import styles from './css/button.module.scss'

interface IButton{
    title: string,
    color: string,
    bg: string
}

const Button = ({title, color, bg}: IButton)=>{
    return (
        <button 
            className={styles.button}
            style={{background: bg, color: color}}>
            {title}
        </button>   
     )
}

export default Button
