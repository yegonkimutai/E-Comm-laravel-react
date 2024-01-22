import React from 'react'
import { Container, Nav, Navbar}  from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
   <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">E-Comm</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-wrapper"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
              localStorage.getItem('user-info') ?
              <>
                <Link to='/add'>Add Products</Link>
                <Link to='/update'>Update Products</Link>
              </>
              :
              <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default Header