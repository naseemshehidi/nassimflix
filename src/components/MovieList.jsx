import React, { useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import moviesData from "../data";

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6 mx-auto">
          <AddMovie onAddMovie={handleAddMovie} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-6 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
            />
            
          </div>
        </div>
        <div className="col-lg-3 mx-auto">
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="Filter by rating"
              min="1"
              max="10"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            />
            
          </div>
        </div>
      </div>
      <div className="row">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
