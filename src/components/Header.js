import React, { Component } from 'react';

const Header = ({ tagline, age }) => (
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
      <span>{this.props.tagline}</span>{' '}
      {/*this is the component instance and .props the object inside the component*/}
    </h3>
  </header>
);
// class Header extends Component {
// }

export default Header;
