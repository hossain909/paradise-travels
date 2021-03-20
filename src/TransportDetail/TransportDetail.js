import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TransportDetail = ({ transport}) => {
  const { name, image } = transport
  console.log(typeof image);
  const cardStyle = {
    width: '14rem',
    margin: "auto",
    padding: "10px",
    marginBottom: "35px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "10px 10px 94px 50px rgba(0,0,0,0.54) inset"
  }
  return (
    <Col className="mt-5">
      <Card style={cardStyle}>
        <Image height="200px" variant="top" src={image} alt=""></Image>
        <Button className="mt-5" variant="dark" as={Link} to={"/destination/"+ name }block>{name}</Button>
      </Card>
    </Col>
  );
};

export default TransportDetail;