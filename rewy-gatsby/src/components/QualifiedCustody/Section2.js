import React from 'react'

const Section2 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">
                            SIMPLE AND SECURE
                            </span>
                        </div>

                        <h2>Transferring Funds</h2>
                        <p>The process of transferring funds ensures both operational efficiency and security.</p>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <div className="single-solutions-box" style={{height: "180px"}}>
                            <h6>
                                Step 1
                            </h6>
                            <p>Customer requests a withdrawal.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-solutions-box" style={{height: "180px"}}>
                            <h6>
                                Step 2
                            </h6>
                            <p>BitGo performs an identity verification and generates a transaction.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-solutions-box" style={{height: "180px"}}>
                            <h6>
                                Step 3
                            </h6>
                            <p>The transaction is signed offline by M-of-N signatures, typically within 24 hours.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-solutions-box" style={{height: "180px"}}>
                            <h6>
                                Step 4
                            </h6>
                            <p>Once the final approval is received from the client, BitGo co-signs and the funds are transferred.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2