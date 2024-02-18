import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row className='logo-foter' style={{width:"33%" ,margin:"auto"}}>
                    <img src='../logo.png'  style={{width:"100%",margin:"auto"}} />
                </Row>
                <Row>
                    <span>© ONLINE MOVIE 2023 all rights reserved. Designed by MEZO SA *<a target='_blank' href='https://www.facebook.com/profile.php?id=100087187998090' style={{color:"#C10707",textDecoration:"none" ,fontWeight:"600"}}> VTMA-DP</a></span>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer