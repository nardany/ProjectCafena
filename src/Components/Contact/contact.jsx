import "../Contact/Contact.css";
import line from "../../Assets/gic.png"
import icon1 from "../../Assets/ContactPage/icon1.png"
import icon2 from "../../Assets/ContactPage/icon2.png"
import icon3 from "../../Assets/ContactPage/icon3.png"

    
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
                <div className="form">
                    <div className="iconform">
                        <div className="icon1 icon">
                            <div className="icon1img">
                            <img src={icon1} alt="" />
                            </div>
                            <div className="icon1text ictext">
                                <h2>CONTACT US</h2>
                                <a href="mailto:Israfilsupol836@gmail.com">
                                    Israfilsupol836@gmail.com
                                </a>
                                <br />
                                <a href="tel:088-01869018907">
                                    088 - 01869018907
                                </a>
                            </div>
                        </div>
                        <div className="icon2 icon">
                            <div className="icon2img">
                            <img src={icon2} alt="" />
                            </div>
                            <div className="icon2text ictext">
                            <h2>OUR LOCATION</h2>
                            <p>Hera Road 2344-78 Australia 897- <br />
                            South Side Melbon</p>
                            </div>
                        </div>
                        <div className="icon3 icon">
                            <div className="icon3img">
                            <img src={icon3} alt="" />
                            </div>
                            <div className="icon3text ictext">
                            <h2>OPENING HOURS</h2>
                            <p>Mon - Sat (8:00 - 6:00)
                            <br />Sunday - Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="inputform">
                        <div className="oneinputs">
                            <input type="text" placeholder="Your name :" />
                            <input type="email" placeholder="Your mail :" />
                        </div>
                        <div className="twoinput">
                        <input type="text" placeholder="Enter Your Subject :" />
                        </div>
                        <div className="textarea">
                        <textarea name="" id="" cols="139" rows="10" placeholder="Your Massage :"></textarea>
                        </div>
                        <div className="buttonform">
                        <button>SEND MASSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}