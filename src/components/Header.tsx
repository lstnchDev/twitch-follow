import styles from './css/header.module.scss'
import { FC, useEffect } from "react"
import { useSelector } from "react-redux"
import Login from "./Login"
import { fetchLogin, getLoginState } from "../redux/slices/loginStateSlices"
import { RootState, useAppDispatch } from "../redux/store/store"
import Oauth2 from "./auth/Oauth2"
import  {getCookie}  from "../tools/getCookie"

const Header: FC = ()=>{

    const dispatch = useAppDispatch()

    //функция при разлогине, очищаются куки
    const logoutHandler = ()=>{
        document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        dispatch(getLoginState(false))
    }
       

    //присваиваем переменной куку с авторизацией
    const token_id = getCookie('auth')

    useEffect(()=>{

        //если кука с токеном имеется, то отправляем запрос для получения данных залогенного юзера
        if(token_id !== undefined){
            dispatch(fetchLogin(token_id))
        }
    }, [])

    //получаем данные по юзеру
    const user = useSelector((state: RootState) => state.loginStateSlices)

    //если юзер авторизован то рисуем <login/>, в ином случае рисуем кнопку <Oauth2/>
    const loginItem = user.authUser !== undefined && user.loginState 
        ? <Login onLogoutHandler={logoutHandler} name={user.authUser.login} img={user.authUser.profile_image_url}/>
        : <Oauth2 />


    return (
        <div className={styles.header}>
            <div className={styles.header_wrapper}>
                <h2>TWITCH FOLLOW INFO</h2>
                    {loginItem}
            </div>
        </div>
        )
}

export default Header