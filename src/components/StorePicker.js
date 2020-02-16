import React, { Component } from 'react'
import { render } from 'react-dom'; 

//every component we have will be its own class
//needs atleast 1 method inside of it - rendder: what dom elements do I put on the page?
class StorePicker extends Component {
    render(){
        return( //only ever return ONE element, you can put as many child elements inside a parent element, cannot return sibling elements
            //the solution to that - wrap them in a React.Fragment tag!
            <React.Fragment>
                { /* no regular html comments have to use squigglies :'( */}
                <p>fish</p>
                <form className="store-selector">
                    <h1>Please enter a store</h1>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;