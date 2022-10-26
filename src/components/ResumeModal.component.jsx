import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Modal, Button } from "react-bootstrap";

function ResumeModal(toggleShow) {
  //   const handleClose = () => {
  //     toggleShow(false);
  //   };

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
      keyboard
      scrollable
      show={toggleShow}
      onHide={!toggleShow}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Document
            file={require("../assets/resume/Billy Presume - resume.pdf")}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={!toggleShow}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResumeModal;
