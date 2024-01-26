import { Col, Image, Row } from "react-bootstrap";

export default function ImageGrid() {    
    const imagesData = [
        { src: "../src/assets/meet-ups.jpg", alt: "Meetups", subtitle: "Meetups" },
        { src: "../src/assets/reviews.jpg", alt: "Reviews", subtitle: "Reviews" },
        { src: "../src/assets/shoutouts.jpg", alt: "Shoutouts", subtitle: "Shoutouts" },
        { src: "../src/assets/hiring.jpg", alt: "Hiring", subtitle: "Hiring" },
        { src: "../src/assets/events.jpg", alt: "Events", subtitle: "Events" },
        { src: "../src/assets/faqs.jpg", alt: "FAQs", subtitle: "FAQs" },
        { src: "../src/assets/mentors.jpg", alt: "Mentors", subtitle: "Mentors" },
      ];

    const renderImagesList = () => {
         return (
      <Col sm={12} className="d-flex justify-content-center align-items-center">
        {imagesData.map((image, index) => (
          <div key={index} className="d-flex flex-column align-items-center me-5 mb-5">
            <Image src={image.src} roundedCircle alt={image.alt} style={{ width: "90px", height: "90px" }} />
            <span className="mt-2">{image.subtitle}</span>
          </div>
        ))}
      </Col>
    );
    };
    return <Row>{renderImagesList()}</Row>
}