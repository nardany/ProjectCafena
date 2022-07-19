import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Logo from "./Image/cafeanalogo.png"
import Home from "./Components/home"
import About from "./Components/about"
import Menu from "./Components/menu"
import Reservation from "./Components/reservation" 
import Pages from "./Components/pages"
import Shop from "./Components/shop"
import Contact from "./Components/contact"


function App() {
  return (
    <div className="App">
<BrowserRouter>
      <div className="App">
        <div className="NavBar">
          <div className='NavBar1'>
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
          <Link to="/menu">Contact</Link>
          <Link to="/reservation">Reservation</Link>
          </div>
          <div className='logo'>
          <img src={Logo}/>
          </div>
          <div className='NavBar2'>
          <Link to="/pages">Pages</Link>
          <Link to="/shop">Shop </Link>
          <Link to="/contact">Contact</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
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
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
