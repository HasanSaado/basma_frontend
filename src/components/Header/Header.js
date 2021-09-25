// Libraries
import React, { useState } from 'react';

// Api calls
import { customersApi } from '../../api';

// Components
import { Navbar, Container, Nav } from 'react-bootstrap';

//Style
import './Header.scss';

function Header() {

  // State
  const [userToken, setUserToken] = useState('');

  /**
   * 
   */
  async function handleLogout() {
    let token = localStorage.getItem('token');
    setUserToken(token);
    let result = await customersApi.customerLogout({
      token: userToken
    });

    console.log(result);
    // Clear Token if Successful logout
    if ('User logged out successfully' === result.message) {
      localStorage.removeItem('token');
      window.location.reload(false);
    }
  }

  /**
   * 
   */
  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Brand className="header-logo">
            <img 
              src="/logo.svg"
              alt="logo"
              className="login-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header;