                        
import React from 'react'
import { Link } from 'gatsby'

const Section = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 pv6-l">
                        <h2>Fork Policy</h2>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <p>In the past year, the emergence of “forks” and “airdrops” has created a new vehicle for delivering perceived and real value to holders of existing digital currencies. The rapid deployment of new forks and airdrops has raised questions about how BitGo customers can expect to receive or not receive this value for themselves or for their customers. Each fork or airdrop faces unique technical, safety, liquidity, and timing challenges. This document describes the problem and clarifies BitGo’s policy on how to handle forks for its customers.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h5>Goals</h5>
                        <h6>Security</h6>
                        <p>BitGo’s primary goal is always security and safety. BitGo will never introduce support for any fork where BitGo, at its sole discretion, believes it may be unsafe to do so. As forks have emerged in the past year, many have been launched quickly, with rapidly changing technical implementations continuing right up to the launch of the new fork.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h6>Preservation of Value</h6>
                        <p>BitGo also intends to preserve value for customers. When forks occur with significant value, BitGo will work with customers to attempt to deliver that new value to customers. This may or may not mean that BitGo can support the coin as a fully featured wallet with all the security principles that BitGo generally tries to maintain. It may mean that BitGo provides customers with tools such that they can access the coin and convert it to other forms of value.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h5>Airdrops vs Forks</h5>
                        <h6>Definitions</h6>

                        <ul>
                            <li>
                                <p>Airdrop: An Airdrop is when a digital currency blockchain issues a new asset using known public keys or addresses from another blockchain, such that holders of private keys from the original blockchain may access value on the “airdropped” blockchain.</p>
                            </li>
                            <li>
                                <p>Fork: A Fork is a new form of digital currency that emerges when a group of people decide to apply a new consensus layer to an existing blockchain. The result is the creation of a new blockchain, which can be very similar or very different than the original blockchain.</p>
                            </li>
                        </ul>

                        <p>For the purposes of this document, BitGo treats Airdrops and Forks similarly. BitGo customers generally desire to have access to all value which they may be able to access, and whether the new value is delivered via an Airdrop or a Fork, the evaluation and support of that new value by BitGo will be determined by the policy described in this document.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h5>Policy Considerations</h5>
                        <p>There are 5 considerations that factor into BitGo’s decision to handle a fork: technical stability, market capitalization, liquidity, cost, and timing.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h6>Technical Stability</h6>
                        <p>Because security is our most important goal, the technical evaluation of any new fork or airdrop is critical. In order for BitGo to support a fork, BitGo must believe that the new fork is technically stable, and safe. This determination will be made based on many factors, not limited to:</p>
                        <ul style={{paddingInlineStart: "20px"}}>
                            <li>
                                <p>The technical team creating the fork</p>
                            </li>
                            <li>
                                <p>Whether the fork provides replay protection from the original fork</p>
                            </li>
                            <li>
                                <p>Whether the fork provides wipeout-protection from the original fork</p>
                            </li>
                            <li>
                                <p>The strength new fork’s validator / mining capacity</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h6>Market Capitalization</h6>
                        <p>In order for BitGo to consider support for a new fork or airdrop, the value within the fork or airdrop must be significant. If it is not measurable on top-10 exchanges to be more than $100M of value globally, BitGo will likely not support the fork. Note that in many cases, a new fork or airdrop may appear to have sufficient market capitalization to be supported, but it may not have sufficient liquidity (see below).</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h6>Liquidity</h6>
                        <p>In addition to having sufficient market value, the forked coin must have sufficient liquidity. A fork of Bitcoin, for example, with even a $10/coin valuation would have over a $160,000,000 market capitalization. However, if it is thinly traded, access to the value of the coin would be a mirage to BitGo customers. In order for BitGo to support the coin, there must be sufficient liquidity in the market on reputable exchanges for a sustained period of time.</p>
                        <p>In general, BitGo would expect to find at least $25M of daily liquidity available on well-known, trustworthy exchanges for a period of 14 days for BitGo to consider the forked coin having real value.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h6>Cost</h6>
                        <p>There is considerable overhead in supporting new coins. Once BitGo issues wallets for a coin, BitGo supports that coin and blockchain essentially forever. Some forks are seemingly simple for BitGo to support. For example, if a forked coin is technologically the same as the original, it may be relatively low cost to support the new coin.</p>
                        <p>At the same time, some forks or airdrops may be technologically very different from existing supported coins. For example, new airdrops or coins may be built upon different cryptographic algorithms (RSA instead of Elliptic Curve), may have new transaction formats, block formats, multi-signature features, or other changes. The larger the changes, the higher the cost to support and maintain.</p>
                        <p>In general, if a new fork is costly, but has sufficient value to BitGo customers, BitGo will use its best efforts to enable BitGo customers access to the new coin. However, it may affect the timing under which BitGo can do so.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h6>Timing</h6>
                        <p>New airdrops and forks usually are introduced with some notification before the airdrop or fork occurs. However, sometimes these notification periods can be very short - less than 8 weeks. Additionally, airdrops can be done in such a way that the airdrop later will “expire”, giving implementers only short windows of time to claim the airdrop before the value is lost.</p>
                        <p>Unfortunately, BitGo cannot guarantee to support new forks or airdrops within any short timeframe. Business obligations, developer availability, and cost are all material factors, and safety, testing, quality, and service are our primary objectives.. While BitGo will do its best to make value available to its customers, we cannot guarantee a specific timeframe when the exact considerations of future forks can be so varied.</p>
                        <p>Finally, should BitGo elect not to support a fork at one point in time, it does not mean that BitGo will never support that Fork. For example, upon launch, a Fork may not meet the stability market capitalization, or liquidity thresholds for BitGo to support. In the future, should the Fork become viable, BitGo may, at its sole discretion, elect to support the Fork or Airdrop.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12">
                        <h6>Policy</h6>
                        <p>In the event of an upcoming modification to the Bitcoin Network or other applicable Network that could potentially result in a Digital Asset Network Fork or Airdrop, BitGo will use best commercial efforts to provide the value of the forked Digital Asset to Customer. However, BitGo’s first concern is always security of Your existing Digital Assets. BitGo, at its sole discretion, may or may not decide to make Digital Assets available to Customer. Additionally, it may take significant time for BitGo to implement or provide access to any Digital Asset created as a result of a Fork. Customer indemnifies BitGo against any direct, indirect, incidental, special or consequential losses due to inability to access any Digital Asset created as a result of a Fork or Airdrop.</p>
                        <p>In the event that BitGo does consider a Fork to be technically safe with sufficient market value and liquidity, but Customer desires access to the Fork in advance of the timing that BitGo can provide due to cost or timing considerations, BitGo will, in good faith with Customer, determine a product plan to enable Customer to access the value of the Fork or airdrop such that the Customer, at its sole expense, could access the coin.</p>
                        <p>BitGo reserves the right to update this policy and the criteria for measuring the viability of a Fork or Airdrop from time to time based on new technological, legal, or environmental factors that may emerge.</p>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Section