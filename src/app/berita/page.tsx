import React from "react";
import MainLayout from "../../components/templates/MainLayout";
import BeritaList from "../../components/organisms/BeritaList";

// Extended sample data for news page
const allBerita = [
  {
    id: 1,
    judul: "Program Rumah Layak Huni Tahun 2024",
    isi: "Dinas Perkimtan Sumbar meluncurkan program rumah layak huni untuk masyarakat berpenghasilan rendah dengan target 5000 unit rumah pada tahun 2024. Program ini merupakan bagian dari upaya pemerintah provinsi untuk mengurangi backlog perumahan dan meningkatkan kualitas hidup masyarakat.",
    tanggal: "15 Januari 2024",
    kategori: "Program",
    excerpt: "Program rumah layak huni untuk masyarakat berpenghasilan rendah dengan target 5000 unit rumah.",
    slug: "program-rumah-layak-huni-2024"
  },
  {
    id: 2,
    judul: "Penataan Kawasan Permukiman Terpadu",
    isi: "Pembangunan infrastruktur kawasan permukiman terpadu di 10 lokasi prioritas dengan konsep ramah lingkungan dan berkelanjutan. Proyek ini meliputi pembangunan jalan, drainase, air bersih, dan fasilitas umum lainnya.",
    tanggal: "10 Januari 2024",
    kategori: "Pembangunan",
    excerpt: "Penataan kawasan permukiman terpadu di 10 lokasi prioritas dengan konsep ramah lingkungan.",
    slug: "penataan-kawasan-permukiman-terpadu"
  },
  {
    id: 3,
    judul: "Sertifikasi Tanah Digital",
    isi: "Implementasi sistem sertifikasi tanah digital untuk mempercepat proses penerbitan sertifikat dan meningkatkan akurasi data pertanahan. Sistem ini menggunakan teknologi blockchain untuk memastikan keamanan data.",
    tanggal: "8 Januari 2024",
    kategori: "Inovasi",
    excerpt: "Implementasi sistem sertifikasi tanah digital untuk mempercepat proses penerbitan sertifikat.",
    slug: "sertifikasi-tanah-digital"
  },
  {
    id: 4,
    judul: "Rapat Koordinasi Bidang Perumahan",
    isi: "Rapat koordinasi antara Dinas Perkimtan dengan stakeholder terkait untuk membahas program perumahan tahun 2024. Agenda utama meliputi evaluasi program tahun sebelumnya dan perencanaan program baru.",
    tanggal: "5 Januari 2024",
    kategori: "Kegiatan",
    excerpt: "Rapat koordinasi untuk membahas program perumahan tahun 2024.",
    slug: "rapat-koordinasi-bidang-perumahan"
  },
  {
    id: 5,
    judul: "Sosialisasi Peraturan Bangunan Gedung",
    isi: "Kegiatan sosialisasi peraturan bangunan gedung kepada masyarakat dan pelaku usaha konstruksi. Sosialisasi ini bertujuan untuk meningkatkan pemahaman tentang standar keselamatan bangunan.",
    tanggal: "3 Januari 2024",
    kategori: "Sosialisasi",
    excerpt: "Sosialisasi peraturan bangunan gedung untuk meningkatkan pemahaman standar keselamatan.",
    slug: "sosialisasi-peraturan-bangunan-gedung"
  },
  {
    id: 6,
    judul: "Pembangunan Rusunawa di 3 Lokasi",
    isi: "Groundbreaking pembangunan rumah susun sederhana sewa (Rusunawa) di 3 lokasi strategis untuk mengatasi kebutuhan hunian masyarakat berpenghasilan rendah di perkotaan.",
    tanggal: "28 Desember 2023",
    kategori: "Pembangunan",
    excerpt: "Groundbreaking pembangunan Rusunawa di 3 lokasi strategis.",
    slug: "pembangunan-rusunawa-3-lokasi"
  }
];

export default function BeritaPage() {
  return (
    <MainLayout>
      <BeritaList 
        berita={allBerita} 
        showHeader={true}
      />
    </MainLayout>
  );
}
