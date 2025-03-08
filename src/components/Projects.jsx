import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleQuestion, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";


const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'User Management System Website',
      des: 'Developed a user authentication and management system with React.js',
      mission: 'React js Developer',
      language: 'React js ,TypeScript, React-bootstrap, JWT decode, React-hook-form, Github',
      images: '/ums.png',
      projectUrl: 'https://ums-2pp.netlify.app/'
    },
    {
      name: 'Rent Cars Website',
      des: 'Implemented a user-friendly UI with responsive design for seamless navigation.',
      mission: 'React js Developer',
      language: 'React.js, React Bootstrap, React router dom, Github',
      images: '/react rentcars.png',
      projectUrl: 'https://rentcars-2pp.netlify.app/'
    },
    {
      name: 'React js Portfolio Website',
      des: 'Built a personal portfolio showcasing projects and skills. it is Designed a responsive and modern UI using React.js, Bootstrap',
      mission: 'React js Developer',
      language: 'React.js, Bootstrap, font awesome, React router dom, Github',
      images: '/react portfolio.png',
      projectUrl: 'https://portfolio-2pp.netlify.app/'
    },
    {
      name: 'Graphic Design Agency Website',
      des: 'Graphic design agency that creative hubs play a crucial role in shaping visual identities, branding, and marketing for various industries.',
      mission: 'Front-end Developer',
      language: 'HTML5, CSS3, JavaScript, Github',
      images: '/KasperLaptop.png',
      projectUrl: 'https://mahmoud-qasem0.github.io/kasper_Template/'
    },
    {
      name: 'Simple Portfolio Website Design',
      des: 'portfolio website digital showcases where you can present your work, skills, and experiences. Whether you’re an artist, designer, photographer, developer, or any creative professional, having a portfolio website is essential.',
      mission: 'Front-end Developer',
      language: 'HTML5, CSS3, JavaScript, Github',
      images: '/simple_portfolio1.png',
      projectUrl: 'https://mahmoud-qasem0.github.io/Portfolio_Design/'
    },
    {
      name: 'Personal Life Blog Project',
      des: ' A personal life Blog is like having your own data-driven cockpit for managing various aspects of your life. Imagine it as a control center where you can track and analyze metrics related to your habits, goals, and overall well-being.',
      mission: 'Front-end Developer',
      language: 'HTML5, CSS3, Github',
      images: '/Elzero.png',
      projectUrl: 'https://mahmoud-qasem0.github.io/Elzero_Template/'
    },
  ]);
  const ref = useRef();
    const refDivs = useRef([]);
    CustomHook(ref, refDivs);
  return (
    <section className="projects" ref={ref}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>My Projects</div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
      This is some of my works
      </div>
      <div className="list">
        {
          listProjects.map((value,key) => (
            <div key={key} className="item" ref={(el) => el && refDivs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="project name" />
              </div>
              <div className="content">
                <h3><a href={value.projectUrl}>{value.name}</a></h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Mission</h4>
                    <div className="de">{value.mission}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Language</h4>
                    <div className="de">{value.language}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Projects;