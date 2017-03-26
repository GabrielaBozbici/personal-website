import React, {Component} from 'react';
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class TopBar extends Component{
    componentWillMount() {
        console.log('component did mount');
    }

    scrollTo() {
        scroll.scrollTo(100)
    }
    
    render(){
        
        return(
            <div className="wrapTop">
                <div className="TopBar">
                    <button className="button" onClick={this.scrollTo.bind(this)}>About</button>
                    <button className="button">Resume</button>
                    <button className="button">Photos close to my heart</button>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}