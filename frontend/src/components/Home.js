import React from "react"

function Home() {
    return (
        <div id="landing-content">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title is-size-1 has-text-weight-bold" style={{paddingBottom: 100}}>
                           Entrena con quien <br></br>quieras y donde sea
                        </h1>
                        <ul>
                            <li className="level-left is-size-5">
                                <span className="icon is-large has-text-green">
                                    <i className="far fa-hand-point-right fa-2x"></i>
                                </span>
                                <span className="subtitle" style={{paddingLeft: 10}}>Con tu amigo, profe o compañero</span>
                            </li>
                            <li className="level-left is-size-5">
                                <span className="icon is-large has-text-green">
                                    <i className="far fa-hand-point-right fa-2x"></i>
                                </span>
                                <span className="subtitle" style={{paddingLeft: 10}}>Enterate de nuevas clases a <br></br> precios increíbles, y hasta <br></br> gratis.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <figure className="image is-3by2">
                            <img src="https://bulma.io/images/placeholders/256x256.png"  alt="demo.jpg" />
                        </figure>
                        <p className="has-text-right">"Al fin voy al gimnasio, gracias a mi amiga"&nbsp;</p>
                        <p className="has-text-right">Cristina&nbsp;&nbsp;</p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column has-text-centered">
                        <a href="/signup"  className="button is-large register-btn">registrate</a>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <h1 className="title">Las clases de hoy</h1>
                        <p className="subtitle">Todos los días se suman nuevas clases</p>
                        <div className="columns">
                            <div className="column">
                                <figure className="image is-2by1" style={{marginBottom: 10}}>
                                    <img src="https://bulma.io/images/placeholders/256x256.png" alt="demo.jpg" />
                                </figure>
                                <div>
                                    <h4 className="title is-4">Rock cycle</h4>
                                    <div className="level">
                                        <p className="subtitle is-6">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                                        </p>
                                        <a className="button is-small more-info-btn is-outlined is-rounded">Más&nbsp;info</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <figure className="image is-2by1" style={{marginBottom: 10}}>
                                    <img src="https://bulma.io/images/placeholders/256x256.png" alt="demo.jpg" />
                                </figure>
                                <div>
                                    <h4 className="title is-4">Rock cycle</h4>
                                    <div className="level">
                                        <p className="subtitle is-6">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                                        </p>
                                        <a className="button is-small more-info-btn is-outlined is-rounded">Más&nbsp;info</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <figure className="image is-2by1" style={{marginBottom: 10}}>
                                    <img src="https://bulma.io/images/placeholders/256x256.png" alt="demo.jpg" />
                                </figure>
                                <div>
                                    <h4 className="title is-4">Rock cycle</h4>
                                    <div className="level">
                                        <p className="subtitle is-6">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                                        </p>
                                        <a className="button is-small more-info-btn is-outlined is-rounded">Más&nbsp;info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="level-right">
                            <a href="#">
                                <span className="icon is-large has-text-black">
                                    <i className="far fa-arrow-alt-circle-right fa-3x"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="columns">
                            <div className="column is-6 is-offset-6">
                                <h3 className="title is-size-4 has-text-weight-bold">
                                        Nuevos gimnasios que se suman
                                </h3>
                                <p className="subtitle">
                                    ¿Sos gimnasio?
                                </p>
                                <a href="/signup" className="button is-hovered">registrate</a>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <figure className="image is-5by3" style={{marginBottom: 10}}>
                            <img src="https://bulma.io/images/placeholders/256x256.png"  alt="demo.jpg" />
                        </figure>
                        <h4 className="title is-size-4">Octava compania</h4>
                    </div>
                    <div className="column">
                        <figure className="image is-5by3" style={{marginBottom: 10}}>
                            <img src="https://bulma.io/images/placeholders/256x256.png"  alt="demo.jpg" />
                        </figure>
                        <h4 className="title is-size-4">Octava compania</h4>
                    </div>
                </div>
                
                <div className="columns">
                    <div className="column">
                        <div className="level-right">
                            <a href="#">
                                <span className="icon is-large has-text-black">
                                    <i className="fas fa-forward fa-3x"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <span>©&nbsp;Cumpa&nbsp;Fit</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
