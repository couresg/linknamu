"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: LinkCardProps) {
  const handleClick = () => {
    // 페이지 이동 중에도 요청이 유실되지 않도록 sendBeacon 사용
    const body = new Blob([JSON.stringify({ linkId: id })], { type: "application/json" });
    navigator.sendBeacon("/api/clicks", body);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-emerald-400"
    >
      {title}
    </a>
  );
}
