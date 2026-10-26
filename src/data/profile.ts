export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: LinkItem[];
};

// 프로필과 링크 목록은 여기서 수정합니다.
// TODO: 아래는 보여주기용 더미 값입니다. 실제 정보로 교체하세요.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageUrl: "https://api.dicebear.com/9.x/thumbs/svg?seed=linknamu",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
