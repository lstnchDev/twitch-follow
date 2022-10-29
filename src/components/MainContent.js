import Button from "./UI/Button"
import styles from "./css/mainContent.module.scss"
import { useState, useEffect } from "react"
import Guest from "./Guest"
import { useDispatch } from "react-redux"
import { loadFollow } from "../redux/action"
import { useSelector } from "react-redux"
import FollowContent from "./UI/FollowContent"

const MainContent = ()=>{
    const [autorState, setAutor] = useState(false)

    const dispatch = useDispatch()

    const token_id = localStorage.getItem('token-id')
    const user_id = localStorage.getItem('user-id')



    useEffect(()=>{
        if(user_id !== null){
            console.log(user_id)
            setAutor(true)
            dispatch(loadFollow(user_id, token_id))
        }
    }, [dispatch, token_id, user_id])
    
    const userFollow = useSelector(state=>{
        return state.follow
    })

    //тут проблема ёпт
    // const mainContent = autorState ? userFollow.map((follow)=><FollowContent user_id={follow.to_id} login={follow.to_login}/>) : <Guest />
    const mainContent = autorState ? <FollowContent user_id='90901415' login='cobler82'/> : <Guest />

    userFollow.map((follow)=> console.log(follow.to_id, follow.to_login))
    return (
        <div className={styles.mainContent}>
            <div className={styles.wrap_mainContent}>
                {mainContent}
            </div>
        </div>
    )
}

export default MainContent