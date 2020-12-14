import React from 'react'
import tax_lots_image from '../../assets/images/tax/tax-lots.png'
import open_tax_lot_image from '../../assets/images/tax/open-tax-lot.png'

const Section4 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                                MANAGED TAX LOTS
                            </span>

                            <h2>Manage tax lots in real time</h2>
                            <p>BitGo Tax supports multiple tax lot identification methods including FIFO, LIFO, Highest Cost, Lowest Cost and Average Cost. Each method can be applied either across all connected wallets, exchanges, and service providers, or on a per account basis—providing true control around how tax lots are opened and closed within a portfolio. A detailed tax lot view provides insight into which specific lots are being opened or closed at an individual transaction level and offers the ability to navigate between transactions that are connected via tax lots.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="single-gallery-item">
                            <img src={tax_lots_image} />

                            <img src={open_tax_lot_image} className="absolute shadow-3 br2" style={{bottom: "110px", right: "0px", maxHeight: "150px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4