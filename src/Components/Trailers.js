import React from "react";
import './Hero.css';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import ReactPlayer from 'react-player';
import Header from "./Header";
import {Link} from "react-router-dom";

const Trailers = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <div>Loading Movies....</div>;
    }
    return (
        <div className ='movie-carousel-container'>
            <Header/>
            <Carousel>
                {
                    movies?.map((movie) =>{
                        return(
                            <Paper key={movie.imdbId}>
                                <div className = 'movie-card-container'>
                                    <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})`}}>
                                        <div className="movie-detail">
                                            <div className="movie-trailer">
                                                <ReactPlayer url={movie.trailerLink}/>
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                                <h5>{movie.releaseDate}</h5>
                                                <Link to={`/Review/${movie.imdbId}`}>
                                                    <button className="body-button">Review</button>
                                                </Link>
                                            </div>
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

export default Trailers;
