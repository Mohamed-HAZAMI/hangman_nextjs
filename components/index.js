import React, { useState, useEffect } from 'react';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Popup from './Popup';
import Notification from './Notification';
import { showNotification as show } from '../helpers/helpers';
import classes from './style.module.css';



export function Index({selectedWord , word}) {


  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);



  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * word.length);
    selectedWord = word[random];
  }

  return (
    <>
    <section className={classes.root}>
      <section className={classes.container_style}>
        <div className={classes.game_container}>
          <div className={classes.body_wrong_word} >
            <div>
              <Figure wrongLetters={wrongLetters} />
            </div>
            <div>
              <WrongLetters wrongLetters={wrongLetters} />
            </div>
          </div>
          <div>
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          </div>
        </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
        <Notification showNotification={showNotification} />
      </section>
      </section>
    </>
  );
}







