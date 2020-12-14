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
                                BITGO STAKING
                            </span>

                            <h2>Earn income from assets in cold storage</h2>
                            <p>Generate passive income while keeping digital assets in insured cold storage. Best-in-class security architecture means each node runs on its own virtual machine and no client keys go online—ensuring seamless integration with BitGo Qualified Custody. Insurance provides protection for custodial assets for up to $100 million.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3