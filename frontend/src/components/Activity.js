import React from "react"

function Activity(props) {
    return (
        <div className="column" key={props.id}>
            <figure className="image is-2by1" style={{marginBottom: 10}}>
                <img src={props.img} alt="demo.jpg" />
            </figure>
            <div>
                <h4 className="title is-4">{props.name}</h4>
                <div className="level">
                    <p className="subtitle is-6">
                        {props.description}
                    </p>
                    <a className="button is-small more-info-btn is-outlined is-rounded">Más&nbsp;info</a>
                </div>
            </div>
        </div>
    )
}

export default Activity
