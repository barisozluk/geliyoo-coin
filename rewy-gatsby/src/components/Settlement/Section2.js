import React from 'react'
import bitgo_image from '../../assets/images/settlement/bitgo.svg'
import storage_image from '../../assets/images/settlement/cold-storage.svg'

const Section2 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="flex" style={{marginTop: "8rem"}}>
                            <div className="tr mh3">
                                <img className="l-marketingIcon mb2" src={storage_image} />
                                <div className="ttu fw5 lh-title tracked-slight light-silver f7 mb2">
                                    COLD STORAGE
                                </div>
                                <div className="f5-l fw6 lh-title mb2">
                                    Seller
                                </div>
                            </div>
                            <div className="ma3 css-x4lvk2"></div>
                            <div>
                                <img className="mh3 css-1jsohtw" src={bitgo_image} />
                            </div>
                            <div className="ma3 css-x4lvk2"></div>
                            <div className="mh3">
                                <img className="l-marketingIcon mb2" src={storage_image} />
                                <div className="ttu fw5 lh-title tracked-slight light-silver f7 mb2">
                                    COLD STORAGE
                                </div>
                                <div className="f5-l fw6 lh-title mb2">
                                    Buyer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                ASSETS REMAIN IN COLD STORAGE
                            </span>

                            <h2>Efficient and instantaneous settlement</h2>
                            <p>BitGo’s settlement service is managed by BitGo Trust Company, allowing clients to benefit from the security and compliance framework of a regulated trust company. Counterparty risk is minimized by locking funds during settlement and funds are also settled off-chain, reducing operational risk. Clients can connect to BitGo Settlement via API, complemented by a native web interface, maximizing integration flexibility.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2