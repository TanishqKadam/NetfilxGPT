import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopulerMovies from "../hooks/usePopulerMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopulerMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  //read from the store to toggle.
  const toggleGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {toggleGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
     MainCOntainer
      -trailer
      -video title
     SecondContainer
       -movieList * n 
        -Cards * n
    */}
    </div>
  );
};

export default Browse;
