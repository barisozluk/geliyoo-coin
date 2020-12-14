import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Banner from "../components/PrimeLending/Banner"
import Section1 from '../components/PrimeLending/Section1'
import Section2 from '../components/PrimeLending/Section2'

const PrimeLending = () => {
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

export default PrimeLending