import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div className="container">
          <div className="topbar-left">
            <button className="topbar-toggler">☰</button>
            <Link className="topbar-brand" to="/">
              <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
              <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
            </Link>
          </div>
         
          </div>
        
      </nav>
  );
}

export default Navbar;