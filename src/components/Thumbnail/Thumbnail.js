import React from "react";
import { Image } from "./Thumbnail.style";
import { Link } from "react-router-dom";

export default function Thumbnail({ image, movieId, clickable }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
}
