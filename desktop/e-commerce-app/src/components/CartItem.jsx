import { Card, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../feature/cart/cartSlice";
import { useState } from "react";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const [updatedAmount, setUpdatedAmount] = useState(item.amount);
 

  const handleAdd = () => {
    const newAmount = updatedAmount + 1;
    setUpdatedAmount(newAmount);
    dispatch(updateCartItem({ itemId: item.id, newAmount }));
  };

  const handleMinus = () => {
    if (updatedAmount > 1) {
      const newAmount = updatedAmount - 1;
      setUpdatedAmount(newAmount);
      dispatch(updateCartItem({ itemId: item.id, newAmount }));
    }
  };

  // Calculate the subtotal for the item
  const subtotal = item.amount * parseFloat(item.price.substring(2));

  return (
    <Card className="mb-2">
      <Card.Body>
        <Row>
          <Col xs={4} md={2}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/${item.id}/200`}
              alt={item.name}
            />
          </Col>
          <Col xs={8} md={6}>
            <Card.Title>              
              {item.amount} x {item.name} 
              <p>Price: RM{item.price}</p>            
            </Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Col>
          <Col xs={12} md={4}>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="outline-danger" onClick={handleMinus}>
                -
              </Button>
              <span className="mx-2">{item.amount}</span>
              <Button variant="outline-success" onClick={handleAdd}>
                +
              </Button>
            </div>
            <p>Subtotal: RM{subtotal.toFixed(2)}</p>
          </Col>          
        </Row>
      </Card.Body>
    </Card>
  );
}
