import React from "react"
import '../styles/index.scss'
import Header from '../components/Header.js'
import Home from '../components/Home.js'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const IndexPage = () => (
  <>
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
  </>
)

export default IndexPage
