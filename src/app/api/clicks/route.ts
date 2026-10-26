import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";
import { profile } from "@/data/profile";

export const dynamic = "force-dynamic";

const DB_NAME = process.env.MONGODB_DB ?? "linknamu";
const validIds = new Set(profile.links.map((link) => link.id));

type ClickDoc = { linkId: string; count: number };

async function getCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(DB_NAME).collection<ClickDoc>("clicks");
}

const notConfigured = () =>
  NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });

const dbError = (error: unknown) => {
  console.error("[clicks] DB 오류:", error);
  return NextResponse.json({ error: "클릭 수 DB에 연결할 수 없습니다." }, { status: 500 });
};

// 링크별 클릭 수 조회
export async function GET() {
  try {
    const collection = await getCollection();
    if (!collection) return notConfigured();

    const docs = await collection.find({}).toArray();
    const counts = Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
    return NextResponse.json(counts);
  } catch (error) {
    return dbError(error);
  }
}

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  const { linkId } = await request.json().catch(() => ({}));
  if (typeof linkId !== "string" || !validIds.has(linkId)) {
    return NextResponse.json({ error: "잘못된 linkId입니다." }, { status: 400 });
  }

  try {
    const collection = await getCollection();
    if (!collection) return notConfigured();

    await collection.updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return dbError(error);
  }
}
