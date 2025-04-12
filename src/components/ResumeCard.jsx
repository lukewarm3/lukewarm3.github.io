"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";

function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  // Wrapper component to handle both links and content that should just expand
  const CardWrapper = ({ children }) => {
    if (!href) {
      // If no href, just render a div that can be clicked for expanding
      return (
        <div className="block cursor-pointer" onClick={handleClick}>
          {children}
        </div>
      );
    } else {
      // For all links, use a regular anchor tag with appropriate handling
      return (
        <a
          href={href}
          className="block cursor-pointer"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          onClick={description ? handleClick : undefined}
        >
          {children}
        </a>
      );
    }
  };

  return (
    <CardWrapper>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="flex mb-4">
          <div className="flex-none">
            <Avatar className="border h-12 w-12 m-auto rounded-full overflow-hidden">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain p-1 rounded-full"
              />
              <AvatarFallback className="rounded-full">
                {altText?.[0] || "A"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-grow ml-4 items-center flex-col group">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  {badges && (
                    <span className="inline-flex gap-x-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
                  {period}
                </div>
              </div>
              {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            </CardHeader>
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-2 text-xs sm:text-sm"
              >
                {description}
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </CardWrapper>
  );
}

export default ResumeCard;
