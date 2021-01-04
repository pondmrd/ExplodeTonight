import React, { Component } from 'react'
import Styles from './Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <div className={Styles.footer}>
                <div className={Styles.footer1}>
                    <div className={Styles.category}>
                        <h3>category</h3>
                    </div>
                    <div className={Styles.information}>
                        <h3>information</h3>
                    </div>
                    <div className={Styles.tag}>
                        <h3>tag</h3>
                    </div>
                </div>
                
                <div className={Styles.footer2}>
                    <h1>Explodetonight <span style={teams}>@copyright</span></h1>
                </div>
            </div>
        )
    }
}

const teams = {
    fontSize:"15px",
}
export default Footer
