import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "../components/CartItem";
import Delete from "../components/Delete";


export default function Cart() {
  const cart = useSelector((state) => state.cart);

  // Calculate subtotal using reduce and handle invalid prices
  const subtotal = cart.reduce((total, item) => {
    const priceValue = parseInt(item.price.substring(2));

    if (!isNaN(priceValue)) {
      total += priceValue * item.amount;
    }

    return total;
  }, 0);

  return (
    <Container>
      <h2>Your Cart:</h2>
      {cart.map((item) => (
        <Row key={item.id}>
          <Col md={6} className="mb-3">
            <CartItem item={item} />
          </Col>
          <Col md={6} className="mb-3">
            <Delete itemId={item.id} />
          </Col>
        </Row>
      ))}
      <h4>Subtotal: RM{subtotal}</h4>      
    </Container>
  );
}

