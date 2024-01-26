import { Col, Image, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import UpdatePostModal from "./UpdatePostModal";
import DeletePostModal from "./DeletePostModal";
import AddPostComments from "./AddPostComments";


export default function ImageGrid() {
  const posts = useSelector(state => state.posts);

  const [currentPost, setCurrentPost] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // Add state variables for the comment modal
  const [showCommentModal, setShowCommentModal] = useState(false);
  

  // Initialize like counters for each post
  const initialLikeCount = posts.reduce((countMap, post) => {
    countMap[post.id] = 0;
    return countMap;
  }, {});
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  const handleClose = () => {
    setCurrentPost(null);
    setShowUpdateModal(false);
    setShowDeleteModal(false);
    setShowCommentModal(false);
  };
  const handleShow = (post) => {
    setCurrentPost(post);
    setShowUpdateModal(true);
  }

  const handleDelete = (post) => {
    setCurrentPost(post);
    setShowDeleteModal(true);
  };

  const handleCount = (postId) => {
    // Increment the like count for the given post
    setLikeCount((prevLikeCount) => ({
      ...prevLikeCount,
      [postId]: prevLikeCount[postId] + 1,
    }));
  };

  const handleComment = (post) => {
    // Set the current post and open the comment modal
    setCurrentPost(post);
    setShowCommentModal(true);
    //setShowCommentModal(true);
  };


  //   const images = [
  //     "https://picsum.photos/id/123/500/500",
  //     "https://picsum.photos/id/124/500/500",
  //   ];


  const renderImages = () => {
    return posts.map((post) => (
      <Col md={4} key={post.id} className="mb-4">
        <Image src={post.image} fluid className="mb-2" onClick={() => handleComment(post)} />
        <Button onClick={() => handleShow(post)} variant="outline-primary">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="outline-danger" onClick={() => handleDelete(post)} className="mx-2">
          <i className="bi bi-trash"></i>
        </Button>
        <Button variant="outline-secondary" onClick={() => handleCount(post.id)} className="mx-2">
          <i className="bi bi-hand-thumbs-up"></i> {likeCount[post.id]}
        </Button>
      </Col>
    ));
  };
  return (
    <>
      <Row>{renderImages()}</Row>
      {currentPost && showUpdateModal && (
        <UpdatePostModal
          show={showUpdateModal}
          handleClose={handleClose}
          postId={currentPost.id}
        />
      )}
      {currentPost && showDeleteModal && (
        <DeletePostModal
          show={showDeleteModal}
          handleClose={handleClose}
          handleDelete={handleDelete}
          post={currentPost}
        />
      )}
      {currentPost && showCommentModal && (
        <AddPostComments
          showCommentModal={showCommentModal}
          currentPost={currentPost}
          handleClose={handleClose}
        />
      )}
    </>
  );
}