import { init } from "ityped";
import { useEffect, useRef } from "react";
import {
  Wrapper,
  Container,
  FullScreenImage,
  BigText,
  Title,
} from "../../infrastructure/design/styled-components";
import SVGComponent from "../../components/SVGwave.component";

import "./home.scss";

const Home = () => {
  // iTyped cursor initialization
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Instrcutional Designer",
        "E-Learning Developer",
        "Web Developer",
      ],
    });
  }, []);

  return (
    <Container className="home-container">
      <div className="greetings">
        <BigText> I'm Billy.</BigText>
        <div className="titles">
          <span ref={textRef} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
