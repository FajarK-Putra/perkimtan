'use client';

import { Metadata } from "next";
import { useState } from "react";

// Data dummy untuk informasi setiap saat
const informasiData = [
  {
    id: 1,
    judul: "Daftar Informasi Publik",
    publikasi: "2025-09-11 14:44:32",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/daftar-informasi-publik.pdf"
  },
  {
    id: 2,
    judul: "Laporan Penerima Bantuan Perbaikan RTLH 2024",
    publikasi: "2025-06-18 11:13:13",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/laporan-penerima-bantuan-rtlh-2024.pdf"
  },
  {
    id: 3,
    judul: "SOP Peringatan Dini dan Keadaan Darurat Dinas Perkimtan",
    publikasi: "2025-05-19 11:30:44",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/sop-peringatan-dini-darurat.pdf"
  },
  {
    id: 4,
    judul: "SOP Standar Pengujian Konsekuensi",
    publikasi: "2025-05-19 11:29:27",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/sop-standar-pengujian-konsekuensi.pdf"
  },
  {
    id: 5,
    judul: "SOP Standar Maklumat Pelayanan",
    publikasi: "2025-05-19 11:28:29",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/sop-standar-maklumat-pelayanan.pdf"
  },
  {
    id: 6,
    judul: "SOP Standar Pendokumentasian",
    publikasi: "2025-05-19 11:27:30",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/sop-standar-pendokumentasian.pdf"
  },
  {
    id: 7,
    judul: "SOP Penyusunan Daftar Informasi Publik",
    publikasi: "2025-05-19 11:26:41",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/sop-penyusunan-daftar-informasi-publik.pdf"
  },
  {
    id: 8,
    judul: "SOP Standar Penetapan dan Pemutakhiran Daftar informasi",
    publikasi: "2025-05-19 11:26:26",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/sop-standar-penetapan-pemutakhiran.pdf"
  },
  {
    id: 9,
    judul: "SOP Standar Pengajuan keberatan",
    publikasi: "2025-05-19 11:25:37",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/sop-standar-pengajuan-keberatan.pdf"
  },
  {
    id: 10,
    judul: "SOP Standar Pengumumuman Informasi Publik",
    publikasi: "2025-05-19 11:23:42",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/sop-standar-pengumuman-informasi-publik.pdf"
  },
  {
    id: 11,
    judul: "Pedoman Teknis Pembangunan Perumahan",
    publikasi: "2025-04-28 09:15:20",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/pedoman-teknis-pembangunan-perumahan.pdf"
  },
  {
    id: 12,
    judul: "Regulasi Pengelolaan Kawasan Permukiman",
    publikasi: "2025-04-15 10:30:45",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/regulasi-pengelolaan-kawasan.pdf"
  },
  {
    id: 13,
    judul: "Prosedur Pelayanan Pertanahan",
    publikasi: "2025-03-20 14:20:10",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/prosedur-pelayanan-pertanahan.pdf"
  },
  {
    id: 14,
    judul: "Standar Biaya Masukan Tahun 2025",
    publikasi: "2025-03-10 11:45:55",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/standar-biaya-masukan-2025.pdf"
  },
  {
    id: 15,
    judul: "Formulir Permohonan Informasi Publik",
    publikasi: "2025-02-25 08:30:22",
    tahun: "2025",
    fileUrl: "/documents/ppid/setiap-saat/formulir-permohonan-informasi.pdf"
  },
];

export default function InformasiSetiapSaat() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Informasi Tersedia Setiap Saat</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Informasi yang tersedia dan dapat diakses setiap saat oleh publik melalui PPID Dinas Perkimtan Provinsi Sumatera Barat
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