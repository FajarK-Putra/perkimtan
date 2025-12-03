'use client';

import { Metadata } from "next";
import { useState } from "react";

// Data dummy untuk informasi serta merta
const informasiData = [
  {
    id: 1,
    judul: "Pengumuman Bencana Alam Banjir Wilayah Padang",
    publikasi: "2025-11-15 08:30:15",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/pengumuman-bencana-banjir-padang.pdf"
  },
  {
    id: 2,
    judul: "Peringatan Dini Potensi Longsor Area Permukiman",
    publikasi: "2025-10-28 14:20:45",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/peringatan-dini-longsor.pdf"
  },
  {
    id: 3,
    judul: "Informasi Darurat Kerusakan Infrastruktur Perumahan",
    publikasi: "2025-10-10 10:15:30",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/info-darurat-kerusakan-infrastruktur.pdf"
  },
  {
    id: 4,
    judul: "Pengumuman Evakuasi Permukiman Daerah Rawan Bencana",
    publikasi: "2025-09-22 07:45:20",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/pengumuman-evakuasi-permukiman.pdf"
  },
  {
    id: 5,
    judul: "Peringatan Ancaman Kebakaran Lahan Permukiman",
    publikasi: "2025-08-18 16:30:55",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/peringatan-kebakaran-lahan.pdf"
  },
  {
    id: 6,
    judul: "Info Tanggap Darurat Gempa Bumi Sumatera Barat",
    publikasi: "2025-07-25 09:10:40",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/info-tanggap-darurat-gempa.pdf"
  },
  {
    id: 7,
    judul: "Pengumuman Perbaikan Darurat Fasilitas Umum",
    publikasi: "2025-06-30 11:25:18",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/pengumuman-perbaikan-darurat.pdf"
  },
  {
    id: 8,
    judul: "Peringatan Cuaca Ekstrem Dampak Permukiman",
    publikasi: "2025-05-14 13:40:22",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/peringatan-cuaca-ekstrem.pdf"
  },
  {
    id: 9,
    judul: "Info Keadaan Darurat Pencemaran Air Bersih",
    publikasi: "2025-04-08 08:55:33",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/info-darurat-pencemaran-air.pdf"
  },
  {
    id: 10,
    judul: "Pengumuman Bahaya Struktur Bangunan Tidak Layak Huni",
    publikasi: "2025-03-20 15:20:10",
    tahun: "2025",
    fileUrl: "/documents/ppid/serta-merta/pengumuman-bahaya-struktur-bangunan.pdf"
  },
];

export default function InformasiSertaMerta() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Informasi Serta Merta</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Informasi yang wajib diumumkan secara serta-merta tanpa penundaan terkait keadaan darurat atau bencana yang mengancam hajat hidup orang banyak
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