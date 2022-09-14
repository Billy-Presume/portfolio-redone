import { Carousel, Card, Image, Button } from "react-bootstrap";

import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio-section">
      <div className="portfolio-video-container">
        <video
          src={require("../../assets/videos/pexels-diva-plavalaguna-6985525.mp4")}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="portfolio-content">
        <Carousel className="carousel">
          <Carousel.Item interval={10000}>
            <div className="carousel-item-content-container">
              <div className="carousel-item-content">
                <Card className="card">
                  <Card.Header className="card-header">
                    How Social Security Works in the U.S.
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Instructional Design</Card.Title>
                    <Card.Text>
                      Designed and developed a complete course using Storyline
                      and Murf AI on how Social Security works and how the
                      Social Security number became the default ID. A
                      post-course analysis revealed that learners gained
                      in-depth knowledge of how Social Security works and how
                      benefits are calculated. Given relevant data, 98% of
                      learners accurately applied the calculation process.
                    </Card.Text>
                    <Button variant="primary">Start Course</Button>
                  </Card.Body>
                </Card>
                <Image
                  fluid
                  rounded
                  src={require("../../assets/home_images/img1.jpg")}
                  alt=""
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="carousel-item-content-container">
              <div className="carousel-item-content">
                <Card>
                  <Card.Header className="card-header">Celes</Card.Header>
                  <Card.Body>
                    <Card.Title>Web Develoment</Card.Title>
                    <Card.Text>
                      Developed a browser-consistent, responsive, and
                      user-friendly website leveraging OOP and DSA techniques
                      with The Solar System OpenData RESTful API to provide
                      valuable information about known bodies in our solar
                      system built using React, React Router (with Lazy
                      Loading), Styled Components, Sass, a mix of Flex-box and
                      Grid, Jest for testing, and Git for version control.
                    </Card.Text>
                    <Button variant="primary">Go to cite</Button>
                  </Card.Body>
                </Card>
                <Image
                  fluid
                  rounded
                  src={require("../../assets/home_images/img2.jpg")}
                  alt=""
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="carousel-item-content-container">
              <div className="carousel-item-content">
                <Card>
                  <Card.Header className="card-header">Barter</Card.Header>
                  <Card.Body className="card-body">
                    <Card.Title className="card-title">
                      Mobile Application
                    </Card.Title>
                    <Card.Text className="card-text">
                      Architected and developed a cross-platform mobile
                      application that made it possible for students to buy,
                      sell, or trade textbooks with other students on campus
                      using React Native, JavaScript, AWS Amplify, AppSync,
                      PostgreSQL, and DynamoDB. Barter aims to bridge the gap
                      between students receiving their textbooks on time and
                      having to pay heftier shipping and other fees.
                    </Card.Text>
                    <Button variant="primary">Test Demo</Button>
                  </Card.Body>
                </Card>
                <Image
                  fluid
                  rounded
                  src={require("../../assets/home_images/img3.jpg")}
                  alt=""
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
