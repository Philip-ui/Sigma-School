import Nav from 'react-bootstrap/Nav';
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function UnderlineNav() {
  const  renderUnderlineNavList = () => {
  return (
    <Col sm={12} className='d-flex justify-content-center mb-5'>
    <Nav variant="underline" defaultActiveKey="#">
      <Nav.Item className='me-5'>
        <Nav.Link href="#" className={"text-dark"}><Button variant={"light"}><i className="bi bi-grid-3x3"></i></Button> POSTS</Nav.Link>
      </Nav.Item>
      <Nav.Item className='me-5'>
        <Nav.Link className={"text-dark"} eventKey="/link1"><Button variant={"light"}><i className="bi bi-play-btn"></i></Button> REELS</Nav.Link>
      </Nav.Item>
      <Nav.Item className='me-5'>
        <Nav.Link className={"text-dark"} eventKey="/link2"><Button variant={"light"}><i className="bi bi-file-person"></i></Button> TAGGED</Nav.Link>
      </Nav.Item>
    </Nav>
    </Col>
  );
  }
  return <Row>{renderUnderlineNavList()}</Row>
}

