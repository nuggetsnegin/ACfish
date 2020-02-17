import React, { Component } from 'react';
import { getFunName } from '../helpers';
//every component we have will be its own class
//needs atleast 1 method inside of it - rendder: what dom elements do I put on the page?
class StorePicker extends Component {
  goToStore(event) {
    console.log('hello');
    //event object is full of information of what 'event' happened
    event.preventDefault(); //stop page from refresh/submitting
    console.log('going to store');
  }

  render() {
    return (
      //only ever return ONE element, you can put as many child elements inside a parent element, cannot return sibling elements
      //the solution to that - wrap them in a React.Fragment tag!
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        {/*must used defaultValue="hello" cannot manually set to value because it must be from state*/}
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
