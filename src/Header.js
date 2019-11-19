import React from 'react';
import zalandoLogo from './Zalando-Logo.png';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <ul className="listOption">
          <Link to="/femme">
            <li>FEMME</li>
          </Link>
          <li>HOMME</li>
          <li>ENFANT</li>
        </ul>
        <Link className="zalandoLink" to="/">
          <div className="containerLogoZalando">
            <img className="zalandoLogo" src={zalandoLogo} alt="LOGO ZALANDO" />
          </div>
        </Link>
      </div>
    </div>
  );
};
