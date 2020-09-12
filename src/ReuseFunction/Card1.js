import React from 'react'
import Styles from './Card1.module.css'

function Card1(props) {
    
    return (
        <div className={Styles.card}>
            <img className={Styles.cardImage} src={props.img}/>
            <div className={Styles.cardText}>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
            </div>
        </div>
    )
};

export default Card1;
