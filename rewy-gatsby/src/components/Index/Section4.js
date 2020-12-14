import React from 'react'
import {Link} from 'gatsby'
import forbes from "../../assets/images/home/Forbes.svg"
import coindesk from "../../assets/images/home/coindesk.svg"
import fortune from "../../assets/images/home/fortune_logo.png"

const Section4 = () => {
    return (
        <section style={{marginTop: "70px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <div className="nexo">
                            </div>

                            <p>"API is one of the major reasons we chose BitGo, since the scale of our business and the thousands of transactions we process each week can only be facilitated in an automated manner via a robust API solution."</p>
                            
                            <p><b>Antoni Trenchev</b>&nbsp;·&nbsp; Co-Founder and Managing Partner, Nexo</p>
                            
                            <Link to="/" className="view-details-btn">
                                Read Case Study &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>

                <div className="bt b--border" style={{marginBottom: "70px"}}></div>

                <div className="row">

                    <div className="col-lg-12 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                NEWSROOM
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                        <h2>In The News</h2>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="single-solutions-box" style={{backgroundColor: "rgb(0, 0, 0)"}}>
                            <img src={forbes} style={{height: "35px", marginBottom: "20px"}}/>

                            <p style={{color: "white"}}>"Bitcoin Custody Giant BitGo Launches Institutional Trading Service"</p>
                            <p style={{color: "white",  opacity: "0.6"}}>May 27, 2020</p>

                            <Link to="/" style={{color: "#189ddf"}}>
                                See Article &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="single-solutions-box" style={{backgroundColor: "rgb(22, 31, 54)"}}>
                            <img src={coindesk} style={{height: "35px", marginBottom: "20px"}}/>

                            <p style={{color: "white"}}>"BitGo Now Providing Custody for India’s Largest Crypto Exchange"</p>
                            <p style={{color: "white", opacity: "0.6"}}>May 15, 2020</p>

                            <Link to="/" style={{color: "#189ddf"}}>
                                See Article &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="single-solutions-box">
                            <img src={fortune} style={{height: "35px", marginBottom: "20px"}}/>

                            <p>"BitGo buys portfolio service Lumina in bid to bulk up crypto offerings"</p>
                            <p style={{opacity: "0.6"}}>April 16, 2020</p>

                            <Link to="/" style={{color: "#189ddf"}}>
                                See Article &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4