import "../About/About.css";
import line from "../../Assets/gic.png";
import coffeeabout from "../../Assets/AboutPage/aboutpagecoffee.png";
import coffeemen from "../../Assets/AboutPage/aboutpagemen.png";
import { FaCheck } from "react-icons/fa";
import icon1 from "../../Assets/AboutPage/icon1.png"
import icon2 from "../../Assets/AboutPage/icon2.png"
import {FaLongArrowAltRight} from "react-icons/fa";
import people1 from "../../Assets/AboutPage/people1.jpeg"
import people2 from "../../Assets/AboutPage/people2.jpeg"
import Fotter from "../Fotter/fotter"
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



export default function () {
  return (
    <div className="AboutPage">
      <div className="page1about">
        <img src={line} alt="line" className="linepage1" />
        <div className="textpage8">
          <h1>ABOUT CAFENA</h1>
          <p>
            HOME/<i className="page1i"> ABOUT US</i>
          </p>
        </div>
      </div>

      <div className="page2about">
        <div className="div_1">
          <div className="section-image">
            <img src={coffeemen} alt="" className="coffeemen" />
            <img src={coffeeabout} alt="" className="coffeeabout" />
          </div>
        </div>
        <div className="div_2">
          <p className="div_2_tittle_">ABOUT CAFENA</p>
          <h1>
            ONE OF THE BEST COFFEE HOUSE <br />
            IN YOUR HOME TOWN
          </h1>
          <i>
            Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl{" "}
            <br />
            suscipit ligula volutpat, a feugiat urna maximus. Cras massa <br />
            nibhtincidunt.
          </i>

          <ul className="checkul">
            <li>
              <span>
                <i className="page2icon">
                  <FaCheck />
                </i>
              </span>
             <p className="page2text"> What is Lorem Ipsum Lorem Ipsum is simply.</p>
            </li>
            <li>
              <span>
                <i className="page2icon">
                  <FaCheck />
                </i>
              </span>
              <p className="page2text">
              Dummy text of the printing text.
              </p>
            </li>
            <li>
              <span>
                <i className="page2icon">
                  <FaCheck />
                </i>
              </span>
              <p className="page2text">
              Typesetting industry Lorem Ipsum has been the industry's
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="page3about">
        <div className="page3text">
        <p className="page3tittle">WHY CHOOSE US</p>
        <h1>WE ARE PROVIDE BEST SERVICE <br />
        IN YOUR CITY</h1>
        </div>
        <div className="page3container">
            <div className="container1 container">
                    <div className="imgcontainer">
                    <img src={icon1} alt="" className="icon1 icon" />
                    </div>
                    <h2>TESTY COFFEE RECIPE</h2>
                    <p>Accumsa nfringilla. Morbi vestibulum id <br />
                    tellus mmodo mattis. Aliquam erat <br />
                    volutpat. Aenean accumsany.</p>
                    <div className="buttoncontainer">
                    <button className="page3button"><FaLongArrowAltRight/></button>
                    </div>
            </div>
            <div className="container2 container">
            <div className="imgcontainer">
                    <img src={icon2} alt="" className="icon2 icon" />
                    </div>
                    <h2>GREAT LOCATION</h2>
                    <p>Accumsa nfringilla. Morbi vestibulum id <br />
                    tellus mmodo mattis. Aliquam erat <br />
                    volutpat. Aenean accumsany.</p>
                    <div className="buttoncontainer">
                    <button className="page3button"><FaLongArrowAltRight/></button>
                    </div>
            </div>
            <div className="container3 container">
            <div className="imgcontainer">
                    <img src={icon1} alt="" className="icon3 icon" />
                    </div>
                    <h2>PROFESSIONAL CHEF</h2>
                    <p>Accumsa nfringilla. Morbi vestibulum id <br />
                    tellus mmodo mattis. Aliquam erat <br />
                    volutpat. Aenean accumsany.</p>
                    <div className="buttoncontainer">
                    <button className="page3button"><FaLongArrowAltRight/></button>
                    </div>
            </div>
        </div>
      </div>

      <div className="page4about">
          <p className="page4tittleabout">OUR CHEF</p>
          <h1 className="page4textabout">MEET OUR PROFESSIONAL</h1>
          <div className="containerpeople">
            <div className="people1 people">
                <img src={people1} alt="" />
                <p className="peoplename">RASALINA DE WILLAMSON</p>
                <p className="experience">12 YEAR EXPERIENCE</p>
                <div className="peopleSoicalNetwork">
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
            <div className="people2 people">
                <img src={people2} alt="" />
                <p className="peoplename">ALEXTINA JIMIEY</p>
                <p className="experience">09 YEAR EXPERIENCE</p>
                <div className="peopleSoicalNetwork">
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
            <div className="people3 people">
                <img src={people1} alt="" />
                <p className="peoplename">JIMMEY AENDERSON</p>
                <p className="experience">05 YEAR EXPERIENCE</p>
                <div className="peopleSoicalNetwork">
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
