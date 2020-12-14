import React from 'react'

const Section3 = () => {
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
                                STRICT POLICIES AND PROCEDURES
                            </span>

                            <h2>SOC 2 Type 2</h2>
                            <p>BitGo Inc. has successfully completed a SOC 2 Type 2 audit for its hot wallet platform. We are committed to securely managing your data and protecting both the interests of your organization and the privacy of your clients. BitGo has established and follows strict policies and procedures encompassing information security, processing, integrity, and confidentiality to provide the highest quality solutions and the safest, most secure environment for your sensitive data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3