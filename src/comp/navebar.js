import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { SearchMovie, showMovie } from '../redux/action/movieAction';
import { loaderAction } from '../redux/action/loaderAction';
import { NoneLoader, ShowLoader } from '../redux/type/TypeLoader';
import axios from 'axios';
import { api_key, basicURL } from '../redux/type/TypeMovie';
import { Link } from 'react-router-dom';

function Navebar() {
  const dispatch = useDispatch()
  const [inputSearchValue, setinputSearchValue] = useState("")
  const h1ndelSearchMovie = () => {

    if (inputSearchValue != "") {
      dispatch(SearchMovie(inputSearchValue)) ? dispatch(loaderAction(NoneLoader)) : dispatch(loaderAction(ShowLoader))
      setinputSearchValue("")
    } else if (inputSearchValue == "") {
      setTimeout(() => {
        dispatch(showMovie()) ? dispatch(loaderAction(NoneLoader)) : dispatch(loaderAction(ShowLoader))
      }, 1000)
    }

  }
  return (
    <Navbar bg="dark" expand="lg" variant='dark' className='p-0 ' >
      <Container >
        <Row >
          <Col md="2" style={{ width: "30%" }} >
            <img src='../logo.png' style={{ width: "40%" }} className='logo' />
          </Col>
          <Col md="10" className='d-flex justify-content-end align-items-center flex-wrap' style={{ width: "70%" }}>
            <Navbar.Toggle aria-controls="navbarScroll" className="my-2" style={{ height: "40px" }} />
            <Navbar.Collapse id="navbarScroll"  >
              <Form className="d-flex gap-2 w-100 py-2">
                <Form.Control
                  type="search"
                  placeholder="أبحث"
                  className="me-2"
                  aria-label="Search"
                  value={inputSearchValue}
                  onChange={(e) => {
                    e.preventDefault();
                    setinputSearchValue(e.target.value)
                  }}
                />
                <Link to={"/"} >
                  <Button onClick={() => h1ndelSearchMovie()} variant="danger" className='btn-search' style={{ backgroundColor: "#BF0707" }}>أبحث</Button>
                </Link>

              </Form>
            </Navbar.Collapse>
          </Col>

        </Row>
      </Container>
    </Navbar>
  )
}

export default Navebar