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
    <div className="layout-container">
      <main>
        {/* <div className="layout-container-main"> */}
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Resume />
        <Contact />
        {/* </div> */}
      </main>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
