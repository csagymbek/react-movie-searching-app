import React, { Component } from "react";
import "./App.css";
import { MovieInfo } from "./components/MovieInfo";
import { MovieList } from "./components/MovieList";
import { Nav } from "./components/Nav";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  viewMovieInfo = (id) => {
    const filteredMovies = this.state.movies.filter((movie) => movie.id === id);
    const newCurrentMovie =
      filteredMovies.length > 0 ? filteredMovies[0] : null;
    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        {this.state.currentMovie ? (
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
          />
        ) : (
          <div>
            <Search
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />

            <MovieList
              movies={this.state.movies}
              viewMovieInfo={this.viewMovieInfo}
            />
            {this.state.totalResults > 20 &&
              this.state.currentMovie === null && (
                <Pagination
                  numberPages={numberPages}
                  nextPage={this.nextPage}
                  currentPage={this.state.currentPage}
                />
              )}
          </div>
        )}
      </div>
    );
  }
}
