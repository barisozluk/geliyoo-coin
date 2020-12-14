import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from '../components/Tax/Banner'
import Section1 from '../components/Tax/Section1'
import Section2 from '../components/Tax/Section2'
import Section3 from '../components/Tax/Section3'
import Section4 from '../components/Tax/Section4'
import Section5 from '../components/Tax/Section5'

const Tax = () => {
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

export default Tax