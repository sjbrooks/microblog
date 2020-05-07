import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-contents">
        <h1>Microblog</h1>
        <h4>Get into the Rithm of blogging.</h4>
        <div>
          <NavLink className="Nav-NavLink" to="">Blog</NavLink>
          <NavLink className="Nav-NavLink" to="/new">Add new post</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
