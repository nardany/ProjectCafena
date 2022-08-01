import "../Reservation/Reservation.css";
import line from "../../Assets/gic.png"
import Fotter from "../Fotter/fotter"

    
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
                    <div className="reservationform">
                        <h1>RESERVATION FORM</h1>
                        <div className="inputform">
                            <div className="form1">
                        <input type="text" name="name" placeholder="Enter your name"/>
                        <input type="tel" name="tel" className="tel" placeholder="Enter your number"/>
                        </div>
                        <div className="form2">
                        <select name="subject" className="subject">
                                                    <option>Seates*</option>
                                                    <option value="1">For 2 Persons</option>
                                                    <option value="2">For 5 Persons</option>
                                                    <option value="3">For 6 Persons</option>
                        </select>
                        <input type="date" className="data" name="date"/>
                        </div>
                        <div className="form3">
                        <input type="time" className="time" name="time"/>
                        <input type="email" className="email" name="2email" placeholder="Enter your mail"/>
                        </div>
                        </div>
                        <div className="button">
                        <button>SUBMIT YOU REQUEST</button>
                        </div>
                    </div>
            </div>
            <Fotter/>
        </div>
    )}