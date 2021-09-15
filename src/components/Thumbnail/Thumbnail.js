import React from 'react'
import { Image } from './Thumbnail.style';


export default function Thumbnail({ image, movieId, clickable }) {
  return (
    <div>
          <Image src={image} alt='movie-thumb' />

    </div>
  )
}
