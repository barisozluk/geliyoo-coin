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
                                SUPPORTED ASSETS AND PROVIDERS
                            </span>

                            <h2>Support for the assets you care about</h2>
                            <p>BitGo supports a wide variety of digital assets across our entire platform through custody, Prime, trade, and portfolio & tax.</p>
                        
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