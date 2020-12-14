import React from 'react'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"
import footerMap from "../../assets/images/footer-map.png"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">

                
                <div className="row">
                    <div className="col-lg-12 col-ms-12">
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="single-footer-widget">
                        
                            <p>Institutional digital asset custody, trading, and finance.</p>

                            <div className="btn-box">
                                <Link to="/connect-with-us"  className="btn"
                                    style={{marginBottom: "15px", backgroundColor: "#189ddf", color: "white"}}>
                                    <b>Connect With Us</b>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <div className="single-footer-widget pl-5">
                            <p>Keep up to date with our newsletter.</p>

                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control mr-2"
                                    placeholder="E-mail"
                                />
                                <div className="input-group-append">
                                    <button
                                    className="btn btn-square btn-white submit-button-border"
                                    type="button"
                                    >
                                    <b style={{fontSize: "14px"}}>Submit</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-12">
                        <div className="single-footer-widget">
                            <h6>CUSTODY</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/wallet-platform">
                                        Wallet Platform
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/qualified-custody">
                                        Qualified Custody
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/self-managed-custody">
                                        Self-Managed Custody
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-footer-widget">
                            <h6>PRIME SERVICES</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/prime-trading">
                                        Prime Trading
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/prime-lending">
                                        Prime Lending
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/settlement">
                                        Settlement
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-footer-widget">
                            <h6>PORTFOLIO TOOLS</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/portfolio-management">
                                        Portfolio Management
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/tax">
                                        Tax
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-footer-widget">
                            <h6>API</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="https://api.bitgo.com/docs/">
                                        Wallets SDK
                                    </Link>
                                </li>   
                                <li>
                                    <Link to="https://api.bitgo.com/docs/#tag/Trade-REST-API">
                                        Trade Execution SDK
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-footer-widget">
                            <h6>RESOURCES</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/case-studies">
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/digital-asset-insurance">
                                        Digital Asset Insurance
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/integrations">
                                        Currencies & Integrations
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/content-library">
                                        Content Library
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/fork-policy">
                                        Fork Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-footer-widget">
                            <h6>COMPANY</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/newsroom">
                                        Newsroom
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term-of-use">
                                        Legal
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy">
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-footer-widget">
                            <h6>HELP</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/connect-with-us">
                                        Connect With Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Support
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Status
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Bug Bounty
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-12">
                        <div className="single-footer-widget">
                            <h6>SALES INQUIRIES</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="#">
                                        sales@bitgo.com
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="single-footer-widget">
                            <h6>PRESS INQUIRIES</h6>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="#">
                                        press@bitgo.com
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="single-footer-widget">
                            <h6>SOCIAL</h6>

                            <ul className="social-link">
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <p>Copyright @{currentYear} <strong>Geliyoo</strong> All rights reserved</p>
                            <p>No legal, tax, investment, or other advice is provided by any BitGo entity. Please consult your legal/tax/investment professional for questions about your specific circumstances. Digital asset holdings involve a high degree of risk, and can fluctuate greatly on any given day. Accordingly, your digital asset holdings may be subject to large swings in value and may even become worthless.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;