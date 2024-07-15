import React from "react";
import WatchedMovie from "../WatchedMovie/WatchedMovie";
const WatchedList = ({watched,onDeleteMovie}) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.movieId} onDeleteMovie={onDeleteMovie}/>
      ))}
    </ul>
  );
};

export default WatchedList;
