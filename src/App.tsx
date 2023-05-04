import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Content_summary from "./components/Content_summary/Content_summary";
import Main_content from "./components/Main_content/Main_content";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Content_summary />
            <Main_content />
            <Footer />
        </div>
    );
}

export default App;
