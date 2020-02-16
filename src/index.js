import React from 'react'; //behind the scenes goes into node modules folder
//need a secondary package known as React DOM so we can render to the DOM:
import { render } from 'react-dom'; //only need 1 method, cherry pick a method from the package we only need the Render method

//every component we have will be its own class
class StorePicker extends React.Component{
    //needs atleast 1 method inside of it - rendder: what dom elements do I put on the page?
    render(){
        return <p>Wassap</p>
    }
}

//only time where we do touch the DOM and thats when we mount it to the page
render(<StorePicker />, document.querySelector('#main')); //need to give it an actual DOM element to mount too