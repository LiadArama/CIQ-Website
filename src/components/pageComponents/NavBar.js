import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css';

function NavBar(){
  return(
      <nav>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/travel-tips">Travel Tips</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
        </ul>
    </nav>
  );
}

export default NavBar;
