import styles from "./css/mainContent.module.scss"
import { useState, useEffect } from "react"
import Guest from "./Guest"
import { useDispatch } from "react-redux"
import { getUsers, loadFollow } from "../redux/action"
import { useSelector } from "react-redux"
import FollowContent from "./FollowContent"

const MainContent = ()=>{
    const [autorState, setAutor] = useState(false)
    const [loadState, setLoad] = useState(false)
    const [loadFol, setFol] = useState(true)
    const [loading, setLoading] = useState(true)
    const [arrState, setArr] = useState(false)

    const dispatch = useDispatch()

    const token_id = localStorage.getItem('token-id')
    const user_id = localStorage.getItem('user-id')

   console.log(token_id)

    const loadingState = useSelector(state=>{
            return(state.loading.loading)
        
    })
    let userInfo =  useSelector(state=>{
        console.log(state.users)
        return state.users
    })

    const userFollow = useSelector(state=>{
        if(!loadFol){
            return state.follow.followData    
        }
    })
    console.log(2)

    
    useEffect(()=>{
        if (token_id !==null){
            if(loadFol){
                dispatch(loadFollow(user_id, token_id))
                setFol(false)

            }
            // else if (!loadingState){
            //     console.log('autorState')
            //     userFollow.map((user)=>dispatch(getUsers(user.user_id, token_id)))
            //     setAutor(false)
            //     setLoad(true)
            // }
            else{
                const intervalFollow = setTimeout(()=>{
                    dispatch(loadFollow(user_id, token_id))
                }, 200000)
                return ()=> clearInterval(intervalFollow)

            }
           
       
            
            console.log(123)

        }
      
    }, [ loadingState])
    
    const cont = (!loadingState) ? userFollow.map((follow)=>{
    return <div>
        <FollowContent user_id={follow.user_id} login={follow.user_name} img={follow.thumbnail_url} title={follow.title} type={follow.type} viewer_count={follow.viewer_count}/>
    </div>
    }) : <h4>'loading...'</h4>
    const mainContent = !loadFol ? cont : <Guest />

    //тут проблема ёпт
    // const mainContent = autorState ? <FollowContent user_id='90901415' login='cobler82'/> : <Guest />

    return (
        <div className={styles.mainContent}>
            <div className={styles.wrap_mainContent}>
                <ul className={styles.mainContent_follows}>
                    {/* {arrUsers.map((follow)=> <FollowContent login={follow.login} img={follow.img}/>) } */}
                    {mainContent}
                </ul>
            </div>
        </div>
    )
}

export default MainContent