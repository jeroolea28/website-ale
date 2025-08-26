import Carousel from "react-bootstrap/Carousel";
import img1 from "./../../assets/Dudi.jpg";
import "./Caroussel.css";

export default function Caroussel() {
  return (
    <Carousel className="ControlledCarousel" indicators={false}>
      <Carousel.Item interval={2000}>
        <img className="carousel-img" src={img1} alt="Slide 1" />
        <Carousel.Caption className="centered-caption">
          <h1 className="display-1">ALEJANDRO OLEA</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img className="carousel-img" src={img1} alt="Slide 2" />
        <Carousel.Caption className="centered-caption">
          <h1 className="display-1">ALEJANDRO OLEA</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img className="carousel-img" src={img1} alt="Slide 3" />
        <Carousel.Caption className="centered-caption">
          <h1 className="display-1">ALEJANDRO OLEA</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
