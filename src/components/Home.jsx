import React, { useState } from "react";
import hero from "../img/hero.jpg";
import avatar from "../img/avatar.jpeg";
import { easeInOut, motion } from "framer-motion";
import SplitText from "../TextAnimations/SplitText/SplitText";
import { WordRotate } from "./magicui/word-rotate";
import { ShimmerButton } from "./magicui/shimmer-button";
import { Ripple } from "./magicui/ripple";

const description =
  "I am a dedicated and highly passionate Greater China Scholar pursuing a Bachelor of Science degree in Computer Science at the University of Notre Dame. I love playing with programming and modern applications, with experience of web development, game development, and machine learning. I also have a broad range of interests of drawing, cooking, basketball, dancing, working out ... ";

// Define the gold color as a constant
const GOLD_COLOR = "#cfc79b";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  const handleAnimationComplete = () => {
    setShowButton(true);
  };

  return (
    <header className="container header" id="home">
      <div className="header-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px",
          }}
        >
          {/* Avatar container with relative positioning for the orb */}
          <div
            style={{
              position: "relative",
              width: "250px",
              height: "250px",
              marginBottom: "20px",
            }}
          >
            {/* Ripple effect positioned at the center of avatar */}
            <div
              style={{
                position: "absolute",
                width: "600px",
                height: "600px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            >
              <Ripple
                mainCircleSize={280}
                numCircles={6}
                mainCircleOpacity={0.2}
              />
            </div>

            {/* Orb positioned behind the avatar */}
            {/* <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <Orb hue={40} hoverIntensity={0.4} />
            </div> */}

            {/* Avatar image positioned on top of the orb */}
            <div
              style={{
                position: "relative",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "25px auto",
                zIndex: 2,
              }}
            >
              <img
                src={avatar}
                alt="Avatar"
                className="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <h1 className="name">
            <motion.nav
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
              }}
            >
              Hi, I'm
              <span
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  color: GOLD_COLOR,
                  marginBottom: "20px",
                }}
              >
                <WordRotate
                  className="text-6xl font-bold word-rotate-text"
                  words={[
                    "Luke Cao",
                    "A CS Student",
                    "From ND",
                    "A GCS Scholar",
                    "A Software Engineer",
                  ]}
                  style={{
                    color: `${GOLD_COLOR} !important`,
                    textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                  }}
                />
              </span>
            </motion.nav>
          </h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 1 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <SplitText
              text={description}
              className="text-xl text-center"
              delay={10}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </motion.p>

          <div
            className="btn-container"
            style={{
              minHeight: showButton ? "auto" : "50px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "400px",
            }}
          >
            {showButton && (
              <motion.div
                className="btn-con"
                whileHover={{ scale: 1.2, rotate: "2.5deg" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  ease: "easeInOut",
                }}
              >
                <ShimmerButton className="shadow-2xl">
                  <a
                    href="https://drive.google.com/file/d/1aOF1yH9jD54TDRvTy0GhkrV-B0FJYiDy/view?usp=drive_link"
                    className="main-btn"
                    target="_blank"
                  >
                    <span className="btn-text">View CV</span>
                    <span
                      className="btn-icon"
                      style={{ color: "white", fontSize: "1.2rem" }}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </span>
                  </a>
                </ShimmerButton>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
