import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import First_content from "./components/First_content";
import Button from "./components/Button";
import Second_content from "./components/Second_content";

function App() {
    return (
        <div className="App">
            <Header />
            <First_content />
            <Button />
            <Second_content />
        </div>
    );
}

export default App;
