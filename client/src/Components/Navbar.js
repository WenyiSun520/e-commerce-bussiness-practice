
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";


export default function Navbar(){
    return (
      <div id="navbar">
        <div className="dropdown">
          <button className="menu-btn">
            Shop By Animal <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
          <div className="dropdown-content">
            <Link to="/shopby/all">Shop All</Link>
            <Link to="/shopby/dog">Shop By Dog</Link>
            <Link to="/shopby/cat">Shop By Cat</Link>
            <Link to="/shopby/fish">Shop By Fish</Link>
            <Link to="/shopby/other">Shop Other</Link>
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