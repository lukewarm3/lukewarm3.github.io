import React from "react";
import uberfreight from "../img/uber_freight.png";
import cyber from "../img/cyber.png";
import bamboo from "../img/bamboo.jpg";
import { Pointer } from "./magicui/pointer";
import { motion } from "framer-motion";

const Program = () => {
  return (
    <section className="container" id="program">
      <div className="blogs-content">
        <div className="main-title">
          <h2>
            My <span>Programs</span>
          </h2>
        </div>
        <div className="blogs">
          <div className="blog">
            <img src={uberfreight} alt="" />
            <div className="blog-text">
              <h4>Process Optimization at Uber Freight</h4>
              <p>
                Collaborate with Uber to enhance the check-in process for Uber
                Freight truckers at warehouses by leveraging advanced data
                analytics tools.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1onhGLzooxALMKX7RrRvxltwYmMR8MiJv/view?usp=drive_link"
              className="icon"
              target="_blank"
            >
              <i className="fa-solid fa-laptop"></i>
            </a>
            <Pointer>
              <motion.div
                animate={{
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-pink-600"
                >
                  <motion.path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </motion.div>
            </Pointer>
          </div>

          <div className="blog">
            <img src={cyber} alt="" />
            <div className="blog-text">
              <h4>Strategic Cybersecurity Recovery at Smith Inc.</h4>
              <p>
                Simulate to guide the C-suite executives of SMITH Inc. through a
                critical cyber-attack crisis recovery process by reviewing
                forensic analysis data in a PWC-oriented program.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1egFvN1DT2HGv3T9bOQacrU5dglCn9Yxx/view?usp=drive_link"
              className="icon"
              target="_blank"
            >
              <i className="fa-solid fa-laptop"></i>
            </a>
          </div>
          <div className="blog">
            <img src={bamboo} alt="" />
            <div className="blog-text">
              <h4>Publication at University Writing Program</h4>
              <p>
                Selected as one of only 30 selected by university's editorial
                board, among 70 essays competing for a place in Fresh Writing.
                An article for writing analysis for future ND students.
              </p>
            </div>
            <a
              href="https://freshwriting.nd.edu/essays/bamboos-in-my-grandfathers-backyard/"
              className="icon"
              target="_blank"
            >
              <i className="fa-solid fa-laptop"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
