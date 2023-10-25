import React from "react";
import './Hero.css';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import ReactPlayer from 'react-player';

const Hero = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <div>Loading Movies....</div>;
    }
    return (
        <div className ='movie-carousel-container'>
            <Carousel>
                {
                    movies?.map((movie) =>{
                        return(
                            <Paper key={movie.imdbId}>
                                <div className = 'movie-card-container'>
                                    <div className="movie-card">
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt={movie.title} />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                                <h5>{movie.releaseDate}</h5>
                                           </div>
                                        </div>
                                        <div>
                                            <ReactPlayer url={movie.trailerLink}/>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Hero;
