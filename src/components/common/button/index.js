import React from "react";
import styles from "./LightButton.module.css";

const LightButton = ({ disabled, onClick, text }) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={styles.lightButton}
      >
        {text}
      </button>
    </div>
  );
};

export default LightButton;
