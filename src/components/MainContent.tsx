import styles from "./css/mainContent.module.scss"
import { useState, useEffect, FC } from "react"
import { useSelector } from "react-redux"
import FollowContent from "./FollowContent"
import Button from "./UI/Button"
import FollowsSkeleton from "./FollowsSkeleton"
import { fetchOnlineFollows } from "../redux/slices/onlineFollowsSlices"
import { fetchAllFollows } from "../redux/slices/allFollowsSlices"
import Guest from "./Guest"
import { RootState, useAppDispatch } from "../redux/store/store"
import { getCookie } from "../tools/getCookie"


type IOnlineFollow = {
    user_id: string,
    user_name: string, 
    title: string,
    type: string,
    viewer_count: string,               
    game_name: string,
}
type IAllFollow = {
    to_id: string,
    to_name: string, 
    followed_at: string,
}

const MainContent: FC = ()=>{
    const [allFollowState, setAllFollow] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    
    const token_id = getCookie('auth')
   console.log(token_id)
    const user_id = useSelector((state: RootState)=> {
        if(state.loginStateSlices.loginState){
            return(state.loginStateSlices.authUser.id)

        }
        else return ''
    })

    const loginState = useSelector((state: RootState)=> state.loginStateSlices.loginState)

    const onAllFollow = ()=>{
        setAllFollow(!allFollowState)
    }


    const onlineFollow = useSelector((state: RootState)=> state.onlineFollowsSlice)
    const allFollow = useSelector((state: RootState)=> state.allFollowsSlices)
    
    useEffect(()=>{
        if (token_id !== undefined){

            if(loginState){
                console.log(user_id)
                dispatch(fetchOnlineFollows({user_id, token_id}))
                dispatch(fetchAllFollows({user_id, token_id}))


            }
                const intervalFollow = setInterval(()=>{
                    console.log('timeout')
                    dispatch(fetchOnlineFollows({user_id, token_id}))
                    console.log(token_id)
                    console.log(document.cookie)
                
                }, 30000)
                return ()=> clearInterval(intervalFollow)
            
        }
      
    }, [loginState])
    

    const mainContentOnline = loginState ? onlineFollow.items.map((follow: IOnlineFollow)=>{
        return <div>
            <FollowContent
                key={follow.user_id}
                user_id={follow.user_id} 
                login={follow.user_name} 
                typeState={true} 
                title={follow.title} 
                type={follow.type} 
                viewer_count={follow.viewer_count}                 
                gameTitle={follow.game_name}
    
    />
        </div>
        }) : [...new Array(6)].map((_, index)=> <FollowsSkeleton key={index}/>) 
    const mainContentOffline = (token_id !== undefined) ? allFollow.items.map((follow: IAllFollow)=>{
        return <div>
            <FollowContent 
                key={follow.to_id}
                user_id={follow.to_id} 
                login={follow.to_name}
                typeState={false}
                followTime={follow.followed_at}
            />
        </div>
        }) : <FollowsSkeleton/>
    
    //тут проблема ёпт
    // const mainContent = autorState ? <FollowContent user_id='90901415' login='cobler82'/> : <Guest />

    return (
        <div className={styles.mainContent}>
            <div className={styles.wrap_mainContent}>
            {token_id !== undefined 
                ?  <ul className={styles.mainContent_follows}>
                    <h3>Онлайн стримы:</h3>
                    <div className={styles.mainContent_online}>
                        {mainContentOnline}
                    </div>
                    {allFollowState 
                     ? <div>
                            <Button onClick={onAllFollow} title="Скрыть"/>
                            <h3>Оффлайн стримы:</h3>
                            <div className={styles.mainContent_online}>
                                {mainContentOffline}
                            </div>
                        </div>
                        : <Button onClick={onAllFollow} title="Раскрыть все подписки"/>
                        }
                </ul>
                : <Guest/> 
                }
            </div>
        </div>
    )
}

export default MainContent