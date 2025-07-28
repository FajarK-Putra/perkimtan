import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  variant?: "primary" | "mobile";
};

export default function NavLink({ href, children, isActive = false, variant = "primary" }: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <a
        href={href}
        className={`block px-4 py-3 text-base font-medium transition-colors ${
          isActive 
            ? "text-[#2E7D32] bg-gray-50 border-r-4 border-[#2E7D32]" 
            : "text-gray-700 hover:text-[#2E7D32] hover:bg-gray-50"
        }`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
        isActive 
          ? "text-[#2E7D32] bg-[#E8F5E8]" 
          : "text-gray-700 hover:text-[#2E7D32] hover:bg-gray-50"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#2E7D32] rounded-full"></span>
      )}
    </a>
  );
}
