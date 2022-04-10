import React, { Component } from 'react'
import styled from 'styled-components'
import { NavHashLink as Link } from 'react-router-hash-link'
import '../Styles/index.scss'
import logo from "../Assets/logo_noir.png"

export const Nav = styled.nav`
  displa: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        
        <Link to="/"><img src={logo} alt="Logo"/></Link>
        <div className='Links'>
          <Link to="/">Home</Link>
          <Link to="#welcome">Accueil</Link>
          <Link to="#about">À propos</Link>
          <Link to="#services">Services</Link>
          <Link to="#projects">Projets</Link>
          <Link to="#contact">Contact</Link>
        </div>
      </nav>
    )
  }
}
