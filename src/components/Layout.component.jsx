import NavBar from "./Menu.component";
import Home from "../views/home/Home.view";
import About from "../views/about/About.view";
import Portfolio from "../views/portfolio/Portfolio.view";
import Services from "../views/services/Services.view";

import Contact from "../views/contact/Contact.view";
import Footer from "./Footer.component";

import "../infrastructure/design/layout.scss";

const Layout = () => {
  return (
    <>
      <NavBar fixed="top" />
      <div className="layout-container">
        <Home id="section" />
        <About id="section" />
        <Portfolio id="section" />
        <Services id="section" />

        <Contact id="section" />
        <Footer className="footer" />
      </div>
    </>
  );
};

export default Layout;
