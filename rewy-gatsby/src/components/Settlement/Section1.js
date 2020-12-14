import React from 'react'
import arrow_image from '../../assets/images/settlement/arrow.svg'

const Section1 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                SECURELY SETTLE WITHIN THE BITGO NETWORK
                            </span>

                            <h2>Settle with trusted partners</h2>
                            <p>Having onboarded and secured funds from OTC desks, exchanges, hedge funds, broker-dealers, lenders, payment processors, and security token issuers under the regulated entity BitGo Trust Company, participants can choose their counterparties and check trading limit pre-trade, and customize fund-locking options like limit and duration.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="tc">
                            <div className="flex mb3-l">
                                <div className="flex flex-column justify-between">
                                    <div className="pa3 ba b--border mh2 mb3-l">
                                        <div className="f6 fw6 lh-title black-70">
                                            OTCs
                                        </div>
                                    </div>
                                    <img className="l-marketingIcon" src={arrow_image} />
                                </div>
                                <div className="flex flex-column justify-between">
                                    <div className="pa3 ba b--border mh2 mb3-l">
                                        <div className="f6 fw6 lh-title black-70">
                                            Single Dealer Platforms
                                        </div>
                                    </div>
                                    <img className="l-marketingIcon" src={arrow_image} />
                                </div>
                                <div className="flex flex-column justify-between">
                                    <div className="pa3 ba b--border mh2 mb3-l">
                                        <div className="f6 fw6 lh-title black-70">
                                            Exchanges
                                        </div>
                                    </div>
                                    <img className="l-marketingIcon" src={arrow_image} />
                                </div>
                                <div className="flex flex-column justify-between">
                                    <div className="pa3 ba b--border mh2 mb3-l">
                                        <div className="f6 fw6 lh-title black-70">
                                            Smart Order Routing
                                        </div>
                                    </div>
                                    <img className="l-marketingIcon" src={arrow_image} />
                                </div>
                                <div className="flex flex-column justify-between">
                                    <div className="pa3 ba b--border mh2 mb3-l">
                                        <div className="f6 fw6 lh-title black-70">
                                            3rd Party Platform (OMS/EMS)
                                        </div>
                                    </div>
                                    <img className="l-marketingIcon" src={arrow_image} />
                                </div>
                                <div className="flex flex-column justify-between">
                                    <div className="pa3 ba b--border mh2 mb3-l">
                                        <div className="f6 fw6 lh-title black-70">
                                            Asset Managers
                                        </div>
                                    </div>
                                    <img className="l-marketingIcon" src={arrow_image} />
                                </div>
                            </div>
                            <div className="mb3-l ba b--border pa3">
                                <div className="flex mb3">
                                    <div className="pa3 ba b--border mh2 w-50">
                                        <div className="f6 fw6 lh-title blue">
                                            Settlement REST API
                                        </div>
                                    </div>
                                    <div className="pa3 ba b--border mh2 w-50">
                                        <div className="f6 fw6 lh-title blue">
                                            Web Interface
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-around">
                                    <img className="l-marketingIcon mb3" src={arrow_image}/>
                                    <img className="l-marketingIcon mb3" src={arrow_image}/>
                                </div>
                                <div className="pa3 ba b--border mh2 w-100">
                                    <div className="f6 fw6 lh-title blue">
                                        BitGo Trust - Proprietary digital accounting system
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1