import React, { useContext, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../App';
import mapImg from "../fakeData/Images/Map.png";
import people from "../fakeData/Images/peopleicon.png";
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
      <Row  className="mt-5" >
        <Col  md={4}>
          {myDestination.from && myDestination.to 
          ? <div style={{ backgroundColor: "#f8f5f1"}}>
              <div style={{color: "#fff", backgroundColor: "#f14668",borderRadius: "10px", padding:"5px 5px 0"}}>
                <h4 >{myDestination.from}</h4>
                <h5 style={{color: "#000"}}>To</h5>
                <h4 >{myDestination.to}</h4>
              </div>
              <div className="d-flex pl-2">
                <Image className="mr-3" height="50px" variant="top" src={destination.image} alt=""></Image>
                <h6 className="mt-3 ml-2">{transportName}</h6>
                <Image className="mt-3 ml-2" height="25px" src={people}></Image><span className="mt-2 ">2</span>
                <h6 className="mt-3 ml-5">$50</h6>
              </div>
              <div className="d-flex pl-2">
                <Image className="mr-3" height="50px" variant="top" src={destination.image} alt=""></Image>
                <h6 className="mt-3 ml-2">{transportName}</h6>
                <Image className="mt-3 ml-2" height="25px" src={people}></Image><span className="mt-2 ">1</span>
                <h6 className="mt-3 ml-5">$30</h6>
              </div>
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
          <Image align="right" className="w-75" fluid src={mapImg}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;