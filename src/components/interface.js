import React from 'react';
import './interface.css';
import Feedback from './interface/feedback';
import GuessForm from './interface/guess-form';
import GuessCount from './interface/guess-count';
import GuessHistory from './interface/guess-history';

export default function Interface() {
  return (
    <div className="interface">
      <Feedback />
      <GuessForm />
      <GuessCount />
      <GuessHistory />
    </div>
  );
}