import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
   
  return ( 
 
    <div style={{ position:"fixed" , top: "0px" ,width:"100%",zIndex:"100" }}>
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
  <a className="navbar-brand" href="/">NewsMokey</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to= {"/"}>Home</Link>
      <Link className="nav-item nav-link active" to= {"/about"}>About</Link>
      <Link className="nav-item nav-link active" to={"/general"}>General</Link>
      <Link className="nav-item nav-link active" to={"/entertainment"}>Entertainment</Link>
      <Link className="nav-item nav-link active" to={"/business"}>Business</Link>
      <Link className="nav-item nav-link active" to={"/health"}>Health </Link>
      <Link className="nav-item nav-link active" to={"/science"}>Science</Link>
      <Link className="nav-item nav-link active" to={"/technology"}>Technology</Link>
      <Link className="nav-item nav-link active" to={"/sports"}>Sports</Link>
    </div>
  </div>
</nav>
    </div>
  
  )
}
