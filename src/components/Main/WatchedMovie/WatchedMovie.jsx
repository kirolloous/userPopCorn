import React from "react";

const WatchedMovie = ({ movie,onDeleteMovie }) => {
  
  return (
    <li key={movie.movieId}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.tmdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.year}</span>
        </p>
        <button className="btn-delete" onClick={()=>onDeleteMovie(movie.movieId)}>X</button>
      </div>
    </li>
  );
};

export default WatchedMovie;
