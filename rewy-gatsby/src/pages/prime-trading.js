import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from "../components/PrimeTrading/Banner"
import Section1 from "../components/PrimeTrading/Section1"
import Section2 from "../components/PrimeTrading/Section2"
import Section3 from "../components/PrimeTrading/Section3"
import Section4 from "../components/PrimeTrading/Section4"
import Section5 from "../components/PrimeTrading/Section5"

const PrimeTrading = () => {
    return (
        <Layout>
            <Navbar />
            <Banner />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </Layout>
    );
}

export default PrimeTrading