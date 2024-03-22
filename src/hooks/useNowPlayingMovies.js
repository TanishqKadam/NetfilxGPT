import { API_OPTIONS } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/movieSlice'
import { useEffect } from 'react'
const useNowPlayingMovies = ( )=>{
    
    //fetch data from tmdb api and update movies store
   const dispatch = useDispatch();

   const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

   const getNowPlayingMovies = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
     const json = await data.json();
 
    //  console.log(json.results);
     dispatch(addNowPlayingMovies(json.results));
     //why api is called 2 times ?
     //bcause of react.strict mode in index.js file if we remove this it will call only once -> when we make build for production this will happen only once
     //react does some extra rendering for checking some incosistancy between components.
   }
 
   useEffect(()=>{
    if(!nowPlayingMovies){  //initially now playing movies is null then only make api call and once movies are there then do not make api call --> memoisation.
      getNowPlayingMovies();
    }
   
   },[]);
}

export default useNowPlayingMovies;