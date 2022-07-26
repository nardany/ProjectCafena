import "../Reservation/reservation.css";
import line from "../../Assets/gic.png"


    
export default function (){
    return(
        <div className="ReservationPage">
            <div className="page1reservation">
                <img src={line} alt="line" className="linereservation" />
                <div className="textreservation">
                <h1>Reservation</h1>
                <p>HOME/<i> Reservation</i></p>
                </div>
            </div>
            <div className="page2reservation">
                
            </div>
        </div>
    )}