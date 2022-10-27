import { Link } from "react-router-dom";
import { AboutRoutes } from "../../infrastructure/routes/about_me_routes/AboutRoutes";

import {
  IoNewspaper,
  IoBriefcase,
  IoSchool,
  IoListCircle,
  IoTrailSign,
  IoShieldCheckmark,
} from "react-icons/io5";
import "./about.scss";
import App from './../../App';

const About = () => {
  return (
    <section id="about-section">
      <aside>
        <header>
          <img
            src={require("../../assets/about_images/IMG-8982-removebg-preview.png")}
            alt="Billy Presume"
          />
        </header>
        <nav class="sidebar-nav">
          <ul>
            <li>
              <Link to={"/"}>
                <IoNewspaper size={25} /> <span>&emsp;Background</span>
              </Link>
            </li>
            <li>
              <Link to={"/work-history"}>
                <IoSchool size={25} /> <span class="">&emsp;Work History</span>
              </Link>
            </li>
            <li>
              <Link to={"/education"}>
                <IoBriefcase size={25} /> <span class="">&emsp;Education</span>
              </Link>
            </li>
            <li>
              <Link to={"/skills"}>
                <IoListCircle size={25} /> <span class="">&emsp;Skills</span>
              </Link>
            </li>
            <li>
              <Link to={"/interests"}>
                <IoTrailSign size={25} /> <span class="">&emsp;Interests</span>
              </Link>
            </li>
            <li>
              <Link to={"/volunteer-work"}>
                <IoShieldCheckmark size={25} />
                <span class="">&emsp;Volunteer Work</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <div class="main-container">
          <AboutRoutes />
        </div>
      </main>
    </section>
  );
};

export default About;
