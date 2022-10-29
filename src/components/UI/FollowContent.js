
import { useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../../redux/action'
import { useEffect } from 'react';

// interface IFollows{
//     user_id: string,
//     login: string
// }

const FollowContent = (props)=>{
    const dispatch = useDispatch()
    const token_id = localStorage.getItem('token-id')

    useEffect(()=>{

        dispatch(getUsers(props.user_id, token_id))
    }, [])
    const userFollow = useSelector(state=>{
        console.log(state.users)

        return state.users[0]
    })
    return(
        <li>
            {/* <img src={userFollow.profile_image_url} alt="follow"/> */}
            <h4>{props.login}</h4>   
        </li>
    )
}

export default FollowContent