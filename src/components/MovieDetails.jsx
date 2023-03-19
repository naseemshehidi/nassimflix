import { useState } from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data';

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id == id);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={movie.posterURL} alt={movie.title} className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-4">{movie.title}</h1>
          <p className="lead">{movie.description}</p>
          <p className="mt-4">Rating: {movie.rating}</p>
          {isPlaying ? (
            <div className="embed-responsive embed-responsive-16by9 mt-4">
              <video
                className="embed-responsive-item"
                src={`/media/${movie.trailer}`}
                title={movie.title}
                controls
                autoPlay
                onEnded={handlePause}
              ></video>
            </div>
          ) : (
            <button className="btn btn-primary mt-4" onClick={handlePlay}>
              Play Trailer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;