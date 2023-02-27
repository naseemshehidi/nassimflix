import React, { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePosterURLChange = (e) => {
    setPosterURL(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating };
    onAddMovie(newMovie);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-4">Add a Movie</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionInput" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="descriptionInput"
              rows="3"
              value={description}
              onChange={handleDescriptionChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="posterURLInput" className="form-label">
              Poster URL
            </label>
            <input
              type="text"
              className="form-control"
              id="posterURLInput"
              value={posterURL}
              onChange={handlePosterURLChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ratingInput" className="form-label">
              Rating
            </label>
            <input
              type="number"
              className="form-control"
              id="ratingInput"
              min="1"
              max="10"
              value={rating}
              onChange={handleRatingChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
