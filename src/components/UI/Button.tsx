import { FC } from 'react'
import styles from './css/button.module.scss'

type IButton = {
    title: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    nameClass?: string,
    customClass?: boolean
    
}

const Button : FC<IButton> = ({title, onClick, nameClass, customClass = false})=>{
    return (
        <button onClick={onClick}
            className={customClass ? nameClass : styles.buttonComp }>
            {title}
        </button>   
     )
}

export default Button
