import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'

const Banner = () => {
    return (
        <div className="relative flex flex-column css-4x13yv">
            <div className="it-services-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>PRIME TRADING</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h2>Trade digital assets from insured cold storage</h2>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>BitGo Prime Trading combines access to liquidity with best-in-class security while connecting to multiple liquidity venues and allowing clients to trade directly and anonymously from the safety of insured, cold storage.</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <div className="btn-box">
                                        <Link to="/connect-with-us"  className="btn"
                                            style={{marginBottom: "15px", backgroundColor: "#189ddf", color: "white"}}>
                                            <b>Connect With Us</b>
                                        </Link>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner