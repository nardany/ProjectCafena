import "../Contact/Contact.css";
import line from "../../Assets/gic.png"


    
export default function (){
    return(
        <div className="ContactPage">
            <div className="page1contact">
                <img src={line} alt="line" className="linecontact" />
                <div className="textcontact">
                <h1>GET IN TOUCH</h1>
                <p>HOME/<i> CONTACT</i></p>
                </div>
            </div>
            <div className="page2contact">
                
            </div>
        </div>
    )
}