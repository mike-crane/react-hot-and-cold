import React from 'react';
import Header from './header';
import Interface from './interface';
import './game.css';

export default class Game extends React.Component {
  render() {
    return (
      <div className="Game">
        <Header />
        <Interface />
      </div>
    );
  }
}
