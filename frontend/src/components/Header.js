import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <p className="is-size-3">Cumpa.FIT</p>
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link to="/about" className="navbar-item is-size-5">
                        About
                    </Link>
                    <Link to="/login" className="navbar-item is-size-5">
                        Log in
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
