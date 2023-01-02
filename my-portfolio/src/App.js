import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <TechStack />
    </div>
  )
}

export default App;