import React, {Component} from 'react';
import Photo1 from '../assets/me.jpg';
import Photo2 from '../assets/jaguar.jpg';
import Photo3 from '../assets/flowers.jpg';
import Photo4 from '../assets/carved.jpg';
import Photo5 from '../assets/prague.jpg';
import Photo6 from '../assets/vienna.jpg';
import Photo7 from '../assets/rome.jpg';



export default class PhotosDear extends Component{
    render(){
        return(
               <div className="PhotosDear">
                <div className="responsive">
                <div className="img">
                    <img src={Photo1} />
                    {/*<div className="desc">Add a description of the image here</div>*/}
                </div>
                <div className="img">
                    <img src={Photo5} />
                </div>
                <div className="img">
                    <img src={Photo3} />
                </div>
                <div className="img">
                    <img src={Photo4} />
                </div>
                <div className="img">
                    <img src={Photo2} />
                </div>
                <div className="img">
                    <img src={Photo6} />
                </div>
                <div className="img">
                    <img src={Photo7} />
                </div>
                <div className="img">
                    <img src={Photo3} />
                </div>
                </div>
               </div>
           
        )
    }
}

