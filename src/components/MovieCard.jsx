import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title mb-0">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge bg-primary">{movie.rating}</span>

        </div>
      </div>
    </div>
  );
};
export default MovieCard;
