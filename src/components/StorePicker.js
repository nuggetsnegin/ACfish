import React, { Component } from 'react';
import { getFunName } from '../helpers';

//every component we have will be its own class
//needs atleast 1 method inside of it - rendder: what dom elements do I put on the page?
class StorePicker extends Component {
  myInput = React.createRef();
  //property known as goToStore - set is as an arrow function so we can bind 'this' to the store picker component
  //if you need to access 'this' in a custom method you must use arrow syntax
  goToStore = event => {
    //event object is full of information of what 'event' happened
    event.preventDefault(); //stop page from refresh/submitting
    //get text from input - without touching the DOM
    const storeName = this.myInput.current.value; //.current is react (gets input) and next .value is javascript thing
    //change the page to store/whatever the user enters - do not want to refresh just go using react router
    //storePicker is a child of Router so we can access the props because Router is the parent!
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      //only ever return ONE element, you can put as many child elements inside a parent element, cannot return sibling elements
      //the solution to that - wrap them in a React.Fragment tag!
      <form className="store-selector" onSubmit={this.goToStore}>
        {/*goToStore not calling the function - pointing to the ref of the function or else itll call on page render*/}
        <h2>Please enter a store</h2>
        {/*must used defaultValue="hello" cannot manually set to value because it must be from state*/}
        <input
          type="text"
          ref={this.myInput}
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
