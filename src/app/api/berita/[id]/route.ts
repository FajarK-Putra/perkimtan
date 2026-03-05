import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    console.log('[API /berita/[id]] Received id:', id);

    const client = await clientPromise;
    const db = client.db("berita_db");

    let berita = null;

    // 1. Try numeric id first (most common from frontend links)
    const numericId = parseInt(id, 10);
    if (!isNaN(numericId)) {
      berita = await db.collection("berita").findOne({ id: numericId });
    }

    // 2. If not found, try as MongoDB ObjectId
    if (!berita && ObjectId.isValid(id) && id.length === 24) {
      berita = await db.collection("berita").findOne({ _id: new ObjectId(id) });
    }

    if (!berita) {
      return NextResponse.json(
        { message: "Berita tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(berita);
  } catch (error) {
    console.error('[API /berita/[id]] Error:', error);
    return NextResponse.json(
      { message: "Error mengambil detail berita", error: String(error) },
      { status: 500 }
    );
  }
}
