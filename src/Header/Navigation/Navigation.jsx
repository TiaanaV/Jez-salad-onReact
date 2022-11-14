import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav id="nav">
      <ul className={classes.navigationMenu}>
        <li className={classes.navigationMenuItem}>
          <a className={classes.navigationMenuLink} href="#">
            Home
          </a>
        </li>
        <li className={classes.navigationMenuItem}>
          <a className={classes.navigationMenuLink} href="#">
            Menu
          </a>
        </li>
        <li className={classes.navigationMenuItem}>
          <a className={classes.navigationMenuLink} href="#">
            Contact
          </a>
        </li>
        <li className={classes.navigationMenuItem}>
          <a className={classes.navigationMenuLink} href="#">
            About us
          </a>
        </li>
      </ul>
      {/* <button id="nav-button" className="navigation-menu-button">
        <img
          id="nav-button-img"
          src="/assets/menu-open.svg"
          alt="menu-open"
          width="45px"
        />
      </button> */}
    </nav>
  );
};

export default Navigation;
