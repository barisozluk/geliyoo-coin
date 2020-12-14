import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from '../components/QualifiedCustody/Banner'
import Section5 from '../components/QualifiedCustody/Section5'
import Section4 from '../components/QualifiedCustody/Section4'
import Section3 from '../components/QualifiedCustody/Section3';
import Section2 from '../components/QualifiedCustody/Section2';
import Section1 from '../components/QualifiedCustody/Section1'

const QualifiedCustody = () => {
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

export default QualifiedCustody