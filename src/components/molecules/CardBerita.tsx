"use client";

import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

type CardBeritaProps = {
  id?: string;
  judul: string;
  isi: string;
  tanggal?: string;
  gambar?: string;
  kategori?: string;
  excerpt?: string;
  slug?: string;
};

export default function CardBerita({ 
  judul, 
  isi, 
  tanggal,
  kategori,
  excerpt,
  slug
}: CardBeritaProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-[#2E7D32] group">
      {kategori && (
        <div className="mb-3">
          <span className="inline-block bg-[#E8F5E8] text-[#2E7D32] px-3 py-1 rounded-full text-sm font-medium">
            {kategori}
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <Heading level="h3" className="mb-2 group-hover:text-[#2E7D32] transition-colors">
          {judul}
        </Heading>
        
        {tanggal && (
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Icon name="calendar" size="sm" className="mr-2" />
            {tanggal}
          </div>
        )}
      </div>
      
      <Text variant="body" className="mb-4 line-clamp-3">
        {excerpt || isi}
      </Text>
      
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => slug && window.open(`/berita/${slug}`, '_self')}
        >
          Baca Selengkapnya
        </Button>
        
        <div className="flex items-center text-gray-400 text-sm">
          <Icon name="document" size="sm" />
        </div>
      </div>
    </article>
  );
}