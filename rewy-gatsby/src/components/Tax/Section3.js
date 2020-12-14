import React from 'react'
import settings_image from '../../assets/images/tax/settings.png'

const Section3 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="single-gallery-item">
                            <img src={settings_image} />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title" style={{marginTop: "5rem"}}>
                            <span className="sub-title">
                                MORE KNOWLEDGE, BETTER CONTROL
                            </span>

                            <h2>Audit, Compliance, and Tax Reporting</h2>
                            <p>BitGo Tax enables clients to convert historical transaction data into export-ready audit, compliance, and tax reports. A realized report provides easy access to all taxable events within a portfolio and tax lot reports can be leveraged to support a spectrum of tax-efficiency strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3