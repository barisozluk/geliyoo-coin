import React from 'react'

const Section1 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title" style={{marginTop: "7rem"}}>
                            <span className="sub-title">
                                INCREASED SECURITY AND CONTROL
                            </span>

                            <h2>Air-Gapped Cold Storage</h2>
                            <p>BitGo’s Self-Managed Custody solution allows clients the ability to ensure both their keys and back-up keys are generated, stored, and managed in-country. BitGo provides an onsite engineering team to assist with set-up and testing and BitGo recommends clients have access to secure facilities for in-house cold storage.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-solutions-box" style={{height: "260px"}}>
                                    <h6>
                                        Client Key
                                    </h6>
                                        <ul style={{paddingInlineStart: "20px"}}>
                                            <li><p>Generated and stored by client. Used to initiate all interactions.</p></li>
                                            <li><p>Appropriate amount of key shards are used to initiate the first signature on all transactions.</p></li>
                                        </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-solutions-box" style={{height: "260px"}}>
                                    <h6>
                                        Bitgo Key
                                    </h6>

                                        <ul style={{paddingInlineStart: "20px"}}>
                                            <li><p>Generated and stored by BitGo online.</p></li>
                                            <li><p>Used to co-sign all multi-signature transactions only after policy controls have been met.</p></li>
                                        </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-solutions-box" style={{height: "200px"}}>
                                    <h6>
                                        Backup Key
                                    </h6>
                                
                                    <p>Generated offline and stored offline by client for disaster recovery.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-solutions-box" style={{height: "200px"}}>
                                    <p>Client Key and Backup Key are generated entirely by the client. Process is managed 100% by client via their own audited procedure and secure location.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1