// Data untuk Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat

/**
 * CATATAN UNTUK INTEGRASI API:
 * 
 * File ini berisi data dummy untuk development.
 * Ketika sudah siap untuk integrasi dengan backend API:
 * 
 * 1. Untuk Pengumuman (pengumumanList):
 *    - Tambahkan property 'fileUrl' untuk link download lampiran
 *    - Contoh: fileUrl: "https://api.perkimtan.go.id/files/pengumuman_rekrutmen_2024.pdf"
 *    - DownloadButton component akan otomatis handle download dari URL tersebut
 * 
 * 2. Struktur data yang diharapkan dari API:
 *    {
 *      id: number,
 *      judul: string,
 *      tanggal: string (ISO format),
 *      kategori: string,
 *      tipe: "Penting" | "Info",
 *      lampiran: string | null,
 *      fileUrl: string | null,  // <- Tambahkan ini untuk URL download
 *      ringkasan: string,
 *      isi: string (HTML)
 *    }
 * 
 * 3. Ganti import data static dengan fetch API di komponen
 */

export const dinasProfile = {
  name: "Dinas Perumahan, Kawasan Permukiman dan Pertanahan",
  shortName: "Dinas Perkimtan Sumbar",
  region: "Provinsi Sumatera Barat",
  address: "Jl. Taman Siswa No. 1 Padang, Sumatera Barat 25129",
  phone: "(0751) 7051700-7051765",
  email: "info@perkimtan.sumbarprov.go.id",
  website: "https://perkimtan.sumbarprov.go.id",
  visi: "Mewujudkan Permukiman Layak Huni yang berkelanjutan dan Tata Kelola Pertanahan yang Berkeadilan",
  misi: [
    "Meningkatkan Tatakelola Organisasi Dinas Perumahan Rakyat, Kawasan Permukiman dan Pertanahan",
    "Meningkatkan Kualitas Kawasan Permukiman",
    "Meningkatkan Kualitas Perumahan"
  ]
}

export const layananUtama = [
  {
    id: 1,
    nama: "Perizinan Perumahan",
    deskripsi: "Pelayanan perizinan untuk pembangunan perumahan dan rumah susun",
    icon: "home",
    link: "/layanan/perizinan"
  },
  {
    id: 2,
    nama: "Sertifikat Laik Fungsi",
    deskripsi: "Penerbitan sertifikat laik fungsi bangunan gedung",
    icon: "certificate",
    link: "/layanan/sertifikasi"
  },
  {
    id: 3,
    nama: "Rekomendasi Lokasi",
    deskripsi: "Rekomendasi teknis lokasi pembangunan perumahan",
    icon: "map",
    link: "/layanan/rekomendasi"
  },
  {
    id: 4,
    nama: "Bantuan Stimulan Perumahan Swadaya (BSPS)",
    deskripsi: "Program bantuan perbaikan rumah tidak layak huni",
    icon: "help",
    link: "/layanan/bantuan"
  },
  {
    id: 5,
    nama: "Sertifikasi Tanah",
    deskripsi: "Pelayanan sertifikasi dan legalisasi tanah",
    icon: "file",
    link: "/layanan/sertifikasi-tanah"
  },
  {
    id: 6,
    nama: "Pengaduan Masyarakat",
    deskripsi: "Layanan pengaduan dan konsultasi masyarakat",
    icon: "message",
    link: "/layanan/pengaduan"
  }
]

export const beritaTerkini = [
  {
    id: 1,
    judul: "Program BSPS 2024 Targetkan 2.500 Unit Rumah di Sumbar",
    ringkasan: "Dinas Perkimtan Sumbar menargetkan pembangunan 2.500 unit rumah melalui program Bantuan Stimulan Perumahan Swadaya tahun 2024.",
    kategori: "Perumahan",
    tanggal: "2024-01-15",
    penulis: "Humas Dinas Perkimtan",
    gambar: "/app/assets/img/berita/berita-1.jpg",
    konten: "Dinas Perumahan, Kawasan Permukiman dan Pertanahan (Perkimtan) Sumatera Barat mengumumkan target ambisius untuk membangun 2.500 unit rumah melalui program Bantuan Stimulan Perumahan Swadaya (BSPS) di tahun 2024. Program ini bertujuan untuk meningkatkan kualitas hunian masyarakat berpenghasilan rendah di seluruh wilayah Sumatera Barat."
  },
  {
    id: 2,
    judul: "Sosialisasi Aturan Baru Izin Mendirikan Bangunan",
    ringkasan: "Dinas menggelar sosialisasi peraturan terbaru mengenai Izin Mendirikan Bangunan (IMB) kepada developer dan masyarakat.",
    kategori: "Kawasan Permukiman",
    tanggal: "2024-01-12",
    penulis: "Bidang Bangunan Gedung",
    gambar: "/app/assets/img/berita/berita-2.jpg",
    konten: "Dalam rangka meningkatkan pemahaman masyarakat tentang regulasi terbaru, Dinas Perkimtan mengadakan sosialisasi mengenai prosedur dan persyaratan Izin Mendirikan Bangunan (IMB). Acara ini dihadiri oleh perwakilan developer, kontraktor, dan masyarakat umum."
  },
  {
    id: 3,
    judul: "Sertifikasi Tanah Gratis untuk Masyarakat Kurang Mampu",
    ringkasan: "Program sertifikasi tanah gratis diluncurkan untuk membantu masyarakat kurang mampu mendapatkan kepastian hukum atas tanah.",
    kategori: "Pertanahan",
    tanggal: "2024-01-10",
    penulis: "Bidang Pertanahan",
    gambar: "/app/assets/img/berita/berita-3.jpg",
    konten: "Sebagai upaya memberikan kepastian hukum atas kepemilikan tanah, Dinas Perkimtan meluncurkan program sertifikasi tanah gratis yang ditujukan untuk masyarakat kurang mampu. Program ini merupakan kolaborasi dengan BPN Sumbar."
  },
  {
    id: 4,
    judul: "Pembangunan Rusunawa Tahap II di Kota Padang",
    ringkasan: "Dinas Perkimtan memulai pembangunan Rumah Susun Sederhana Sewa (Rusunawa) tahap II di Kota Padang.",
    kategori: "Perumahan",
    tanggal: "2024-01-08",
    penulis: "Bidang Perumahan",
    gambar: "/app/assets/img/berita/berita-4.jpg",
    konten: "Pembangunan Rusunawa tahap II di Kota Padang telah dimulai. Proyek ini merupakan solusi untuk menyediakan hunian layak bagi masyarakat berpenghasilan rendah di kawasan perkotaan."
  },
  {
    id: 5,
    judul: "Penataan Kawasan Kumuh di Pesisir Padang",
    ringkasan: "Program penataan kawasan kumuh di pesisir Kota Padang menunjukkan kemajuan signifikan.",
    kategori: "Kawasan Permukiman",
    tanggal: "2024-01-05",
    penulis: "Bidang Kawasan Permukiman",
    gambar: "/app/assets/img/berita/berita-5.jpg",
    konten: "Program penataan kawasan kumuh di pesisir Kota Padang telah mencapai 70% dari target. Program ini mencakup perbaikan infrastruktur, sanitasi, dan fasilitas umum."
  },
  {
    id: 6,
    judul: "Workshop Perencanaan Tata Ruang Permukiman",
    ringkasan: "Dinas mengadakan workshop perencanaan tata ruang untuk menciptakan permukiman yang lebih teratur.",
    kategori: "Kawasan Permukiman",
    tanggal: "2024-01-03",
    penulis: "Bidang Perencanaan",
    gambar: "/app/assets/img/berita/berita-6.jpg",
    konten: "Workshop ini diselenggarakan untuk meningkatkan kapasitas perencana dan pengembang dalam menciptakan kawasan permukiman yang lebih teratur dan berkelanjutan."
  },
  {
    id: 7,
    judul: "Penyelesaian Sengketa Tanah di Kabupaten Agam",
    ringkasan: "Tim Pertanahan berhasil menyelesaikan sengketa tanah yang telah berlangsung selama bertahun-tahun.",
    kategori: "Pertanahan",
    tanggal: "2023-12-28",
    penulis: "Bidang Pertanahan",
    gambar: "/app/assets/img/berita/berita-7.jpg",
    konten: "Setelah melalui proses mediasi yang panjang, tim pertanahan Dinas Perkimtan berhasil menyelesaikan sengketa tanah di Kabupaten Agam yang telah berlangsung selama bertahun-tahun."
  },
  {
    id: 8,
    judul: "Inovasi Pelayanan Digital Pertanahan",
    ringkasan: "Dinas meluncurkan sistem pelayanan digital untuk mempermudah urusan pertanahan.",
    kategori: "Pertanahan",
    tanggal: "2023-12-25",
    penulis: "Bidang Teknologi Informasi",
    gambar: "/app/assets/img/berita/berita-8.jpg",
    konten: "Dalam upaya meningkatkan kualitas pelayanan, Dinas Perkimtan meluncurkan sistem pelayanan digital yang memungkinkan masyarakat mengurus dokumen pertanahan secara online."
  }
]

export const galeriKegiatan = [
  {
    id: 1,
    judul: "Groundbreaking Perumahan Rakyat",
    deskripsi: "Peletakan batu pertama pembangunan perumahan rakyat di Kabupaten Padang Pariaman",
    kategori: "Perumahan",
    tanggal: "2024-01-08"
  },
  {
    id: 2,
    judul: "Monitoring Kawasan Permukiman",
    deskripsi: "Kegiatan monitoring dan evaluasi kawasan permukiman di Kota Bukittinggi",
    kategori: "Kawasan Permukiman",
    tanggal: "2024-01-05"
  },
  {
    id: 3,
    judul: "Sosialisasi Program BSPS",
    deskripsi: "Sosialisasi program Bantuan Stimulan Perumahan Swadaya kepada masyarakat",
    kategori: "Perumahan",
    tanggal: "2024-01-03"
  }
]

export const strukturOrganisasi = [
  {
    jabatan: "Kepala Dinas",
    nama: "Drs. H. Ahmad Syafrizal, M.Si",
    nip: "196508121990031008"
  },
  {
    jabatan: "Sekretaris",
    nama: "Ir. Hj. Yuslimar, M.T",
    nip: "196709151994032007"
  },
  {
    jabatan: "Kabid Perumahan",
    nama: "Ir. H. Yusril Amra, M.T",
    nip: "196512101994031004"
  },
  {
    jabatan: "Kabid Kawasan Permukiman",
    nama: "Ir. Hj. Dewi Fortuna, M.T",
    nip: "196808191994032005"
  },
  {
    jabatan: "Kabid Pertanahan",
    nama: "Ir. H. Ruslan Effendi, M.Si",
    nip: "196705141993031007"
  }
]

export const programKerja = [
  {
    id: 1,
    program: "Peningkatan Kualitas Perumahan",
    kegiatan: [
      "Pembangunan Rumah Susun Sederhana Sewa (Rusunawa)",
      "Program Bantuan Stimulan Perumahan Swadaya (BSPS)",
      "Fasilitas Likuiditas Pembiayaan Perumahan (FLPP)"
    ],
    target: "2.500 unit rumah",
    anggaran: "Rp 75.000.000.000"
  },
  {
    id: 2,
    program: "Pengembangan Kawasan Permukiman",
    kegiatan: [
      "Penataan kawasan permukiman kumuh",
      "Pembangunan infrastruktur permukiman",
      "Program Kota Tanpa Kumuh (KOTAKU)"
    ],
    target: "500 Ha kawasan tertata",
    anggaran: "Rp 50.000.000.000"
  },
  {
    id: 3,
    program: "Penataan Administrasi Pertanahan",
    kegiatan: [
      "Sertifikasi tanah massal",
      "Legalisasi aset daerah",
      "Penyelesaian sengketa tanah"
    ],
    target: "5.000 sertifikat",
    anggaran: "Rp 25.000.000.000"
  }
]

export const statistikKinerja = {
  perumahan: {
    target: 2500,
    realisasi: 1850,
    persentase: 74
  },
  kawasan: {
    target: 500,
    realisasi: 325,
    persentase: 65
  },
  sertifikat: {
    target: 5000,
    realisasi: 3200,
    persentase: 64
  },
  kepuasan: {
    target: 90,
    realisasi: 85,
    persentase: 94
  }
}

export const pengumumanList = [
  {
    id: 1,
    judul: "Pengumuman Rekrutmen Tenaga Kontrak Tahun 2024",
    tanggal: "2024-01-20",
    kategori: "Kepegawaian",
    tipe: "Penting",
    lampiran: "pengumuman_rekrutmen_2024.pdf",
    ringkasan: "Pembukaan lowongan pekerjaan untuk posisi tenaga kontrak di berbagai bidang dengan kualifikasi yang telah ditentukan.",
    isi: `
      <h3>PENGUMUMAN REKRUTMEN TENAGA KONTRAK TAHUN 2024</h3>
      <p>Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat membuka kesempatan kepada putra-putri terbaik untuk bergabung sebagai tenaga kontrak dengan kualifikasi sebagai berikut:</p>
      
      <h4>Posisi yang Dibutuhkan:</h4>
      <ol>
        <li>Staf Administrasi - 5 orang</li>
        <li>Surveyor Lapangan - 3 orang</li>
        <li>Analis Data - 2 orang</li>
        <li>Teknisi IT - 2 orang</li>
      </ol>
      
      <h4>Persyaratan Umum:</h4>
      <ul>
        <li>Warga Negara Indonesia</li>
        <li>Usia maksimal 35 tahun per 1 Januari 2024</li>
        <li>Pendidikan minimal S1 sesuai kualifikasi</li>
        <li>Sehat jasmani dan rohani</li>
        <li>Tidak pernah dihukum penjara</li>
        <li>Tidak sedang terikat kontrak dengan instansi lain</li>
      </ul>
      
      <h4>Jadwal Pendaftaran:</h4>
      <p>Pendaftaran dibuka mulai tanggal 22 Januari 2024 s/d 5 Februari 2024 melalui website resmi Dinas Perkimtan Sumbar.</p>
      
      <p>Untuk informasi lebih lanjut, silakan menghubungi Bagian Kepegawaian di nomor (0751) 7051234 ext. 105</p>
    `
  },
  {
    id: 2,
    judul: "Jadwal Pemeliharaan Website Resmi Dinas Perkimtan",
    tanggal: "2024-01-18",
    kategori: "Teknis",
    tipe: "Info",
    lampiran: null,
    ringkasan: "Informasi mengenai jadwal maintenance website yang akan mempengaruhi aksesibilitas layanan online.",
    isi: `
      <h3>PENGUMUMAN PEMELIHARAAN WEBSITE</h3>
      <p>Kepada seluruh pengguna layanan online Dinas Perkimtan Sumbar,</p>
      
      <p>Dengan hormat kami sampaikan bahwa akan dilakukan pemeliharaan rutin sistem website pada:</p>
      
      <div style="background: #dbeafe; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #3b82f6;">
        <strong style="color: #1e40af;">Hari/Tanggal:</strong> <span style="color: #1e3a8a;">Minggu, 21 Januari 2024</span><br>
        <strong style="color: #1e40af;">Waktu:</strong> <span style="color: #1e3a8a;">01.00 WIB - 06.00 WIB</span><br>
        <strong style="color: #1e40af;">Durasi:</strong> <span style="color: #1e3a8a;">Maksimal 5 jam</span>
      </div>
      
      <h4>Dampak:</h4>
      <ul>
        <li>Website tidak dapat diakses sementara</li>
        <li>Layanan online akan ditutup</li>
        <li>Pengajuan dokumen online tidak dapat dilakukan</li>
      </ul>
      
      <h4>Alternatif Layanan:</h4>
      <p>Untuk layanan mendesak, silakan menghubungi kantor kami melalui telepon atau datang langsung pada hari kerja berikutnya.</p>
      
      <p>Mohon maaf atas ketidaknyamanannya. Terima kasih atas pengertian dan kerjasamanya.</p>
    `
  },
  {
    id: 3,
    judul: "Pembukaan Pendaftaran Program BSPS Tahap II",
    tanggal: "2024-01-15",
    kategori: "Program",
    tipe: "Penting",
    lampiran: "syarat_bsps_tahap2.pdf",
    ringkasan: "Program bantuan stimulan perumahan swadaya tahap kedua telah dibuka untuk masyarakat yang memenuhi kriteria.",
    isi: `
      <h3>PENGUMUMAN PEMBUKAAN PENDAFTARAN PROGRAM BSPS TAHAP II</h3>
      <p>Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat dengan ini mengumumkan pembukaan pendaftaran Program Bantuan Stimulan Perumahan Swadaya (BSPS) Tahap II Tahun 2024.</p>
      
      <h4>Informasi Program:</h4>
      <ul>
        <li><strong>Kuota:</strong> 1.000 unit rumah</li>
        <li><strong>Nilai Bantuan:</strong> Rp 17.500.000 per unit</li>
        <li><strong>Jenis Bantuan:</strong> Perbaikan rumah tidak layak huni</li>
      </ul>
      
      <h4>Kriteria Penerima:</h4>
      <ol>
        <li>Masyarakat berpenghasilan rendah (MBR)</li>
        <li>Memiliki rumah tidak layak huni</li>
        <li>Memiliki lahan dengan status kepemilikan yang jelas</li>
        <li>Belum pernah menerima bantuan sejenis dari pemerintah</li>
        <li>Terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS)</li>
      </ol>
      
      <h4>Dokumen yang Diperlukan:</h4>
      <ul>
        <li>KTP & Kartu Keluarga</li>
        <li>Surat keterangan tidak mampu dari kelurahan/desa</li>
        <li>Bukti kepemilikan lahan (sertifikat/girik/letter C)</li>
        <li>Foto rumah existing</li>
        <li>DTKS (jika ada)</li>
      </ul>
      
      <h4>Pendaftaran:</h4>
      <p><strong>Waktu:</strong> 17 Januari - 28 Februari 2024<br>
      <strong>Tempat:</strong> Kantor Dinas Perkimtan Sumbar atau melalui website resmi<br>
      <strong>Alamat:</strong> Jl. Khatib Sulaiman No. 52, Padang</p>
      
      <p>Info lebih lanjut hubungi: (0751) 7051234 ext. 110</p>
    `
  },
  {
    id: 4,
    judul: "Sosialisasi Peraturan Baru Tentang IMB",
    tanggal: "2024-01-12",
    kategori: "Regulasi",
    tipe: "Info",
    lampiran: "materi_sosialisasi_imb.pdf",
    ringkasan: "Penjelasan mengenai peraturan terbaru terkait Izin Mendirikan Bangunan dan prosedur pengurusannya.",
    isi: `
      <h3>PENGUMUMAN SOSIALISASI PERATURAN BARU TENTANG IMB</h3>
      <p>Dalam rangka memberikan pemahaman yang lebih baik kepada masyarakat mengenai peraturan terbaru tentang Izin Mendirikan Bangunan (IMB), Dinas Perkimtan Sumbar akan mengadakan sosialisasi dengan detail sebagai berikut:</p>
      
      <h4>Waktu dan Tempat:</h4>
      <div style="background: #dcfce7; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #16a34a;">
        <strong style="color: #166534;">Tanggal:</strong> <span style="color: #14532d;">25 Januari 2024</span><br>
        <strong style="color: #166534;">Waktu:</strong> <span style="color: #14532d;">09.00 - 15.00 WIB</span><br>
        <strong style="color: #166534;">Tempat:</strong> <span style="color: #14532d;">Aula Dinas Perkimtan Sumbar</span><br>
        <strong style="color: #166534;">Jl. Khatib Sulaiman No. 52, Padang</strong>
      </div>
      
      <h4>Materi Sosialisasi:</h4>
      <ol>
        <li>Perubahan regulasi IMB terbaru</li>
        <li>Prosedur dan persyaratan pengurusan IMB</li>
        <li>Sistem online perizinan</li>
        <li>Sanksi pelanggaran bangunan tanpa IMB</li>
        <li>Tanya jawab</li>
      </ol>
      
      <h4>Peserta:</h4>
      <ul>
        <li>Developer dan pengembang properti</li>
        <li>Kontraktor bangunan</li>
        <li>Arsitek dan konsultan</li>
        <li>Masyarakat umum</li>
      </ul>
      
      <h4>Pendaftaran:</h4>
      <p>Untuk mengikuti sosialisasi, silakan mendaftar melalui:</p>
      <ul>
        <li>Website: perkimtan.sumbarprov.go.id</li>
        <li>Email: imb@perkimtan.sumbarprov.go.id</li>
        <li>Telepon: (0751) 7051234 ext. 108</li>
      </ul>
      
      <p><strong>Fasilitas:</strong> Sertifikat, materi, snack & lunch</p>
      <p><em>Kuota terbatas untuk 100 peserta. Pendaftaran ditutup tanggal 23 Januari 2024.</em></p>
    `
  },
  {
    id: 5,
    judul: "Libur Nasional dan Pelayanan Dinas",
    tanggal: "2024-01-08",
    kategori: "Umum",
    tipe: "Info",
    lampiran: null,
    ringkasan: "Informasi jadwal libur nasional dan operasional pelayanan dinas selama periode tertentu.",
    isi: `
      <h3>PENGUMUMAN LIBUR NASIONAL DAN PELAYANAN DINAS</h3>
      <p>Sehubungan dengan libur nasional yang akan datang, dengan ini kami informasikan jadwal operasional pelayanan Dinas Perkimtan Sumbar sebagai berikut:</p>
      
      <h4>Jadwal Libur:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: #e5e7eb;">
          <th style="padding: 12px; border: 2px solid #9ca3af; text-align: left; color: #1f2937; font-weight: bold;">Tanggal</th>
          <th style="padding: 12px; border: 2px solid #9ca3af; text-align: left; color: #1f2937; font-weight: bold;">Keterangan</th>
        </tr>
        <tr>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: 500;">15 Januari 2024</td>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: 500;">Tahun Baru Islam</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: 500;">8 Februari 2024</td>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: 500;">Isra Mi'raj</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: 500;">10-15 Februari 2024</td>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: 500;">Cuti Bersama Imlek</td>
        </tr>
      </table>
      
      <h4>Pelayanan Selama Libur:</h4>
      <ul>
        <li>Kantor tutup pada hari libur nasional dan cuti bersama</li>
        <li>Layanan online tetap dapat diakses 24/7</li>
        <li>Untuk keperluan mendesak, hubungi hotline darurat: 0812-3456-7890</li>
      </ul>
      
      <h4>Operasional Normal:</h4>
      <p>Pelayanan akan kembali normal pada <strong>hari kerja berikutnya</strong> setelah masa libur berakhir.</p>
      
      <p>Kami mohon maaf atas ketidaknyamanan yang mungkin terjadi. Terima kasih atas perhatian dan kerjasamanya.</p>
    `
  },
  {
    id: 6,
    judul: "Pengumuman Hasil Seleksi Program Magang 2024",
    tanggal: "2024-01-05",
    kategori: "Kepegawaian",
    tipe: "Penting",
    lampiran: "hasil_seleksi_magang_2024.pdf",
    ringkasan: "Daftar peserta yang diterima dalam program magang Dinas Perkimtan Sumbar tahun 2024.",
    isi: `
      <h3>PENGUMUMAN HASIL SELEKSI PROGRAM MAGANG 2024</h3>
      <p>Berdasarkan hasil seleksi administrasi dan wawancara yang telah dilaksanakan, dengan ini kami umumkan peserta yang diterima dalam Program Magang Tahun 2024:</p>
      
      <h4>Peserta yang Diterima:</h4>
      <p>Terlampir daftar nama peserta yang dinyatakan <strong>LULUS</strong> dan diterima sebagai peserta magang.</p>
      
      <h4>Ketentuan:</h4>
      <ol>
        <li>Peserta yang diterima wajib mengikuti orientasi pada tanggal 15 Januari 2024</li>
        <li>Membawa surat keterangan dari kampus</li>
        <li>Membawa dokumen asli untuk verifikasi</li>
        <li>Mengenakan pakaian formal pada hari pertama</li>
      </ol>
      
      <h4>Orientasi:</h4>
      <div style="background: #fed7aa; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #ea580c;">
        <strong style="color: #7c2d12;">Tanggal:</strong> <span style="color: #431407;">15 Januari 2024</span><br>
        <strong style="color: #7c2d12;">Waktu:</strong> <span style="color: #431407;">08.00 WIB</span><br>
        <strong style="color: #7c2d12;">Tempat:</strong> <span style="color: #431407;">Aula Lantai 2 Dinas Perkimtan Sumbar</span>
      </div>
      
      <h4>Periode Magang:</h4>
      <p>16 Januari 2024 - 16 April 2024 (3 bulan)</p>
      
      <h4>Kontak:</h4>
      <p>Untuk informasi lebih lanjut, hubungi Bagian Kepegawaian:<br>
      Telp: (0751) 7051234 ext. 105<br>
      Email: kepegawaian@perkimtan.sumbarprov.go.id</p>
      
      <p><em>Bagi peserta yang tidak lulus, kami ucapkan terima kasih atas partisipasinya dan tetap semangat untuk kesempatan berikutnya.</em></p>
    `
  },
  {
    id: 7,
    judul: "Perpanjangan Waktu Pengajuan Dokumen Sertifikasi Tanah",
    tanggal: "2024-01-03",
    kategori: "Pertanahan",
    tipe: "Penting",
    lampiran: null,
    ringkasan: "Perpanjangan batas waktu pengajuan dokumen untuk program sertifikasi tanah massal.",
    isi: `
      <h3>PENGUMUMAN PERPANJANGAN WAKTU PENGAJUAN DOKUMEN</h3>
      <p>Berdasarkan banyaknya permintaan dari masyarakat, Dinas Perkimtan Sumbar memberikan perpanjangan waktu pengajuan dokumen untuk Program Sertifikasi Tanah Massal Tahun 2024.</p>
      
      <h4>Perubahan Jadwal:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: #e5e7eb;">
          <th style="padding: 12px; border: 2px solid #9ca3af; text-align: left; color: #1f2937; font-weight: bold;">Keterangan</th>
          <th style="padding: 12px; border: 2px solid #9ca3af; text-align: left; color: #1f2937; font-weight: bold;">Jadwal Lama</th>
          <th style="padding: 12px; border: 2px solid #9ca3af; text-align: left; color: #1f2937; font-weight: bold;">Jadwal Baru</th>
        </tr>
        <tr>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: 500;">Batas Pengajuan</td>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: 500;">5 Januari 2024</td>
          <td style="padding: 12px; border: 2px solid #d1d5db; color: #1f2937; font-weight: bold;">31 Januari 2024</td>
        </tr>
      </table>
      
      <h4>Dokumen yang Dibutuhkan:</h4>
      <ul>
        <li>Fotokopi KTP & KK</li>
        <li>Surat pernyataan kepemilikan tanah</li>
        <li>Bukti kepemilikan (girik/letter C/akta jual beli)</li>
        <li>Surat keterangan dari kepala desa/lurah</li>
        <li>Denah lokasi tanah</li>
        <li>Materai Rp 10.000</li>
      </ul>
      
      <h4>Lokasi Pengajuan:</h4>
      <p>Pengajuan dapat dilakukan di:</p>
      <ol>
        <li>Kantor Dinas Perkimtan Sumbar</li>
        <li>Kantor kecamatan setempat</li>
        <li>Melalui website resmi (untuk upload dokumen)</li>
      </ol>
      
      <p><strong>Catatan:</strong> Program ini khusus untuk masyarakat berpenghasilan rendah dengan tanah maksimal 500 m².</p>
      
      <p>Info: (0751) 7051234 ext. 112 atau pertanahan@perkimtan.sumbarprov.go.id</p>
    `
  },
  {
    id: 8,
    judul: "Pemberitahuan Survei Kepuasan Masyarakat",
    tanggal: "2023-12-28",
    kategori: "Umum",
    tipe: "Info",
    lampiran: null,
    ringkasan: "Ajakan kepada masyarakat untuk berpartisipasi dalam survei kepuasan layanan publik.",
    isi: `
      <h3>PEMBERITAHUAN SURVEI KEPUASAN MASYARAKAT</h3>
      <p>Kepada seluruh pengguna layanan Dinas Perkimtan Sumbar yang terhormat,</p>
      
      <p>Dalam rangka meningkatkan kualitas pelayanan publik, kami mengajak Bapak/Ibu/Saudara/i untuk berpartisipasi dalam Survei Kepuasan Masyarakat (SKM) Tahun 2024.</p>
      
      <h4>Tujuan Survei:</h4>
      <ul>
        <li>Mengetahui tingkat kepuasan masyarakat terhadap layanan</li>
        <li>Mengidentifikasi area yang perlu ditingkatkan</li>
        <li>Menjadi bahan evaluasi kinerja pelayanan</li>
        <li>Meningkatkan kualitas layanan publik</li>
      </ul>
      
      <h4>Cara Mengisi:</h4>
      <ol>
        <li>Kunjungi website: perkimtan.sumbarprov.go.id/survey</li>
        <li>Atau scan QR Code yang tersedia di kantor</li>
        <li>Isi kuesioner dengan jujur dan objektif</li>
        <li>Submit formulir</li>
      </ol>
      
      <h4>Waktu Pelaksanaan:</h4>
      <p><strong>1 Januari - 31 Januari 2024</strong></p>
      
      <h4>Aspek yang Dinilai:</h4>
      <ul>
        <li>Persyaratan pelayanan</li>
        <li>Prosedur pelayanan</li>
        <li>Waktu pelayanan</li>
        <li>Biaya/tarif</li>
        <li>Produk layanan</li>
        <li>Kompetensi petugas</li>
        <li>Perilaku petugas</li>
        <li>Sarana dan prasarana</li>
        <li>Penanganan pengaduan</li>
      </ul>
      
      <p><strong>Hadiah Menarik:</strong> Responden berkesempatan mendapatkan voucher belanja senilai total Rp 5.000.000 (akan diundi).</p>
      
      <p><em>Partisipasi Anda sangat berarti bagi kami. Terima kasih atas kerjasamanya!</em></p>
    `
  }
]
