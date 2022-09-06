import {
  Wrapper,
  Container,
  BasicContainer,
  Separator,
  BodyText,
  SubCaptionText,
} from "../infrastructure/design/styled-components";
import {
  services,
  projects,
  socials,
  contact,
  copyright,
} from "../infrastructure/data/data";

import "../infrastructure/design/footer.scss";

const Footer = () => {
  return (
    <Wrapper className="footer-container">
      <div className="container">
        <BasicContainer className="footer-services">
          <h3 className="title services">Services</h3>
          <ul className="list services-list">
            {services.map(({ name, type, description }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </BasicContainer>
        <BasicContainer className="footer-projects">
          <h3 className="title projects">Projects</h3>
          <ul className="list projects-list">
            {projects.map(({ name, type, description }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </BasicContainer>
        <BasicContainer className="footer-socials">
          <h3 className="title socials">Socials</h3>
          <ul className="list socials-list">
            {socials.map(({ name, link }, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </BasicContainer>
        <BasicContainer className="footer-contact">
          <h3 className="title contact">Contact</h3>
          <ul className="list contact-list">
            {contact.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </BasicContainer>
        <BasicContainer className="footer-copyright">
          <h3 className="title copyright">Copyright</h3>
          <ul className="list copyright-list">
            {copyright.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </BasicContainer>
      </div>
    </Wrapper>
  );
};

export default Footer;
