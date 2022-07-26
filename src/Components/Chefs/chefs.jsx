import "../Chefs/chefs.css";
import line from "../../Assets/gic.png"


    
export default function (){
    return(
        <div className="ChefsPage">
            <div className="page1chefs">
                <img src={line} alt="line" className="linechefs" />
                <div className="textchefs1">
                <h1>MEET OUR CHEFS</h1>
                <p>HOME/<i> CHEFS</i></p>
                </div>
            </div>
            <div className="page2chefs">
                
            </div>
        </div>
    )
}