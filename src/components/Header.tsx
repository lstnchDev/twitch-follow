import Button from "./UI/Button"
import styles from './css/header.module.scss'
import {Link, useLocation, useSearchParams} from 'react-router-dom'
import { useEffect } from "react"

const AUTHO_LINK = "https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=0zuarw2s00p8z3hy0kxcr3q5ufc7gm&redirect_uri=http://localhost:3000&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671"

const Header = ()=>{
    const loginHandler = ()=>{

    }
    const [location] = useSearchParams()
    console.log(location)
    // const loginHandler = async ()=>{
    //      fetch('https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=0zuarw2s00p8z3hy0kxcr3q5ufc7gm&redirect_uri=http://localhost:3000&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671',{
    //         method: 'POST',
    //         mode: 'cors',
    //      })
    //         .then(res=>res.json())
    //         .then(result =>{
    //             console.log(result)
    //         })
    // }
    return (
        <div className={styles.header}>
            <div className={styles.header_wrapper}>
                <h2>TWITCH FOLLOW INFO</h2>
                <a href={AUTHO_LINK}>
                    <Button onClick={loginHandler} title="Login"/>
                </a>
                
            </div>
        </div>
        )
}

export default Header