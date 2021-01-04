import React, { Component } from 'react'
import Styles from './Content.module.css'
import lineIcon from '../Images/line-icon.png'
import facebookIcon from '../Images/facebook-icon.png'


class Content extends Component {
    render() {
        return (
            <div className={Styles.content}>
                <div className={Styles.header}>
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.desc}</h3>
                    <hr/>
                    <p>by Explode admin on {this.props.date}</p>
                </div>
                <div className={Styles.row_icon}>
                    <div className={Styles.col_icon}>
                        <img src={lineIcon} alt="line"/>
                    </div>
                    <div className={Styles.col_icon}>
                        <img src={facebookIcon} alt="facebook"/>
                    </div>
                </div>
                <div className={Styles.story}>
                    <div>
                        {this.props.story}
                    </div>
                    <div>
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default Content
