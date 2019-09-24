import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import "bulma/bulma.sass"

const withConfig = f => (
    fetch("/config.json")
        .then(response => response.json())
        .then(f)
)

function App() {
    const [apiStatus, setApiStatus] = useState("PENDING")
    useEffect(() => {
        withConfig(async config => {
            try {
                const response = await fetch(`${config.API}/api/health`)
                await response.json()
                setApiStatus("online")
            } catch(e) {
                setApiStatus("offline")
            }
        })
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    Api status: {apiStatus}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn React
                </a>
            </header>
        </div>
    )
}

export default App
