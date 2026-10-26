"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  // 서버 기록은 LinkCard가 보내고, 화면 숫자는 바로 1 올림
  const increment = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            id={link.id}
            title={link.title}
            url={link.url}
            count={counts[link.id] ?? 0}
            onClick={() => increment(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
