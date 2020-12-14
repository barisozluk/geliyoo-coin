import React from 'react'
import {Link} from 'gatsby'

const Section4 = () => {
    return (
        <section style={{marginTop: "70px"}}>
            <div className="container">
                <div className="bt b--border" style={{marginBottom: "70px"}}></div>

                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <div className="tradeconnect">
                            </div>

                            <p>"We knew that a proven third-party custody provider was essential to delivering the security and confidence our customers need.We selected BitGo due to the company’s security, policies and experience."</p>
                            
                            <p><b>Athol Nourse</b>&nbsp;·&nbsp; Commercial Director, TradeConnect</p>
                            
                            <Link to="/" className="view-details-btn">
                                Read Case Study &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Section4