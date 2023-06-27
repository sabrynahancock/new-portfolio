import React from 'react';
import { Carousel} from 'react-responsive-carousel';
import { Link as ScrollLink} from 'react-scroll';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { Element } from 'react-scroll';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './App.css';

function App() {

  const techStackIcons = [
    faPython,
    faJs,
    faReact,
    faHtml5,
    faCss3,
    faNodeJs,
  ];
  const projects = [
    {
      title: "K-Cultura",
      imageSrc: "https://i.imgur.com/WxCDKW1.jpeg",
      description: "This front-end project is built with React for a YouTube channel, focusing on creating an appealing and interactive website. The client's request for pastel and pink colors has inspired the website's color palette, infusing it with a delightful and visually pleasing aesthetic. Stay tuned as I will be updating this weekly. Also check out my GitHub for daily updates.",
      techStack: " React, JavaScript, HTML, CSS",
      codeSource: "https://github.com/sabrynahancock/kcultura",
    },
    {
      title: "Catherapy",
      imageSrc: "https://i.imgur.com/UOVZHAn.png",
      description: "A mental health app that connects patients and doctors. Doctors update their profile with availability, accepted insurances, and specialties. Patients track their mood and search for doctors by using filters such as distance, insurances, and specialties. The app makes it easier for patients to find the right mental care provider and helps doctors manage their practice effectively.      ",
      techStack: "Python, React, HTML, CSS, JavaScript, SQL",
      codeSource: "https://github.com/sabrynahancock/Catherapy",
    },
    // Add more project objects as needed
  ];


  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-links">
            <ScrollLink to="carousel" smooth={true} duration={500}>
              TECHNOLOGIES
            </ScrollLink>
            <ScrollLink to="sobrenos" smooth={true} duration={500}>
              ABOUT ME
            </ScrollLink>
            <a href="https://drive.google.com/file/d/1uxWv_OSNlXEV1ro4l-UD2UCmb7XWyMJX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </div>
          <div className="navbar-icons">
            <a href="https://github.com/sabrynahancock">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/sabryna-hancock/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabrynavazus@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

          </div>
        </div>
      </nav>
      <div className="profile-section">
        <div className="profile-details">
          <h1>Sabryna Hancock</h1>
          <h2>Software Engineer</h2>
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
            <span>Wheeling, WV</span>
          </div>
          <ScrollLink to="sobrenos" smooth={true} duration={500}>
            <button className="scroll-button">Why should you hire me?</button>
          </ScrollLink>
        </div>
        <div className="profile-gif-container">
          <img src="https://i.imgur.com/QmicKrH.gif" alt="Profile GIF" className="profile-gif" />
        </div>
      </div>


      <div className="project-section">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imageSrc} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.techStack}</p>
              <a href={project.codeSource} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel">
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
          {techStackIcons.map((icon, index) => (
            <div key={index} className="carousel-icon-container">
              <FontAwesomeIcon icon={icon} size="6x" className="carousel-icon" />
            </div>
          ))}
        </Carousel>
      </div>



      <Element name="sobrenos">
        <div className="sobrenos">
          <div className="titulo">About Me</div>
          <img className="about-me-image" src="https://i.imgur.com/3RxpxCO.jpeg" alt="About Me Image" />
          <div className="texto">
            I am a Full Stack Engineer originally from Brazil, who took a leap of faith and moved to the USA independently at the age of 20. Life has presented me with numerous challenges, but none of them have deterred me from pursuing my dreams. While I always knew I had a creative side, I never believed I possessed the intelligence required to build software.

            However, over the years, I have discovered how to harness the power of my mind. I have developed a deep passion for technology, particularly because it serves as a vital connection between myself and my family in Brazil.

            In addition to my love for technology, I have also cultivated proficiency in multiple languages, including Portuguese, Spanish, and English. And now, I can proudly say that I am fluent in JavaScript, Python, and several other programming languages too!
          </div>
          <div className="carousel-section">
            <h2>Random facts that makes me unique</h2>
            <Carousel
              autoPlay
              interval={3000}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              dotListClass="custom-dot-list" // Assign a class to the dots container
            >
              <div className="carousel-card">
                <img src="https://i.imgur.com/xwMUjg2.jpeg" alt="Card 1" />
                <h3>I drew the dramatic Chipmunk </h3>
              </div>

              <div className="carousel-card">
                <img src="https://i.imgur.com/2Kqfe0K.jpeg" alt="Card 3" />
                <h3>After work you can find me playing OW2 or Hogwards Legacy.</h3>

              </div>
              <div className="carousel-card">
                <img src="https://i.imgur.com/V6gfsO0.jpeg" alt="Card 2" />
                <h3>Family is everything to me</h3>
              </div>
              <div className="carousel-card">
                <img src="https://i.imgur.com/ejnaHiC.gif" alt="Card 3" />
                <h3>I create animations using Procreate</h3>
              </div>
              <div className="carousel-card">
                <img src="https://i.imgur.com/WQBkl2r.jpeg" alt="Card 3" />
                <h3>My Chiweenie Dora</h3>
              </div>
              <div className="carousel-card">
                <img src="https://i.imgur.com/44hRAlp.jpeg" alt="Card 3" />
                <h3>I made the famous Donut using Blender</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </Element>


      <footer className="footer"> {/* Footer */}
        <div className="social-media-links">
          <a href="https://github.com/sabrynahancock">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/sabryna-hancock/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabrynavazus@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

