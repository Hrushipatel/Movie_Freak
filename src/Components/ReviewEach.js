import {useNavigate, useParams} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from "@mui/material";
import axios from "axios";
import "./Hero.css";
import Header from "./Header";


function ReviewEach({movies}) {
    const { imdbId } = useParams();
    const [reviewText, setReviewText] = useState('');
    const [selectedMovie,setSelectedMovie]=useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const movie = movies.find((movie) => movie.imdbId === imdbId);
        if (movie) {
            setSelectedMovie(movie);
        }
    }, [imdbId, movies]);
    const postReviews= async() => {
        try {
            const response = await axios.post("/api/v1/reviews",{
                "reviewBody":`${reviewText}`,
                "imdbId":`${imdbId}`,
            });
            console.log(response.data);
            navigate('/');

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="review-page">
             <Header/>
             <div className="review-container">
                     <div className="review-pos-container">
                        <h2>{selectedMovie.title}</h2>
                        <img src={selectedMovie.poster} alt={selectedMovie.title} className="review-poster" />
                     </div>
                    <Form onSubmit={postReviews}>
                        <Form.Group className="mb-3" controlId="formBasicReview">
                            <Form.Label className="text-center">Reviews</Form.Label>
                            <br/>
                            <Form.Control as="textarea" rows={10}
                                          placeholder="Please Review The Movie"
                                          value={reviewText} // Use the state variable as the input value
                                          onChange={(e) => setReviewText(e.target.value)}
                            />
                            <br/>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                        {selectedMovie.reviews && selectedMovie.reviews.length > 0 && (
                            <div className="review-list">
                                <h2>Reviews From People</h2>
                                <ul>
                                    {selectedMovie.reviews.map((review, index) => (
                                        <li key={index}>{review.body}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </Form>
             </div>
        </div>
    );
}

export default ReviewEach;