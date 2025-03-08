import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Contacts = () => {
  const [listCotacts] = useState([
    {
      title: "Phone Number",
      valUrl: "tel:+201095140380",
      faIcon: faPhone,
      value: "+201095140380",
      btnVal: "Call me",
    },
    {
      title: "Whatsapp Number",
      valUrl: "https://wa.me/201060998126?text=مرحبا%20بك%20كيف%20أساعدك؟",
      faIcon: faWhatsapp,
      value: "+201060998126",
      btnVal: "Contact me",
    },
    {
      title: "Email",
      valUrl: "mailto:mahmoudqasem1@hotmail.com",
      faIcon: faEnvelope,
      value: "mahmoudqasem1@hotmail.com",
      btnVal: "Get Touch",
    },
    {
      title: "Linkedin",
      valUrl: "https://www.linkedin.com/in/mahmoud-qasem-64602528b/",
      faIcon: faLinkedin,
      value: "mahmoud-qasem",
      btnVal: "View Linkedin",
    },
    {
      title: "Github",
      valUrl: "https://github.com/Mahmoud-Qasem0",
      faIcon: faGithub,
      value: "Mahmoud-Qasem0",
      btnVal: "Visit Github",
    },
  ]);
  const ref = useRef();
  const divs = useRef([]);
  CustomHook(ref, divs);
  return (
    <section className="contacts" ref={ref}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact me
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        If you have asany Project or if you want make a software for your
        bussniess conatact me. I make your project as soon as possible.
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listCotacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <span>
              <FontAwesomeIcon icon={value.faIcon} />
            </span>
            <div>{value.value}</div>
            <button>
              <a href={value.valUrl}>{value.btnVal}</a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Contacts;
