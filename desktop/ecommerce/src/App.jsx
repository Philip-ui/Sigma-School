import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SweatShorts from './assets/b-day-sweat-shorts.jpg'
import Hoodie from './assets/b-day-hoodie.jpg'
import TShirt from './assets/b-day-tee-shirt.jpg'
import Cap from './assets/b-day-cap.jpg'

function App() {
  

  return (
    <>
    <Container>
      <Row><Col className='text-center text-warning mt-5'><h1><b>KOK ONN APPAREL</b></h1></Col></Row>
      <Row>
      
          <Nav className="justify-content-center" activeKey="/home"          
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
          <Nav.Item>
            <Nav.Link className='text-secondary' href="/home"><b>MEN</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-secondary' eventKey="link-1"><b>WOMEN</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-secondary' eventKey="link-2"><b>KIDS</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-danger' eventKey="dlink-3"><b>5TH BDAY</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-secondary' eventKey="dlink-4"><b>OUR STORY</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-secondary' eventKey="dlink-5"><b>STORE LOCATOR</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-secondary' eventKey="dlink-6"><b>BULK ORDERS</b></Nav.Link>
          </Nav.Item>
        </Nav>        
    </Row>
    <hr/>
    <Row><Col className='text-secondary mt-2'><h5>EXCLUSIVE 5TH BIRTHDAY COLLECTION</h5></Col></Row>
    <Row><Col className='text-secondary mt-2'>Uniquely designed pieces, to mark our special occasion. Get free gifts & stand a chance to win exclusive prizes from our partners.</Col></Row>
    <hr/>
    <Row><Col className='mx-auto'>Product Type <Button variant="outline-secondary">T-SHIRTS</Button>{' '} <Button variant="outline-secondary">OUTERWEAR</Button>{' '}<Button variant="outline-secondary">ACCESSORIES</Button>{' '}</Col></Row>
    <Row><Col className='mx-auto mt-3'>Gender <Button variant="outline-secondary">MEN</Button>{' '} <Button variant="outline-secondary">WOMEN</Button>{' '}</Col></Row>
    <Row className='justify-content-center mt-5 mx-auto mb-5'>
    <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={SweatShorts} />
      <Card.Body>
        <Card.Title>Others | S - 2XL</Card.Title>
        <Card.Text>
          5TH B-DAY SWEAT SHORTS<br/><br/>RM69.00
        </Card.Text>
        <Button variant="success">ADD TO CART</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Hoodie} />
      <Card.Body>
        <Card.Title>Others | S - 2XL</Card.Title>
        <Card.Text>
          5TH B-DAY HOODIE PULLOVER<br/><br/>RM119.00
        </Card.Text>
        <Button variant="success">ADD TO CART</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={TShirt} />
      <Card.Body>
        <Card.Title>T-shirts | XS - 2XL </Card.Title>
        <Card.Text>
          5TH B-DAY CREW NECK TEE<br/><br/>RM59.00
        </Card.Text>
        <Button variant="success">ADD TO CART</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cap} />
      <Card.Body>
        <Card.Title>Accessories</Card.Title>
        <Card.Text>
          5TH B-DAY CAP<br/><br/>RM69.00
        </Card.Text>
        <Button variant="success">ADD TO CART</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row><Col className='mb-5'></Col></Row>
    </Container>
    </>
  )
}

export default App
