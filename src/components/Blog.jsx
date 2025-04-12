import React, { useEffect, useRef } from "react";
import portrait from "../img/self-portrait.jpg";
import drawing from "../img/drawing.jpg";
import drawing2 from "../img/drawing2.jpg";
import dog from "../img/dog.jpg";
import cat from "../img/cat.jpg";
import cooking from "../img/cooking1.jpg";
import cooking2 from "../img/cooking2.jpg";
import workout from "../img/workout.jpg";
import workout2 from "../img/workout2.jpg";
import basketball from "../img/basketball.jpg";
import basketball2 from "../img/basketball2.jpg";
import dancing from "../img/dancing.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const portfolios = [
  portrait,
  drawing,
  drawing2,
  dog,
  cat,
  cooking,
  cooking2,
  workout,
  basketball,
  basketball2,
  dancing,
];

const MotionImage = ({ src, index, scrollX }) => {
  const scale = 440;

  const x = useTransform(
    scrollX,
    [index * scale - 600, index * scale, index * scale + 600],
    [0.8, 1.2, 0.8]
  );

  return (
    <div>
      <motion.img
        src={src}
        style={{
          scale: x,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

const Blog = () => {
  const containerRef = useRef(null);

  const { scrollX } = useScroll({ container: containerRef });

  // <div className="portfolio-item">
  //         <div className="image">
  //           <motion.img src={portrait} alt="" />
  //         </div>
  //       </div>
  return (
    <section className="container" id="blogs">
      <div className="main-title">
        <h2>
          My <span>Interests</span>
        </h2>
      </div>
      <p className="port-text">
        Drawing, Cooking, Basketball, Video Games, Coding, Dancing, Pets,
        Working Out
      </p>
      <div className="portfolios" ref={containerRef}>
        {portfolios.map((portfolio, index) => (
          <MotionImage
            key={index}
            src={portfolio}
            index={index}
            scrollX={scrollX}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
