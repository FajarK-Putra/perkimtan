import Image from "next/image";

export default function TataCaraPengajuanSengketa() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tata Cara Pengajuan Sengketa ke Komisi Informasi</h1>
      
      <div className="w-full relative">
        <Image
          src="/app/assets/img/Pengajuan-Penyelesaian-Sengketa.jpg"
          alt="Tata Cara Pengajuan Sengketa"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}