import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from '../components/Settlement/Banner'
import Section1 from '../components/Settlement/Section1'
import Section2 from '../components/Settlement/Section2'

const Settlement = () => {
    return (
        <Layout>
            <Navbar />
            <Banner />
            <Section1 />
            <Section2 />
            <Footer />
        </Layout>
    );
}

export default Settlement