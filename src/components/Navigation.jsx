import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(props) {
  return (
    <div>
      <ul className='nav-items'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/projects'><li>Projects</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
      </ul>
    </div>
  );
}

export default Navigation;