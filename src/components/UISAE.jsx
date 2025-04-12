"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "../lib/utils";
import { AnimatedBeam } from "./magicui/animated-beam";
import claude from "../img/ui/claude_ui.png";
import instagram from "../img/ui/instagram_ui.png";
import pinterest from "../img/ui/pinterest_ui.png";
import claude_blurred from "../img/ui/claude_blurred.png";
import instagram_blurred from "../img/ui/instagram_blurred.png";
import pinterest_blurred from "../img/ui/pinterest_blurred.png";
import { FiLayout } from "react-icons/fi";
import { TbTypography } from "react-icons/tb";
import { IoIosColorFilter } from "react-icons/io";
import { TbHierarchy3 } from "react-icons/tb";
import { MdOutlinePermMedia } from "react-icons/md";

// Custom ShinyHeader component
export const ShinyHeader = ({ text, className }) => (
  <div
    className={className}
    style={{
      fontSize: "3rem",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #cfc79b, #ffffff, #cfc79b)",
      backgroundSize: "200% auto",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      animation: "shineEffect 3s linear infinite",
    }}
  >
    {text}
  </div>
);

const UIComponentCard = forwardRef(({ className, children, style }, ref) => {
  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "z-10 flex h-[432px] w-[200px] items-center justify-center rounded-xl border-2 bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
});

UIComponentCard.displayName = "UIComponentCard";

export default function UISAE() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const midLeftRef = useRef(null);
  const midRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  const centerimagewidth = "130px";
  const centerimageheight = "200px";

  return (
    <div
      className="relative h-full w-full"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      {/* Description of the project */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          width: "40%",
          textAlign: "center",
          fontWeight: "bold",
          color: "#cfc79b",
          padding: "10px",
        }}
      >
        <ShinyHeader text="AI/ML Research" className="mb-4" />
        <p>
          Utilized Direct SAE and SSAE frameworks leveraging UI embeddings to
          uncover latent design patterns.
        </p>
      </div>
      {/* Center OpenAI icon */}
      <UIComponentCard
        ref={null}
        style={{
          position: "absolute",
          top: "40%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: centerimagewidth,
          height: centerimageheight,
        }}
      >
        <FiLayout size={80} />
      </UIComponentCard>

      <UIComponentCard
        ref={null}
        style={{
          position: "absolute",
          top: "40%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: centerimagewidth,
          height: centerimageheight,
        }}
      >
        <TbTypography size={80} />
      </UIComponentCard>

      <UIComponentCard
        ref={centerRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: centerimagewidth,
          height: centerimageheight,
        }}
      >
        <IoIosColorFilter size={80} />
      </UIComponentCard>

      <UIComponentCard
        ref={null}
        style={{
          position: "absolute",
          top: "60%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: centerimagewidth,
          height: centerimageheight,
        }}
      >
        <TbHierarchy3 size={80} />
      </UIComponentCard>

      <UIComponentCard
        ref={null}
        style={{
          position: "absolute",
          top: "60%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: centerimagewidth,
          height: centerimageheight,
        }}
      >
        <MdOutlinePermMedia size={80} />
      </UIComponentCard>

      {/* Top Left - Google Drive */}
      <UIComponentCard
        ref={topLeftRef}
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
        }}
      >
        <img
          src={claude}
          alt="claude"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </UIComponentCard>

      {/* Top Right - Google Docs */}
      <UIComponentCard
        ref={topRightRef}
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
        }}
      >
        <img
          src={claude_blurred}
          alt="claude_blurred"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </UIComponentCard>

      {/* Middle Left - Notion */}
      <UIComponentCard
        ref={midLeftRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "0%",
          transform: "translateY(-50%)",
        }}
      >
        <img
          src={instagram}
          alt="instagram"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </UIComponentCard>

      {/* Middle Right - Zapier */}
      <UIComponentCard
        ref={midRightRef}
        style={{
          position: "absolute",
          top: "50%",
          right: "0%",
          transform: "translateY(-50%)",
        }}
      >
        <img
          src={instagram_blurred}
          alt="instagram_blurred"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </UIComponentCard>

      {/* Bottom Left - WhatsApp */}
      <UIComponentCard
        ref={bottomLeftRef}
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
        }}
      >
        <img
          src={pinterest}
          alt="pinterest"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </UIComponentCard>

      {/* Bottom Right - Messenger */}
      <UIComponentCard
        ref={bottomRightRef}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
        }}
      >
        <img
          src={pinterest_blurred}
          alt="pinterest_blurred"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </UIComponentCard>

      {/* Connect beams to center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topLeftRef}
        toRef={centerRef}
        pathOpacity={0.15}
        pathWidth={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topRightRef}
        toRef={centerRef}
        pathOpacity={0.15}
        pathWidth={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={midLeftRef}
        toRef={centerRef}
        pathOpacity={0.15}
        pathWidth={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={midRightRef}
        toRef={centerRef}
        pathOpacity={0.15}
        pathWidth={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bottomLeftRef}
        toRef={centerRef}
        pathOpacity={0.15}
        pathWidth={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bottomRightRef}
        toRef={centerRef}
        pathOpacity={0.15}
        pathWidth={1}
      />
    </div>
  );
}