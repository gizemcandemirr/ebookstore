import React from "react";
import styles from "./LightButton.module.css";

const LightButton = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.lightButton}>{text}</button>
    </div>
  );
};

export default LightButton;
