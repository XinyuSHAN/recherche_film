import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';
import Search from './Search';
import Button from '@material-ui/core/Button'; 
/**
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
*/
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
  /*
  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      });
  }*/
  
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
  /*
  componentDidMount() {
    this.getPopularMovies();
  }*/
  
  render() {
    const { movies, query } = this.state;
    const isSearched = query => item => !query || item.show.name.toLowerCase().includes(query.toLowerCase());
   //const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());
   if(movies) {
    return (
      <div className="app">
        <Search query={query} onInput={this.onInput} placeholder="Search" />
        <Movies movies={movies.filter(isSearched(query))} />
      </div>
    );
   }else{
      return(
      <div className="app">
          <Search query={query} onInput={this.onInput} placeholder="Search" />
          
        </div>
      )
  };
    
  }

  
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;