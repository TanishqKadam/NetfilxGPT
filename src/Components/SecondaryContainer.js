import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  //    if(movies === null) return; //early return;

  return (
    movies.nowPlayingMovies &&
    movies.PopulerMovies &&
    movies.topRatedMovies &&
    movies.upcomingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 relative z-20 pl-8">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"TopRated"} movies={movies.topRatedMovies} />
          <MovieList title={"Populer"} movies={movies.PopulerMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          {/*
        movielist - populer
         -Moviecards * n
        movilist - trending
         -Moviecards * n
        movielsit - now playing
        */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
