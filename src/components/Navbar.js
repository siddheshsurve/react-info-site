import React from "react";
import Logo from "../images/logo.png"
import "../index.css"
export default function Navbar () {
    return (
        <nav>
            <img src={Logo} width="60px"/>
            <h3>ReactFacts</h3>
            <h4>React Starter - Project 1</h4>
        </nav>
    )
}