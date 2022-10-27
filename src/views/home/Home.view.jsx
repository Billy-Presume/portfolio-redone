import { useEffect, useRef } from "react";
import { init } from "ityped";
import { Image } from "react-bootstrap";

import "./home.scss";

const Home = () => {
  // iTyped cursor initialization
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2500,
      backSpeed: 60,
      strings: [
        "Instructional Designer",
        "E-Learning Developer",
        "Web Developer",
      ],
    });
  }, []);

  return (
    <section id="home-section">
      <div className="video-container">
        <video
          className="video"
          src={require("../../assets/videos/pexels-cottonbro-cg-8818922.mp4")}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="greetings">
        <h3>Hello,</h3>
        <h1>I'm Billy.</h1>
        <div className="titles">
          <span ref={textRef} />
        </div>
      </div>
      <div className="img">
        <Image
          fluid
          roundedCircle
          src={require("../../assets/home_images/IMG-8974-removebg-preview.png")}
          alt="Billy Presume"
        />
      </div>
    </section>
  );
};

export default Home;
