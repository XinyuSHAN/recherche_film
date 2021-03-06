// components/Film.js
 import React from 'react';
 import PropTypes from 'prop-types';
 import no_img from '../img/no_image.png';
import {Link}  from  'react-router';
import Detail from './Detail.js';
import history from './history';

class Movie extends React.Component{
     constructor(props){
              super(props)
              this.clickHandle = this.clickHandle.bind(this);
              console.log("yesssss")
          }

    clickHandle(event){
      var params=this.props.object;
      //new page of detail
   history.push({pathname: "/detail", target:"_blank", rel:"noopener noreferrer", state: {params}})

   
      }


     render(){
        var img_src ;
        var props = this.props.object;
        if(props.show.image){
          img_src= props.show.image.medium
        }else{
          img_src= no_img;
        }
          return (
            <div id={props.show.id} className="movie" onClick={() => this.clickHandle(props)}>
              <figure className="movie__figure">
                <img src={img_src} className="movie__poster" />
                <h2 className="movie__title">{props.show.name}</h2>
              </figure>
            </div>
            );
}
}



Movie.propTypes = {
  object : PropTypes.object

};

export default Movie;

