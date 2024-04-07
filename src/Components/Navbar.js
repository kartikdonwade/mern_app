import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg " style= {{"background-color":"#EEEDEB"}}>
  <div className="container-fluid">
    <Link className="navbar-brand text-dark fs-1 font-weight-bold" to="/">MessLocate</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav text-dark">
        <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
        <Link className="nav-link text-dark" to="/login">Login</Link>
        <Link className="nav-link text-dark" to="/">Pricing</Link>
        
      </div>
    </div>
  </div>
</nav></div>
  )
}
