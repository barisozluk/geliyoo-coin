import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from "../components/InstitutionalInvestors/Banner"
import Section1 from "../components/InstitutionalInvestors/Section1"
import Section2 from '../components/InstitutionalInvestors/Section2'
import Section3 from '../components/InstitutionalInvestors/Section3'
import Section4 from '../components/InstitutionalInvestors/Section4'

const InstitutionalInvestors = () => {
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

export default InstitutionalInvestors