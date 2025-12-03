'use client';

import { Metadata } from "next";
import { useState } from "react";

// Data dummy untuk informasi berkala
const informasiData = [
  {
    id: 1,
    judul: "LKjIP 2024",
    publikasi: "2025-09-16 16:41:03",
    tahun: "2025",
    fileUrl: "/documents/ppid/lkjip-2024.pdf"
  },
  {
    id: 2,
    judul: "Rekap DPA 2025",
    publikasi: "2025-09-16 16:29:25",
    tahun: "2025",
    fileUrl: "/documents/ppid/rekap-dpa-2025.pdf"
  },
  {
    id: 3,
    judul: "Laporan Layanan Informasi Perkimtan 2024",
    publikasi: "2025-09-11 14:48:04",
    tahun: "2025",
    fileUrl: "/documents/ppid/laporan-layanan-informasi-2024.pdf"
  },
  {
    id: 4,
    judul: "Laporan Keuangan 2024",
    publikasi: "2025-09-11 14:42:25",
    tahun: "2025",
    fileUrl: "/documents/ppid/laporan-keuangan-2024.pdf"
  },
  {
    id: 5,
    judul: "Struktur Organisasi Dinas Perkimtan 2025",
    publikasi: "2025-07-16 12:13:54",
    tahun: "2025",
    fileUrl: "/documents/ppid/struktur-organisasi-2025.pdf"
  },
  {
    id: 6,
    judul: "Data Lokasi PSU Per Jumlah Kecamatan Tahun 2025",
    publikasi: "2025-07-09 11:20:59",
    tahun: "2025",
    fileUrl: "/documents/ppid/data-lokasi-psu-2025.pdf"
  },
  {
    id: 7,
    judul: "RKT 2025",
    publikasi: "2025-06-24 15:52:36",
    tahun: "2025",
    fileUrl: "/documents/ppid/rkt-2025.pdf"
  },
  {
    id: 8,
    judul: "Perjanjian Kinerja Eselon II",
    publikasi: "2025-06-24 15:51:27",
    tahun: "2025",
    fileUrl: "/documents/ppid/perjanjian-kinerja-eselon-ii.pdf"
  },
  {
    id: 9,
    judul: "Realisasi Program Kegiatan sd Mei 2025",
    publikasi: "2025-06-18 11:30:33",
    tahun: "2025",
    fileUrl: "/documents/ppid/realisasi-program-mei-2025.pdf"
  },
  {
    id: 10,
    judul: "KAK Penyusunan Dokumen Perangkat Daerah 2025",
    publikasi: "2025-06-18 11:28:51",
    tahun: "2025",
    fileUrl: "/documents/ppid/kak-penyusunan-dokumen-2025.pdf"
  },
  {
    id: 11,
    judul: "Rencana Strategis 2024-2026",
    publikasi: "2025-05-20 10:15:42",
    tahun: "2025",
    fileUrl: "/documents/ppid/renstra-2024-2026.pdf"
  },
  {
    id: 12,
    judul: "Laporan Akuntabilitas Kinerja 2024",
    publikasi: "2025-05-15 09:30:18",
    tahun: "2025",
    fileUrl: "/documents/ppid/lakip-2024.pdf"
  },
  {
    id: 13,
    judul: "Profil Dinas Perkimtan 2025",
    publikasi: "2025-04-22 14:20:05",
    tahun: "2025",
    fileUrl: "/documents/ppid/profil-dinas-2025.pdf"
  },
  {
    id: 14,
    judul: "Data Rumah Tidak Layak Huni 2024",
    publikasi: "2025-04-10 11:45:30",
    tahun: "2025",
    fileUrl: "/documents/ppid/data-rtlh-2024.pdf"
  },
  {
    id: 15,
    judul: "Rencana Kerja Tahunan 2024",
    publikasi: "2025-03-28 13:10:55",
    tahun: "2025",
    fileUrl: "/documents/ppid/rkt-2024.pdf"
  },
];

export default function InformasiBerkala() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  // Filter data berdasarkan pencarian
  const filteredData = informasiData.filter(item =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hitung total halaman
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Informasi Berkala</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Data dan informasi yang wajib disediakan dan diumumkan secara berkala oleh Dinas Perkimtan Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari judul..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-20">
                    NO
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    JUDUL
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    PUBLIKASI
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-28">
                    TAHUN
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-28">
                    UNDUH
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {indexOfFirstItem + index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {item.judul}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {item.publikasi}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {item.tahun}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <a
                          href={item.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors"
                          aria-label="Lihat File"
                        >
                          <span className="text-sm font-medium">Lihat File</span>
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      Tidak ada data yang ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredData.length > 0 && (
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-center border-t border-gray-200">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Prev
                </button>

                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      currentPage === number
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}