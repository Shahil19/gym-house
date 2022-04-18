import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate('/register');
    }

    const handleLogout = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">PUMP HOUSE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="/home#service">Service</Nav.Link>
                            <Nav.Link href="/home#instructor">Instructors</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            
                        </Nav>
                        <Nav>

                            <Nav.Link>
                                {
                                !user 
                                &&
                                <button onClick={navigateToRegister} type="button" className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                                }
                            </Nav.Link>

                            <Nav.Link  >
                                {
                                user ?
                                    <button onClick={handleLogout} className="text-white border-2 border-r-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Logout</button>
                                    :
                                    <Link to='/login' className="text-white border-2 border-r-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Login</Link>
                                }  
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;


// import React from 'react';


// const MyHeader = () => {
//     return (
        
//     );
// };

// export default MyHeader;
