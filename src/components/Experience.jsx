import React from "react";

import { easeIn, easeOut, motion, spring } from "framer-motion";
import { DATA } from "../data/resume";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  // Define container variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="container" id="experience">
      <div className="blogs-content">
        <motion.div
          className="main-title mb-[100px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>
            My <span>Work Experience</span>
          </h2>
        </motion.div>

        <motion.div
          style={{ width: "60%", margin: "0 auto" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {DATA.work.map((work, id) => (
            <motion.div key={work.company} variants={itemVariants}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} ${work.end ? `- ${work.end}` : ""}`}
                description={work.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
