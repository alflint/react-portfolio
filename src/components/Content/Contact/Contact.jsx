import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [clicked, setClicked] = useState(false);
  const [invalid, setInvalid] = useState({ name: false, email: false, message: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    if(name === '' || email === '' || message === '') {
      alert('Please fill out all fields before submitting.')
    } else {
      setClicked(true)
      //TOOD
    }
  };

  const handleBlur = (event) => {
    const fieldName = event.target.id;
    const fieldValue = event.target.value.trim();
    console.log(fieldName, fieldValue);
    switch (fieldName) {
      case 'name':
        setInvalid((prev) => ({ ...prev, name: fieldValue === '' }));
        break;
      case 'email':
        setInvalid((prev) => ({ ...prev, email: !/^\S+@\S+\.\S+$/.test(fieldValue) }));
        break;
      case 'message':
        setInvalid((prev) => ({ ...prev, message: fieldValue === '' }));
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <h1 className="text-center">Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} onBlur={handleBlur} isInvalid={invalid.name}/>
          <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} onBlur={handleBlur} isInvalid={invalid.email}/>
          <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" value={message} onChange={(event) => setMessage(event.target.value)} onBlur={handleBlur} isInvalid={invalid.message}/>
          <Form.Control.Feedback type="invalid">Please enter a valid message.</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={clicked}>
          Submit
        </Button>
        {clicked && <Spinner animation="border" className="mx-2" variant="primary" size="sm" />}


      </Form>
    </Container>
  );
}

export default Contact;
