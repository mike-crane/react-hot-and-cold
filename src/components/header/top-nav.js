import React from 'react';

import './top-nav.css';

export default function TopNav() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="game-info">
          <a href="#">What?</a>
        </li>
        <li className="game-info">
          <a href="#">+ New Game</a>
        </li>
      </ul>
    </nav>
  );
}