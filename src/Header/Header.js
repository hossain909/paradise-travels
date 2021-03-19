import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">City Riders</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
          {loggedInUser.email 
            ? <h6 style={{color: "#fff",marginTop: "7px"}}>{loggedInUser.name}</h6> 
            : <Button size="sm" as={Link} to="/destination">Login</Button>
          }
      </Navbar>
    </Container> 
  );
};

export default Header;