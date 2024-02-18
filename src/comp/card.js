import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
function Card({ movie }) {
    const basicURLImage = "https://image.tmdb.org/t/p/w500/"
    return (
        <Link to={`./movie/${movie.id}`}>

            <div className='Mycard'>
                <div className='fatherImag' >
                    <img className='img-card' src={basicURLImage + movie.poster_path} />
                </div>
                <div className='info-card'>
                    <p style={{ textAlign: "center" }}>{movie.title}</p>
                    <p style={{ textAlign: "center" }}>التقييم: {movie.vote_average}</p>
                    <p style={{ textAlign: "center" }}>اللغة الأصل: {movie.original_language} </p>
                </div>

            </div>

        </Link>
    )
}

export default Card