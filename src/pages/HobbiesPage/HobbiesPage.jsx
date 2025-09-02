import { Container, Row, Col } from "react-bootstrap";
import hobbyImg from "./../../assets/Dudi.jpg";
import "./HobbiesPage.css";

const HobbiesPage = () => {
  return (
    <Container className="py-5 hobbies-page">
      <h2 className="text-center mb-5">My Hobbies</h2>

      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2">
          <img src={hobbyImg} alt="Guitar" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6} className="order-md-1">
          <p>
            <strong>Guitar</strong> — He spends hours perfecting riffs and melodies,
            constantly pushing himself to create new sounds and explore different genres.
          </p>
        </Col>
      </Row>

      <hr className="hobby-divider" />

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img src={hobbyImg} alt="Enduro Motorbiking" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}>
          <p>
            <strong>Enduro Motorbiking</strong> — On the trails, he feels at home.
            The adrenaline of speed, mud, and endurance makes this one of his favorite escapes.
          </p>
        </Col>
      </Row>

      <hr className="hobby-divider" />

      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2">
          <img src={hobbyImg} alt="Songwriting" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6} className="order-md-1">
          <p>
            <strong>Songwriting</strong> — Beyond the guitar, he channels emotions into
            lyrics, always scribbling down lines and stories that become music.
          </p>
        </Col>
      </Row>

      <hr className="hobby-divider" />

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img src={hobbyImg} alt="Sports" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}>
          <p>
            <strong>Sports</strong> — From football matches with friends to challenging
            himself in new activities, sports are part of his everyday life.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HobbiesPage;
