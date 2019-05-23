import React, { Component } from 'react';
import Movie from './Movie';
import './App.scss';
import { tmdbKey } from './apiKeys';

export default class App extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=' +
          tmdbKey +
          '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      );
      const movies = await res.json();
      this.setState({ movies: movies.results });
    } catch (error) {
      console.log('error', error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Hello</header>

        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
