import React from "react";
import "./header.css";
import "../../css/basic.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <img className="logo" src="./images/nasa.png" alt="NASA" />
        <div className="itens">
          <div className="subItens">
          <span>|</span>
            <h3>
              <Link to="/" className="Link">
                SPACE
              </Link>
            </h3>
            <span>|</span>
            <h3>
              <Link to="/Picture-Day" className="Link">
                PICTURE DAY
              </Link>
            </h3>
            <span>|</span>
            <h3>
              <Link to="/Search" className="Link">
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
