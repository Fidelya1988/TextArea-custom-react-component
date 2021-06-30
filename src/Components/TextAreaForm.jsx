import styles from './textArea.module.css'
import RenderResultArea from './RenderResultArea/RenderResultArea'
import { useState } from 'react'
import { TextStyleButtons } from './TextStylesButtons'

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

  console.log(textStyle)
  console.log(resultStyle)

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
            <TextStyleButtons handle={handle} display={display} />
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
