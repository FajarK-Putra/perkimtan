import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#003366] to-[#2E7D32] text-white py-20 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat bg-center"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level="h1" className="text-white mb-6 text-4xl md:text-6xl">
            Dinas Perumahan, Kawasan Permukiman dan Pertanahan
          </Heading>
          
          <Text variant="lead" size="lg" className="text-gray-200 mb-8 max-w-3xl mx-auto">
            Melayani masyarakat Sumatera Barat dalam bidang perumahan, kawasan permukiman, 
            dan pertanahan dengan profesional, transparan, dan akuntabel.
          </Text>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="secondary" size="lg">
              Layanan Publik
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#003366]">
              Profil Dinas
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <Text variant="caption" className="text-gray-300">
                Tahun Pengalaman
              </Text>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <Text variant="caption" className="text-gray-300">
                Rumah Terbangun
              </Text>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <Text variant="caption" className="text-gray-300">
                Kawasan Permukiman
              </Text>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99%</div>
              <Text variant="caption" className="text-gray-300">
                Kepuasan Masyarakat
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
