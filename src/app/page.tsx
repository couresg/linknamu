import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

// wireframe.png 레이아웃: 상단 프로필(사진·이름·한 줄 소개) + 아래 세로 링크 카드 목록
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-16 pt-24 sm:pt-28">
      <ThemeToggle />

      <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />

      <LinkList links={profile.links} />
    </main>
  );
}
