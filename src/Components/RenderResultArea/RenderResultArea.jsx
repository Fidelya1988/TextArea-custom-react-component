import React from 'react';
import styles from './renderarea.module.css'
const RenderResultArea =(props)=> {

    return (
        <div className={styles.area}>
       <h1>Result</h1>
       <div className={styles.text} style={props.style}>
           {props.text}
       </div>
       </div> 
         
  
    )
}

export default RenderResultArea