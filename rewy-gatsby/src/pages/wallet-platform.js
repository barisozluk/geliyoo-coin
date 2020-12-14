import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from "../components/WalletPlatform/Banner"
import Section3 from '../components/WalletPlatform/Section3'
import Section1 from '../components/WalletPlatform/Section1'
import Section2 from '../components/WalletPlatform/Section2'
import Section4 from '../components/WalletPlatform/Section4'

const WalletPlatform = () => {
    return (
        <Layout>
            <Navbar />
            <Banner />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </Layout>
    );
}

export default WalletPlatform