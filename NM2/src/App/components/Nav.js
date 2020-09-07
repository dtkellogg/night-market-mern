import React from "react";
import { NavLink,
  // useRouteMatch,
  // useLocation
} from "react-router-dom";
import logo from "../../img/svg/logo.svg";
import "../../index.css"

const activeStyle = {
  color: "#e62424",
  // backgroundColor: "#e62424",
  fontWeight: "bold",
  paddingBottom: "0.1rem",
  borderBottom: "1px solid #e62424",
};

export default function Nav() {

  return (
    <div>
      <nav className="nav">
        <a href='/'>
          <img src={logo} className="logo__nav" alt="logo" />
        </a>
        <ul className="nav__row">
          <li>
            <NavLink
              to="/"
              exact
              activeStyle={activeStyle}
              className="nav-link text-size-3_5 letter-spacing-sm"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={activeStyle}
              className="nav-link text-size-3_5 letter-spacing-sm"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/media"
              activeStyle={activeStyle}
              className="nav-link text-size-3_5 letter-spacing-sm"
            >
              Media
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              activeStyle={activeStyle}
              className="nav-link text-size-3_5 letter-spacing-sm"
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className="nav-link text-size-3_5 letter-spacing-sm"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
