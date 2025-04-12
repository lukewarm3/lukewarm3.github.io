import React from "react";
import model from "../img/MomARks.png";
import { ShinyHeader } from "./UISAE";
import { FaGithub } from "react-icons/fa";

const MomARks = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <div
        style={{
          zIndex: 10,
          textAlign: "center",
          fontWeight: "bold",
          color: "#cfc79b",
          padding: "10px",
        }}
      >
        <ShinyHeader text="Hackathon Project" className="mb-4" />
      </div>
      <a
        href="https://github.com/lukewarm3/Hack-a-thon_MomARks"
        target="_blank"
        rel="noopener noreferrer"
        style={{ cursor: "pointer" }}
      >
        <FaGithub size={40} />
      </a>
      <div className="flex flex-col md:flex-row w-full min-h-screen items-center">
        {/* Left column: Text content */}
        <div className="w-full md:w-3/5 md:p-16 flex flex-col justify-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              background: "linear-gradient(45deg, #4B6BFB, #8C52FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MomARks
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-slate-600">
            Introduced an{" "}
            <span className="font-bold whitespace-nowrap">AR-powered</span>{" "}
            mobile app empowered by Google ARCore API, SwiftUI where users can
            leave permanent virtual posts that can be viewed by their friends
            through any device
          </p>
        </div>

        {/* Right column: Image */}
        <div className="w-full md:w-4/5 flex justify-center items-center">
          <img
            src={model}
            alt="MomARks AR Application"
            className="max-w-full h-auto object-contain scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default MomARks;
