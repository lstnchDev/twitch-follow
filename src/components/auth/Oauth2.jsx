import OAuth2Login from 'react-simple-oauth2-login';
import { useAppDispatch } from '../../redux/store/store';
import { fetchLogin } from "../../redux/slices/loginStateSlices"
import styles from "./css/oauth2.module.scss"

const clientId = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"
const redirectUri = "http://localhost:3000"
const authorizationUrl = "https://id.twitch.tv/oauth2/authorize"

const scope = "channel%3Amanage%3Apolls+channel%3Aread%3Apolls+user:read:follows"
const state = "c3ab8aa609ea11e793ae92361f002671"

const Oauth2 = ()=>{
    const dispatch = useAppDispatch()
    const onSuccess = response => {
      const dateCookie = new Date(Date.now())
      dateCookie.setDate(dateCookie.getDate() + 6)
        setCookie('auth', response.access_token, {
          expires: dateCookie
        })
        dispatch(fetchLogin(response.access_token))
    };

    const onFailure = response => console.log(response);
    
    const setCookie = (name, value, options = {})=>{
        options = {
            path: 'http://localhost:3000',
            ...options
          };
          if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
          }
        
          let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        
          for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
              updatedCookie += "=" + optionValue;
            }
          }
        
          document.cookie = updatedCookie;
    }

    return (
     
        <OAuth2Login
            id="auth-code-login-btn"
            authorizationUrl={authorizationUrl}
            clientId={clientId}
            redirectUri={redirectUri}
            responseType="token"
            scope={scope}
            state={state}
            buttonText="Login"
            className={styles.authBtn}
            onSuccess={onSuccess}
            onFailure={onFailure}
      />
    )
}

export default Oauth2;
