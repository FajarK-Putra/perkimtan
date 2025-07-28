import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import ServiceCard from "../molecules/ServiceCard";

const services = [
  {
    title: "Perumahan",
    description: "Pengembangan dan pengelolaan program perumahan rakyat yang layak dan terjangkau",
    icon: "building",
    link: "/layanan/perumahan"
  },
  {
    title: "Kawasan Permukiman",
    description: "Penataan dan pengembangan kawasan permukiman yang berkelanjutan",
    icon: "home",
    link: "/layanan/permukiman"
  },
  {
    title: "Pertanahan",
    description: "Pelayanan administrasi dan pengelolaan data pertanahan yang akurat",
    icon: "map",
    link: "/layanan/pertanahan"
  },
  {
    title: "Perizinan",
    description: "Pengurusan izin mendirikan bangunan dan perizinan terkait lainnya",
    icon: "document",
    link: "/layanan/perizinan"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Layanan Kami
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan berkualitas dalam bidang perumahan, 
            kawasan permukiman, dan pertanahan untuk masyarakat Sumatera Barat.
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
