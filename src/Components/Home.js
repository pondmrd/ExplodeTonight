import React, { Component } from 'react'
import Styles from './Home.module.css'
import Card1 from '../ReuseFunction/Card1'
import Card2 from '../ReuseFunction/Card2'
import frogy from '../Images/frogy.jpg'
import Card3 from '../ReuseFunction/Card3'

class Home extends Component {
    render() {
        return (
            <div className={Styles.home}>
                <div className={Styles.headline1}>
                    <h2>เทรนตอนนี้</h2>
                    <div className={Styles.frame}>
                        <div className={Styles.frame1}>
                            <Card3 img={frogy} title="hurerdbcghvrdcxnjredcxs" 
                                time="19h ago" height="400px" fontSizeTitle="2.5vw" fontSizeTime="1.5vw"/>
                        </div>
                        <div className={Styles.frame2}>
                            <div className={Styles.frame3}>
                                <Card3 img={frogy} title="hurerdbcghvrdcxnjredcxs" 
                                    time="19h ago" height="200px" width="500px" fontSizeTitle="1.5vw" fontSizeTime="1vw"/>
                            </div>
                            <div className={Styles.frame4}>
                                <div className={Styles.frame5}>
                                    <Card3 img={frogy} title="hurerdbcghvrdcxnjredcxs" 
                                        time="19h ago" height="195px" width="250px" fontSizeTitle="1.3vw" fontSizeTime="1vw"/>
                                </div>
                                <div className={Styles.frame6}>
                                    <Card3 img={frogy} title="hurerdbcghvrdcxnjredcxs" 
                                        time="19h ago" height="195px" width="250px" fontSizeTitle="1.3vw" fontSizeTime="1vw"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className={Styles.bodyleft}>
                        <div className={Styles.headline2}>
                            <h2>เทคโนโลยี</h2>
                            <div style={{display:"flex"}}>
                                <Card1 img={frogy} title="fjvrdjcnhkdvc fnredjvscn" date="19-02-9287"/>
                                <div>
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
                    <div className={Styles.bodyright}>
                        <div className={Styles.category}>
                            <h2>Category</h2>
                        </div>
                        <div className={Styles.followUs}>
                            <h2>Follow Us on:</h2>
                        </div>
                        <div className={Styles.recentPost}>
                            <h2>Recent Post</h2>
                        </div>
                        <div className={Styles.calendar}>
                            <h2>Calendar</h2>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home
