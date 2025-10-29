// Data untuk Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat

export const dinasProfile = {
  name: "Dinas Perumahan, Kawasan Permukiman dan Pertanahan",
  shortName: "Dinas Perkimtan Sumbar",
  region: "Provinsi Sumatera Barat",
  address: "Jl. Khatib Sulaiman No. 52, Padang, Sumatera Barat 25136",
  phone: "(0751) 7051234",
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
