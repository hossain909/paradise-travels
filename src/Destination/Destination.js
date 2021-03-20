import React, { useContext, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../App';
import fakeData from "../fakeData/transportData";
import "./Destination.css";

const Destination = () => {
  const {transportName} = useParams()
  const [myDestination, setMyDestination] = useState({})
  const [destination,setDestination] = useState({
    from: "",
    to: "",
    image: ""
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const handleBlur = (e) =>{
   let validDestination = true
   if(e.target.name === "from"){
     validDestination = e.target.value
   }
   if(e.target.name === "to"){
     validDestination = e.target.value
   }
    if (validDestination){
      const myDestination = {...destination}
      myDestination[e.target.name] = e.target.value
      setDestination(myDestination)
    }
  }
  const handleDestination = () =>{
    const imgData = fakeData.find(item => item.name === `${transportName}`)
    const img = imgData.image
    const newDestination = {...myDestination}
    newDestination.image = img
    setDestination(newDestination)
    setMyDestination(destination)
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          {myDestination.from && myDestination.to 
          ? <div>
              <p>{myDestination.from}</p>
              <p>{myDestination.to}</p>
              <h3>{transportName}</h3>
              <Image height="50px" variant="top" src={destination.image} alt=""></Image>
            </div>
          : <form>
              <label htmlFor="Pick From">Pick From</label>
              <input onBlur={handleBlur} type="text" name="from" placeholder="Start" />
              <label htmlFor="Pick From">Pick To</label>
              <input onBlur={handleBlur} type="text" name="to" placeholder="End" />
              <input onClick={handleDestination} type="button" value="Search" />
            </form>
          }
          
        </Col>
        <Col md={8}>
          <Image className="w-75 ml-5" fluid src="https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress-india/2019/10/google-maps.jpg"></Image>
        </Col>
      </Row>
      {/* <Image height="50px" variant="top" src={myDestination.image} alt=""></Image> */}
    </Container>
  );
};

export default Destination;