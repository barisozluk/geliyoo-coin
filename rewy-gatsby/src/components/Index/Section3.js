import React from 'react'
import {Link} from 'gatsby'

const Section3 = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-fbfbfb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">

                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                INTEGRATIONS BREATH
                            </span>

                            <h2>Support for the providers you already use</h2>
                            <p>No matter what exchanges, OTC desks, or brokers you use for trade or what custodial services or wallets you use for custody, BitGo ingests and resolves your present and historical transactions automatically to unlock holistic views across performance, positions, and tax.</p>
                        
                            <Link to="/" className="view-details-btn">
                                All Integrations &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3