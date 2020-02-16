import React, { Component } from 'react';

const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      Bob's{' '}
      <span className="ofThe">
        <span className="of">Animal</span>
        <span className="the">Crossing</span>
      </span>{' '}
      Fish
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>{' '}
      {/*this is the component instance and .props the object inside the component*/}
    </h3>
  </header>
);

export default Header;
