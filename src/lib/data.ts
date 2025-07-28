// Data untuk Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat

export const dinasProfile = {
  name: "Dinas Perumahan, Kawasan Permukiman dan Pertanahan",
  shortName: "Dinas Perkimtan Sumbar",
  region: "Provinsi Sumatera Barat",
  address: "Jl. Khatib Sulaiman No. 52, Padang, Sumatera Barat 25136",
  phone: "(0751) 7051234",
  email: "info@perkimtan.sumbarprov.go.id",
  website: "https://perkimtan.sumbarprov.go.id",
  visi: "Terwujudnya Perumahan, Kawasan Permukiman dan Pertanahan yang Berkelanjutan dan Berkualitas di Sumatera Barat",
  misi: [
    "Meningkatkan kualitas dan kuantitas perumahan yang layak dan terjangkau",
    "Mengembangkan kawasan permukiman yang tertata dan berkelanjutan",
    "Meningkatkan kepastian hukum dan pengelolaan pertanahan",
    "Memperkuat kelembagaan dan sumber daya aparatur",
    "Meningkatkan pelayanan publik yang prima"
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
    penulis: "Humas Dinas Perkimtan"
  },
  {
    id: 2,
    judul: "Sosialisasi Aturan Baru Izin Mendirikan Bangunan",
    ringkasan: "Dinas menggelar sosialisasi peraturan terbaru mengenai Izin Mendirikan Bangunan (IMB) kepada developer dan masyarakat.",
    kategori: "Kawasan Permukiman",
    tanggal: "2024-01-12",
    penulis: "Bidang Bangunan Gedung"
  },
  {
    id: 3,
    judul: "Sertifikasi Tanah Gratis untuk Masyarakat Kurang Mampu",
    ringkasan: "Program sertifikasi tanah gratis diluncurkan untuk membantu masyarakat kurang mampu mendapatkan kepastian hukum atas tanah.",
    kategori: "Pertanahan",
    tanggal: "2024-01-10",
    penulis: "Bidang Pertanahan"
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
