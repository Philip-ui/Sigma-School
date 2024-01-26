import { Col, Image, Row, Button, Modal, Form, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentToPost } from "../features/posts/postsSlice"; // Make sure to import the action from your reducer

export default function AddPostComments({currentPost, handleClose, showCommentModal}) {
    const dispatch = useDispatch();   
    const [commentText, setCommentText] = useState("");// Track the comment text    
    const [comments, setComments] = useState(currentPost.comments || []); // Initialize comments with existing comments

  //  const handleCloseComment = () => {
        // Close the modal and reset the comment text
   //     setShowCommentModal(false);
   //     setCommentText("");        
   // };

    const addComment = (e) => {
        e.preventDefault();
        if (commentText.trim() === "") {
            return; // Don't add empty comments
          }
      
          const newComment = {
            content: commentText,
            // You can add additional properties to the comment if needed
          };
      
          // Update the local state with the new comment
          setComments([...comments, newComment]);
      
          // Dispatch the addCommentToPost action to add the comment to the current post in your Redux store
          dispatch(addCommentToPost({ postId: currentPost.id, comment: newComment }));
      
          handleClose();
    };

    return (
        <Modal show={showCommentModal} onHide={handleClose} size="lg">
            <Modal.Header>
                <Modal.Title>Add Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6}>
                        {/* Display the image on the left */}
                        <Image src={currentPost.image} fluid />
                    </Col>
                    <Col md={6}>
                        {/* Display comments on the right */}
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Enter your comment"
                            />
                        </Form.Group>
                        <br />                           
                        <Button variant="primary" onClick={addComment}>
                            Add Comment
                        </Button>
                            <br />
                            <br />
                        <ListGroup>
                            {comments.map((comment, index) => (
                                <ListGroup.Item key={index}>{comment.content}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>                
            </Modal.Footer>
        </Modal>
    );
}
