import amazon from "../img/resume/amazon.png";
import social from "../img/resume/social.png";
import lucy from "../img/resume/lucy.png";
import ndcs from "../img/resume/ndcs.png";

export const DATA = {
  work: [
    {
      company: "Amazon",
      href: "https://amazon.com",
      badges: [],
      location: "Seattle, WA",
      title: "Software Engineer",
      logoUrl: amazon,
      start: "Incoming June, 2025",
      description: "Some Cool Stuff. Some Cool Stuff. Some Cool Stuff.",
    },
    {
      company: "SocialTechLab",
      badges: [],
      href: "https://socialtechlabs.com/",
      location: "Remote",
      title: "Software Engineer, Co-leader",
      logoUrl: social,
      start: "May 2024",
      end: "August 2024",
      description: "Co-led development of a nontoxic social media app, building backend features like post and AI image generation while managing developers and optimizing cross-device support with AWS and DynamoDB.",
    },
    {
      company: "Lucy Family Institute for Data & Society",
      href: "https://lucyinstitute.nd.edu/",
      badges: [],
      location: "Notre Dame, IN",
      title: "Software Engineer",
      logoUrl: lucy,
      start: "May 2024",
      end: "August 2024",
      description:
        "Privacy Sandbox Project: Developed a high-efficiency web data collection system and interactive UI to study how browser privacy impacts personalized advertisements.\nVISAR Project: Built features for an AI-powered writing assistant that helps students generate thesis statements from selected text, with a user-friendly UI and automated deployment pipeline.",
    },
    {
      company: "ND Computer Science",
      href: "https://cse.nd.edu/",
      badges: [],
      location: "Notre Dame, IN",
      title: "Teaching Assistant",
      logoUrl: ndcs,
      start: "January 2024",
      end: "Present",
      description:
        "Teaching assistant for Data Structure, \nTeaching assistant for System Programming, \nTeaching assistant for Operating System",
    },
  ],
};
