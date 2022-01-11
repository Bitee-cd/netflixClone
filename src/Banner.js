import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {

    const[movie,setMovie]=useState([]);

    useEffect(() => {
        async function fetchData(){
            const request =await axios.get(requests.fetchNEtflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1 )
            ])

            return request
        }

        fetchData()
    }, [])
    console.log(movie)
    return (
        <header className="banner"
        style={{
            backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundSize : `cover`
        }}
        >
            <div className="banner__contents">
               
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
               <div className="banner__buttons">
                <button className="banner__button">Play me</button>
                <button className="banner__button">My List</button>
               </div>
              <h1 className="banner__description">
                  {movie?.overview}
              </h1>
            </div>
            <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
