// components/Film.js
 import React from 'react';
 import PropTypes from 'prop-types';

const Movie = props => (
  <div className="movie">
    <figure className="movie__figure">
      <img src={props.show.image.medium} className="movie__poster" />
     
      <h2 className="movie__title">{props.show.name}</h2>
    </figure>
  </div>
);

Movie.propTypes = {
  id         : PropTypes.number.isRequired,
  name      : PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
};

export default Movie;

///<figcaption>
       // <span className="movie__vote">{props.vote_average}</span>
     // </figcaption>