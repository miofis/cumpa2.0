import React from "react"

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <div className="container">
                    <div className="columns">
                        <div className="column is-offset-4 is-4 is-offset-4">
                            <div className="level">
                                <a className="level-item" href="#">
                                    <span className="icon is-large">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </span>
                                </a>
                                <a className="level-item" href="#">
                                    <span className="icon is-large">
                                        <i className="fab fa-facebook-square fa-2x"></i>
                                    </span>
                                </a>
                                <a className="level-item" href="#">
                                    <span className="icon is-large">
                                        <i className="fab fa-twitter fa-2x"></i>
                                    </span>
                                </a>
                                <a className="level-item" href="#">
                                    <span className="icon is-large">
                                        <i className="fab fa-google-plus-g fa-2x"></i>
                                    </span>
                                </a>
                                <a className="level-item" href="#">
                                    <span className="icon is-large">
                                        <i className="far fa-envelope fa-2x"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
