import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'

const Banner = () => {
    return (
        <div className="relative flex flex-column bb b--border b-heroIndex">
            <div className="it-services-banner wallet-platform">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p style={{color: "hsla(0,0%,100%,.9)"}}>WALLET PLATFORM</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h2 style={{color: "white"}}>Securely integrate digital assets into your portfolio</h2>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p style={{color: "hsla(0,0%,100%,.9)"}}>BitGo’s wallet platform creates an ideal balance between security and accessibility—enabling clients to move assets seamlessly and reliably, protected by BitGo’s pioneering multi-signature security, multi-user policy controls, and advanced security configurations. BitGo wallets are accessible via native web interface or API, making them ideal for fully white-labeled wallet applications and products.</p>
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