import React from "react";
import classes from "./ButtonSing.module.css";

const ButtonSing = (props) => {
  return (
    <div className={classes.buttonContainer}>
      <a className={classes.button} href="#" target="_blank">
        Sing
      </a>
    </div>
  );
};

export default ButtonSing;
