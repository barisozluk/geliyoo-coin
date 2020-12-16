import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'

const Banner = () => {
    return (
        <div className="relative flex flex-column css-4x13yv">
            <div className="it-services-banner institutional-investors">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p style={{color: "hsla(0,0%,100%,.9)"}}>INSTITUTIONAL INVESTORS</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h2 style={{color: "white"}}>The complete institutional platform for digital asset investors</h2>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p style={{color: "hsla(0,0%,100%,.9)"}}>Integrated liquidity, lending, and custody—purpose-built for institutional investors. BitGo’s solutions combine enhanced asset protection with operational ease and efficiency. Your assets are insured and stored at BitGo Trust Company, our regulated entity, and protected by BitGo’s multi-signature security.</p>
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