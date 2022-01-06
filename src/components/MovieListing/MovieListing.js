import React from "react";
import Slider from 'react-slick'
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import { settings } from "../../common/settings";
import './MovieListing.scss'

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  
 
  let renderMovies, renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        
        return <MovieCard key={index} data={movie} />;
      
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
// show code 
    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        
        return <MovieCard key={index} data={show} />;
      
      })
    ) : (
      <div className="movies-error">
        <h3>{shows.error}</h3>
      </div>
    );
    // Show codes ends here
    console.log("movies",renderMovies)
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
          </div>
      </div>

      <div className="movie-shows">
        <h2>Shows</h2>
        <div className="movie-container">
       
          <Slider {...settings}>{renderShows}</Slider>
          </div>
      </div>

     
    </div>
  );
};

export default MovieListing;
