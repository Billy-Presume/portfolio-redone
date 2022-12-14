import {
  services,
  projects,
  socials,
  contact,
} from "../infrastructure/data/data";

import "../infrastructure/design/footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="footer-col footer-services">
          <h3 className="title services">Services</h3>
          <ul className="list services-list">
            {services.map(({ name, type, description }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </div>
        <div className="footer-col footer-projects">
          <h3 className="title projects">Projects</h3>
          <ul className="list projects-list">
            {projects.map(({ name, type, description }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </div>
        <div className="footer-col footer-socials">
          <h3 className="title socials">Socials</h3>
          <ul className="list socials-list">
            {socials.map(({ name, link }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <h3 className="title contact">Contact</h3>
          <ul className="list contact-list">
            {contact.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <small className="copyright-text">
        Copyright © 2022 Billy Presume. All Rights Reserved.
      </small>
    </div>
  );
};

export default Footer;
