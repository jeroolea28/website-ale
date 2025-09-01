import { Container, Row, Col } from "react-bootstrap";
import brotherImg from "./../../assets/Marmi.jpg"; 
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center g-4">
        <Col md={6}>
          <img
            src={brotherImg}
            alt="Alejandro's brother"
            className="img-fluid about-img"
          />
        </Col>

        <Col md={6}>
          <h2 className="mb-3">About My Brother</h2>
          <p className="about-text">
            Alejandro is passionate about sports, studying, and always pushing
            himself to the next level. He’s the type of person who’ll show up
            early, help everyone around him, and still crack a joke at the end.
            This site is a tiny window into the things he loves and the energy
            he brings to everything he does.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
