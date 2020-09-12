import React, { Component } from 'react'
import Styles from './Home.module.css'
import Card1 from '../ReuseFunction/Card1'
import Card2 from '../ReuseFunction/Card2'
import frogy from '../Images/frogy.jpg'

class Home extends Component {
    render() {
        return (
            <div className={Styles.home}>
                <div className={Styles.headline1}>
                    <h2>เทรนตอนนี้</h2>
                    <div className={Styles.frame}>
                        <div className={Styles.frame1}>

                        </div>
                        <div className={Styles.frame2}>
                            <div className={Styles.frame3}>

                            </div>
                            <div className={Styles.frame4}>
                                <div className={Styles.frame5}>
                            
                                </div>
                                <div className={Styles.frame6}>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.headline2}>
                    <h2>เทคโนโลยี</h2>
                    <div style={{display:"flex"}}>
                        <Card1 img={frogy} title="fjvrdjcnhkdvc fnredjvscn" date="19-02-9287"/>
                        <div >
                            <Card2 img={frogy} title="cfjdnvuhcnrf" date="90-98-4567"/>
                            <Card2 img={frogy} title="cfjdnvuhcnrf" date="90-98-4567"/>
                            <Card2 img={frogy} title="cfjdnvuhcnrf" date="90-98-4567"/>
                        </div>
                    </div>
                    
                </div>
                <div className={Styles.headline2}>
                    <h2>วงการเกมส์</h2>
                    <div style={{display:"flex"}}>
                        <Card1 img={frogy} title="fjvrdjcnhkdvc fnredjvscn" date="19-02-9287"/>
                        <div >
                            <Card2 img={frogy} title="cfjdnvuhcnrf" date="90-98-4567"/>
                            <Card2 img={frogy} title="cfjdnvuhcnrf" date="90-98-4567"/>
                            <Card2 img={frogy} title="cfjdnvuhcnrf" date="90-98-4567"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
