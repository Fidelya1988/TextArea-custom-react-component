import styles from './textArea.module.css'
import RenderResultArea from './RenderResultArea/RenderResultArea'
import { useState } from 'react'

export const TextareaForm = () => {
  const [result, setResult] = useState('Hello!')
  const [isStyle, setIsStyle] = useState(false)
  const [resultStyle, setResultStyle] = useState({
    fontStyle: 'normal',
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'normal',
    fontSize: '14px',
    // link: false
  })

  const { color, textDecoration, fontWeight, fontSize, fontStyle } = resultStyle
  const handleClick = (prop, value) => {
    setResultStyle({ ...resultStyle, [prop]: value })
  }

  const handlerSettings = () => {
    setIsStyle(!isStyle)
  }

  const display = isStyle ? 'block' : 'none'

  return (
    <div>
      <form style={{ margin: '0 auto' }} onSubmit={() => {}}>
        <div className={styles.all}>
          <span>
            <span>
              <div className={styles.settings}>
                <div style={{ display }}>
                  <select
                    name="size"
                    id="size"
                    className={styles.size}
                    onChange={(e) => {
                      handleClick('fontSize', e.target.value)
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
                    className={styles.color}
                    onChange={(e) => {
                      handleClick('color', e.target.value)
                    }}
                  />
                  <button
                    id="bold"
                    type="button"
                    name="bold"
                    className={styles.bold}
                    onClick={() => {
                      handleClick('fontWeight', '1000')
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
                      handleClick('fontStyle', 'italic')
                    }}
                  >
                    C
                  </button>
                  <button
                    type="button"
                    name="emphatic"
                    className={styles.emphatic}
                    onClick={() => {
                      handleClick('textDecoration', 'underline')
                    }}
                  >
                    E
                  </button>
                  <button type="button" name="link">
                    link
                  </button>
                </div>
                <button
                  type="button"
                  style={{ float: 'right' }}
                  onClick={handlerSettings}
                >
                  {isStyle ? '<' : '>'}
                </button>
              </div>
              <textarea
                className={styles.textarea}
                onChange={(e) => setResult(e.target.value)}
                style={resultStyle}
                placeholder={'type...'}
              />
            </span>
            <button type="submit">Submit</button>
          </span>
        </div>
      </form>
      <RenderResultArea text={result} style={{ ...resultStyle }} />
    </div>
  )
}
