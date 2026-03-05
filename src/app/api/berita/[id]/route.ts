import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db("berita_db");
    
    // Support both the user-requested _id (ObjectId) and our existing numeric id
    let query: Record<string, unknown>;
    
    if (ObjectId.isValid(id) && (String(new ObjectId(id)) === id)) {
      query = { _id: new ObjectId(id) };
    } else {
      query = { id: parseInt(id) };
    }

    const berita = await db.collection("berita").findOne(query);

    if (!berita) {
      return NextResponse.json(
        { message: "Berita tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(berita);
  } catch (_error) {
    return NextResponse.json(
      { message: "Error mengambil detail berita" },
      { status: 500 }
    );
  }
}
