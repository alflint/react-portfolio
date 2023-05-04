import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

const styles = {
  clear: {
    filter: 'blur(0px) brightness(1)'
  },
  blur: {
    filter: 'blur(5px) brightness(0.5)'
  },
  bg_dark: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '16rem', margin: '10px', border: 'none',
  },
  bg_light: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '16rem', margin: '10px', border: 'none'
  },
  show: {
    display: 'block'
  },
  hide: {
    display: 'none'
  }

}

function ProjectCard(props) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }
  return (
    <Card
      className="text-white d-flex justify-content-center"
      style={isHovering ? styles.bg_dark : styles.bg_light}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <Card.Img src={props.img_url} alt={props.name} style={isHovering ? styles.blur : styles.clear} />
      <Card.ImgOverlay className="d-flex justify-content-center align-items-center flex-column">
        <div style={isHovering ? styles.show : styles.hide}>

          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-evenly">
            <Button variant="secondary" size="sm" href={props.github_url} target="blank">
              Github <AiFillGithub />
            </Button>
            <Button variant="success" size="sm" href={props.deployed_url} target="blank">
              Deployed <CgWebsite />
            </Button>
          </div>

        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;