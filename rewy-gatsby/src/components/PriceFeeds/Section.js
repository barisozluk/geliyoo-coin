                        
import React from 'react'
import { Link } from 'gatsby'

const Section = () => {
    return (
        <section className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 pv6-l">
                        <h2>Price Feeds</h2>

                        <p>Last updated: March, 2019</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <p><Link to="https://bitgo.github.io/bitgo-docs/" className="view-details-btn">BitGo Platform V1</Link> transactions will be assessed a notional USD value using the Tradeblock XBX Index rate at the time of the transaction. See Tradeblock's constituent prices and more information about the XBX methodology on the right panel at the link <Link to="https://tradeblock.com/markets/index" className="view-details-btn">here</Link>.</p>
                        <p><Link to="https://app.bitgo.com/docs/" className="view-details-btn">BitGo Platform V2</Link> transactions will be assessed a notional USD value using the BitcoinAverage rate at the time of the transaction. See BitcoinAverage's methodology <Link to="https://bitcoinaverage.com/en/methodology" className="view-details-btn">here</Link>.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h6>BitGo Billing Methodology</h6>
                        <p>Assets Under Custody (AUC) We calculate the assets-under-custody fees for a given set of wallets under an enterprise by coin. The set of wallets to bill with AUC billing can differ from contract to contract, but is usually all of the cold and custodial wallets the customer has. AUC billing is based on a percentage (bps) fee calculated on the average USD balance over the month (see “Computing Average Balance” below). Each coin and token bill is calculated separately and given its own line-item in the bill.</p>
                        <p>Even though custodial wallets may execute a minimal number of transactions and therefore have the same coin-based balance over the course of the month, the USD value of the coins varies over the hours of the month resulting in differing USD-based balances at each hourly fencepost.</p>
                        <p>There are exactly 720 hourly balances in a 30-day month. We calculate balances at the beginning of each hour, which means that transactions or price changes in the very last hour of the month are not reflected in the average for that month. However they will be reflected in the average for the following month.</p>
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
                        <h6>Computing Average Balance</h6>
                        <p>The billing system multiplies the balance at the start of the month by the price of the coin or token at the beginning of the month to compute the first hourly USD amount. It then adds the delta of the transactions that moved coin to/from the AUC wallets that happened in the next hour to the balance, and multiplies that amount by the price of the coin for the second hour in the month. The billing system continues this process until there are no more hours in the current month. It then takes the average of all the hourly USD holdings in the month, and multiples that by the rate or tiered rates specified in the customer's contract.</p>
                    </div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12 mb4">
                        <h6>Volume Discount Pricing (VDP) / Transactional Billing / Tiered Billing</h6>
                        <p>VDP/Transactional/Tiered billing is the billing structure used for hot wallet customers, although transactions executed from cold wallets still count towards VDP. For transactional billing, we bill all outgoing transactions from customer wallets sent to addresses not in the customer’s enterprise. Billing in VDP is separated by coin, and each coin and token has its own entry or entries in the bill. In tiered billing each coin starts the count from 0. On each externally sent transaction, we use the USD value sent and count it towards the billable amount sent for that coin.</p>
                        <p>Let’s look at an example customer with 2 tiers, $0 - $1,000,000 at 25 bps and $1,000,000 and higher at 20 bps. Their BTC sends from 0 to 1 million USD will be billed at 25 bps, so they would pay $2,500 for it. All BTC sends thereafter will be billed at 20 bps. However, if the customer then did an ETH send of $100, it would still be billed in the 25 bps tier because the tiers are distinct for each coin. If a transaction exists in both tiers, such as when a customer that has already sent $999,000 in XRP later sends $2,000, then the first $1,000 would be billed at 25 bps and the next $1,000 at 20 bps.</p>
                    </div>
                    <div className="col-lg-3"></div>
                    
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 col-sm-12">
                        <h6>Final Bill</h6>
                        <p>The final bill adds together the AUC and VDP charges and compares that to the customer monthly minimum (MM).</p>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Section