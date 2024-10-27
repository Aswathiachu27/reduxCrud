import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar style={{background: "#748D92",}}>
        <Container >
          <Navbar.Brand href="/Landing">

            {' '}
            Products
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header