import { useRef } from "react";
import CustomHook from "./CustomHook";

const perName = "Mahmoud Qasem";
function Home() {
  const ref = useRef();
  CustomHook(ref);
  return (
    <section className="home" ref={ref}>
      <div className="content">
        <div className="name">
          My Name is <span>{perName}</span>
        </div>
        <div className="des">
          I am a Front-End Web Developer specializing in React.js with
          approximately 7 months of experience in building interactive and
          dynamic user interfaces. I am proficient in JavaScript (ES6+),
          TypeScript, Redux, HTML, CSS, and Bootstrap, with a strong focus on
          performance optimization and user experience. I gained experience in
          building scalable and responsive web applications. I am passionate
          about learning modern technologies like Next.js and I am eager to gain
          more hands-on experience by working on projects within a professional
          team.
          {/* I am Mahmoud Qasem. 
        I have been working as a front-end developer for more than a year, 
        in which I gained a lot of experience and learned a lot. 
        I am still learning. I can build your site, 
        it will be responsive to all devices. 
        I hope you will find what you are looking for here 
        I also hope that you will be happy to deal with me. 
        I am pleased to deal with you */}
        </div>
        <a href="/MahmoudQasemCV.pdf" target="_blank">
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/MahmoudQasem.png" alt="my-photo" />
          <div className="info">
            <div>Title</div>
            <div>React Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
