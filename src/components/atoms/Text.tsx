import React from "react";

type TextVariant = "body" | "caption" | "lead";
type TextSize = "sm" | "md" | "lg";

type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  className?: string;
  as?: "p" | "span" | "div";
};

export default function Text({ 
  children, 
  variant = "body",
  size = "md",
  className = "",
  as = "p"
}: TextProps) {
  const Component = as;
  
  const variantClasses = {
    body: "text-gray-700 leading-relaxed",
    caption: "text-gray-500 leading-tight",
    lead: "text-gray-800 font-medium leading-relaxed"
  };
  
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  
  return (
    <Component className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}
