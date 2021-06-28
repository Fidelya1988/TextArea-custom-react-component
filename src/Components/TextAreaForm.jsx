import styles from './textArea.module.css'
import RenderResultArea from './RenderResultArea/RenderResultArea'
import { useState } from 'react'

export const TextareaForm = () => {
  const textStyle = {
    fontStyle: 'normal',
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'normal',
    fontSize: '14px',
    // link: false
  }
  const [result, setResult] = useState('Hello!')
  const [resultStyle, setResultStyle] = useState(textStyle)
  const [isStyle, setIsStyle] = useState(false)
  const handle = (prop, value, event) => {
    setResultStyle({ ...resultStyle, [prop]: value })
    resultStyle[prop] !== textStyle[prop] &&
      !event &&
      setResultStyle({ ...resultStyle, [prop]: textStyle[prop] })
  }

  const handlerSettings = () => {
    setIsStyle(!isStyle)
  }

  const display = isStyle ? 'flex' : 'none'
  const backgroundColor = !isStyle ? '' : 'rgba(0, 0, 0, 0.288)'

  return (
    <div className={styles.container}>
      <form style={{ margin: '0 auto' }} onSubmit={() => {}}>
        <div className={styles.all}>
          <span>
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
            <textarea
              className={styles.textarea}
              onChange={(e) => setResult(e.target.value)}
              style={resultStyle}
              placeholder={'type...'}
            />

            <button type="submit">Submit</button>
          </span>
        </div>
        <RenderResultArea text={result} style={{ ...resultStyle }} />
      </form>
    </div>
  )
}
