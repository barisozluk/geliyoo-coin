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
                                    <p>PORTFOLIO MANAGEMENT</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h2>Better insights, better decisions</h2>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>View and manage your entire digital asset portfolio across top exchanges, blockchain wallets, and service providers—all in one place.</p>
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