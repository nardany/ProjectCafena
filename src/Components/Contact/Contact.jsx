import "../Contact/Contact.css";
import icon1 from "../../Assets/ContactPage/icon1.png"
import icon2 from "../../Assets/ContactPage/icon2.png"
import icon3 from "../../Assets/ContactPage/icon3.png"
import Footer from "../Fotter/fotter"
    
export default function (){
    return(
        <div className="ContactPage">
            <div className="page1contact">
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
                    <div className="contactInputForm">
                            <div className="coupleinput">
                                <input type="text" placeholder="Your name:" />
                                <input type="email" placeholder="Your Mail :" />
                            </div>
                            <div className="subjectinput">
                                <input type="text" placeholder="Enter Your Subject :" />
                            </div>
                            <div className="buttonsend">
                                <button>SEND MASSAGE</button>
                            </div>
                    </div>
                </div>
            </div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className="gmap_iframe" src="https://maps.google.com/maps?width=675&amp;height=400&amp;hl=en&amp;q=Yerevan&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                    <a href="https://embedmapgenerator.com/">
                    embed google maps in website
                    </a>
                    </div>
            </div>
            <Footer/>
        </div>
    )
} 