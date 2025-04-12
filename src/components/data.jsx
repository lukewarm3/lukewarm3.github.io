import socialtechlab from "../img/socialtechlabs.png";
import privacysandbox from "../img/privacy_sandbox.png";
import visar from "../img/visar.png";

export const experience_cards = [
  {
    image: socialtechlab,
    title: "Software Engineer, Co-Leader - SocialTechLabs",
    content:
      "Maintain the backend codes for the newly launched socialplatform, and coordinate all coders to develop new features and improve user experience.",
    icons: [
      {
        link: "https://github.com/YesTech-Corp/bestFriends_backend",
        type: "fab fa-github",
      },
      {
        link: "https://testflight.apple.com/join/HVUzq9j0",
        type: "fa fa-mobile",
      },
    ],
  },
  {
    image: privacysandbox,
    title: "Software Engineer - Privacy Sandbox Project",
    content:
      "Generate different persona based on different attributes and simulate the user behavior in the browser to show relationships between advertisements and users.",
    icons: [
      {
        link: "https://github.com/CRChenND/adAuditing",
        type: "fab fa-github",
      },
    ],
  },
  {
    image: visar,
    title: "Software Engineer - VISAR Project",
    content:
      "A writing assistant tool for an advanced writing course at University of Notre Dame to write them write essays in a systematic and organizational way.",
    icons: [
      {
        link: "https://github.com/lukewarm3/VISAR_ND",
        type: "fab fa-github",
      },
      {
        link: "http://104.154.83.173:8080/",
        type: "fa-solid fa-laptop",
      },
    ],
  },
];
