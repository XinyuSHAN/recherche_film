// components/Search.js
 import React from 'react';
 import PropTypes from 'prop-types';
 import Button from '@material-ui/core/Button'; 

const Search = props => (
  <form className="search" onInput={event => props.onInput(event.target.value)}>
    <input type="search" value={props.query} placeholder={props.placeholder} />
    <Button id ="search_button" variant='contained' color='primary'>Search</Button>
  </form>
);

Search.propTypes = {
  query      : PropTypes.string.isRequired,
  onInput    : PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

 export default Search;
