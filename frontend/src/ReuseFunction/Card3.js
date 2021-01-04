import React from 'react'
import Styles from './Card3.module.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function Card3(props) {
    return (
        
        <div className={Styles.container}>
            <img src={props.img}/>
            <div className={Styles.text}>
                
                <div className={Styles.title} style={{fontSize: props.fontSizeTitle}}>
                    {props.title}
                </div>
                
                <div className={Styles.time} style={{fontSize: props.fontSizeTime}}>
                    {props.time}
                </div>
            </div>
           
        </div>
        
    )
}

export default Card3
