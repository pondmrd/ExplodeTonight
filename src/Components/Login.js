import React, { Component } from 'react'
import Styles from './Login.module.css'
import frogy from '../Images/frogy.jpg'

function Login(){
    return (
        <div>
            <h1> Welcome </h1>
            <div className={Styles.inputform}>
                <img src={frogy}></img>
                <br/>
                <label for='username'>Username</label>
                <input type='text' id='username' />
                <br/>
                <label for='password'>Password</label>
                <input type='text' id='password' />
                <br/>
                <input type="submit" value="Login"></input>
            </div>
        </div>
    )
}

export default Login