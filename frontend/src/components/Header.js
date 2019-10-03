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
                    <Link to="/gym" className="navbar-item is-size-6">
                        ¿gimnasio?
                    </Link>
                    <Link to="/friend-invites" className="navbar-item is-size-6">
                        ¿AMIGO? ¡Invita!
                    </Link>
                    <Link to="/login" className="navbar-item is-size-6">
                        iniciar sesión
                    </Link>
                    <Link to="/signup" className="navbar-item is-size-6">
                        registrate
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
