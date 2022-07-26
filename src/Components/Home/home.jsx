import "./home.css";
import page4 from "../../Assets/page4.png";
import page5png from "../../Assets/page5.png";
import page5logo from "../../Assets/page5logo.png";
import phoneicon from "../../Assets/phoneicon.png";
import mapicon from "../../Assets/mapicon.png";
import logo from "../../Assets/cafeanalogo.png";
import Fotter from "../Fotter/fotter"
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube} from 'react-icons/fa';


export default function () {
  return (
    <div className="home">
      <div className="homepage">
        <div className="text">
          <h1 className="homeh1">
            ROSTED COFFEE
            <br />
            FOR YOU
          </h1>
          <p className="homep1">
            The coffee is brewed by first roasting the green coffee beans over
            hot
            <br />
            coals in a brazier. given an opportunity to sample.
          </p>
        </div>
        <div className="homepageicon">
              <a href="" >
                <FaTwitter/>
                <span>Twitter</span>
                </a>   
              <a href="">
                <FaFacebookF/>
               <span>Facebook</span>
                </a>
              <a href="">
                <FaYoutube/>
                <span>Youtube</span>
                </a>
        </div>
      </div>

      <div className="page2">
        <div className="photo1">
          <p className="number">01</p>
          <h2 className="title">Best Coffee flavour</h2>
          <p className="textphoto">
            Curabitur semper erat a lacusey sedn <br />
            consequat, sit ametey.
          </p>
        </div>
        <div className="photo2">
          <p className="number">02</p>
          <h2 className="title">Place to Get Lost</h2>
          <p className="textphoto">
            Curabitur semper erat a lacusey sedn <br />
            consequat, sit ametey.
          </p>
        </div>
        <div className="photo3">
          <p className="number">03</p>
          <h2 className="title">Proper Roesting</h2>
          <p className="textphoto">
            Curabitur semper erat a lacusey sedn <br />
            consequat, sit ametey.
          </p>
        </div>
      </div>

      <div className="page3">
        <div className="page3img"></div>
        <div className="page3form">
          <p className="page3p1">OUR HISTORY</p>
          <br />
          <br />
          <h1 className="page3title">CREATE A NEW STORY WITH US</h1>
          <p className="page3p2">
            Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod <br />
            nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa{" "}
            <br />
            nibhtincidunt.
          </p>
          <br />
          <br />
          <p className="page3p3">
            Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut{" "}
            <br />
            quam quis quam venenatis fringilla. Morbi vestibulum id tellus{" "}
            <br />
            mmodo mattis. Aliquam erat volutpat.
          </p>
        </div>
      </div>

      <div className="page4">
        <div className="page4text">
          <h1>COFFEE MACHINE,BUY FOR HOME</h1>
          <p>
            Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam{" "}
            <br /> quis quam venenatis fringilla. Morbi vestibulum id tellus
            mmodo mattis. <br /> Aliquam erat volutpat. <br />
            mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi{" "}
            <br />
            vestibulum id tellus mmodo mattis.
          </p>
        </div>
        <img src={page4} alt="logo" className="page4img" />
      </div>

      <div className="page5">
        <div className="page5tittle">
          <p>CUSTOMER FEEDBACK</p>
          <h1>OUR CUSTOMER REVIEW</h1>
          <br />
          <img src={page5png} alt="page5" className="page5png" />
        </div>
        <br />
        <div className="page5text">
          <p>
            Very good quality of food and service. Vast menu with child friendly
            items as well as <br />
            local seafood and even entrees for those who dont like seafood.
            Great place! Thanks. <br />
            We absolutely love everything there!
          </p>
        </div>
        <div className="page5people">
          <img src={page5logo} alt="page5logo" className="page5logo" />
          <p className="p1">RASALINA DE WILLAMSON</p>
          <p className="p2">FOUNDER & Co</p>
        </div>
      </div>

      <div className="page6">
        <div className="mapimg"></div>
        <div className="page6form">
          <p>Reservation</p>
          <h1>BOOKING A TABLE</h1>
          <input type="text" placeholder="4 Person" />
          <br />
          <input type="text" placeholder="12.2.2021" />
          <br />
          <input type="text" placeholder="11:00 PM" />
        </div>
      </div>

      <div className="page7">
        <div className="page7text">
          <p>FROM OUR BLOG</p>
          <h1>OUR NEWS & ARTICLES</h1>
        </div>
        <div className="page7photo">
          <div className="page7photo1"></div>
          <div className="page7photo2"></div>
          <div className="page7photo3"></div>
        </div>
        <div className="containerphoto">
          <div className="cotaniner1">
            <p>BY: RASALINA\LIFE\23.01.2017</p>
            <h1>
              Ideal Cocktails From Our Barmen <br /> For Pefect Mood
            </h1>
            <h2>READ MORE</h2>
          </div>
          <div className="cotaniner1">
            <p>BY: RASALINA\LIFE\23.01.2017</p>
            <h1>
              Build A Cool Mornig With <br /> Cafena Coffee
            </h1>
            <h2>READ MORE</h2>
          </div>
          <div className="cotaniner1">
            <p>BY: RASALINA\LIFE\23.01.2017</p>
            <h1>
              Questions Business Must Be Able <br /> To Answers
            </h1>
            <h2>READ MORE</h2>
          </div>
        </div>
      </div>
      <Fotter/>
    </div>
  );
}
