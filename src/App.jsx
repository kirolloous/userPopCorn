import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/NavBar/SearchBar/SearchBar";
import FoundResults from "./components/NavBar/FoundResults/FoundResults";
import ListMovie from "./components/Main/ListMovie/ListMovie";
import MovieBox from "./components/MovieBox/MovieBox";
import WatchedSummary from "./components/Main/WatchedSummary/WatchedSummary";
import WatchedList from "./components/Main/WatchedList/WatchedList";
import { queryMovie } from "./api/user.services";
import Loader from "./components/Loader/Loader";
import { SelectedMovie } from "./components/SelectedMovie/SelectedMovie";
import { useEffect, useState } from "react";


export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");
  const handleCloseSelectedMovie = () => {
    setSelectedId(null);
  };
  const handleAddWatchedMovie = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.movieId !== id));
  };
  
  useEffect(() => {
    const controller = new AbortController();
    const fetchMovie = async () => {
      setIsLoading(true);
      const response = await queryMovie(query,controller);
      setMovies(response);
      setIsLoading(false);
    };
    fetchMovie();
    return (()=>controller.abort())
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <FoundResults movies={movies} />
      </NavBar>
      <Main>
        <MovieBox>
          {isLoading ? (
            <Loader />
          ) : (
            <ListMovie
              movies={movies}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          )}
        </MovieBox>
        <MovieBox>
          {selectedId ? (
            <SelectedMovie
              movie={movies[selectedId - 1]}
              handleCloseSelectedMovie={handleCloseSelectedMovie}
              onAddWatched={handleAddWatchedMovie}
              watched={watched}
              onDeleteMovie={handleDeleteWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} onDeleteMovie={handleDeleteWatched}/>
            </>
          )}
        </MovieBox>
      </Main>
    </>
  );
}
