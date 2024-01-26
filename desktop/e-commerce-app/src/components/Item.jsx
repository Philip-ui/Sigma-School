import { Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";


export default function Item({ item }) {
  const dispatch = useDispatch();
  

  function addItem() {
    return dispatch(addToCart(item));
  }

 // function handleDelete(itemId) {
 //   dispatch(deleteFromCart(itemId)); // Dispatch the delete action with itemId
  //}

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://picsum.photos/id/${item.id}/200`}
        alt={item.name}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
          <br />
          Price: {item.price}
        </Card.Text>
        <Row>
          <Col md={6} className="mb-3">
            <Button variant="primary" onClick={addItem}>
              Add to Cart
            </Button>
          </Col>          
        </Row>
      </Card.Body>
    </Card>
  );
}