import { MongoClient } from "mongodb";

declare global {
  // 개발 모드 HMR 중에도 연결을 재사용하기 위한 전역 캐시
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// MONGODB_URI가 없으면 null을 반환해 DB 없이도 페이지가 동작하게 합니다.
export function getMongoClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  return global._mongoClientPromise;
}
