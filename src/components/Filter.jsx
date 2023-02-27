import React from "react";

const Filter = ({ onTitleFilterChange, onRatingFilterChange }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-4">Filter</h5>
        <div className="mb-3">
          <label htmlFor="titleFilterInput" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="titleFilterInput"
            onChange={onTitleFilterChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ratingFilterInput" className="form-label">
            Rating
          </label>
          <select
            className="form-select"
            id="ratingFilterInput"
            onChange={onRatingFilterChange}
          >
            <option value="">All</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
            <option value="9">9+</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
