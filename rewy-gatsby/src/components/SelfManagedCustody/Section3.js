import React from 'react'
import storage_image from '../../assets/images/self-managed-custody/cold-storage.svg'
import wallet_image from '../../assets/images/self-managed-custody/wallet.svg'

const Section3 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                CUSTOMIZABLE BUSINESS POLICIES
                            </span>

                            <h2>Balance Security with Utility</h2>
                            <p>Design a process that allows for secure and seamless movement of assets between cold, warm, and hot wallets. Set policies to require multiple approvals when moving assets out of cold storage, and reduce risk by whitelisting wallet addresses for sending, setting spending limits per approver, and introducing limits on token velocity. Wallets can also be configured to limit access on a need-to-know basis by defining organizational roles.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="flex relative center css-b5wsk5">
                            <div>
                                <div className="ma3 css-18xu2j3"></div>
                                <div className="ma3">
                                    <img className="l-marketingIcon mb2" src={storage_image} />
                                    <div className="f5-l fw6 lh-title">
                                        Self-managed<br/>cold storage
                                    </div>
                                </div>
                                <div className="ma3 css-16yky74"></div>
                            </div>
                            <div>
                                <div className="ma3">
                                    <img className="l-marketingIcon mb2" src={wallet_image} />
                                    <div className="f5-l fw6 lh-title">
                                        Warm Wallet
                                    </div>
                                </div>
                                <div className="ma3 css-get8mk"></div>
                                <div className="ma3">
                                    <img className="l-marketingIcon mb2" src={wallet_image} />
                                    <div className="f5-l fw6 lh-title">
                                        Hot Wallet
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center mt2">
                                    <div className="css-1hq41hl"></div>
                                    <div className="f5-l fw6 lh-title ma3 silver">
                                        Deposits
                                    </div>
                                </div>
                                <div className="css-1gnsnpc"></div>
                                <div className="flex items-center mt2">
                                    <div className="css-1hq41hl"></div>
                                    <div className="f5-l fw6 lh-title ma3 silver">
                                        Withdrawals
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

export default Section3