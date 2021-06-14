import './App.css';
import React, { useState, lazy, Suspense, useEffect } from 'react';
import MoviesList from './components/moviesList';
import Header from './components/header'
import { connect } from 'react-redux';

// const MoviesList= lazy(() => import('./components/moviesList'));
function App({ moviesDataFromStore, filteredMovies }) {
  return (
    <div className="block-container">
      <Header title={moviesDataFromStore.title} data={moviesDataFromStore.contentitems.content}/* onSearch={onSearch} */ />
      <MoviesList data={filteredMovies} />
      {/* <Suspense fallback={<h1>Still Loading…</h1>}>
     <MoviesList data={movies} />
     </Suspense> */}
    </div>
  );
}
const mapState = (state) => {
  console.log('state', state);
  return {
    moviesDataFromStore: state.MovieListReducer.totalMovies.page,
    filteredMovies: state.MovieListReducer.filteredMovies
  }
}


export default connect(mapState)(App);
