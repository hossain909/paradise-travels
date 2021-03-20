import { Container, Row } from "react-bootstrap";
import fakeData from "../fakeData/transportData";
import TransportDetail from "../TransportDetail/TransportDetail";

const Home = () => {
  const transportData = fakeData.slice(0)
  return (
    <Container>
       <Row>
        {transportData.map(item => <TransportDetail key={item.name} transport={item}></TransportDetail>)}
       </Row>
      
    </Container>
  );
};

export default Home;