import React from "react";
import { useState, useEffect } from "react";
import { useHomeFetch } from "../hooks/useHomeFetch";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";

export default function Home() {
  const { state, loading, error } = useHomeFetch();
  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header='Popular Movies'>
        {state.results.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </Grid>
    </>
  );
}
