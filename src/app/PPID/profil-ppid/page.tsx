import Image from "next/image";

export default function PPID() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Profil PPID</h1>
      
      <div className="w-full relative">
        <Image
          src="/app/assets/img/profil-PPID.png"
          alt="Profil PPID"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}