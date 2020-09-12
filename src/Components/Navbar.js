import React, { Component } from 'react'
import Styles from './Navbar.module.css'
import logo from '../Images/frogy.jpg'

class Navbar extends Component {
    render() {
        return (
            <div className={Styles.navbar}>
                <div className={Styles.logo}>
                    <img src={logo}/>
                </div>
                <div className={Styles.menus}>
                    <a className="active" href="#home">หน้าแรก</a>
                    <a href="#news">ข่าวสาร</a>
                    <a href="#contact">เกมส์</a>
                    <a href="#about">รู้จักกับเรา</a>
                </div>
            </div>
        )
    }
}

export default Navbar
