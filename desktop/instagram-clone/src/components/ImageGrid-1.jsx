import { Col, Image, Row } from "react-bootstrap";
import { ProfileContext } from "../App";
import { useContext } from "react";

export default function ImageGrid() {
    const images = useContext(ProfileContext).posts.map((post) => post.image);
    //   const images = [
  //     "https://picsum.photos/id/123/500/500",
  //     "https://picsum.photos/id/124/500/500",
  //   ];

    const renderImages = () => {
        return images.map((imageUrl, index) => (
            <Col md={4} key={index} className="mb-4">
                <Image src={imageUrl} fluid />
            </Col>
        ));
    };
    return <Row>{renderImages()}</Row>
}