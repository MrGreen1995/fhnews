import React from 'react'
import logo from '../../svg-logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark mb-5">
    <Link className="navbar-brand text-white text-uppercase" to="/">
      <img src={logo} alt="logo" style={{width:'35px'}}/>&nbsp;
        Fuqaro Himoyasi              
    </Link>
  <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
    <span>
      <i className="fas fa-bars" style={{color:'#fff'}}></i>
    </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/">Bosh saxifa&nbsp;<i className="fas fa-home" /> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/news">Yangiliklar&nbsp;<i className="fa fa-newspaper-o" aria-hidden="true"/></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/advices">Foydali maslaxatlar&nbsp;<i className="fas fa-thumbs-up" aria-hidden="true"/></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">Bog'lanish&nbsp;<i className="fa fa-phone" aria-hidden="true"/></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Izlash" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fas fa-search"></i>&nbsp;Izlash</button>
    </form>
  </div>
</nav>
    );
}

export default Navbar;