import OAuth2Login from 'react-simple-oauth2-login';
import { useAppDispatch } from '../../redux/store/store';
import { fetchLogin } from "../../redux/slices/loginStateSlices"
import styles from "./css/oauth2.module.scss"
import { auth, authorizationUrl, clientId, redirectUri, scope, state } from '../../consts/variableConsts';


const Oauth2 = ()=>{
    const dispatch = useAppDispatch()
    const onSuccess = response => {
      const dateCookie = new Date(Date.now())
      dateCookie.setDate(dateCookie.getDate() + 6)
        setCookie(auth, response.access_token, {
          expires: dateCookie
        })
        dispatch(fetchLogin(response.access_token))
    };

    const onFailure = response => console.log(response);
    
    const setCookie = (name, value, options = {})=>{
        options = {
            path: 'https://lstnchdev.github.io/twitch-follow',
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
