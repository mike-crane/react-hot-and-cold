import React from 'react';

import './guess-history.css';

export default function GuessHistory(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));
  
  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}