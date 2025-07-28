import React from "react";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

type ContactInfoProps = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

export default function ContactInfo({ icon, label, value, href }: ContactInfoProps) {
  const content = (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="bg-[#2E7D32] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon name={icon} size="sm" color="white" />
      </div>
      <div>
        <Text variant="caption" size="sm" className="text-gray-500 mb-1">
          {label}
        </Text>
        <Text variant="body" className="font-medium">
          {value}
        </Text>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:text-[#2E7D32] transition-colors">
        {content}
      </a>
    );
  }

  return content;
}
