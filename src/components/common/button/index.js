import React from "react";
import styles from "./LightButton.module.css"

const LightButton = ({ text }) => {
  return (
    <div>
      <button className={styles.lightButton}>{text}</button>
    </div>
  );
};

export default LightButton;
