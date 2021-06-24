import styles from "./textArea.module.css";
import RenderResultArea from "./RenderResultArea/RenderResultArea";
import { useState } from "react";

export const TextareaForm = () => {
  const textStyle = {
    fontStyle: "normal",
    color: "black",
    textDecoration: "none",
    fontWeight: "normal",
    fontSize: "14px",
    // link: false
  };
  const [result, setResult] = useState("Hello!");
  const [resultStyle, setResultStyle] = useState(textStyle);

  const handle = (prop, value, event) => {
    setResultStyle({ ...resultStyle, [prop]: value });
    resultStyle[prop] !== textStyle[prop] &&
      !event &&
     setResultStyle( {...resultStyle, [prop]: textStyle[prop] }
    )}

  return (
    <div>
      <form style={{ margin: "0 auto" }} onSubmit={() => {}}>
        <div className={styles.all}>
          <div className={styles.settings}>
            <select
              name="size"
              id="size"
              className={styles.size}
              onChange={(e) => {
                handle("fontSize", e.target.value, e);
              }}
            >
              <option>10px</option>
              <option>12px</option>
              <option>14px</option>
              <option>16px</option>
              <option>20px</option>
            </select>
            <input
              id="color"
              type="color"
              name="color"
              // className={styles.color}
              onChange={(e) => {
                handle("color", e.target.value, e);
              }}
            />
            <button
              id="bold"
              type="button"
              name="bold"
              className={styles.bold}
              onClick={() => {
                handle("fontWeight", "1000");
              }}
            >
              B
            </button>
            <button
              id="cursiv"
              type="button"
              name="cursiv"
              className={styles.cursiv}
              onClick={() => {
                handle("fontStyle", "italic");
              }}
            >
              C
            </button>
            <button
              type="button"
              name="emphatic"
              className={styles.emphatic}
              onClick={() => {
                handle("textDecoration", "underline");
              }}
            >
            E
            </button>
            <button type="button" name="link">
              link
            </button>
            <input type="file" name="download" />{" "}
          </div>
          <div>
            <textarea
              className={styles.textarea}
              onChange={(e) => setResult(e.target.value)}
              style={resultStyle}
              placeholder={"type..."}
            />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <RenderResultArea text={result} style={{ ...resultStyle }} />
    </div>
  );
};
