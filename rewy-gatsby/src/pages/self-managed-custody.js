import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from '../components/SelfManagedCustody/Banner'
import Section5 from '../components/SelfManagedCustody/Section5'
import Section6 from '../components/SelfManagedCustody/Section6'
import Section4 from '../components/SelfManagedCustody/Section4'
import Section1 from '../components/SelfManagedCustody/Section1'
import Section2 from '../components/SelfManagedCustody/Section2'
import Section3 from '../components/SelfManagedCustody/Section3'

const SelfManagedCustody = () => {
    return (
        <Layout>
            <Navbar />
            <Banner />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
        </Layout>
    );
}

export default SelfManagedCustody