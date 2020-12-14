import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'

const Banner = () => {
    return (
        <div className="relative flex flex-column bb b--border b-heroIndex">
            <div className="it-services-banner qualified-custody">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p style={{color: "hsla(0,0%,100%,.9)"}}>QUALIFIED CUSTODY</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h2 style={{color: "white"}}>The world’s most secure and compliant digital asset custody solution</h2>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p style={{color: "hsla(0,0%,100%,.9)"}}>Regulated investors need regulated partners. Built on BitGo’s pioneering multi-signature security, BitGo Custody is purpose-built for institutions demanding the highest-level of security and compliance for their digital assets.</p>
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