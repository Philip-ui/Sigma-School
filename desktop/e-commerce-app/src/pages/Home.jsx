import { Container, Row, Col } from "react-bootstrap";
import Item from "../components/Item";


const items = [
  { id: 1, name: "Pen", description: "It's a pen", price: "RM10" },
  {
    id: 2,
    name: "Laptop",
    description: "I think it's a laptop",
    price: "RM1200",
  },
  { id: 3, name: "iPhone 2", description: "Might be iPhone 3", price: "RM30" },
  {
    id: 4,
    name: "Note Book",
    description: "I think it's a note book",
    price: "RM20",   
  },
  { id: 5, name: "MacBook", description: "Might be MacBook", price: "RM6000" },
  {
    id: 6,
    name: "MacBook Pro",
    description: "I think it's a Mac Book Pro",
    price: "RM10000",   
  },
  { id: 7, name: "Laptop Bag", description: "Might be Laptop Bag", price: "RM200" },
  {
    id: 8,
    name: "MacBook Air",
    description: "I think it's a MacBook Air",
    price: "RM13000",   
  },
];

export default function Home() {
//  const [updatedItems, setUpdatedItems] = useState(items);

//  const handleDelete = (itemId) => {
    // Find the item by ID and decrement its price by 1
 //   const updatedItemsList = updatedItems.map((item) => {
//      if (item.id === itemId) {
 //       const updatedPrice = parseInt(item.price.replace("RM", "")) - 1;
 //       return { ...item, price: `RM${updatedPrice}` };
//      }
 //     return item;
//    });

//    setUpdatedItems(updatedItemsList);
//  };
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col key={item.id} md={3} className="mb-3">
            <Item item={item} />            
          </Col>
        ))}
      </Row>
    </Container>
  );
}