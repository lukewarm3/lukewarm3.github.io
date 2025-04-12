/*
	Installed from https://reactbits.dev/default/
*/

import React from "react";
import "./ShinyText.css";

const ShinyText = ({ text, disabled = false, speed = 3, className = "" }) => {
  return (
    <span
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      data-text={text}
      style={{
        animationDuration: `${speed}s`,
        fontSize: "inherit",
        fontWeight: "inherit",
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
