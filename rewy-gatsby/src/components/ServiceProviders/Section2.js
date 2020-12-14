import React from 'react'
import {Link} from 'gatsby'
import procedures_image from '../../assets/images/service-providers/procedures.svg'
import offline_image from '../../assets/images/service-providers/offline.svg'
import cold_storage_image from '../../assets/images/service-providers/cold-storage.svg'
import technology_image from '../../assets/images/service-providers/technology.svg'

const Section2 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="cf nmh4 flex-l">
                            <div className="flex flex-column items-center justify-center mb0-l measure-wide2 center">
                                <div className="cf w-100 items-stretch bb b--border">
                                    <div className="fl w-50 pa4">
                                        <img className="l-marketingIcon mb3-l" src={offline_image} />
                                        <div className="f5-l fw6 lh-title mb2">
                                            Generated and <br/> stored offline
                                        </div>
                                    </div>
                                    <div className="fl w-50 bl b--border pa4">
                                        <img className="l-marketingIcon mb3-l" src={technology_image} />
                                        <div className="f5-l fw6 lh-title mb2">
                                            Multi-signature <br/> technology
                                        </div>
                                    </div>
                                </div>
                                <div className="cf nmh2 w-100 flex items-stretch">
                                    <div className="fl w-50 pa4">
                                        <img className="l-marketingIcon mb3-l" src={procedures_image} />
                                        <div className="f5-l fw6 lh-title mb2">
                                            Stringent procedures
                                        </div>
                                    </div>
                                    <div className="fl w-50 bl b--border pa4">
                                        <img className="l-marketingIcon mb3-l" src={cold_storage_image} />
                                        <div className="f5-l fw6 lh-title mb2">
                                            Safe storage
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                REDUCE RISK
                            </span>
    
                            <h2>State-of-the-Art Security</h2>
                            <p>BitGo cold wallets represent the most secure method of storing digital assets. Private keys are generated offline and are never exposed to an online network, reducing risk. Cold wallets are also secured using BitGo’s pioneering multi-signature technology, eliminating single-point-of-failure risks that accompany single-key systems. Security is further enhanced by stringent procedures around the signing process used to initiate all transactions, as well as the generation and storage of private keys.</p>
                            <Link to="/self-managed-custody" className="view-details-btn">
                                Learn about Self-Managed Custody &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2