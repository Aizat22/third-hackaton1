import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home2.css";

function Home2() {
  return (
    <>
    
      <div className="container-for-black-friday">
        <h1>Black Friday Offer - Coming Soon</h1>
        <h3>2023.11.15 - 2023.11.30 PST</h3>
      </div>
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://flowerknows.co/cdn/shop/files/1.gif?v=1699608447&width=2000"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://flowerknows.co/cdn/shop/files/01f0c4bd-9b03-467f-a0d7-4405a786c8bd.jpg?v=1699602245&width=2000"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home2;
