import React from 'react';
import classes from './style.module.css';

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className={classes.word}>
      {selectedWord.split('').map((letter, i) => {
        return (
          <div className={classes.letter} key={i}>
            {correctLetters.includes(letter) ? letter.toUpperCase() : ''}
          </div>
        )
      })}
    </div>
  )
}

export default Word
