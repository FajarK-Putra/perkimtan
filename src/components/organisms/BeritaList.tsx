import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import CardBerita from "../molecules/CardBerita";

type Berita = {
  id: number;
  judul: string;
  isi: string;
  tanggal?: string;
  gambar?: string;
  kategori?: string;
  excerpt?: string;
  slug?: string;
};

type BeritaListProps = {
  berita: Berita[];
  showHeader?: boolean;
  limit?: number;
};

export default function BeritaList({ 
  berita, 
  showHeader = true, 
  limit 
}: BeritaListProps) {
  const displayedBerita = limit ? berita.slice(0, limit) : berita;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Berita & Informasi Terkini
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Dapatkan informasi terbaru seputar kegiatan dan program 
              Dinas Perumahan, Kawasan Permukiman dan Pertanahan.
            </Text>
          </div>
        )}
        
        {displayedBerita.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedBerita.map((item) => (
                <CardBerita 
                  key={item.id} 
                  id={item.id.toString()}
                  judul={item.judul} 
                  isi={item.isi}
                  tanggal={item.tanggal}
                  gambar={item.gambar}
                  kategori={item.kategori}
                  excerpt={item.excerpt}
                  slug={item.slug}
                />
              ))}
            </div>
            
            {limit && berita.length > limit && (
              <div className="text-center">
                <Button variant="outline" size="lg">
                  Lihat Semua Berita
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <Text variant="body" className="text-gray-500">
              Belum ada berita yang tersedia.
            </Text>
          </div>
        )}
      </div>
    </section>
  );
}