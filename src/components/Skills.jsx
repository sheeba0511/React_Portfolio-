import React from "react";
import { motion } from "framer-motion";
import {
  AiFillIeCircle,
  AiOutlineCloudServer,
  AiOutlineLaptop,
} from "react-icons/ai";

const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    two: {
      y: "-100%",
      opacity: 0,
    },
    three: {
      x: "100%",
      opacity: 0,
    },
    four: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <div id="services">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="skillBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <div>
            <h2>Programming</h2>
          </div>
          <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Typescript</p>
            <p>Restful Web Services</p>
          </div>
        </motion.div>
        <motion.div
          className="skillBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <div>
            <h2>Frontend Web Technologies</h2>
          </div>
          <div>
            <p>BootStrap</p>
            <p>React</p>
            <p>React Router</p>
            <p>Redux</p>
            <p>Ant Design</p>
            <p>Chart.js</p>
          </div>
        </motion.div>
        <motion.div
          className="skillBox3"
          whileInView={animations.whileInView}
          initial={animations.three}
          transition={{
            delay: 0.2,
          }}
        >
          <div>
            <h2>Faimiliar with</h2>
          </div>
          <div>
            <p>WordPress</p>
            <p>Postman</p>
            <p>Materialize UI</p>
            <p>Ant Design</p>
            <p>Git</p>
            <p>Github</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
