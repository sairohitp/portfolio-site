import React from 'react'
import "./navbar.css"
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <div>
      <div className="filler"></div>

      <div className="divbox classicflex navbox">

        <div><a href="index.html"><h1>Sai Rohit</h1></a></div>

        <div className="classicflex">
          <a href="#about"><button onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><p>About</p></button></a>
          <a href="#skillset"><button onClick={() => setActiveNav("#skillset")} className={activeNav === "#skillset" ? "active" : ""}><p>Skills</p></button></a>
          <a href="#projects"><button onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><p>Projects</p></button></a>
          <a href="#services"><button onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><p>Services</p></button></a>
          <a href="#testimonials"><button onClick={() => setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}><p>Testimonials</p></button></a>
          <a href="#contact"><button onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><p>Contact</p></button></a>
        </div>

      </div>
    </div>
  )
}

export default Navbar