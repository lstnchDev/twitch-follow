import Button from "./UI/Button"
import styles from './css/header.module.scss'
import {Link, useLocation, useSearchParams} from 'react-router-dom'
import { useEffect, useState } from "react"

const CLIENT_ID = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"
const URL_REDIRECT = "http://localhost:3000"

const AUTHO_LINK = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${URL_REDIRECT}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`

const Header = ()=>{
    const [userData, setUser] = useState({
        login: 'never',
        profile_image_url: 'never'
    })
    const [loginState, setLogin] = useState(false)
    const loginHandler = ()=>{
        if (document.location.hash && document.location.hash != '') {
            let parsedHash = new URLSearchParams(window.location.hash.slice(1))
            console.log(123)
             if(parsedHash.get('access_token')){
                 const token_id = parsedHash.get('access_token')
                 localStorage.setItem('token-id', `${token_id}`)
                }
             }
         }
         
       
         const tokenStorage = localStorage.getItem('token-id')


        console.log(userData)

    useEffect(()=>{
        if(tokenStorage){
            fetch(`https://api.twitch.tv/helix/users`, {
                headers:{
                    'client-id': CLIENT_ID,
                    'authorization': `Bearer ${tokenStorage}`
                }
            })
                .then(res=>res.json())
                .then(result=>  setUser(result.data[0]))
        }

    }, [])
  
    const loginItem = loginState ? <Button onClick={loginHandler} title="Login"/> : userData.login


    
    
    const [location] = useSearchParams()
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
                    {loginItem}
                </a>
                
            </div>
        </div>
        )
}

export default Header