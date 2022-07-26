import "../About/about.css";
import line from "../../Assets/gic.png"


    
export default function (){
    return(
        <div className="AboutPage">
            <div className="page1about">
                <img src={line} alt="line" className="linepage1" />
                <div className="textpage8">
                <h1>ABOUT CAFENA</h1>
                <p>HOME/<i className="page1i"> ABOUT US</i></p>
                </div>
            </div>
            <div className="page2about">
                
            </div>
        </div>
    )
}