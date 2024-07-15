import React from "react";
import Movie from "../Movie/Movie";

const ListMovie = ({ movies, setSelectedId, selectedId }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie, indexOfMovie) => (
        <Movie
          movie={movie}
          key={movie.id || movie.imdbID}
          setSelectedId={setSelectedId}
          indexOfMovie={indexOfMovie}
          selectedId={selectedId}
        />
      ))}
    </ul>
  );
};

export default ListMovie;
