import React from "react";
import brainstorm from "../img/Brainstorm.png";
import socialmedia from "../img/social_platform.jpg";
import tutor from "../img/Tutor_project.jpg";
import gigworker from "../img/gig-worker.png";
import { motion } from "framer-motion";
import UISAE from "./UISAE";
import MomARks from "./MomARks";  

const Portfolio = () => {
  return (
    <section className="container" id="portfolio">
      <div className="blogs-content">
        <motion.div
          className="main-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: "80px",
          }}
        >
          <h2>
            My <span>Projects</span>
          </h2>
        </motion.div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            margin: "0 auto 80px auto",
            overflow: "visible",
          }}
        >
          <UISAE />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            margin: "0 auto 80px auto",
            overflow: "visible",
          }}
        >
          <MomARks />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
