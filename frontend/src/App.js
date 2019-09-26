import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bulma/bulma.sass"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"

function App() {

    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Footer />
            </div>
        </Router>
    )
}

export default App
