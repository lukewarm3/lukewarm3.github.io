import React from "react";
import { Dock, DockIcon } from "./magicui/dock";
import "./magicui/dock.css";
import { RiHomeFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { RiMiniProgramFill } from "react-icons/ri";
import { MdInterests } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

// Define the gold color to match across components
const GOLD_COLOR = "#cfc79b";

/**
 * @typedef {React.HTMLAttributes<SVGElement>} IconProps
 */

export function Navbar() {
  return (
    <div className="relative w-full flex justify-center px-5%">
      <Dock
        className="border border-neutral-200 dark:border-neutral-200 backdrop-blur-md rounded-2xl px-4 gap-6 controls shadow-lg"
        direction="middle"
      >
        <DockIcon className="border border-black dark:border-black">
          <a href="#home">
            <RiHomeFill className="size-6" style={{ color: GOLD_COLOR }} />
          </a>
        </DockIcon>
        <DockIcon className="border border-black dark:border-black">
          <a href="#experience">
            <MdWork className="size-6" style={{ color: GOLD_COLOR }} />
          </a>
        </DockIcon>
        <DockIcon className="border border-black dark:border-black">
          <a href="#portfolio">
            <AiFillProject className="size-6" style={{ color: GOLD_COLOR }} />
          </a>
        </DockIcon>
        {/* <DockIcon className="border border-black dark:border-black">
          <a href="#program">
            <RiMiniProgramFill
              className="size-6"
              style={{ color: GOLD_COLOR }}
            />
          </a>
        </DockIcon> */}
        <DockIcon className="border border-black dark:border-black">
          <a href="#blogs">
            <MdInterests className="size-6" style={{ color: GOLD_COLOR }} />
          </a>
        </DockIcon>
        <DockIcon className="border border-black dark:border-black">
          <a href="#contact">
            <IoIosContact className="size-6" style={{ color: GOLD_COLOR }} />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

export default Navbar;
