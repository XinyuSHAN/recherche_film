// components/Film.js
 import React from 'react';
 import PropTypes from 'prop-types';
 import no_img from '../img/no_image.png';

/*
const Movie = props => (
  <div className="movie">
    <figure className="movie__figure">
      <img src={img_src} className="movie__poster" />
      <h2 className="movie__title">{props.show.name}</h2>
    </figure>
  </div>
);
*/

class Movie extends React.Component{
     constructor(props){
              super(props)
              this.clickHandle = this.clickHandle.bind(this);
              console.log("yesssss")
          }

    clickHandle(event){
        console.log(this.props.object.score);
         const w=window.open('about:blank');
       w.location.href="www.baidu.com"
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

///<figcaption>
       // <span className="movie__vote">{props.vote_average}</span>
     // </figcaption>

     /**
const Movie = function(props)  {
  
  var img_src ;
if(props.show.image){
  img_src= props.show.image.medium
}else{
  img_src= no_img;
}
  return (
    <div id={props.show.id} className="movie" onClick={console.log('test')}>
      <figure className="movie__figure">
        <img src={img_src} className="movie__poster" />
        <h2 className="movie__title">{props.show.name}</h2>
      </figure>
    </div>
    );
}  
*/