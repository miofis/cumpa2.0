import React from "react"

function Recommender(props) {
    return (
        <div>
            <figure className="image is-3by2">
                <img src={props.img}  alt="demo.jpg" />
            </figure>
            <p className="has-text-right">&quot;{props.description}&quot;&nbsp;</p>
            <p className="has-text-right">{props.name}&nbsp;&nbsp;</p>
        </div>
    )
}

export default Recommender
