import React, { useState } from "react";
import LightButton from "../common/button";
import styles from "../../styles/Core.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveButton, setActiveButton } from "../../store/buttonSlice";

const ButtonList = () => {

  const dispatch = useDispatch();
  const activeButton = useSelector(selectActiveButton);

  const handleButtonClick = (buttonText) => {
    dispatch(setActiveButton(buttonText));
  };

  return (
    <div className={styles.buttonList}>
      {["Popular", "Top Selling", "Following", "New"].map((text) => (
        <LightButton
          key={text}
          text={text}
          active={text === activeButton}
          onClick={() => handleButtonClick(text)}
        />
      ))}
    </div>
  );
};

export default ButtonList;
