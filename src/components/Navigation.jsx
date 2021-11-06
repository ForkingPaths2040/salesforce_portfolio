import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

function Navigation(props) {
  return (
    <div className='nav-container'>
      <ul className='nav-items flex jc-spbtw'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
      </ul>
    </div>
  );
}

export default Navigation;