import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import dist1 from "../img/project/dist1.png";
import dist2 from "../img/project/dist2.png";
import { ShinyHeader } from "./UISAE";
import { FaGithub } from "react-icons/fa";

const Distributed = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-6 w-full items-center justify-center">
        <div
          style={{
            zIndex: 10,
            textAlign: "center",
            fontWeight: "bold",
            color: "#cfc79b",
            padding: "10px",
          }}
        >
          <ShinyHeader text="Distributed System Project" className="mb-4" />
        </div>
        <a
          href="https://github.com/RamenMode/dds"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <FaGithub size={40} />
        </a>
      </div>

      {/* System Architecture Cards - Side by Side */}
      <div className="grid grid-cols-12 gap-4 h-[600px]">
        {/* External Architecture - Left Card */}
        <div className="col-span-6 grid grid-rows-12 gap-4">
          <div className="row-span-4 text-slate-600 text-bold">
            <SpotlightCard
              className="custom-spotlight-card h-full shadow-lg"
              spotlightColor="rgba(207, 199, 155, 0.8)"
            >
              Designed a <strong>distributed, auto-scaled, and load-balanced</strong> data store
              using <strong>Chord and consistent hashing</strong>, with <strong>Kubernetes-based scaling</strong>,
              event-driven request handling, and robust fault tolerance via
              checkpointing and logging.
            </SpotlightCard>
          </div>
          <div className="row-span-8">
            <SpotlightCard
              className="custom-spotlight-card h-full shadow-lg"
              spotlightColor="rgba(207, 199, 155, 0.8)"
            >
              <div className="spotlight-content">
                <h2>System Architecture</h2>
                <p>External Architecture</p>
                <img
                  src={dist1}
                  alt="Distributed"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Internal Architecture - Right Card */}
        <div className="col-span-6">
          <SpotlightCard
            className="custom-spotlight-card h-full shadow-lg"
            spotlightColor="rgba(207, 199, 155, 0.8)"
          >
            <div className="spotlight-content">
              <h2>System Architecture</h2>
              <p>Internal Architecture</p>
              <img
                src={dist2}
                alt="Distributed"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Distributed;
