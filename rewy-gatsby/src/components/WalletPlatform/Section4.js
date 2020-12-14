import React from 'react'
import {Link} from 'gatsby'

const Section4 = () => {
    return (
        <section style={{marginTop: "70px"}}>
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                            REGULATED CUSTODIAL, NON-CUSTODIAL, AND WALLET SOLUTIONS
                            </span>
                        </div>

                        <h2>Hot and Cold Wallet Solutions</h2>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="single-solutions-box">
                            <h6>
                                Bitgo Custody
                            </h6>
                            <p>The only qualified custodian purpose-built for digital assets</p>
                            
                            <div className="bt b--border" style={{marginBottom: "2rem", marginTop: "2rem"}}></div>

                            <h6>
                                Cold storage & hot wallet access via the web and API
                            </h6>
                            <h6>
                                $1 million USD minimum account value
                            </h6>
                            <h6>
                                300+ coins and tokens supported
                            </h6>
                            <h6>
                                24/7 global customer support
                            </h6>
                        
                            <div className="bt b--border" style={{marginBottom: "2rem", marginTop: "2rem"}}></div>

                            <p>
                                Assets covered by BitGo’s $100M policy
                            </p>
                            <p>
                                Ability to purchase Excess Specie coverage
                            </p>
                            <p>
                                Hold assets with qualified custodian BitGo Trust Company, read more here
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="single-solutions-box">
                            <h6>
                                BitGo Business Wallet
                            </h6>
                            <p>The only institutional-grade, multi-signature, multi-coin transactional wallet</p>
                            
                            <div className="bt b--border" style={{marginBottom: "2rem", marginTop: "2rem"}}></div>

                            <h6>
                                Hot wallet access via the web and API
                            </h6>
                            <h6>
                                $1 million USD minimum monthly transaction volume
                            </h6>
                            <h6>
                                300+ coins and tokens supported
                            </h6>
                            <h6>
                                24/7 global customer support
                            </h6>
                        
                            <div className="bt b--border" style={{marginBottom: "2rem", marginTop: "2rem"}}></div>

                            <p>
                                Variable fee based on transaction volume
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="single-solutions-box height">
                            <h6>
                                BitGo Pay As You Go
                            </h6>
                            <p>The leading multi-signature hot wallet for individuals</p>
                            
                            <div className="bt b--border" style={{marginBottom: "2rem", marginTop: "2rem"}}></div>

                            <h6>
                                Hot wallet access via the web and API
                            </h6>
                            <h6>
                                No contract
                            </h6>
                            <h6>
                                Bitcoin, Bitcoin Cash, Bitcoin Gold, Litecoin, Zcash, Stellar, and Dash support only
                            </h6>
                            <h6>
                                Email support only
                            </h6>
                        
                            <div className="bt b--border" style={{marginBottom: "2rem", marginTop: "2rem"}}></div>

                            <p>
                                0.25% per withdrawal (1% for Bitcoin Gold)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bt b--border" style={{marginBottom: "70px"}}></div>

                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <div className="coinjar">
                            </div>

                            <p>"Our mission has always been to make it as simple as possible to buy and sell cryptocurrency, while also being an industry leader in security, reliability and custody. BitGo is essential to achieving these goals."</p>
                            
                            <p><b>Jordan Michaelides</b>&nbsp;·&nbsp; Head of Partnerships, CoinJar</p>
                            
                            <Link to="/" className="view-details-btn">
                                Read Case Study &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Section4