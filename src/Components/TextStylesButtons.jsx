import styles from './textArea.module.css'


export const TextStyleButtons =(props)=> {
  return(
    <div>
      <div className={styles.settings} style={{ display }}>
              <select
                name="size"
                id="size"
                className={styles.btn}
                onChange={(e) => {
                  handle('fontSize', e.target.value)
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
                className={styles.btn}
                onChange={(e) => {
                  handle('color', e.target.value)
                }}
              />
              <button
                id="bold"
                type="button"
                name="bold"
                className={styles.btn}
                onClick={() => {
                  handle('fontWeight', '1000')
                }}
              >
                B
              </button>
              <button
                id="cursiv"
                type="button"
                name="cursiv"
                className={styles.btn}
                onClick={() => {
                  handle('fontStyle', 'italic')
                }}
              >
                C
              </button>
              <button
                type="button"
                name="emphatic"
                className={styles.btn}
                onClick={() => {
                  handle('textDecoration', 'underline')
                }}
              >
                E
              </button>
              <button className={styles.btn} type="button" name="link">
                link
              </button>
            </div>
            <button
              type="button"
              className={styles.btnSettings}
              onClick={handlerSettings}
              style={{ backgroundColor }}
            >
              {isStyle ? '˅' : '˄'}
            </button>
           
    </div>
  )
}
