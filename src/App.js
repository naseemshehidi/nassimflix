import React, { useState } from "react";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
