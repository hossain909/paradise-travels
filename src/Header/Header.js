import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TransportContext, UserContext } from '../App';
import fakeData from "../fakeData/transportData";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [transportName, setTransportName] = useContext(TransportContext)
  const Bike = fakeData[0].name
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Paradise Travel</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mr-3" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="mr-3" as={Link} to={"/destination/" + Bike}>Destination</Nav.Link>
          <Nav.Link className="mr-3" as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link className="mr-3" as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
          {loggedInUser.email 
            ? <h6 style={{color: "#fdc600",marginTop: "7px",fontWeight: "bold"}}>{loggedInUser.name}</h6> 
            : <Button size="sm" as={Link} to={"/destination/" + Bike }>Login</Button>
          }
      </Navbar>
    </Container> 
  );
};

export default Header;