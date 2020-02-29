import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faPoll,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../Context/auth-context";
import Button from "../FormElements/Button";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li className="nav-links__link">
        <NavLink className="nav-links__link-icon" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li className="nav-links__link">
          <NavLink className="nav-links__link-icon" to="/polls/new">
            <FontAwesomeIcon icon={faPoll} />
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className="nav-links__link">
          <button
            onClick={auth.logout}
            className="nav-links__link-icon nav-links__logout-btn"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li className="nav-links__link">
          <NavLink className="nav-links__link-icon" to="/auth/signin">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
