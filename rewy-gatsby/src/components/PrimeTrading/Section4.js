import React from 'react'
import coverage_image from '../../assets/images/prime-trading/dedicated-coverage.png'

const Section4 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="single-gallery-item">
                            <img src={coverage_image} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title" style={{marginTop: "7rem"}}>
                            <span className="sub-title">
                                RELATIONSHIP-BASED TRADING
                            </span>

                            <h2>Dedicated account coverage</h2>
                            <p>Built from the ground up by Wall Street veterans, our dedicated and experienced client service team delivers BitGo Prime’s full range of capabilities from initial onboarding to day-to-day service coverage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4