import React from 'react'
import {Link} from 'gatsby'

const Section2 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                PROTECT YOUR ASSETS
                            </span>

                            <h2>BitGo Insurance</h2>
                            <p>Assets held in BitGo’s qualified custody at BitGo Trust are covered by BitGo’s $100 million policy when all private keys are held by BitGo Trust or BitGo, Inc.</p>
                        </div>

                        <div className="pa5-l white bg-blue">
                                <h6>Assets are covered in the event of:</h6>

                                <ul className="ml3 pl1 mv3">
                                    <li>Third-party hacks of cold-storage environment</li>
                                    <li>Copying or theft of private keys</li>
                                    <li>Dishonest acts by BitGo employees</li>
                                    <li>Loss of key material due to natural disasters</li>
                                </ul>

                                Clients also have the option to purchase additional excess insurance up to $500 million to supplement BitGo’s $100 million policy.
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                FIRST OF ITS KIND
                            </span>

                            <h2>Security meets liquidity</h2>
                            <p>Sourcing from a deep pool of liquidity across a number of leading exchanges and market makers, BitGo Prime trades on a riskless principal basis, providing liquidity to clients directly on a non-disclosed basis.</p>

                            <Link to="/prime-trading" className="view-details-btn">
                                Learn about Prime Trading &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2