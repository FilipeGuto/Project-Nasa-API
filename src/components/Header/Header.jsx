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
          <p>Astronomy</p>
          <div className="subItens">
          <span>|</span>
            <h3>
              <Link to="/" className="Link">
                Página inicial
              </Link>
            </h3>
            <span>|</span>
            <h3>
              <Link to="/picture-day" className="Link">
                Foto do dia
              </Link>
            </h3>
            <span>|</span>
            <h3>
              <Link to="/desenvolvedor" className="Link">
                Desenvolvedor
              </Link>
            </h3>
            <span>|</span>
          </div>
        </div>
      </header>
    </>
  );
}
