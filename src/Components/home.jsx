import "./Css files/home.css";
import About from "./../Components/about"
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

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
            <p className="page3p2">Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod <br/>
            nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa <br/>
            nibhtincidunt.</p>
            <br />
            <br />
            <p className="page3p3">Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut <br/>
            quam quis quam venenatis fringilla. Morbi vestibulum id tellus <br/> 
            mmodo mattis. Aliquam erat volutpat.</p>
        </div>
      </div>
      <div className="page4">
            <div className="page4text">
                <p className="page4p">MENU</p> 
                <br />
                 <p className="page4tittle">CAFENA POPULAR MENU</p>
            </div>
            <div className="page4menu">
                <div className="page4coffee1">
                        <div className="coffee1">

                        </div>
                        <div className="coffee2">

                        </div>
                </div>
                <div className="page4coffee2">
                        <div className="coffee3">

                        </div>
                        <div className="coffee4">

                        </div>
                </div>
                <div className="page4coffee3">
                        <div className="coffee5">

                        </div>
                        <div className="coffee6">
                            
                        </div>
                </div>
            </div>
      </div>
    </div>
  );
}
