import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faJs, faBootstrap, faGithub} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";
const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: ' HTML (HyperText Markup Language) the fundamental building block of the web.  It’s the standard markup language used to create web pages. HTML defines the structure and content of a web page, allowing browsers to display it correctly.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'CSS (Cascading Style Sheets) the magic behind the visual beauty of web pages. It is a stylesheet language used to describe how HTML documents should be presented.  CSS defines the look and feel of web content—colors, fonts, spacing, layout, and more.',
      icon: faCss3
    },
    {
      name: 'Javascript',
      des: 'JavaScript the dynamic language that brings interactivity and life to web pages. JavaScript is a programming language and a core technology of the web, alongside HTML and CSS. JavaScript runs in web browsers and executes client-side code.',
      icon: faJs
    },
    {
      name: 'ReactJs',
      des: 'React.js the dynamic JavaScript library that revolutionized web development. React is a JavaScript library used for building user interfaces. Every React web application is composed of reusable components, which make up different parts of the user interface.',
      icon: faReact
    },
    {
      name: 'Bootstrap',
      des: ' Bootstrap is powerful front-end framework that designed to create responsive and mobile-first websites efficiently. It combines HTML, CSS, and JavaScript, offering a range of components and utilities to streamline web development.',
      icon: faBootstrap
    },
    {
      name: 'Github',
      des: 'GitHub is a developer platform that allows developers to create, store, manage, and share their code. It uses Git, which is a distributed version control system.',
      icon: faGithub
    }]);
    const ref = useRef();
    const refDivs = useRef([]);
    CustomHook(ref, refDivs);
  return (
    <section className="skills" ref={ref}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>My Skills</div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
      I work in web development using React, 
      and I have some experience in this field. 
      I use components and state in my applications, 
      and I use tools like npm to manage the project. 
      Also, I have developed some small projects using React.
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div key={key} className="item" ref={(el) => el && refDivs.current.push(el)}>
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Skills;