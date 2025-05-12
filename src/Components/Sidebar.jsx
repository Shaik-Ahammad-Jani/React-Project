import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faVideo, faGamepad, faPuzzlePiece, faRobot, faLaptopCode, faCaretUp } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css"; // Custom styling
import './Sidenav.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [footerExpanded, setFooterExpanded] = useState(false);

  return (
    <div className={`d-flex flex-column bg-dark text-light p-3 ${isExpanded ? "expanded" : "collapsed"}`} id="nav-bar">
      {/* Navbar Header */}
      <div className="d-flex align-items-center justify-content-between">
        {/* <a href="https://codepen.io" target="_blank" className="text-light text-decoration-none fs-4">
          C<FontAwesomeIcon icon={faCodepen} />DEPEN
        </a> */}
        <button className="btn btn-sm btn-outline-light" id="menu" onClick={() => setIsExpanded(!isExpanded)}>
          ☰
        </button>
      </div>
      <hr className="bg-secondary" />

      {/* Navbar Content */}
      <div className="nav-content">
        <div className="nav-button">
          <Link to='/syntax'>
          <FontAwesomeIcon icon={faCode} title="Syntax" /> <span>Syntax</span>
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/videos'>
          
          <FontAwesomeIcon icon={faVideo} title="Videos" /> <span>Videos</span>
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/puzzels'>
          
          <FontAwesomeIcon icon={faGamepad} title="Games" /> <span>Games</span>
          </Link>
        </div>
        <hr className="bg-secondary" />
        <div className="nav-button">
          <Link to='/puzzels'>
          <FontAwesomeIcon icon={faPuzzlePiece} title="Puzzels" /> <span>Puzzels</span>
          
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/AI'>
          
          <FontAwesomeIcon icon={faRobot} title="AI" /> <span>AI</span>
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/compailer'>
          <FontAwesomeIcon icon={faLaptopCode} title="Compailer" /> <span>Compailer</span>
          </Link>
        </div>
        {/* <div className="nav-button">
          <FontAwesomeIcon icon={faMagic} /> <span>Spark</span>
        </div>
        <hr className="bg-secondary" />
        <div className="nav-button">
          <FontAwesomeIcon icon={faGem} /> <span>CodePen Pro</span>
        </div> */}
      </div>
      
      {/* Navbar Footer */}
      {/* <div className={`nav-footer bg-secondary p-2 ${footerExpanded ? "expanded" : "collapsed"}`}>
        <div className="d-flex align-items-center">
          <img
            src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
            alt="User Avatar"
            className="rounded-circle me-2"
            width="40"
          />
          <div>
            <a href="https://codepen.io/uahnbu/pens/public" className="text-light text-decoration-none">uahnbu</a>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Admin</div>
          </div>
          <button className="btn btn-sm btn-outline-light ms-auto" onClick={() => setFooterExpanded(!footerExpanded)}>
            <FontAwesomeIcon icon={faCaretUp} className={footerExpanded ? "rotate-180" : ""} />
          </button>
        </div>
        {footerExpanded && (
          <div className="mt-2 text-muted" style={{ fontSize: "0.8rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
