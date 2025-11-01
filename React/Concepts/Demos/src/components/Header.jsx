import React from 'react'
import { FaReact } from "react-icons/fa";

const Header = () => {
  let logo = "React Project"

  gsap.from(".logo-name", {
  clipPath: "inset(0 100% 0 0)",
  duration: 1.5,
  ease: "power4.out"
  });

  return (
    <header style={{backgroundColor: "teal", color: "white", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between",

    }}>
      <h1 className='logo-name'><FaReact /> {logo} </h1>
      <nav>
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
      </nav>
    </header>
  )
}

export default Header
