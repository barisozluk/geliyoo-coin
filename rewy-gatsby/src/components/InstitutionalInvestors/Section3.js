import React from 'react'
import feature_image from '../../assets/images/institutional-investors/feature-comprehensive-view.png'
import {Link} from 'gatsby'

const Section3 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title" style={{marginTop: "9rem"}}>
                            <span className="sub-title">
                                VISIBILITY AND CONTROL
                            </span>

                            <h2>A comprehensive view</h2>
                            <p>Track historical performance, current positions, and asset allocation. Get news and insights relevant to your holdings in real time.</p>
                            <Link to="/portfolio-management" className="view-details-btn">
                                Learn about Portfolio Management &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="single-gallery-item">
                            <img src={feature_image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3