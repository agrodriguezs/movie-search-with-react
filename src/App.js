import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MovieList';

import './assets/css/App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = { usedSearch: false, results: [] }

  _handleResults =  (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults () {
    return this.state.results.length === 0
        ? <p>Sorry!, Results no found!</p>
        : <MovieList movies={this.state.results} />
  }

 render () {
    return (
      <div className="App">
          <Title>Search Movie</Title>
          <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults} />
          </div>
          {this.state.usedSearch
            ? this._renderResults()
            : <small>Use the form to search a movie </small>
          }
      </div>
    );
  }
}

export default App;
