import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      judul: "Program Peningkatan Kawasan Permukiman",
      isi: "Dinas Perkimtan meluncurkan program revitalisasi kawasan permukiman di daerah rawan banjir..."
    },
    {
      id: 2,
      judul: "Bantuan Rumah Layak Huni",
      isi: "Sebanyak 200 rumah layak huni dibangun untuk masyarakat berpenghasilan rendah..."
    }
  ]);
}