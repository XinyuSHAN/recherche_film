import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';
import Search from './Search';
import Button from '@material-ui/core/Button'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      query: ''
    };
    
    this.onInput = this.onInput.bind(this);
  }
  
  onInput(query) {
    this.setState({
      query
    });
    
    this.searchMovie(query);
  }
  
  searchMovie(query) {
    //const url = `https://api.tvmaze.com/search/shows?q=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data
        })
      });
  }

  
  render() {
    const { movies, query } = this.state;
    const isSearched = query => item => !query || item.show.name.toLowerCase().includes(query.toLowerCase());
   //const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());
   if(movies&&movies.length!=0) {
    return (
      <div className="app">
        <Search query={query} onInput={this.onInput} placeholder="Search a movie" />
        <Movies movies={movies.filter(isSearched(query))} />
      </div>
    );
   }else{
      return(
      <div className="app">
          <Search query={query} onInput={this.onInput} placeholder="Search" />
          <div><b>There's no result yet. Please try other keywords.</b></div>
        </div>
      )
  };
    
  }

  
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;