import React from 'react'
import {Link} from 'gatsby'
import client_key_image from '../../assets/images/service-providers/client-key.svg'
import backup_key_image from '../../assets/images/service-providers/backup-key.svg'
import cold_storage_image from '../../assets/images/service-providers/cold-storage.svg'
import key_image from '../../assets/images/service-providers/key.svg'

const Section1 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                SECURITY WITH CUSTOMIZABLE POLICY FEATURES
                            </span>

                            <h2>Security designed to fit your needs</h2>
                            <p>BitGo offers flexible wallet security and transaction policy features to address a range of business needs. Protect your wallet against any single point of failure with BitGo's multi-signature security and 3-key management. Enforce controls and policies using whitelists, velocity limits, and administrative approvals.</p>
                            <Link to="/wallet-platform" className="view-details-btn">
                                Learn about Wallet Platform &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <div className="center flex items-center css-q34xfi">
                            <div className="flex-shrink-1 pr4">
                                <div className="mb4 relative">
                                    <img src={client_key_image}
                                         className="l-marketingIcon l-marketingIcon--clear mb2" />
                                    <div className="absolute wallet-platform-schema1"></div>
                                    <div className="f5-l fw6 lh-title mb2">Client Key</div>
                                    <div className="f7 lh-copy silver">Generated and stored by client. Used to initiate all interactions.</div>
                                </div>
                                 <div className="relative">
                                    <img src={backup_key_image} />
                                    <div className="absolute wallet-platform-schema2"></div>
                                    <div className="f5-l fw6 lh-title mb2">Backup Key</div>
                                    <div className="f7 lh-copy silver">Generated offline and stored offline by client for disaster recovery.</div>
                                </div>
                            </div>
                            <div className="flex-shrink-0 relative">
                                <div className="absolute wallet-platform-schema3"></div>
                                <div className="absolute wallet-platform-schema4"></div>
                                <img src={cold_storage_image}
                                    className="l-marketingIcon l-marketingIcon--clear mb2" />
                            </div>
                            <div className="flex-shrink-1 pl5 relative css-1m6sqhh">
                                <img src={key_image}
                                    className="l-marketingIcon l-marketingIcon--clear mb2" />
                                <div className="f5-l fw6 lh-title mb2">Bitgo Key</div>
                                <div className="f7 lh-copy silver">Used to co-sign all transactions only after policy controls have been met.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1