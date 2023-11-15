import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://flowerknows.co/cdn/shop/files/banner_3.jpg?v=1693219324&width=2000"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://flowerknows.co/cdn/shop/files/banner_c4280b42-8d5e-4fc9-8334-d1c227a05025.jpg?v=1699581452&width=2000"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://flowerknows.co/cdn/shop/files/banner_4da64ea9-1661-44c9-9f72-5ef51d4b2a95.jpg?v=1699581452&width=2000"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
