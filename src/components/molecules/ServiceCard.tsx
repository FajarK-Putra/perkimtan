import React from "react";
import Icon from "../atoms/Icon";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  link?: string;
};

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:-translate-y-2">
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon name={icon} size="lg" color="white" />
      </div>
      
      <Heading level="h3" className="mb-3 group-hover:text-[#2E7D32] transition-colors">
        {title}
      </Heading>
      
      <Text variant="body" size="sm" className="mb-4">
        {description}
      </Text>
      
      {link && (
        <a 
          href={link}
          className="inline-flex items-center text-[#2E7D32] font-medium hover:text-[#1B5E20] transition-colors"
        >
          Selengkapnya
          <Icon name="arrow-right" size="sm" className="ml-1" />
        </a>
      )}
    </div>
  );
}
