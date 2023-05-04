import React from 'react';
import Button from 'react-bootstrap/Button';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Button variant="link" href="https://github.com/alflint" target="blank">
          <AiFillGithub style={{ fontSize: '40px', color: 'gray' }} />
        </Button>
        <Button variant="link" href="https://www.linkedin.com/in/alexandrea-flint-b246b5173" target="blank">
          <AiFillLinkedin style={{ fontSize: '40px' }} />
        </Button>
        <Button variant="link" href="https://twitter.com/" target="blank">
          <AiFillTwitterCircle style={{ fontSize: '40px', color: '#00acee' }} />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
