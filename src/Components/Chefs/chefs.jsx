import "../Chefs/Chefs.css";
import line from "../../Assets/gic.png";
import people1 from "../../Assets/People/people1.jpeg";
import people2 from "../../Assets/People/people2.jpeg";
import people3 from "../../Assets/People/people3.jpeg";
import people4 from "../../Assets/People/people4.jpeg";
import people5 from "../../Assets/People/people5.jpeg";
import people6 from "../../Assets/People/people6.jpeg";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Fotter from "../Fotter/fotter"



export default function () {
  return (
    <div className="ChefsPage">
      <div className="page1chefs">
        <img src={line} alt="line" className="linechefs" />
        <div className="textchefs1">
          <h1>MEET OUR CHEFS</h1>
          <p>
            HOME/<i> CHEFS</i>
          </p>
        </div>
      </div>


      <div className="page2chefs">
        <div className="peoples1">
          <div className="people1 peoplechefs">
            <img src={people1} alt="" />
            <p className="namechefs">RASALINA DE WILLAMSON</p>
            <p className="chefsexperience">12 YEAR EXPERIENCE</p>
            <div className="chefsSoicalNetwork">
            <a href="">
                <FaTwitter/>
              </a>
              <a href="">
                <FaFacebookF/>
              </a>
              <a href="">
                <FaInstagram/>
              </a>
            </div>
          </div>
          <div className="people2 peoplechefs">
            <img src={people2} alt="" />
            <p className="namechefs">ALEXTINA JIMIEY</p>
            <p className="chefsexperience">09 YEAR EXPERIENCE</p>
            <div className="chefsSoicalNetwork">
            <a href="">
                <FaTwitter/>
              </a>
              <a href="">
                <FaFacebookF/>
              </a>
              <a href="">
                <FaInstagram/>
              </a>
            </div>
          </div>
          <div className="people3 peoplechefs">
            <img src={people3} alt="" />
            <p className="namechefs">JIMMEY AENDERSON</p>
            <p className="chefsexperience">05 YEAR EXPERIENCE</p>
            <div className="chefsSoicalNetwork">
            <a href="">
                <FaTwitter/>
              </a>
              <a href="">
                <FaFacebookF/>
              </a>
              <a href="">
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>

        <div className="peoples2">
          <div className="people4 peoplechefs">
            <img src={people4} alt="" />
            <p className="namechefs">RD. AENDERSON</p>
            <p className="chefsexperience">02 YEAR EXPERIENCE</p>
            <div className="chefsSoicalNetwork">
            <a href="">
                <FaTwitter/>
              </a>
              <a href="">
                <FaFacebookF/>
              </a>
              <a href="">
                <FaInstagram/>
              </a>
            </div>
          </div>
          <div className="people5 peoplechefs">
            <img src={people5} alt="" />
            <p className="namechefs">JIMMEY ROBERT</p>
            <p className="chefsexperience">03 YEAR EXPERIENCE</p>
            <div className="chefsSoicalNetwork">
              <a href="">
                <FaTwitter/>
              </a>
              <a href="">
                <FaFacebookF/>
              </a>
              <a href="">
                <FaInstagram/>
              </a>
            </div>
          </div>
          <div className="people6 peoplechefs">
            <img src={people6} alt="" />
            <p className="namechefs">HOXAL DINO</p>
            <p className="chefsexperience">08 YEAR EXPERIENCE</p>
            <div className="chefsSoicalNetwork">
            <a href="">
                <FaTwitter/>
              </a>
              <a href="">
                <FaFacebookF/>
              </a>
              <a href="">
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Fotter/>
    </div>
  );
}
