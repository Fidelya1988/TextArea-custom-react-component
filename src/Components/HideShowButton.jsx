import styles from "./textArea.module.css";
import { useState } from "react";

export const HideShowButton = ({
  backgroundColor,
  isStyle,
  handlerSettings,
}) => {
  return (
    <button
      type="button"
      className={styles.btnSettings}
      onClick={handlerSettings}
      style={{ backgroundColor }}
    >
      {isStyle ? "˅" : "˄"}
    </button>
  );
};
