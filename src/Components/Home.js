import React from "react";
import Hero from "./Hero";
import Header from "./Header";

const Home = ({movies})=>{
    return ( <div>
            <Header/>
            <Hero movies={movies}/>
        </div>
    )
}
export default Home;