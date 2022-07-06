import React from 'react'
import { NavLink } from 'react-router-dom'

import './Title.css';

function Title() {
    return (
      <nav className="Title">
        <div className="row">
        <h4 className="col-6 h3">Everything Weather</h4>
        <div className="col-6 items mr-0 ml-auto">
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
        </div>
      </nav>
    )
  }

export default Title
