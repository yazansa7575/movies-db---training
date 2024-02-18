import React from 'react'
import './load.css'
import { useSelector } from 'react-redux'

function Load() {
  const isloading = useSelector(state=>state.isloading)
  return (
    <div className='lds-hourglass ' style={{display:`${isloading}`}}></div>
  )
}

export default Load