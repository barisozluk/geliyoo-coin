import React from 'react'
import {Link} from 'gatsby'

const Section5 = () => {
    return (
        <section style={{marginTop: "70px"}}>
            <div className="container">
                <div className="bt b--border" style={{marginBottom: "70px"}}></div>

                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="section-title">
                            <div className="zcash">
                            </div>

                            <p>"BitGo had the established track record and solid reputation that we were looking for when it came to securing our funds. The company’s reputation for excellence made BitGo the clear choice as our custody partner."</p>
                            
                            <p><b>Josh Cincinnati</b>&nbsp;·&nbsp; Executive Director, Zcash Foundation</p>

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

export default Section5