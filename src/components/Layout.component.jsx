import { Container } from "../infrastructure/design/styled-components";
import Home from "../views/home/Home.view";
import About from "../views/about/About.view";
import Portfolio from "../views/portfolio/Portfolio.view";
import Services from "../views/services/Services.view";
import Resume from "../views/resume/Resume.view";
import Contact from "../views/contact/Contact.view";
import Footer from "./Footer.component";

import "../infrastructure/design/layout.scss";

const Layout = () => {
  return (
    <Container className="layout-container">
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Resume />
      <Contact />

      <Footer className="footer" />
    </Container>
  );
};

export default Layout;
