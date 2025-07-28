import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

type StatsCardProps = {
  title: string;
  value: string | number;
  description: string;
  trend?: "up" | "down" | "neutral";
  unit?: string;
};

export default function StatsCard({ title, value, description, trend = "neutral", unit = "" }: StatsCardProps) {
  const trendColors = {
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-gray-600"
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#2E7D32] hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <Heading level="h4" variant="muted" className="font-medium">
          {title}
        </Heading>
        {trend !== "neutral" && (
          <span className={`text-sm font-medium ${trendColors[trend]}`}>
            {trend === "up" ? "↑" : "↓"}
          </span>
        )}
      </div>
      
      <div className="mb-2">
        <span className="text-3xl font-bold text-[#003366]">
          {value}
        </span>
        {unit && (
          <span className="text-lg text-gray-500 ml-1">
            {unit}
          </span>
        )}
      </div>
      
      <Text variant="caption" size="sm">
        {description}
      </Text>
    </div>
  );
}
