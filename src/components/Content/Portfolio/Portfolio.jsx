import React from "react";
import ProjectCard from "./ProjectCard";
import project_data from "./project_data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Portfolio() {

    return (
        <Container>
            <h1 className="text-center">Portfolio</h1>
            <p className=" text-center text-muted">
                Welcome to my portfolio! Here, you will find a showcase of my work and projects that I have completed over the years.
                From designing logos and creating websites, to developing APIs and managing databases, my portfolio showcases my diverse
                range of skills and experience in various fields. Each project represents a unique challenge that I have tackled with creativity
                and innovation, and I am proud to have produced high-quality results for my clients. Browse through my portfolio and discover
                the passion and dedication that I bring to every project I undertake.
            </p>
            <Row className="flex-wrap justify-content-center">
                {project_data.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        name={project.name}
                        img_url={project.img_url}
                        description={project.description}
                        github_url={project.github_url}
                        deployed_url={project.deployed_url}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default Portfolio;