import React from 'react'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Components

import Grid from '../Grid/Grid';
import Spinner from "../Spinner/Spinner";

import { useParams } from 'react-router';
import { useMovieFetch } from '../../hooks/useMovieFetch';

// Image
import NoImage from '../../images/no_image.jpg';


export default function Movie() {
  const { movieId } = useParams();
  console.log(movieId)
  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);
  return (
    <div>
      {!loading && <img src={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}/>}

    </div>
  )
}
