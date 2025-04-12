import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <body className="main-content">
        <Home />
        <main>
          <Experience />
          <Portfolio />
          <Blog />
          <Contact />
        </main>
      </body>
    </>
  );
}

export default App;
