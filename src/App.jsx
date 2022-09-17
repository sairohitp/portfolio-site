import React from "react"

import Navbar from "./components/navbar/Navbar.jsx"
import Header from "./components/header/Header.jsx"
import Skillset from "./components/skillset/Skillset.jsx"
import Projects from "./components/projects/Projects.jsx"
import Services from "./components/services/Services.jsx"
import Testimonials from "./components/testimonials/Testimonials.jsx"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Skillset />
            <Projects />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App