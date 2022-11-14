import React from "react";
import ButtonSing from "./ButtonSing/ButtonSing";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <Logo />
      <Navigation />
      <ButtonSing />
    </div>
  );
};

export default Header;
