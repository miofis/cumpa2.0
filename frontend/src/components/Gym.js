import React from "react"

function Gym(props) {
    return (
        <div className="column" key={props.id}>
            <figure className="image is-5by3" style={{marginBottom: 10}}>
                <img src={props.img}  alt="demo.jpg" />
            </figure>
            <h4 className="title is-size-4">{props.name}</h4>
        </div>
    )
}

export default Gym
