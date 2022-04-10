import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/index.scss'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/contact"><h1>Contact</h1></Link>
      </nav>
    )
  }
}
