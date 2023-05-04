import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PdfViewer from "./PdfViewer";
import proficiencies from "./proficiencies";
import pdf from '../../../assets/docs/resume.pdf';
import './Resume.css';


function Resume() {

    return (
        <Container>
            <h1 className="text-center">Resume</h1>
            <PdfViewer pdf={pdf} />

            <br />

            <h2 className="text-center text-muted">Technical Profecciencies</h2>
            <Row xs={1} md={3} className="g-4">
                {proficiencies.map((proficiency, idx) => (
                    <Col key={idx}>

                        <Card>
                            <Card.Body className="text-center pt-1 pb-0">
                            <Card.Title>{proficiency.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Resume;

