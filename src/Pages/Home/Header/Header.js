import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import picture from '../../../Picture/logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
      const [user] = useAuthState(auth)
      const logOut = () => {
            signOut(auth)

      }
      return (
            <div className="nav-container">
                  <Navbar collapseOnSelect expand="lg">
                        <Container>

                              <Navbar.Brand href="#home">

                              </Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto text-center">
                                          <div className="nav-img">
                                                <img src={picture} alt="" />

                                          </div>


                                    </Nav>
                                    <Nav className=''>
                                          <Nav.Link as={Link} to='/' >Home</Nav.Link>
                                          
                                                {
                                                      user ? 
                                               
                                                      <>
                                                       <Nav.Link  as={Link} to='/donation' >Donation</Nav.Link>
                                                      
                                                      <Nav.Link  as={Link} to='/events' >Event</Nav.Link>
                                                      <Nav.Link as={Link} to='/blogs' >Order</Nav.Link>
                                                      </>
                                                      :
                                                      ''
                                                }


                                         
                                          {
                                                user ? <button className='logOut' onClick={logOut}>LogOut</button> :
                                                      <Nav.Link as={Link} to='/login' >login</Nav.Link>
                                          }


                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;