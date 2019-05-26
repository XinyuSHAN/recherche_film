// components/Film.js
 import React from 'react';
 import PropTypes from 'prop-types';
 import no_img from '../img/no_image.png';
import {Link}  from  'react-router';
import Detail from './Detail.js';
import history from './history';

//import {hashHistory} from 'react-router';
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
      var params=this.props.object;
      //new page of detail
       // hashHistory.push('/detail' + encodeURIComponent(this.props.object))
       //global.constants = this.props.object;
       //window.props.history.push("/detail", {object: params});
      //  console.log("here!!!"+global.constants.score);
     //const w=window.open('about:blank');
     // w.location.href=`/detail`;
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