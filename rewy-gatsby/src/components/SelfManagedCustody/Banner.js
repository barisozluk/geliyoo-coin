import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'

const Banner = () => {
    return (
        <div className="relative flex flex-column bb b--border b-heroIndex">
            <div className="it-services-banner self-managed-custody">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p style={{color: "hsla(0,0%,100%,.9)"}}>SELF-MANAGED CUSTODY</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h2 style={{color: "white"}}>Secure your keys locally</h2>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p style={{color: "hsla(0,0%,100%,.9)"}}>BitGo’s Self-Managed Custody solution was built for firms based in jurisdictions that have a regulatory requirement to manage keys locally in deep cold storage. BitGo Self-Managed Custody is the same technology utilized by BitGo Trust Company, the world’s largest, regulated, and purpose-built digital asset custodian. BitGo provides powerful enterprise-grade features and complete customer control over how and where both client and backup keys are stored and generated.</p>
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