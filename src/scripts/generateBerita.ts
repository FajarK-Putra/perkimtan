import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";

// const uri = process.env.MONGODB_URI as string;
const uri = "mongodb+srv://fjrkurnia1112_db_user:cApQRnHUmQge3Jsn@cluster-perkim.4nzs0m1.mongodb.net/?appName=cluster-perkim";

const judulList = [
  "Dinas Perkim Sumbar Tingkatkan Kualitas Permukiman Warga",
  "Program Bedah Rumah Bagi Masyarakat Berpenghasilan Rendah",
  "Pemprov Sumbar Lakukan Penataan Kawasan Permukiman",
  "Peningkatan Infrastruktur Perumahan di Kota Padang",
  "Penataan Kawasan Kumuh untuk Lingkungan Lebih Layak",
  "Pembangunan Sarana Permukiman di Kabupaten Solok",
  "Program Rumah Layak Huni untuk Masyarakat",
  "Revitalisasi Kawasan Permukiman oleh Dinas Perkim",
  "Peningkatan Akses Air Bersih di Kawasan Permukiman",
  "Pemprov Sumbar Percepat Program Penataan Perumahan"
];

const kategoriList = [
  "Perumahan",
  "Permukiman",
  "Pertanahan",
  "Program Pemerintah",
  "Infrastruktur"
];

const isiParagraf = [
  "Pemerintah Provinsi Sumatera Barat melalui Dinas Perumahan, Kawasan Permukiman dan Pertanahan terus melakukan berbagai program untuk meningkatkan kualitas lingkungan masyarakat.",
  "Program ini bertujuan untuk meningkatkan kualitas hunian masyarakat serta menciptakan kawasan permukiman yang lebih tertata dan layak huni.",
  "Selain itu, pemerintah daerah juga mendorong partisipasi masyarakat dalam menjaga lingkungan permukiman agar tetap bersih dan nyaman.",
  "Kegiatan ini merupakan bagian dari upaya pemerintah dalam meningkatkan kesejahteraan masyarakat di Sumatera Barat.",
  "Diharapkan program ini dapat memberikan manfaat nyata bagi masyarakat dan meningkatkan kualitas hidup warga."
];

async function generateData() {

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db("berita_db");
  const collection = db.collection("berita");

  const data = [];

  for (let i = 1; i <= 1000; i++) {

    const judul = faker.helpers.arrayElement(judulList);
    const paragraf1 = faker.helpers.arrayElement(isiParagraf);
    const paragraf2 = faker.helpers.arrayElement(isiParagraf);
    const paragraf3 = faker.helpers.arrayElement(isiParagraf);

    data.push({
      id: i,
      judul: judul,
      tanggal: faker.date.past().toISOString(),
      kategori: faker.helpers.arrayElement(kategoriList),
      tipe: faker.helpers.arrayElement(["Penting", "Info"]),
      lampiran: null,
      fileUrl: null,
      ringkasan: paragraf1,
      isi: `<p>${paragraf1}</p><p>${paragraf2}</p><p>${paragraf3}</p>`
    });
  }

  await collection.insertMany(data);

  console.log("1000 berita bahasa Indonesia berhasil dibuat");

  await client.close();
}

generateData();