import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

   const movies = useSelector((store) => store.movies.nowPlayingMovies);

   if(movies === null) return; //early return;


  return (
    <div className=' bg-black'>
        <div className='-mt-52 relative z-20 pl-8'>
        <MovieList title={'Now Playing'} movies={movies}/>
        <MovieList title={'Trending'} movies={movies}/>
        <MovieList title={'Populer'} movies={movies}/>
        <MovieList title={'Horror'} movies={movies}/>
        {/*
        movielist - populer
         -Moviecards * n
        movilist - trending
         -Moviecards * n
        movielsit - now playing
        */ }
        </div>
    </div>
  )
}

export default SecondaryContainer