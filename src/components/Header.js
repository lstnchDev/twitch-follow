import Button from "./UI/Button"
import styles from './css/header.module.scss'
import {useSearchParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { loadUser } from "../redux/action"
import { useSelector } from "react-redux"
import Login from "./Login"

const CLIENT_ID = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"
const URL_REDIRECT = "http://localhost:3000"

const AUTHO_LINK = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${URL_REDIRECT}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`

const Header = ()=>{
    const dispatch = useDispatch()
    const [authState, setAuth] = useState(false)
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
    const userId = localStorage.getItem('user-id')

    console.log(tokenStorage == null)

    useEffect(()=>{
        if(tokenStorage !== null){
            setLogin(true)
            dispatch(loadUser(tokenStorage))
            console.log('useEffect')
        }
    }, [])
    const user = useSelector(state=>{
        if(state.user.length !==0 && userId !== null){
            console.log(state)
            return state.user
        }
        else return "never"
    })


    const loginItem = loginState ? <Login name={user.login} img={user.profile_image_url}/>  : <Button onClick={loginHandler} title="Login"/>
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