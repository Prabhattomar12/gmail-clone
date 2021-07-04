import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase';

function Login() {

 const signIn = () => {
     auth.signInWithPopup(provider)
         .then( result => {
             console.log(result)
         }).catch(err => {
             alert(err.message);
         })
 }

    return (
        <div className='login'>
            <div className="login_container">
            <img src="https://images.indianexpress.com/2020/10/Gmail-new-logo.jpg" alt="" />
           <Button onClick={signIn} className='login_btn' >Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
