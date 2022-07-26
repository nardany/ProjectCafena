import "../Navbar/navbar.css";
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
  console.log(location.pathname)
  return (
    <div className={location.pathname !== '/' ? 'navbar homeNavbar' : 'navbar '}>
      <div className="NavBarContainer">
        <div className="NavBar1">
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservation">Reservation</Link>
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="NavBar2">
          <Link to="/chefs">Chefs</Link>
          <Link to="/shop">Shop </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
