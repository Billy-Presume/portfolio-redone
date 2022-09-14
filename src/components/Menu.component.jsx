import { useState } from "react";
import { Document, Page } from "react-pdf";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Modal,
  Button,
} from "react-bootstrap";
import ResumeModal from "./ResumeModal.component";

import "../infrastructure/design/menu.scss";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleClose = () => {
    toggleShow(false);
  };

  return (
    <>
      {/* {toggleShow && <ResumeModal toggleShow />} */}
      {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <Navbar
          key={expand}
          fixed="top"
          bg="dark"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#home-section" className="navbar-brand">
              Billy Pr&eacute;sum&eacute;
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              backdrop
              keyboard
            >
              <Offcanvas.Header closeButton className="offcanvas-header">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
                <Nav className="justify-content-end flex-grow-1 pe-3 navbar">
                  <Nav.Link href="#home-section">Home</Nav.Link>
                  <Nav.Link href="#about-section">About</Nav.Link>
                  <Nav.Link href="#portfolio-section">Porfolio</Nav.Link>
                  <Nav.Link href="#services-section">Services</Nav.Link>
                  <Nav.Link href="#contact-section">Contact</Nav.Link>
                  <Button
                    variant="light"
                    className="resume-button"
                    onClick={toggleShow && <ResumeModal toggleShow />}
                  >
                    RESUME
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
