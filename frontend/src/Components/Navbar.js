import React, { Component } from 'react'
import Styles from './Navbar.module.css'
import logo from '../Images/frogy.jpg'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'

const toLogin = () =>{
    return window.location.href='/login';
}

const testAxios = () =>{
    axios.get('http://localhost:3030/')
    .then(res =>{
        console.log(res.data);
    })
    .catch(err =>{
        console.log(err);
    });
}

const testAxios2 = () => {
    axios.get('http://localhost:3030/api/posts/getAllPosts', 
        {
            'headers': {
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmVmZWY3Y2E2NTk2NTQ1MTBjYTg5ZDkiLCJpYXQiOjE2MDk1NzI1OTN9.OLn6DCx8hlc00_ob_HzKAJvwIXf3goBJsZlsf3Uk4vM"
            }
        }
    )
    .then(res =>{
        console.log(res.data[0].Firstname);
    })
    .catch(err =>{
        console.log(err);
    });
}

class Navbar extends Component {
    render() {
        return (
            
            <div className={Styles.navbar}>
                <div className={Styles.head1}>
                    <h1 style={{border:"solid black 3px"}}><i>Explode Tonight</i></h1>
                    <div>
                        {/* <Link to='/login'>Login</Link> */}
                        <p onClick={toLogin}> Login</p>
                        <p onClick={testAxios2}> Register</p>
                    </div>
                    
                    
                </div>
                <div className={Styles.head2}>
                    <div className={Styles.menus}>
                        <Link exact to='/'>หน้าแรก</Link>
                        <Link to='/news'>ข่าวสาร</Link>
                        <Link to='/games'>เกมส์</Link>
                        <Link to='/aboutme'>รู้จักกับเรา</Link>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default Navbar
