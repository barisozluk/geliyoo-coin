import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from '../components/PortfolioManagement/Banner'

const PortfolioManagement = () => {
    return (
        <Layout>
            <Navbar />
            <Banner />
            <Footer />
        </Layout>
    );
}

export default PortfolioManagement