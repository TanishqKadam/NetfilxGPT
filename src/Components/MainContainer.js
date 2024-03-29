import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    
    if(movies === null || movies === undefined) return ; //early return if there is no movie in store.

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title,overview,id} = mainMovie;

  return (
    <div className='pt-[20%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;

//this will need movie , movie title , trailer  -->data come from store. --> useSelector