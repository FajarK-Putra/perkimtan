import Image from "next/image";

export default function PPIDstrukturorganisasi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">STRUKTUR ORGANISASI PPID</h1>
      
      <div className="w-full relative">
        <Image
          src="/app/assets/img/struktur-organisasi-PPID.jpeg"
          alt="STRUKTUR ORGANISASI PPID"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}