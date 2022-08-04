import "../Menu/Menu.css";
import line from "../../Assets/gic.png"
import coffee1 from "../../Assets/MenuPage/coffee1.png"
import coffee2 from "../../Assets/MenuPage/coffee2.png"
import coffee3 from "../../Assets/MenuPage/coffee3.png"
import coffee4 from "../../Assets/MenuPage/coffee4.png"
import coffee5 from "../../Assets/MenuPage/coffee5.png"
import coffee6 from "../../Assets/MenuPage/coffee6.png"
import coffee7 from "../../Assets/MenuPage/coffee7.png"
import coffee8 from "../../Assets/MenuPage/coffee8.png"


    
export default function (){
    return(
        <div className="MenuPage">
            <div className="page1menu">
                <img src={line} alt="line" className="linemenu" />
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
                
            </div>
        </div>
    )
}