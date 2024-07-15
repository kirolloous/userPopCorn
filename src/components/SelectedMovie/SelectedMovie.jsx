import React, { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";

export const SelectedMovie = ({
  movie,
  handleCloseSelectedMovie,
  onAddWatched,
  watched,
  onDeleteMovie,
}) => {
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.movieId).includes(movie.id);
  const watchedUserRating = watched.find(
    (watchedMovie) => watchedMovie.movieId === movie.id
  )?.userRating;

  const handleAdd = () => {
    const newWatchedMovie = {
      movieId: movie.id,
      tmdbRating: Math.floor(Number(movie.vote_average)),
      year: movie.release_date,
      poster: "https://image.tmdb.org/t/p/w500/" + movie.poster_path,
      title: movie.title,
      userRating,
    };

    onAddWatched(newWatchedMovie);
    handleCloseSelectedMovie();
  };
  useEffect(() => {
    const callBack = (e) => {
      if (e.code === "Escape") {
        handleCloseSelectedMovie();
      }
    };
    document.addEventListener("keydown", callBack);
    return () => document.removeEventListener("keydown", callBack);
  }, [handleCloseSelectedMovie]);
  useEffect(() => {
    const changeTitle = async () => {
      document.title = movie.title;
    };

    changeTitle();
    return () => (document.title = "usePopCorn");
  }, [movie]);

  return (
    <div className="details">
      <header>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt={`Post of movie ${movie.title} `}
        />
        <div className="details-overview">
          <h2>{movie.title}</h2>
          <p>
            &bull;{movie.release_date} &bull;{" "}
            {movie.original_language.toUpperCase()}
          </p>
          <p>
            <span>⭐</span>
            {Math.floor(Number(movie.vote_average))} TMDB Rating
          </p>
        </div>
        <button className="btn-back" onClick={handleCloseSelectedMovie}>
          &larr;
        </button>
      </header>

      <section>
        <div className="rating">
          {!isWatched && (
            <StarRating size="24" maxRating={10} onSetRating={setUserRating} />
          )}
          {userRating && (
            <button className="btn-add" onClick={handleAdd}>
              + Add to list
            </button>
          )}
          {isWatched && (
            <>
              <p className="userRating">
                You Rated The Movie {watchedUserRating} <span>⭐</span>
              </p>
              <button
                className="btn-add"
                onClick={() => onDeleteMovie(movie.id)}
              >
                Remove from list
              </button>
            </>
          )}
        </div>
        <p>
          <em>{movie.overview}</em>
        </p>
      </section>
    </div>
  );
};
