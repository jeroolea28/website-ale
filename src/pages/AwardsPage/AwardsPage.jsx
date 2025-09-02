import { Container, Row, Col, Card } from "react-bootstrap";
import "./AwardsPage.css";

import trophyImg from "./../../assets/Enol1.jpg";
import medalImg from "./../../assets/chef.jpg";

const recognitions = [
  {
    title: "Recognition by Mayor",
    description: "Awarded for outstanding academic performance in 2024.",
    image: trophyImg,
  },
  {
    title: "Unit Commander Culver",
    description: "Recognized for exceptional dedication to enduro motorbiking.",
    image: medalImg,
  },
  {
    title: "1st Place at Physics Fair",
    description: "Honored for live guitar performance at the local festival.",
    image: trophyImg,
  },
  {
    title: "Student Council",
    description: "Acknowledged for leading youth sports initiatives.",
    image: medalImg,
  },
  {
    title: "Songwriting Contest",
    description: "Placed top 3 in a regional songwriting competition.",
    image: trophyImg,
  },
  {
    title: "Team Player Award",
    description: "For contributing to group success in both academics and sports.",
    image: medalImg,
  },
];

const RecognitionsPage = () => {
  return (
    <Container className="py-5 recognitions-page">
      <h2 className="text-center mb-5">Recognitions & Awards</h2>
      <Row className="g-4">
        {recognitions.map((item, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecognitionsPage;
