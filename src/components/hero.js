import React from 'react'
import Nav from './nav'
import './hero.css'

const Hero = ({ page }) => (
  <section className='hero is-large is-dark'>
    <div className='hero-body'>
      <Nav />
      <div className='container'>
        <h1 className='title'>Scotch Auth</h1>
        <h2 className='subtitle'>Welcome to the Scotch Auth {page}</h2>
      </div>
    </div>
  </section>
)
export default Hero
