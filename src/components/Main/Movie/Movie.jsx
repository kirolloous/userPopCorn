import React from "react";

const Movie = ({ movie, setSelectedId, indexOfMovie, selectedId }) => {
  const handleSelectedMovie = () => {
    if (indexOfMovie + 1 === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(indexOfMovie + 1);
    }
  };
  return (
    <li key={movie.id} onClick={handleSelectedMovie}>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt={`${movie.title} poster`}
      />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>📆</span>
          <span>{movie.release_date}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
