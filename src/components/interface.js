import React from 'react';
import './interface.css';
import Feedback from './interface/feedback';
import GuessForm from './interface/guess-form';
import GuessCount from './interface/guess-count';
import GuessHistory from './interface/guess-history';

export default function Interface(props) {
  const { feedback, guesses, guessCount } = props;
  return (
    <div className="interface">
      <div className="interface-container">
        <Feedback feedback={feedback} />
        <GuessForm onSubmitGuess={guess => props.onSubmitGuess(guess)} />
        <GuessCount guessCount={guessCount} />
        <GuessHistory guesses={guesses} />
      </div>
    </div>
  );
}