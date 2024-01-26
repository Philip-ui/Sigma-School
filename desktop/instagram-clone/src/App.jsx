import { Col, Container, Row } from "react-bootstrap";
import IconButton from "./components/IconButton";
import ProfileHeader from "./components/ProfileHeader";
import { createContext, useState } from "react";
import { PROFILE_DATA } from "./data";
import ImageGrid from "./components/ImageGrid";
import ImageList from "./components/ImageList";
import UnderlineNav from "./components/UnderlineNav";
import Image from 'react-bootstrap/Image';
import AddPostModal from "./components/AddPostModal";



export const ProfileContext = createContext(null);

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return(
    <ProfileContext.Provider value={PROFILE_DATA}>
    <Row>
      <Col sm={1}
      className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
      style={{ position: "sticky", top: 0 }}>
      <IconButton isTop={true} className="bi bi-instagram"  />
      <IconButton className="bi bi-house" />
      <IconButton className="bi bi-search" />
      <IconButton className="bi bi-compass" />
      <IconButton className="bi bi-film" />
      <IconButton className="bi bi-chat" />
      <IconButton className="bi bi-heart" />
      <IconButton className="bi bi-plus-square" onClick={openModal}/>
      <Image src="./profile-image.jpg" roundedCircle={true} style={{ width: "30px", height: "30px" }}/>
      <IconButton isBottom={true}  className="bi bi-list" />          
      </Col>
      <Col sm={11}>
        <Container>
          <ProfileHeader />
          <ImageList />
          <UnderlineNav />
          <ImageGrid /> 
          <AddPostModal show={showModal} handleClose={closeModal}  />       
        </Container>
      </Col>
    </Row>
    </ProfileContext.Provider>
  )
}
