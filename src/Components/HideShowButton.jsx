import styles from "./textArea.module.css";
import { useState } from "react";

export const HideShowButton = () => {
  const [isStyle, setIsStyle] = useState(false);
  const handlerSettings = () => {
    setIsStyle(!isStyle);
  };

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
