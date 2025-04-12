"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden rounded-full bg-white",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef(
  ({ className, src, alt = "", ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) return null;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className={cn("h-full w-full", className)}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600 font-medium",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
