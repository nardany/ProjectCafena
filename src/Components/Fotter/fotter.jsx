import "../Fotter/fotter.css"
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube} from 'react-icons/fa';
import {FaGooglePlusG} from "react-icons/fa"
import phoneicon from "../../Assets/phoneicon.png";
import mapicon from "../../Assets/mapicon.png";
import logo from "../../Assets/cafeanalogo.png";

export default function(){
  return <div className="fotter">
        <div className="fotteroneform">
          <div className="phoneiconfotter">
          <img src={phoneicon} alt="phoneiconfotter" />
          <p>
            <strong>PHONE :</strong>+88019 339 702 520
          </p>
          </div>
          <div className="mapiconfotter">
          <img src={mapicon} alt="mapicon" />
          <p>
            <strong>ADDRESS :</strong>30 North West New
          </p>
          </div>
          <div className="inputcontainerfooter">
            <input
              type="text"
              className="fotterinputabout"
              placeholder="Enter your email"
            />
            <button className="fotterbutton">Subsrcibe</button>
          </div>
        </div>
        <div className="fottertwoform">
          <div className="iconandtextfotter">
          <img src={logo} alt="logo" className="logofotter" />
            <p className="fottertext">
              Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
              quam quis quam <br />
              venenatis fringilla. Morbi vestibulum
            </p>
            
        <div className="iconfotter">                
              <a href=""><i><FaTwitter/></i></a>   
              <a href=""><i><FaFacebookF/></i></a>
              <a href=""><i><FaYoutube/></i></a>
              <a href=""><i><FaGooglePlusG/></i></a>
              <a href=""><i><FaInstagram/></i></a>            
            </div>
          </div>
        </div>
      </div>
      }