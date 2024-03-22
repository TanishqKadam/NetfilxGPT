import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-r from from-black'>
      <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white hover:bg-opacity-80 text-black p-4 px-12 text-xl  rounded-lg'> ▶Play</button>
        <button className='bg-gray-500 hidden md:inline-block hover:bg-opacity-80 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle