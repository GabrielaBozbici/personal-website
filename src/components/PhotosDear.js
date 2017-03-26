import React, {Component} from 'react';
import Photo1 from '../assets/coffeE.jpg';
import Photo2 from '../assets/winterMariselE.jpg';
import Photo3 from '../assets/italianFoodE.jpg';
import Photo4 from '../assets/italiancoffeeE.jpg';
import Photo5 from '../assets/italiancoffeeE.jpg';
import Photo6 from '../assets/italiancoffeeE.jpg';
import Photo7 from '../assets/italiancoffeeE.jpg';



export default class PhotosDear extends Component{
    render(){
        return(
               <div className="PhotosDear">
                <div className="responsive">
                <div className="img">
                    <img alt="me" src={Photo1} />
                    {/*<div className="desc">Add a description of the image here</div>*/}
                </div>
                <div className="img">
                    <img alt="me" src={Photo5} />
                </div>
                <div className="img">
                    <img alt="me" src={Photo3} />
                </div>
                <div className="img">
                    <img alt="me" src={Photo4} />
                </div>
                <div className="img">
                    <img alt="me" src={Photo2} />
                </div>
                <div className="img">
                    <img alt="me" src={Photo6} />
                </div>
                <div className="img">
                    <img alt="me" src={Photo7} />
                </div>
                <div className="img">
                    <img alt="me" src={Photo3} />
                </div>
                </div>
               </div>
           
        )
    }
}

