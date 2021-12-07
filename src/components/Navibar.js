import React from 'react'
import { Link } from "react-router-dom";

function Navibar() {
    return (
    <nav className="navbar">
      <div className="container">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Etusivu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cv" className="nav-link">
                Cv
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tietoja" className="nav-link">
                Tietoa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/palaute" className="nav-link">
                Palaute
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navibar
