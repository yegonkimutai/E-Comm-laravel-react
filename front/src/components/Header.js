import React from 'react'
import { Container, Nav, NavDropdown, Navbar}  from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'));

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/register')
  }

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
          {localStorage.getItem('user-info') ? 
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          : null
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default Header