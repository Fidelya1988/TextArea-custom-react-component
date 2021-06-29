import styles from "./textArea.module.css";

export const HideShowButton = ({ isStyle, handlerSettings }) => {
  const backgroundColor = !isStyle ? "" : "rgba(0, 0, 0, 0.288)";
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
