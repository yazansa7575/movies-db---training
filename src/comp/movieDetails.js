import React, { useEffect, useState } from 'react'
import "./movieDetails.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
function MovieDetails() {
  const basicURLImage = "https://image.tmdb.org/t/p/w500/"

  const [movie, setMovie] = useState([])

  //get movie details 
  const params = useParams()
  const getMovieDetails = async () => {
    const myMovie = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ef7e6c1680b4ef4d0425e01710d7d947`)
    setMovie(myMovie.data)

  }

  useEffect(() => {
    getMovieDetails()
  }, [])


  return (
    <div>
      <Container>

        <Row className='father-info-movie'>
          <Col md={3} className='image-father bg-'>
            <img src={basicURLImage+movie.poster_path}/>
          </Col>
          <Col md={9} className='info-movie  bg- ' >
            <p>اسم الفلم :{movie.title}</p>
            <p>تاريخ الفلم  :{movie.release_date}</p>
            <p>عدد المقيمين :{movie.vote_count}</p>
            <p>التقيم :{movie.vote_average}</p>
          </Col>
        </Row>
        <Row className='story-movie'>
          <h2>
            القصة:
          </h2>
          <p>
            {movie.tagline}
          </p>
        </Row>
        <Row className='tow-btn'>
          <Link to={"/"} style={{ width: "max-content" }}>
            <button className="btn btn-secondary" type="button" onClick={window.scroll({behavior:"smooth",top:0,left:0})}>العودة للصفحة الرئيسية </button>
          </Link>
          <a href={movie.homepage} target='_blank' style={{ width: "max-content" }}>
            <button className="btn btn-danger" type="button" >مشاهدة الفلم </button>
          </a>
        </Row>
      </Container>


    </div>
  )
}

export default MovieDetails