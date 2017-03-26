import React, {Component} from 'react';
import Photo from '../assets/me.jpg'

export default class TopSide extends Component {
    
    render(){
     
        return(
            <div className="TopSide">
              <div className="wrap">
                   <div className="Photo">
                   <img src={Photo} alt=""/>
               </div>
               <div className="Quote">
                   <span>'Don't take life too seriously. It's not like you can get out of it alive!'</span>
                   <h6>Elbert Hubbard</h6>
               </div>
              </div>
            </div>
        )
    }
}