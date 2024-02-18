import React from 'react'
import { useEffect } from 'react'
import Card from './card'
import "./card.css"
import PagennationComp from './pagennation'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { showMovie } from '../redux/action/movieAction'
import { NoneLoader, ShowLoader } from '../redux/type/TypeLoader'
import { loaderAction } from '../redux/action/loaderAction'


function ListCard({ GetMoviepage }) {
    const dispatch = useDispatch()
    //get pupular Movie
    const [pupMovie, setPupMovie] = useState([])
    
    const data = useSelector(state => state.Movie.movie)

    useEffect(() => {
        dispatch(showMovie())
    }, [])
    useEffect(() => {
        data ? dispatch(loaderAction(NoneLoader)) : dispatch(loaderAction(ShowLoader))
        setPupMovie(data)
    }, [data])

    return (
        <>
            <div className='cardListt'>
                {pupMovie.length ? (
                    pupMovie.map((movie) => {
                        return (
                            <Card key={movie.id} movie={movie} />
                        )
                    })

                ) :
                    (
                        <h1 className='afe' style={{ color: "white", textAlign: "center", backgroundColor: "#D10404", padding: "20px", border: "black 1px chad" }}>
                            ما لقينا الفلم الي ببالك بلا فزلكة
                        </h1>
                    )
                }

            </div >
            <PagennationComp />
        </>
    )
}

export default ListCard