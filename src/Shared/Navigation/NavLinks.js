import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faPoll } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="nav-links__link">
        <NavLink className="nav-links__link-icon" to="/u1/places">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </li>
      <li className="nav-links__link">
        <NavLink className="nav-links__link-icon" to="/polls/new">
          <FontAwesomeIcon icon={faPoll} />
        </NavLink>
      </li>
      <li className="nav-links__link">
        <NavLink className="nav-links__link-icon" to="/auth">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
