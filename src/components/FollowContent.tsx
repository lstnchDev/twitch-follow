import styles from './css/followContent.module.scss'
import { useSelector, } from 'react-redux'
import { FC, useEffect, useState } from 'react';
import Button from './UI/Button';
import { fetchImgFollows } from '../redux/slices/imgFollowsSlices';
import imageNotFound from '../media/img/image-not-found.jpg'
import { RootState, useAppDispatch } from '../redux/store/store';
import { getCookie } from '../tools/getCookie';

interface IFollows{
    login: string,
    gameTitle?: string,
    typeState: boolean,
    type?: string,
    viewer_count?:string,
    title?: string,
    user_id: string,
    followTime?: string,
}

const FollowContent: FC <IFollows> = ({login, gameTitle, typeState, type, viewer_count, title, user_id, followTime})=>{
    const dispatch = useAppDispatch()

    const [followState, setFollow] = useState(true)

    const linkChannel = `https://twitch.tv/${login}`
    const token_id = getCookie('auth')
    
    useEffect(()=>{
        if(token_id !== undefined){
            dispatch(fetchImgFollows({user_id, token_id}))
        }
    }, [])
   

    const followBtn = followState ? "Отписаться" : "Подписаться"

    const onFollow = ()=>{
        setFollow(!followState)
    }
    
    const dateFollow = followTime ? new Date(followTime).toLocaleDateString() : null

    //проверка на наличие аватара у фоловленных каналов
    const imgUserArr = useSelector((state: RootState)=>{
        const imgUser =  state.imgFollowsSlice.follows
        return imgUser.find((img: { id: string; }) => img.id === user_id)

    }) 


    //если у канала нет аватарки, то загружается стандарный аватар not found

    const imgFollowChannel = imgUserArr !== undefined ? imgUserArr.profile_image_url : imageNotFound

    const onlineFollow = 
       <div className={styles.follows}>
         <a href={linkChannel} target="_blank" rel="noreferrer">

                <img src={imgFollowChannel} alt="follow"/>        
                </a>

                <a href={linkChannel} target="_blank" rel="noreferrer">
                    <h4>{login}</h4>
                </a>

                <p className={styles.follow_type}>{type} - {viewer_count}</p>
                <h5>{gameTitle}</h5>
                <a href={linkChannel} target="_blank" rel="noreferrer">

                <h5 className={styles.follow_title}>{title}</h5>

                </a>
       </div>


    const allFollow = 
                <div className={styles.follows}>
                    <a href={linkChannel} target="_blank" rel="noreferrer">
                            <img src={imgFollowChannel} alt="follow"/>        
                                </a>
        
                            <a href={linkChannel} target="_blank" rel="noreferrer">
                                <h4>{login}</h4>
                            </a>
                            <p className={styles.follow_type}>Дата подписки: {dateFollow}</p>
                            <Button customClass={followState} nameClass={styles.followBtn} onClick={onFollow} title={followBtn}/>
                 </div>
    return(
        <li className={styles.follow_item}>
            {typeState ? onlineFollow : allFollow}
        </li> 
    )
}

export default FollowContent