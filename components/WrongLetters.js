import React from 'react'
import classes from './style.module.css';

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className={classes.wrong_letters_container}>
      <div>
        <div className={classes.YOU_MISSED}>
          {wrongLetters.length > 0 &&
            <h3 className={classes.YOU_MISSED_h3}>YOU MISSED:</h3>
          }
        </div>
        <div className={classes.wrong_letters_container_span}>
         {wrongLetters
            .map((letter, i) => <span key={i}>{letter.toUpperCase()}</span>)
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ' ', curr], null)
          } 
        </div>
      </div>
    </div>
  )
}

export default WrongLetters
