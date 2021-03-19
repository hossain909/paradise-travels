import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bike from "../Images/bike.png";
import bus from "../Images/bus.png";
import car from "../Images/car.png";
import train from "../Images/train.png";

const Home = () => {
  const cardStyle = {
    width: '14rem',
    margin:"auto",
    padding: "10px",
    marginBottom:"35px", 
    textAlign: "center",
    color: "#fff",
    boxShadow: "10px 10px 94px 50px rgba(0,0,0,0.54) inset"
  }
  return (
    <Container>
        <Row className="mt-5">
          <Col>
            <Card style={cardStyle}>
              <Card.Img height="200px" variant="top" src={bike} fluid="true"/>
              <Card.Body>
              <Button variant="dark" as={Link} to="/destination" block>Bike</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <Card.Img height="200px" variant="top" src={car} fluid="true"/>
              <Card.Body>
              <Button variant="dark" as={Link} to="/destination" block>Car</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <Card.Img height="200px" variant="top" src={bus} fluid="true" />
              <Card.Body>
              <Button width="50%" variant="dark" as={Link} to="/destination" block>Bus</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <Card.Img height="200px" variant="top" src={train} fluid="true" />
              <Card.Body>
              <Button  variant="dark"  as={Link} to="/destination" block>Train</Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      </Container>
  );
};

export default Home;