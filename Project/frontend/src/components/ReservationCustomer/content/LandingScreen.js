import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingScreen() {
  return (
    <div classname='row landing'>
        
        <div className='col-md-12'>
            <p>Welcome to</p>
            <h2>The Blue Lagoon Resort,</h2>
            <h1>Kalpitiya</h1>
            <Link to="/first/login">
            <button>Get Started</button>
            </Link>
        </div>
    </div>
  )
}
