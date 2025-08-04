import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import me from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder" />
        <h2>Er. Sheeba Nasreen</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://www.linkedin.com/in/sheeba-nasreen-a67420288/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/sheeba0511" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        {" "}
        <AiOutlineArrowUp />{" "}
      </a>
    </footer>
  );
};

export default Footer;
