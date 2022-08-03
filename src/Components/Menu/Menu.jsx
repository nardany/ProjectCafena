import "../Menu/Menu.css";
import line from "../../Assets/gic.png"


    
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
                
            </div>
        </div>
    )
}