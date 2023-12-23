import React from "react";
import "./LightButton.module.css";

const LightButton = ({ active, disabled, onClick, text }) => {
  const buttonClasses = active ? "lightButton activeButton" : "lightButton";

  return (
    <div>
      <button disabled={disabled} onClick={onClick} className={buttonClasses}>
        {text}
      </button>
    </div>
  );
};

export default LightButton;
