import React from 'react'
import committed_image from '../../assets/images/self-managed-custody/commited.png'

const Section4 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title" style={{marginTop: "4rem"}}>
                            <span className="sub-title">
                                COMMITTED TO YOUR SUCCESS
                            </span>

                            <h2>Post Sales Support</h2>
                            <p>BitGo is committed to supporting our clients around the world with dedicated account managers and 24/7 escalation support via phone or email. Our onsite BitGo engineering team assists with initial set-up and end-to-end testing, and BitGo provides tailored guidelines, recommendations, and best practices at every step of the process. Comprehensive user guides and on-going technical support ensure client success.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="single-gallery-item">
                            <img src={committed_image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4