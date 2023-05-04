import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BsDownload } from 'react-icons/bs'



function PdfViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function reducePage() {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  }

  function increasePage() {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
      <Document file={props.pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} style={{borderColor: 'black', borderWidth: '5px'}} />
        <div className="d-flex justify-content-evenly">
          <Button variant="secondary" size="sm" onClick={reducePage} disabled={pageNumber <= 1}>Previous</Button>
            <Button variant="secondary" size="sm" href={props.pdf}>
              <BsDownload />
            </Button>
          <Button variant="secondary" size="sm" onClick={increasePage} disabled={pageNumber >= numPages}> Next</Button>
        </div>
      </Document>

    </Container>
  );
}

export default PdfViewer;