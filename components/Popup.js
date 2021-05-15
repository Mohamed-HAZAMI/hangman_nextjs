import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';
import classes from './style.module.css';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'YOU WON';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'GAME OVER';
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className={classes.popup_container} style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className={classes.popup}>
        <p className={classes.popup_final_message} >{finalMessage}</p>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>NEW WORD</button>
      </div>
    </div>
  )
}

export default Popup
