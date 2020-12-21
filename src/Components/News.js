import React, { Component } from 'react'
import datas from './data.js'
import frogy from '../Images/frogy.jpg'
import Styles from './News.module.css'
import {Link} from 'react-router-dom'

class News extends Component {
    render() {
        return (
            <div>
                {datas.map((data) => 
                    <Link to ={data.link}>
                        <div className={Styles.table}>
                            <img src={frogy}/>
                            <h2 className={Styles.title}>{data.title}</h2>
                            <p>{data.date}</p>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}

const Newss = (title, date) => 
    <div>
        <img src={frogy}/>
        <h1>{title}</h1>
        <p>{date}</p>
    </div>

export default News
