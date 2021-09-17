import React from 'react'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Components

import Grid from '../Grid/Grid';
import Spinner from "../Spinner/Spinner";
import BreadCrumb from '../../BreadCrumb/BreadCrumb';
import MovieInfo from '../../MovieInfo/MovieInfo';

import { useParams } from 'react-router';
import { useMovieFetch } from '../../hooks/useMovieFetch';

// Image
import NoImage from '../../images/no_image.jpg';


export default function Movie() {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  )
}
