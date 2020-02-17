import React, { Component } from 'react';

class Fish extends Component {
  render() {
    const { image, name, price, desc } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
        <span className="price">{price}</span>
        <p>{desc}</p>
        <button>Remove from pocket</button>
      </li>
    );
  }
}

export default Fish;
