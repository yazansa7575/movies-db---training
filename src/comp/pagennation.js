import React from 'react'
import ReactPaginate from 'react-paginate';
import './pagennation.css'
import { GetMoviepages, SearchMovie, showMovie } from '../redux/action/movieAction';
import { NoneLoader, ShowLoader } from '../redux/type/TypeLoader';
import { loaderAction } from '../redux/action/loaderAction';
import { useDispatch, useSelector } from 'react-redux';
function PagennationComp() {
  const pageCount=useSelector(state => state.Movie.totalPage)
  const dispatch =useDispatch()
  const handlePageClick = (data) => {
    GetMoviepage(data.selected + 1)
  }

  // get movie page
  const GetMoviepage = async (page) => {
    dispatch(GetMoviepages(page)) ? dispatch(loaderAction(NoneLoader)) : dispatch(loaderAction(ShowLoader))
    window.scroll({
      behavior: "smooth",
      top: "0",
      left: "0",
    })
  }


  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={'pagination justify-content-center p-3'}
      pageClassName={'pagination'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      nextClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active '}
    />
  )
}

export default PagennationComp