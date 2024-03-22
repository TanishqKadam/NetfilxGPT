import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";
const useMovieTrailer = (movieId) => {
  
    const dispatch = useDispatch();


  
  //fetch trailer video -> need movieId for that   && upadting the stroe with trailer data.
  
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);

    const FilterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = FilterData.length ? FilterData[0] : json.results[0]; //if by changce there is no trailer the play 0 video from result
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
