import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Components/Layout";
import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";

function App() {
    const apiEndpoint = "/api/v1/movies";  // Relative path

    const [movies, setMovies] = useState();
    const getMovies= async() => {
        try {
            const response = await axios.get(apiEndpoint);
            console.log(response.data)
            setMovies(response.data);
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path="/" element={<Home movies={movies} />} ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;