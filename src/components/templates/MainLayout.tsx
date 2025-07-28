import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
};

export default function MainLayout({ 
  children, 
  className = "",
  containerClass = ""
}: MainLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 ${className}`}>
      
      <main className={`flex-1 ${containerClass}`}>
        {children}
      </main>
     
    </div>
  );
}