import MainLayout from '@/components/templates/MainLayout';
import Text from '@/components/atoms/Text';
import Heading from '@/components/atoms/Heading';

export default function PerizinanPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Heading level="h1" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
                Layanan Perizinan
              </Heading>
              <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
                Informasi dan prosedur lengkap mengenai layanan perizinan di bidang perumahan, kawasan permukiman, dan pertanahan
              </Text>
            </div>

            {/* Content Sections */}
            <div className="grid gap-12">
              {/* Perizinan Perumahan */}
              <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
                <Heading level="h2" className="text-2xl font-bold mb-6 text-blue-700">
                  Perizinan Perumahan
                </Heading>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Heading level="h3" className="text-lg font-semibold text-gray-800">
                      Izin Mendirikan Bangunan (IMB)
                    </Heading>
                    <Text className="text-gray-600">
                      Perizinan untuk pembangunan rumah tinggal, gedung bertingkat, dan bangunan komersial
                    </Text>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Persyaratan dokumen lengkap
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Proses verifikasi lapangan
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Penerbitan surat izin
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <Heading level="h3" className="text-lg font-semibold text-gray-800">
                      Sertifikat Laik Fungsi (SLF)
                    </Heading>
                    <Text className="text-gray-600">
                      Sertifikasi kelayakan fungsi bangunan untuk keselamatan penghuni
                    </Text>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Inspeksi keselamatan bangunan
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Evaluasi struktur dan utilitas
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Penerbitan sertifikat
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Perizinan Kawasan */}
              <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
                <Heading level="h2" className="text-2xl font-bold mb-6 text-green-700">
                  Perizinan Kawasan Permukiman
                </Heading>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Heading level="h3" className="text-lg font-semibold text-gray-800">
                      Izin Pembangunan Perumahan
                    </Heading>
                    <Text className="text-gray-600">
                      Perizinan untuk pengembangan kawasan perumahan skala besar
                    </Text>
                  </div>
                  <div className="space-y-4">
                    <Heading level="h3" className="text-lg font-semibold text-gray-800">
                      Izin Pemanfaatan Ruang
                    </Heading>
                    <Text className="text-gray-600">
                      Perizinan pemanfaatan ruang sesuai dengan rencana tata ruang wilayah
                    </Text>
                  </div>
                </div>
              </section>

              {/* Perizinan Pertanahan */}
              <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
                <Heading level="h2" className="text-2xl font-bold mb-6 text-orange-700">
                  Perizinan Pertanahan
                </Heading>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Heading level="h3" className="text-lg font-semibold text-gray-800">
                      Izin Lokasi
                    </Heading>
                    <Text className="text-gray-600">
                      Perizinan untuk pemanfaatan tanah dalam pembangunan proyek tertentu
                    </Text>
                  </div>
                  <div className="space-y-4">
                    <Heading level="h3" className="text-lg font-semibold text-gray-800">
                      Izin Perubahan Penggunaan Tanah
                    </Heading>
                    <Text className="text-gray-600">
                      Perizinan untuk mengubah fungsi penggunaan tanah sesuai kebutuhan
                    </Text>
                  </div>
                </div>
              </section>

              {/* Prosedur Umum */}
              <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
                <Heading level="h2" className="text-2xl font-bold mb-6 text-white">
                  Prosedur Umum Perizinan
                </Heading>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <Heading level="h4" className="font-semibold mb-2 text-white">Persiapan Dokumen</Heading>
                    <Text className="text-blue-100 text-sm">
                      Lengkapi semua dokumen persyaratan sesuai jenis perizinan
                    </Text>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <Heading level="h4" className="font-semibold mb-2 text-white">Pengajuan</Heading>
                    <Text className="text-blue-100 text-sm">
                      Submit permohonan melalui sistem online atau datang langsung
                    </Text>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <Heading level="h4" className="font-semibold mb-2 text-white">Verifikasi</Heading>
                    <Text className="text-blue-100 text-sm">
                      Tim teknis melakukan verifikasi dokumen dan survei lapangan
                    </Text>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">4</span>
                    </div>
                    <Heading level="h4" className="font-semibold mb-2 text-white">Penerbitan</Heading>
                    <Text className="text-blue-100 text-sm">
                      Penerbitan surat izin setelah semua persyaratan terpenuhi
                    </Text>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
                <Heading level="h2" className="text-2xl font-bold mb-6 text-gray-800">
                  Informasi Kontak
                </Heading>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Heading level="h3" className="text-lg font-semibold mb-4 text-gray-800">
                      Kantor Pelayanan
                    </Heading>
                    <div className="space-y-3 text-gray-600">
                      <p>Jl. Pemuda No. 1, Padang, Sumatera Barat</p>
                      <p>Telepon: (0751) 123456</p>
                      <p>Email: perizinan@perkimtan.sumbarprov.go.id</p>
                    </div>
                  </div>
                  <div>
                    <Heading level="h3" className="text-lg font-semibold mb-4 text-gray-800">
                      Jam Pelayanan
                    </Heading>
                    <div className="space-y-2 text-gray-600">
                      <p>Senin - Jumat: 08:00 - 16:00 WIB</p>
                      <p>Sabtu: 08:00 - 12:00 WIB</p>
                      <p>Minggu & Hari Libur: Tutup</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
