import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../feature/cart/cartSlice";

const Delete = ({ itemId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch the delete action with itemId
    dispatch(deleteFromCart(itemId));
  };

  return (
    <div>
      <Button
        variant="danger"
        onClick={handleDelete}
        className="me-2"
      >
        Delete
      </Button>
    </div>
  );
};

export default Delete;