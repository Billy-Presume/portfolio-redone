import { Route, Routes } from "react-router-dom";
import Home from "../../views/home/Home.view";
import About from "../../views/about/About.view";
import Portfolio from "../../views/portfolio/Portfolio.view";
import Services from "../../views/services/Services.view";
import Resume from "../../views/resume/Resume.view";
import Contact from "../../views/contact/Contact.view";

export const SiteRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
