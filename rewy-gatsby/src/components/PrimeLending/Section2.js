import React from 'react'
import {Link} from 'gatsby'
import bitcoin_image from '../../assets/images/prime-lending/bitcoin.svg'
import bitcoin_cash_image from '../../assets/images/prime-lending/bitcoin_cash.svg'
import litecoin_image from '../../assets/images/prime-lending/litecoin.svg'
import ethereum_image from '../../assets/images/prime-lending/etherium.svg'
import dash_image from '../../assets/images/prime-lending/dash.svg'
import anchorUSD_image from '../../assets/images/prime-lending/anchorUSD.jpg'
import usdcoin_image from '../../assets/images/prime-lending/usd_coin.svg'
import tether_image from '../../assets/images/prime-lending/tether.svg'
import usd_image from '../../assets/images/prime-lending/usd.svg'

const Section2 = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="section-title" style={{marginTop: "6rem"}}>
                            <span className="sub-title">
                                LOANS ARE COLLATERALIZED
                            </span>

                            <h2>Active lending currencies</h2>

                            <Link to="/" className="view-details-btn">
                                All Integrations &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={bitcoin_image} />
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        Bitcoin
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        BTC
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={bitcoin_cash_image} />
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        Bitcoin Cash
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        BCH
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={litecoin_image} />
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        Litecoin
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        LTC
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={ethereum_image} />
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        Ethereum
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        ETH
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={dash_image} />
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        Dash
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        DASH
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={anchorUSD_image} style={{height: "32px", width: "32px", borderRadius: "100%"}}/>
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        AnchorUSD
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        USDX
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={usdcoin_image} />
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        USD Coin
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        USDC
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={tether_image} />
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        Tether
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        USDT
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={usd_image} />
                                    </div>
                                    <div className="f6 fw6 lh-title black-70">
                                        US Dollar
                                    </div>
                                    <div className="f6 fw6 lh-title silver">
                                        USD
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2