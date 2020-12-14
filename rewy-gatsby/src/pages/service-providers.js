import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from "../components/ServiceProviders/Banner"
import Section1 from '../components/ServiceProviders/Section1'
import Section2 from '../components/ServiceProviders/Section2'
import Section3 from '../components/ServiceProviders/Section3'
import Section4 from '../components/ServiceProviders/Section4'

const ServiceProviders = () => {
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

export default ServiceProviders