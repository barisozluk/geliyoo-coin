                        
import React from 'react'
import {Link} from 'gatsby'

const Section = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 pv6-l mb4">
                        <span className="sub-title">
                            100 MILLION USD COVERAGE FOR DIGITAL ASSETS
                        </span>
                        <h2>Digital Asset Insurance</h2>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-4 col-sm-12 mb4">
                        <div className="single-solutions-box b--blue">
                            <div className="f7 fw6 mb3-l">
                                Amount of Coverage
                            </div>
                            <h5 className="mb4">
                                100 Million USD
                            </h5>
                            <div className="f6-l lh-copy black-70">
                                For digital assets with option to purchase additional excess insurance up to $500 million to supplement BitGo’s $100 million policy.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb4">
                        <div className="single-solutions-box b--blue">
                            <div className="f7 fw6 mb3-l">
                                Insurance provided by
                            </div>
                            <h5 className="mb4">
                                Lloyd’s Syndicate
                            </h5>
                            <div className="f6-l lh-copy black-70">
                                A syndicate of Insurers in the Lloyd's of London and European Marketplace. Certificates of Insurance evidencing coverage are available upon request.
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb4">
                        <div className="single-solutions-box b--blue">
                            <div className="f7 fw6 mb3-l">
                                ICost of insurance
                            </div>
                            <h5 className="mb4">
                                None
                            </h5>
                            <div className="f6-l lh-copy black-70">
                                There is no additional cost to BitGo Trust Company or BitGo, Inc. clients. BitGo will pay any and all deductibles.
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h5>What is covered?</h5>
                        <p>The $100 million policy covers digital assets where the private keys are held 100% by BitGo Trust Company or BitGo, Inc. in the event of:</p>
                        <ul>
                            <li>
                                <p>Third-party hacks, copying, or theft of private keys</p>
                            </li>
                            <li>
                                <p>Insider theft or dishonest acts by BitGo employees or executives</p>
                            </li>
                            <li>
                                <p>Loss of keys</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h5>BitGo Security Architecture Limits Risk</h5>
                        <p>Our security architecture is engineered in a manner that is intended to prevent a breach affecting more than one wallet.</p>
                        <ul>
                            <li>
                                <p>BitGo maintains segregated wallets for each client.</p>
                            </li>
                            <li>
                                <p>Each wallet is multi-signature with keys that are secured offline in purpose-built, Class III bank vaults.</p>
                            </li>
                            <li>
                                <p>The keys inside these vaults require multiple users to access them.</p>
                            </li>
                            <li>
                                <p>Signing a transaction is a rigorous and carefully scrutinized process that takes 24 to 48 hours because of the policy and process checks.</p>
                            </li>
                            <li>
                                <p>BitGo Trust Company has policies and procedures for changing personnel, restoring systems in the event of local failures, as well as strong audit logging and access controls.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h5>In the event of a theft or direct loss of property, how would an insurance payout be distributed?</h5>
                        <p>BitGo will make best efforts to distribute insurance recoveries across all clients who have suffered losses. In the event that total losses exceed insurance recoveries this does not change BitGo’s legal obligations outlined in customer agreements.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h5>Additional Insurance Options</h5>
                        <p>BitGo is collaborating with insurance broker Woodruff Sawyer to help clients that are interested in purchasing their own additional insurance. BitGo Business Wallet clients will be able to purchase key recovery service (KRS) insurance and additional insurance for their self-custody keys through third-party company Digital Asset Services.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h5>Want more details on insurance?</h5>
                        <p>Insurance for digital assets is complicated. Download our white paper for information on the type of insurance coverage offered, what is covered by the insurance, and how to evaluate a custodian's insurance coverage.</p>
                        <div className="btn-box">
                            <Link to="http://pages.bitgo.info/rs/978-TPI-136/images/Insurance%20Whitepaper.pdf"  className="btn"
                                style={{marginBottom: "15px", backgroundColor: "#189ddf", color: "white"}}>
                                <b>Download White Paper</b>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12">
                        <h5>Questions you should ask any custodian that claims to be "insured"</h5>
                        <ul>
                            <li>
                                <p>What is the aggregate limit of the relevant policy carried by the custodian?</p>
                            </li>
                            <li>
                                <p>Are client wallets segregated?</p>
                            </li>
                            <li>
                                <p>Who are the insurers underwriting the policy? What are the AM Best ratings of carriers backing the policy(s)?</p>
                            </li>
                            <li>
                                <p>Does the policy cover theft of digital assets?</p>
                            </li>
                            <li>
                                <p>Does the policy cover loss/destruction of private keys caused by natural disasters? (Fire, lightning, smoke, windstorm, hail, riot, civil commotion, aircraft, vehicles, vandalism, sprinkler leakage, sinkhole collapse, volcanic action, falling objects, weight of snow, ice or sleet; water damage, flood, and earthquake)</p>
                            </li>
                            <li>
                                <p>Does the policy cover insider theft? Insider theft by executives?</p>
                            </li>
                            <li>
                                <p>Is the coverage for cold wallets, hot wallets, both, or neither?</p>
                            </li>
                            <li>
                                <p>What legal entities are covered by the insurance policy? Does this match the legal entity for which the customer has entered into a service agreement?</p>
                            </li>
                            <li>
                                <p>Does the custodian or exchange allow you to purchase additional insurance of your own?</p>
                            </li>
                            <li>
                                <p>Does the custodian’s policy employ “coinsurance” or “self-insurance” in addition to the per loss deductible? What is the amount of the deductible? What is the percentage of co-insurance?</p>
                            </li>
                            <li>
                                <p>Does it cover insider theft? Insider theft by executives?</p>
                            </li>
                            <li>
                                <p>Is the coverage for cold wallets, hot wallets, both, neither?</p>
                            </li>
                            <li>
                                <p>What legal entities are covered by the insurance policy? Does this match legal entity for which customer has entered into a service agreement?</p>
                            </li>
                            <li>
                                <p>Does the custodian or exchange allow you to purchase additional insurance of your own?</p>
                            </li>
                            <li>
                                <p>Does the custodian’s policy employ “coinsurance” or “self-insurance” in addition to the per loss deductible? What is the amount of the deductible? What is percentage of co-insurance?</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Section