import "../Navbar/Navbar.css";
import {
  Link,
} from "react-router-dom";
import Logo from "../../Assets/cafeanalogo.png";
import Hamburger from "../../Assets/hamburger.png"
import {useState} from "react"


export default function () {
  const [hamburger,setHamburger] = useState(false)
  function onhamburgerClick(){
    setHamburger(!hamburger)
  }
  return (
    <div className={hamburger ? "navbar1 navbar2" : "navbar1"} >
          <img src={Logo} className="logo" />
          <div className="navitems">
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
          <Link to="/menu">Menu</Link>
          <Link to="/chefs">Chefs</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/contact">Contact</Link>
          </div>
        <img src={Hamburger} alt=""  className="hamburgericon" onClick={onhamburgerClick}/>
      </div>
      
  );
}
