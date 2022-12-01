
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";


export default function Navbar(){
    return (
      <div id="navbar">
        <div className="dropdown">
          <button className="menu-btn">
            Shop By Animal <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
          <div className="dropdown-content">
            <a href="shopby.html?pet=all">Shop All</a>
            <a href="shopby.html?pet=dog">Shop By Dog</a>
            <a href="shopby.html?pet=cat">Shop By Cat</a>
            <a href="shopby.html?pet=fish">Shopy By Fish</a>
            <a href="shopby.html?pet=other">Other</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="menu-btn">
            Shop By Brands
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
          <div className="dropdown-content">
            <a href="#">Shop All</a>
            <a href="#">Instinct</a>
            <a href="#">Wellness</a>
            <a href="#">Orijen</a>
            <a href="#">Other</a>
          </div>
        </div>
        <a href="#">Weekly Deal</a>
      </div>
    );
}