import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariant = "primary" | "secondary" | "muted";

type HeadingProps = {
  children: React.ReactNode;
  level?: HeadingLevel;
  variant?: HeadingVariant;
  className?: string;
};

export default function Heading({ 
  children, 
  level = "h1", 
  variant = "primary",
  className = ""
}: HeadingProps) {
  const Component = level;
  
  const baseClasses = "font-bold";
  
  const levelClasses = {
    h1: "text-3xl md:text-5xl",
    h2: "text-2xl md:text-4xl",
    h3: "text-xl md:text-2xl",
    h4: "text-lg md:text-xl",
    h5: "text-base md:text-lg",
    h6: "text-sm md:text-base"
  };
  
  const variantClasses = {
    primary: "text-[#003366]",
    secondary: "text-[#2E7D32]",
    muted: "text-gray-600"
  };
  
  return (
    <Component className={`${baseClasses} ${levelClasses[level]} ${variantClasses[variant]} ${className}`}>
      {children}
    </Component>
  );
}