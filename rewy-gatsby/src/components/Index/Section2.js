import React from 'react'
import {Link} from 'gatsby'

const Section2 = () => {
    return (
        <section className="solutions-area pb-70" style={{marginTop: "70px"}}>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        INSTITUTIONAL DIGITAL ASSET PLATFORM
                    </span>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                        <h4>
                            Custody
                        </h4>

                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div> */}
                            <h6>
                                <Link to="/wallet-platform">
                                    Wallet Patform
                                </Link>
                            </h6>
                            <p>Balance security and accessibility with BitGo’s hot, warm, and cold wallet solutions.</p>

                            <Link to="/wallet-platform" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div> */}
                            <h6>
                                <Link to="/qualified-custody">
                                    Qaulified Custody
                                </Link>
                            </h6>
                            <p>Secure, insured cold storage for your digital assets, customizable for your specific business needs.</p>

                            <Link to="/qualified-custody" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div> */}
                            <h6>
                                <Link to="/self-managed-custody">
                                    Self Managed Custody
                                </Link>
                            </h6>
                            <p>Secure your keys locally.</p>

                            <Link to="/self-managed-custody" className="view-details-btn">
                            Learn More &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <h4>
                            Prime Services
                        </h4>

                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div> */}

                            <h6>
                                <Link to="/prime-trading">
                                    Prime Trading
                                </Link>
                            </h6>

                            <p>Trade digital assets directly and anonymously from the safety and security of insured cold storage at BitGo Trust.</p>
                            
                            <Link to="/prime-trading" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div> */}

                            <h6>
                                <Link to="/prime-lending">
                                    Prime Lending
                                </Link>
                            </h6>

                            <p>Lend and borrow digital assets through BitGo Prime.</p>
                            
                            <Link to="/prime-lending" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div> */}

                            <h6>
                                <Link to="/settlement">
                                    Settlement
                                </Link>
                            </h6>

                            <p>A more efficient and secure way to settle digital assets.</p>
                            
                            <Link to="/settlement" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <h4>
                            Portfolio Tools
                        </h4>

                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-money"></i>
                            </div> */}

                            <h6>
                                <Link to="/portfolio-management">
                                    Portfolio Management
                                </Link>
                            </h6> 

                            <p>Better insights, better decisions. Visualize and understand your entire digital asset portfolio.</p>
                            
                            <Link to="/portfolio-management" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-money"></i>
                            </div> */}

                            <h6>
                                <Link to="/tax">
                                    Tax
                                </Link>
                            </h6> 

                            <p>Make tax reporting easy with customizable tax configurations and automatic report generation.</p>
                            
                            <Link to="/tax" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <h4>
                            API
                        </h4>

                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-money"></i>
                            </div> */}

                            <h6>
                                <Link to="https://api.bitgo.com/docs/">
                                    Wallets SDK
                                </Link>
                            </h6> 

                            <p>Manage multiple digital currencies and wallets through a single, unified interface.</p>
                            
                            <Link to="https://api.bitgo.com/docs/" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                        <div className="single-solutions-box box-height">
                            {/* <div className="icon">
                                <i className="flaticon-money"></i>
                            </div> */}

                            <h6>
                                <Link to="https://api.bitgo.com/docs/#tag/Trade-REST-API">
                                    Trade Execution SDK
                                </Link>
                            </h6> 

                            <p>An efficient way for developers to build digital asset trading applications and to offer related functionality.</p>
                            
                            <Link to="https://api.bitgo.com/docs/#tag/Trade-REST-API" className="view-details-btn">
                                Learn More &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2