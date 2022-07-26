import "../About/About.css";
import line from "../../Assets/gic.png"
import menimage from "../../Assets/AboutPage/aboutpagemen.png"
import {FaCheck} from 'react-icons/fa';
    
export default function (){
    return(
        <div className="AboutPage">
            <div className="page1about">
                <img src={line} alt="line" className="linepage1" />
                <div className="textpage8">
                <h1>ABOUT CAFENA</h1>
                <p>HOME/<i className="page1i"> ABOUT US</i></p>
                </div>
                <img src={line} alt="line" className="linepage2" />
            </div>
            <div className="page2about">
                <div className="div">
                    <img src={menimage} alt="aboutpagemen" />
                </div>
                <div className="div">
                        <p>ABOUT CAFENA</p>
                        <h1>ONE OF THE BEST COFFEE HOUSE <br />
                        IN YOUR HOME TOWN</h1>
                        <i>Mauris rhoncus orci in imperdiet placerat.
                        Vestibulum euismod nisl <br />
                        suscipit ligula volutpat,
                        a feugiat urna maximus. Cras massa <br />
                        nibhtincidunt.</i>
                        <div className="containercheck">
                            <FaCheck/> <span> What is Lorem Ipsum Lorem Ipsum is simply.</span>
                            <FaCheck/> <span> Dummy text of the printing text.</span>
                            <FaCheck/> <span> Typesetting industry Lorem Ipsum has been the industry's</span>
                        </div>
                </div>
            </div>
        </div>
    )
}