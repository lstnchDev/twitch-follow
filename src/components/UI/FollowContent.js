
import {connect, useDispatch, useSelector} from 'react-redux'
import { getUsers, loadUser } from '../../redux/action'
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
    const user = useSelector(state=>{
        return state.user
    })
    console.log(user)
    return(
        <li>{props.user_id}-{props.login}</li>
    )
}

export default FollowContent