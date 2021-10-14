import React from 'react'
import { NavLink } from 'react-router-dom'

import './Title.css';

function Title() {
    return (
      <div className="Title">
        
        <header>
        <h1 className="h1 p-4">Everything Weather</h1>  
        <div>
        <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">Everything Weather</NavLink>

        <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about">About</NavLink>

        </div>
  
        </header>
      </div>
    )
  }

export default Title
