import React from 'react'
import trade_integrated_image from '../../assets/images/prime-trading/trade-integrated.png'

const Section3 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title" style={{marginTop: "2rem"}}>
                            <span className="sub-title">
                                A CONNECTED EXPERIENCE
                            </span>

                            <h2>Fully integrated experience</h2>
                            <p>BitGo Prime is fully integrated with our institutional-grade custody, portfolio management, and tax solutions—creating a connected, front-to-back user experience. Clients can gain insight into execution-level details and track cost basis, realized gains/losses, and tax lots in real-time.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="single-gallery-item">
                            <img src={trade_integrated_image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3