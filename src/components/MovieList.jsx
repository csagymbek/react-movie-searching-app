import React from "react";
import { Movie } from "./Movie";

export const MovieList = ({ movies, viewMovieInfo }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {movies.map((movie, i) => (
            <Movie key={i} movie={movie} viewMovieInfo={viewMovieInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};
