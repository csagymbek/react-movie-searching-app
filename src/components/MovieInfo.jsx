import moment from "moment";
import React from "react";

export const MovieInfo = ({ closeMovieInfo, currentMovie }) => {
  return (
    <div className="container">
      <div
        className="row"
        onClick={() => closeMovieInfo()}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <i className="fas fa-arrow-left">
          <span style={{ marginLeft: 10, fontWeight: "700" }}>BACK</span>
        </i>
      </div>
      <div className="row">
        <div className="col s12 m4">
          {currentMovie.poster_path === null ? (
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
              alt="Card"
              style={{ width: "360px ", height: "380px", borderRadius: "1rem" }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`}
              alt="Card"
              style={{ width: "360px ", height: "480px", borderRadius: "1rem" }}
            />
          )}
        </div>
        <div className="col s12 m8">
          <div className="info-container" style={{ marginLeft: "1rem" }}>
            <h4>{currentMovie.title}</h4>
            <h5>{moment(currentMovie.release_date).format("MMM Do YYYY")}</h5>
            <p>{currentMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
