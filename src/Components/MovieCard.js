import React from 'react'
import { IMG_CDN } from '../Utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 px-2'>
      <img alt='movie poster' src={IMG_CDN+posterPath}></img>
    </div>
  )
}

export default MovieCard;