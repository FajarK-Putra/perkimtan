import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import StatsCard from "../molecules/StatsCard";

const statistics = [
  {
    title: "Total Rumah Terbangun",
    value: "52,847",
    description: "Unit rumah yang telah dibangun sejak 2020",
    trend: "up" as const,
    unit: "unit"
  },
  {
    title: "Kawasan Permukiman",
    value: "247",
    description: "Kawasan permukiman yang telah ditata",
    trend: "up" as const,
    unit: "lokasi"
  },
  {
    title: "Sertifikat Tanah",
    value: "15,692",
    description: "Sertifikat tanah yang telah diterbitkan",
    trend: "up" as const,
    unit: "sertifikat"
  },
  {
    title: "Kepuasan Masyarakat",
    value: "98.5",
    description: "Tingkat kepuasan pelayanan publik",
    trend: "up" as const,
    unit: "%"
  }
];

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heading level="h2" className="text-white mb-4">
            Pencapaian Kami
          </Heading>
          <Text variant="lead" className="text-green-100 max-w-2xl mx-auto">
            Data dan statistik pencapaian kinerja Dinas Perumahan, 
            Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat.
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              trend={stat.trend}
              unit={stat.unit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
