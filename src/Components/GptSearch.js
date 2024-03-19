import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMAGE_URL } from '../Utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div>
        <img
          className="fixed -z-10"
          src={BG_IMAGE_URL}
          alt="bg-image"
        ></img>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
        {/*
        gptSearch bar 
        gptMovie Suggestions.
        */}
    </div>
  )
}

export default GptSearch;