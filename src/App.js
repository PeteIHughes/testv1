import "./styles/App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { MenuBar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Other } from "./pages/Other";

function App() {
  return (
    <>
      <MenuBar />
      <h1 id="pete">aaa</h1>
      <Routes>
        {
          //      {navItems2.map((item) => (
          //              <Route key={item.name} path="/" element={< {item}/>} />
          //            ))}
        }
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </>
  );
}

export default App;
