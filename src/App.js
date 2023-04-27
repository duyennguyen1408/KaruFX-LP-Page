import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import First_content from "./components/First_content/First_content";
import Second_content from "./components/Second_content/Second_content";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <First_content />
            <Second_content />
            <Footer />
        </div>
    );
}

export default App;
