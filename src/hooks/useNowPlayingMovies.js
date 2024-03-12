import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/movieSlice'
import { useEffect } from 'react'
const useNowPlayingMovies = ( )=>{
    
    //fetch data from tmdb api and update movies store
   const dispatch = useDispatch();

   const getNowPlayingMovies = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
     const json = await data.json();
 
     console.log(json.results);
     dispatch(addNowPlayingMovies(json.results));
     //why api is called 2 times ?
     //bcause of react.strict mode in index.js file if we remove this it will call only once -> when we make build for production this will happen only once
     //react does some extra rendering for checking some incosistancy between components.
   }
 
   useEffect(()=>{
   getNowPlayingMovies();
   },[]);
}

export default useNowPlayingMovies;