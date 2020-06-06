import {BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import React from "react";

function App() {
    return (
        <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Profile" component={Profile}/>
        </Router>
    )
}

export default App