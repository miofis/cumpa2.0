import React , { useState, useEffect } from "react"
import Activity from "../components/Activity"
import Gym from "../components/Gym"
import Recommender from "../components/Recommender"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointRight, faArrowAltCircleRight, faForward } from "@fortawesome/free-solid-svg-icons"


function fetchDataFromApi() {
    return {
        activities: [
            { id: "1", name: "Rock cycle", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat", img: "https://bulma.io/images/placeholders/256x256.png" },
            { id: "2", name: "Rock cycle", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat", img: "https://bulma.io/images/placeholders/256x256.png" },
            { id: "3", name: "Rock cycle", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat", img: "https://bulma.io/images/placeholders/256x256.png" },
        ],
        gyms: [
            { id: "1", name: "Octava compania", img: "https://bulma.io/images/placeholders/256x256.png" },
            { id: "2", name: "Octava compania", img: "https://bulma.io/images/placeholders/256x256.png" },
        ],
        recommender: { name: "Cristina", description: "Al fin voy al gimnasio, gracias a mi amiga", img: "https://bulma.io/images/placeholders/256x256.png" }
    }
}

function Home() {

    const [homeData, setHomeData] = useState({
        activities: [],
        gyms: [],
        recommender: [],
    })
    useEffect(() => {
        const fetchData = async () => {
            const data = fetchDataFromApi()
            setHomeData(data)
        }
        fetchData()
    }, [])
    
    return (
        <div id="landing-content">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title is-size-1 has-text-weight-bold" style={{paddingBottom: 100}}>
                        Entrena con quien <br></br>quieras y donde sea
                        </h1>
                        <ul className="has-text-green">
                            <li className="level-left is-size-5">
                                <FontAwesomeIcon icon={faHandPointRight} size="2x" />
                                <span className="subtitle" style={{paddingLeft: 10}}>Con tu amigo, profe o compañero</span>
                            </li>
                            <li className="level-left is-size-5">                            
                                <FontAwesomeIcon icon={faHandPointRight} size="2x" />
                                <span className="subtitle" style={{paddingLeft: 10}}>Enterate de nuevas clases a <br></br> precios increíbles, y hasta <br></br> gratis.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <Recommender data={homeData.recommender} />
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
                            {homeData.activities.map(activity => 
                                <div className="column" key={activity.id}>
                                    <Activity name={activity.name} description={activity.description} img={activity.img} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="level-right">
                            <a href="#" className="has-text-black">
                                <FontAwesomeIcon icon={faArrowAltCircleRight} size="3x" />
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
                    
                    {homeData.gyms.map(gym => 
                        <div className="column" key={gym.id}>
                            <Gym name={gym.name} img={gym.img} />
                        </div>
                    )}

                </div>
            
                <div className="columns">
                    <div className="column">
                        <div className="level-right">
                            <a href="#" className="has-text-black">
                                <FontAwesomeIcon icon={faForward} size="3x" />
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
