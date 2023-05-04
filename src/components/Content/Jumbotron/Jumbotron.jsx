import React from "react";
import logo from '../../../logo.svg';
import './Jumbotron.css';


function Jumbotron() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to my <code>React</code> portfolio!</p>
        </div>
    )
};

export default Jumbotron;