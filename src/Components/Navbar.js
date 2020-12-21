import React, { Component } from 'react'
import Styles from './Navbar.module.css'
import logo from '../Images/frogy.jpg'
import {Link, BrowserRouter as Router} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            
            <div className={Styles.navbar}>
                <div className={Styles.head1}>
                    <h1><i>Explode Tonight</i></h1>
                    <div>
                        <p> Login</p>
                        <p> Register</p>
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
