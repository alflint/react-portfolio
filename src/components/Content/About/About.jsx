import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


function About() {
    return (
        <Container>
            <h1 className="text-center">About Me</h1>

            <Card>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col className="d-flex justify-center align-center">
                                <Image src="https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/4c8efec97f9a5d8ab4225c043da98f28~c5_100x100.jpeg?x-expires=1683378000&x-signature=w9stXRGBRzu2qTvDOoT85U7P9Zk%3D" roundedCircle />
                            </Col>
                            <Col xs={12} sm={10} >
                                Hi there! My name is Alex, and I am a young professional working as a project manager in the medical devices field.
                                I am originally from New York, but I recently moved to Utah with my fiancé to pursue a more fulfilling life and spend more time outside together.
                                In my free time, I love to be outdoors. During the summer, you can find me hiking and camping, exploring the beautiful mountains and national parks in the area.
                                In the winter, I enjoy skiing and snowboarding, taking advantage of the amazing ski resorts that Utah has to offer.
                                As a project manager in the medical devices field, I am passionate about improving patient outcomes and making a difference in people's lives.
                                I thrive on the challenges of managing complex projects, collaborating with teams, and finding innovative solutions.
                                I am also committed to continuous learning and growth, both personally and professionally. I am always seeking out new
                                opportunities to expand my knowledge and skills, and I am constantly inspired by the amazing people I work with and the impact we are making in the world.
                                Thanks for getting to know me a little better!
                            </Col>

                        </Row>

                    </Card.Text>
                </Card.Body>
            </Card>



        </Container>
    );
}

export default About;