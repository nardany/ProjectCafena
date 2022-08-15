import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/home";
import About from "./Components/About/About";
import NavBar from "./Components/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";
import Reservation from "./Components/Reservation/Reservation";
import Chefs from "./Components/Chefs/Chefs";
import Contact from "./Components/Contact/Contact";
import {useState} from "react"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/chefs" element={<Chefs />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>Not Found</h1>
                </div>
              }
            />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
