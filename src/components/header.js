import React from 'react';
import logo from '../logo.png';
import './header.css';
import TopNav from './header/top-nav';

export default function Header(props) {
  return (
    <header className="Game-header">
      <TopNav onRestartGame={() => props.onRestartGame()} />
      <img src={logo} className="Game-logo" alt="logo" />
      <h1 className="Game-title">HOT or COLD</h1>
    </header>
  );
}