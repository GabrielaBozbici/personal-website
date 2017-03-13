import React, {Component} from 'react';


export default class TopBar extends Component{
    render(){
    
        return(
            <div className="wrapTop">
                <div className="TopBar">
                    <button className="button">About</button>
                    <button className="button">Resume</button>
                    <button className="button">Photos close to my heart</button>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}