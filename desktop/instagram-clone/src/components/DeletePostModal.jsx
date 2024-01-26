import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";

export default function DeletePostModal({ show, handleClose, post }) {
    const dispatch = useDispatch();

    const handleDeletePost = () => {
        // Dispatch the deletePost action with the post's ID
        dispatch(deletePost(post.id));
        handleClose();
    };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this Post?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDeletePost(post)} className="ms-2">
          <i className="bi bi-trash3"></i>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}