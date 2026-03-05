import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const cat = searchParams.get("cat") || "Semua";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "6");
    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db("berita_db");

    // Build Query
    const query: Record<string, unknown> = {};
    
    if (cat !== "Semua") {
      query.kategori = cat;
    }
    
    if (q) {
      query.$or = [
        { judul: { $regex: q, $options: "i" } },
        { ringkasan: { $regex: q, $options: "i" } }
      ];
    }

    console.log('MongoDB Query:', JSON.stringify(query));

    const total = await db.collection("berita").countDocuments(query);
    const categories = await db.collection("berita").distinct("kategori");
    const berita = await db
      .collection("berita")
      .find(query)
      .sort({ tanggal: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      data: berita,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      categories: ["Semua", ...categories]
    });
  } catch (_error) {
    return NextResponse.json(
      { message: "Error mengambil data berita" },
      { status: 500 }
    );
  }
}