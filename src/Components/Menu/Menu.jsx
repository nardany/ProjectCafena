import "../Menu/Menu.css";
import coffee1 from "../../Assets/MenuPage/coffee1.png"
import coffee2 from "../../Assets/MenuPage/coffee2.png"
import coffee3 from "../../Assets/MenuPage/coffee3.png"
import coffee4 from "../../Assets/MenuPage/coffee4.png"
import coffee5 from "../../Assets/MenuPage/coffee5.png"
import coffee6 from "../../Assets/MenuPage/coffee6.png"
import coffee7 from "../../Assets/MenuPage/coffee7.png"
import coffee8 from "../../Assets/MenuPage/coffee8.png"
import Fotter from "../Fotter/fotter"


    
export default function (){
    return(
        <div className="MenuPage">
            <div className="page1menu">
                <div className="textmenupage">
                <h1>CAFEANA MENU</h1>
                <p>HOME/<i> MENU</i></p>
                </div>
            </div>

            <div className="page2menu">
                <div className="menutittle">
                    <p>MENU</p>
                    <h1>OUR POPULAR MENU</h1>
                </div>
                <div className="containerImg">
                    <div className="section1 sections">
                        <div className="sc1">
                            <img src={coffee1} alt="" />
                            <h1>Americano rosted coffee</h1>
                            <span>$12.00</span>
                        </div>
                        <div className="sc1">
                            <img src={coffee2} alt="" />
                            <h1>Japanis coffee gred</h1>
                            <span>$15.00</span>
                        </div>
                    </div>
                    <div className="section2 sections">
                            <div className="sc1">
                        <img src={coffee3} alt="" />
                            <h1>CAFÈ AU LAIT Coffee</h1>
                            <span>$13.00</span>
                            </div>
                            <div className="sc1">
                        <img src={coffee4} alt="" />
                            <h1>ESPRESSO RISTRETTO Coffee</h1>
                            <span>$11.00</span>
                            </div>
                    </div>
                    <div className="section3 sections">
                            <div className="sc1">
                        <img src={coffee5} alt="" />
                            <h1>VIRGIN COFFEE GRED</h1>
                            <span>$12.00</span>
                            </div>
                            <div className="sc1">
                        <img src={coffee6} alt="" />
                            <h1>ESPRESSO RISTRETTO Coffee</h1>
                            <span>$11.5</span>
                            </div>
                    </div>
                    <div className="section4 sections">
                            <div className="sc1">
                        <img src={coffee7} alt="" />
                            <h1>BRAZIL COFFEE GRED</h1>
                            <span>$12.5</span>
                            </div>
                            <div className="sc1">
                        <img src={coffee8} alt="" />
                            <h1>indian Rosted Coffee</h1>
                            <span>$16.00</span>
                            </div>
                    </div>
                </div>
            </div>
            <Fotter/>
        </div>
    )
}