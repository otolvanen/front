import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Cv() {
    return (
        <div>
            <h1>Projektit</h1>
            <div>
                <ul className="navbar">
                    <li className="nav-item">
                    <Link to="/cv/sanakirja" className="nav-link">
                        Sanakirja
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/cv/urheilijat" className="nav-link">
                        Urheilijat
                    </Link>
                    </li>
                   
                </ul>
                <Outlet />
            </div>
        </div>

    )
}

export default Cv
