import {BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import React from "react";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
    return (

        <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/ForgotPassword" component={ForgotPassword}/>
        </Router>

    )
}

export default App