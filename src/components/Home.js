import React from 'react'
import { useState,useEffect } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';


export default function Home() {
  const { state, loading, error } = useHomeFetch();
  return (
    <div>
      <p>Home</p>
    </div>
  )
}


