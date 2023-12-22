import React from "react";
import styles from "./LightButton.module.css";

const LightButton = ({ active, disabled, onClick, text }) => {
  const buttonClasses = active 
    ? `${styles.lightButton} ${styles.activeButton}` 
    : styles.lightButton;

  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={buttonClasses}
      >
        {text}
      </button>
    </div>
  );
};

export default LightButton;
