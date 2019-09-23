import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"

const withConfig = f => (
    fetch("/config.json")
        .then(response => response.json())
        .then(f)
)

function App() {
    const [apiStatus, setApiStatus] = useState("PENDING")
    useEffect(() => {
        withConfig(async config => {
            const response = await fetch(`${config.API}/api/health`)
            const data = await response.json()
            setApiStatus(data.message)
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
