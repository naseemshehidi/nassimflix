import React, { Component, useState } from "react";
import MovieList from "./MovieList";
import moviesData from "../data";

const Main = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleTitleFilterChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingFilterChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase())
    )
    .filter(
      (movie) =>
        movie.rating.toString().startsWith(ratingFilter.toString()) ||
        ratingFilter === ""
    );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <hr className="my-4" />
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

export default Main;
