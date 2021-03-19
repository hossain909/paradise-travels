import React, { useContext } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { UserContext } from '../App';
import "./Destination.css";

const Destination = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <Container>
      <Row className="mt-5">
        <Col md={5}>
          <form>
            <label htmlFor="Pick From">Pick From</label>
            <input type="text" name="From" id=""/>
            <label htmlFor="Pick From">Pick To</label>
            <input type="text" name="From" id=""/>
            <input type="button" value="Search"/>
          </form>
        </Col>
        <Col md={7}>
          <Image fluid src="https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress-india/2019/10/google-maps.jpg"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;