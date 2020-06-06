import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import React from "react";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/Signup" component={Signup}/>
                <Route path="/Profile" component={Profile}/>
            </Switch>
        </Router>
    )
}

export default App