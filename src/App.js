import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <HeroSection />
      </div>
    </HashRouter>
  );
}

export default App;
