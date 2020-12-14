import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Banner from "../components/Index/Banner"
import Section1 from "../components/Index/Section1"
import Section2 from "../components/Index/Section2"
import Section3 from "../components/Index/Section3"
import Section4 from "../components/Index/Section4"

const Home = () => {
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
  )
}

export default Home