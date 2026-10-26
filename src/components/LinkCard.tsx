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
      className="block w-full rounded-2xl border border-white/70 bg-white/50 px-6 py-[18px] text-center text-[15px] font-semibold text-stone-800 shadow-[0_6px_24px_-12px_rgba(120,70,40,0.25)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-px hover:bg-white/70 hover:shadow-[0_10px_28px_-12px_rgba(120,70,40,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
