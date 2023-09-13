import React from "react";
import Hero from "./components/Hero";
import "./App.css";
import Content from "./components/Content";

const App = () => {
  return (
    <main>
      <div className="w-screen min-h-screen fixed flex justify-center px-6 pt-[120px] pb-[160px]">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Hero />
        <Content />
      </div>
    </main>
  );
};

export default App;
