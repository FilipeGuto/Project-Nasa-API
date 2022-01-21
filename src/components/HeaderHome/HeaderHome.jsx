import React from "react";
import "./HeaderHome.css";
import "../../css/basic.css";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  return (
    <>
      <header className="headerHome">
        <img className="logoHome" src="./images/nasa.png" alt="NASA" />
        <div className="itensHome">
          <div className="subItensHome">
          <span>|</span>
            <h3>
              <Link to="/" className="LinkHome">
                SPACE
              </Link>
            </h3>
            <span>|</span>
            <h3>
              <Link to="/Picture-Day" className="LinkHome">
                PICTURE DAY
              </Link>
            </h3>
            <span>|</span>
            <h3>
              <Link to="/Search" className="LinkHome">
                SEARCH
              </Link>
            </h3>
            <span>|</span>
          </div>
        </div>
      </header>
    </>
  );
}