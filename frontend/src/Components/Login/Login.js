import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Login.css'

export default function Login() {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    if(!isAuthenticated)
    {
        return (
            <button className='loginsignup' id='login' onClick={()=>loginWithRedirect()}> Log In</button>
          )
    }
}
