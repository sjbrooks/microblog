import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <h1>Microblog</h1>
      <h3>Get into the Rithm of blogging!</h3>
      <div>
        <NavLink to="">Blog</NavLink>
        <NavLink to="/new">Add New Post</NavLink>
      </div>
    </div>
  );
}

export default Nav;
