import "../Navbar/Navbar.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Logo from "../../Assets/cafeanalogo.png";


export default function () {
  const location = useLocation();
  return (
    <div className={location.pathname !== '/' ? 'navbar' : 'navbar homePageNavbar '}>
      <div className="NavBarContainer">
        <div className="NavBar1 navItems">
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
          <Link to="/menu">Menu</Link>
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="NavBar2 navItems">
          <Link to="/chefs">Chefs</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      </div>
  );
}
