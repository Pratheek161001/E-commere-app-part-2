import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartProvider } from './CartContext';
import Applogo from './Applogo';
import Navbartop from './Navbar';
import Container from 'react-bootstrap/esm/Container';

function Home() {
  return (
    <>
    <CartProvider>
        <Navbartop></Navbartop>
        <Applogo></Applogo>
        <div style={{alignItems:'centre', justifyContent:'center', textAlign:'center',color:'slategray',fontFamily:'fantasy',padding:'20px',fontSize:'30px'}}>Tours...</div>
      </CartProvider>
      <Container className='d-flex justify-content-centre flex-column'>
      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Japan - jan (2024)</div>
          Tokyo, kyoto , Hiroshima
        </div>
        <Badge bg="primary" pill>
          Available tickets - 14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Australia - Dec (2024)</div>
          Tokyo, kyoto , Hiroshima
        </div>
        <Badge bg="primary" pill>
          Available tickets - 10
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Antartica - jan (2025)</div>
          Tokyo, kyoto , Hiroshima
        </div>
        <Badge bg="primary" pill>
          Available tickets - 100
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Atlantic - jun (2025)</div>
          Tokyo, kyoto , Hiroshima
        </div>
        <Badge bg="primary" pill>
          Available tickets - 1
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">America - march (2024)</div>
          New York City , Los Angelas , Miami Beach Side
        </div>
        <Badge bg="primary" pill>
        Available tickets - 2
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">India - Aug (2024)</div>
          Mumbai , Bangalore , Delhi
        </div>
        <Badge bg="primary" pill>
        Available tickets - 0
        </Badge>
      </ListGroup.Item>
      
    </ListGroup>
    
      </Container>
      <Applogo></Applogo>
      
    </>
  );
}

export default Home;