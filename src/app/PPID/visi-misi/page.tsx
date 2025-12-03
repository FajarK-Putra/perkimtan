import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visi dan Misi PPID | PPID Dinas Perkim Sumatera Barat",
  description: "Visi dan Misi PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDVisiMisi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visi dan Misi PPID</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Visi dan Misi Pejabat Pengelola Informasi dan Dokumentasi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Visi Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Terwujudnya pelayanan informasi yang transparan dan akuntabel untuk memenuhi hak pemohon informasi sesuai dengan ketentuan peraturan perundang-undangan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Misi Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Misi</h2>
                  <div className="space-y-4">
                    {[
                      "Meningkatkan pengelolaan dan pelayanan informasi yang berkualitas",
                      "Membangun dan mengembangkan sistem penyediaan dan layanan informasi",
                      "Meningkatkan kompetensi sumber daya manusia",
                      "Mewujudkan keterbukaan informasi publik yang bertanggung jawab dan sesuai dengan ketentuan peraturan perundang-undangan",
                      "Meningkatkan kapasitas sumber daya manusia dalam pelayanan informasi publik"
                    ].map((misi, index) => (
                      <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </div>
                        </div>
                        <p className="ml-4 text-gray-700 leading-relaxed">
                          {misi}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  
  );
}
