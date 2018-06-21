import React from 'react';
import Header from './header';
import Interface from './interface';
import './game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: 'Make your guess!'
    };
  }

  submitGuess(guess) {
    guess = parseInt(guess, 10);
    const accuracy = Math.abs(guess - this.state.answer);
    let feedback;

    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number'});
      return;
    }

    if (accuracy >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (accuracy >= 30) {
      feedback = 'You\'re Cold...';
    } else if (accuracy >= 10) {
      feedback = 'You\'re Warm.';
    } else if (accuracy >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      answer: Math.floor(Math.random() * 100) + 1
    })
  }

  render() {
    const { guesses, feedback } = this.state;
    const guessCount = guesses.length;
    
    return (
      <div className="Game">
        <Header onRestartGame={() => this.restartGame()} />
        <Interface onSubmitGuess={guess => this.submitGuess(guess)} guesses={guesses}  feedback={feedback} guessCount={guessCount} />
      </div>
    );
  }
}
