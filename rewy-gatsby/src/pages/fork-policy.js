import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Section from '../components/ForkPolicy/Section'


const ForkPolicy = () => {
    return (
        <Layout>
            <Navbar />
            <Section />
            <Footer />
        </Layout>
    );
}

export default ForkPolicy