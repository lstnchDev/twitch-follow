import styles from './css/followContent.module.scss'
import { useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../redux/action'
import { useEffect } from 'react';

// interface IFollows{
//     login: string,
//     img: string
// }

const FollowContent = ({login, img, type, viewer_count, title, user_id})=>{
    const dispatch = useDispatch()
    const linkChannel = `https://twitch.tv/${login}`
    const token_id = localStorage.getItem('token-id')

    const imgUserArr = useSelector(state=>{
        return (state.users)
    }) 
    const imgUser = (imgUserArr.users).filter(img=> {
        console.log(img, user_id)
        return img.id=== user_id
    })
    const im = imgUser.length!==0 ? imgUser[0].img : null
    console.log(imgUser)
    useEffect(()=>{
        dispatch(getUsers(user_id, token_id))
    }, [])
                // else if (!loadingState){
            //     console.log('autorState')
            //     userFollow.map((user)=>dispatch(getUsers(user.user_id, token_id)))
            //     setAutor(false)
            //     setLoad(true)
            // }
    return(
        <li className={styles.follow_item}>
            <a href={linkChannel} target="_blank" rel="noreferrer">
                <img src={im} alt="follow"/>            </a>

                <a href={linkChannel} target="_blank" rel="noreferrer"><h4>{login}</h4></a>
                    <p className={styles.follow_type}>{type} - {viewer_count}</p>
                    <p className={styles.follow_title}>{title}</p>

        </li>
    )
}

export default FollowContent