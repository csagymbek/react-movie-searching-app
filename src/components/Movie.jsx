import React from "react";

export const Movie = ({ movie, viewMovieInfo }) => {
  console.log(movie);
  return (
    <div className="col s12 m6 l3">
      <div className="card" onClick={() => viewMovieInfo(movie.id)}>
        <div className="card-image waves-effect waves-block waves-light">
          {movie.poster_path === null ? (
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
              alt=""
              style={{ width: "100%", height: "340px" }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt=""
              style={{ width: "100%", height: "340px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
