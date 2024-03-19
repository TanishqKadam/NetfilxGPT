import React, { useRef } from "react";
import lang from "../Utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang); //en,hindi
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Movie -> search movie in tmmdb
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //calll the openai api
    console.log(searchText.current.value);
    //when we search somthing on chatgpt then it will give big result in texted format but we want only names so we can give prompt to gpt
    const gptQuery =
      "act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ", only give me names of only 5 movies,comma seperated like the example result given ahead , example Result: Gadar,Sholay,Don,Golmal,koi mil gaya";

    //use this searchtext and make api call to openai api to get movie result
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }], //content -> what to be searchd through gpt is put inside the content
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      //if result is empty then show error -> take to error page
      console.log("does not get any results ..error...!");
    }

    console.log(gptResult.choices[0]?.message?.content); //error will come like running from browser like env so open ai tells how can solve the error in that error msg
    //dangerouslyAllowBrowser: true in openai from utils
    //Padosan,Chupke Chupke,Amir Garib,Chalti Ka Naam Gaadi,Half Ticket
    const gptMovies = gptResult.choices[0]?.message?.content.split(","); //array of movies
    // [Padosan,Chupke Chupke,Amir Garib,Chalti Ka Naam Gaadi,Half Ticket]

    //for each movie search tmdb api -> find the result of movies
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie)); //for 5 movies it will call tmdb api 5 times
    //[promise , promise , promise , promise , promise] //will get promise beacuse searchmoiveTmdb is asyn function and will take some time to execute and JS does not waits for none and this will have 5 promises.

    const tmdbResults = await Promise.all(promiseArray); //when all promises are resolved

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    ); //array of array
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-500 col-span-3 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
