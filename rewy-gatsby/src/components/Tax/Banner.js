import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'

const Banner = () => {
    return (
        <div className="relative flex flex-column bb b--border b-heroIndex">
            <div className="it-services-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>TAX</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h2>Institutional digital asset tax reporting</h2>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>BitGo Tax allows institutional clients to confidently track and understand the performance and returns of their digital asset portfolio. The solution, which is fully integrated with BitGo Portfolio, calculates cost basis, realized gains/losses, and tax lots across a full historical dataset of integrated wallets, exchanges, and digital asset service providers.</p>
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