import React, { useEffect, useState } from 'react'
import Styles from './Login.module.css'
import frogy from '../Images/frogy.jpg'
import manipulationObj from '../Manipulation/LoginManipulation'
// import styled from 'styled-components'

function Login(props){
    const [account, setAccount] = useState({username: '',
                                            password: ''});

    const handleUsername = (e) => {
        setAccount({...account, username: e.target.value})
    }

    const handlePassword = (e) => {
        setAccount({...account, password: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(account.username, account.password);

        /*var resString = checkLogin(account.username, account.password) ? 'Welcome!': 'Please try again';
        alert(resString);*/
        
        manipulationObj.checkLogin(account.username, account.password, props.setTokenValue, props.setNowLogin);

        //clear input form
        setAccount({ username: "", password: "" })

        //window.location.href='/privateData';
    }

    return (
        <div className={Styles.loginpage}>
            <h1> Welcome to our website </h1>
            { !props.nowLogin && <div className={Styles.inputform}>
                <img src={frogy}></img>
                <br/>
                <div className={Styles.form}>
                    <form onSubmit={handleSubmit}>
                        <label for='username'>Username</label>
                        <input type='text' 
                               id='username' 
                               value={account.username}
                               onChange={handleUsername}/>
                        <br/>
                        <label for='password'>Password</label>
                        <input type='password' 
                               id='password' 
                               value={account.password}
                               onChange={handlePassword}/>
                        <br/>
                        <div className={Styles.submitbutton}>
                            <input className={Styles.btn} type="submit" value="Login" />
                        </div> 
                    </form>
                </div>
            </div>}
            {/* <h2>{props.nowLogin && 'Welcome !'}</h2> */}
        </div>
    )
}

export default Login