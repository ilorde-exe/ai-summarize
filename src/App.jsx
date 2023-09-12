import React from "react";
import Demo from "./components/Demo";
import Hero from "./components/Hero";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="w-screen min-h-screen fixed flex justify-center px-6 pt-[120px] pb-[160px]">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
