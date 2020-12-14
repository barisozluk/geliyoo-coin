import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"

const Navbar = () => {
    
    function onClick(param1, param2) {
        setCollapsed(param1);
    }

    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link 
                                to="/"
                                onClick={() => setCollapsed(true)} 
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Services <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={e => e.preventDefault()}
                                                    className="nav-link"
                                                >
                                                    Custody <i className='bx bx-chevron-down'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/wallet-platform" 
                                                            activeClassName="active"
                                                            onClick={() => onClick(true, "/wallet-platform")}
                                                            className="{classNav}"
                                                        >
                                                            Wallet Platform
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/qualified-custody" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Qualified Custody
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/self-managed-custody" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Self-Managed Custody
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={e => e.preventDefault()}
                                                    className="nav-link"
                                                >
                                                    Prime Services <i className='bx bx-chevron-down'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/prime-trading" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Prime Trading
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/prime-lending" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Prime Lending
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/settlement" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Settlement
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={e => e.preventDefault()}
                                                    className="nav-link"
                                                >
                                                    Portfolio Tools <i className='bx bx-chevron-down'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/portfolio-management" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Portfolio Management
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/tax" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Tax
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={e => e.preventDefault()}
                                                    className="nav-link"
                                                >
                                                    API <i className='bx bx-chevron-down'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link 
                                                            to="#" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Wallets SDK
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link 
                                                            to="#" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Trade Execution SDK
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Who We Serve <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/institutional-investors" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link">
                                                    Institutional Investors

                                                    <div className="f6-l lh-copy mb2 silver">
                                                        Asset Managers, Exchange Traded Funds, Endowments, Family Offices, Hedge Funds, Insurance Companies, Pension Funds, Sovereign Wealth Funds
                                                    </div>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/service-providers" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link">
                                                    Service Providers

                                                    <div className="f6-l lh-copy mb2 silver">
                                                        Banks, Exchanges, Lenders, Liquidity Providers, Payment Processors, Other Custodians
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Resources <i className='bx bx-chevron-down'></i>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/case-studies" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                   Case Studies
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/digital-asset-insurance" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Digital Asset Insurance
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/integrations" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Currencies & Integrations
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/content-library" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Content Library
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/fork-policy" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Fork Policy
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/price-feeds" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Price Feeds
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Company <i className='bx bx-chevron-down'></i>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/about" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                   About
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/newsroom" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Newsroom
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Blog
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/careers" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Careers
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            
                                <div className="others-option d-flex align-items-center">
                                    
                                    <div className="option-item">
                                        <Link 
                                            to="/login" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="btn btn-white"
                                            style={{marginRight: "10px", marginBottom: "15px"}}
                                        >
                                            <b>Login</b>
                                        </Link>
                                        
                                        <Link 
                                            to="/signup" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="btn btn-white submit-button-border"
                                            style={{marginRight: "10px", marginBottom: "15px"}}
                                        >
                                            <b>Sign Up</b>
                                        </Link>

                                        <Link 
                                            to="/connext-with-us" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="btn"
                                            style={{marginBottom: "15px", backgroundColor: "#189ddf", color: "white"}}
                                        >
                                            <b>Connect With Us</b>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
