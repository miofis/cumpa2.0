import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./style/style.scss"

import Header from "./views/Header"
import Footer from "./views/Footer"
import Home from "./views/Home"
import About from "./views/About"
import Login from "./views/Login"


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
