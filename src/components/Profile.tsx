type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        className="h-28 w-28 rounded-full bg-white object-cover shadow-[0_14px_32px_-12px_rgba(150,80,40,0.45)] ring-4 ring-white/80 sm:h-32 sm:w-32 dark:bg-stone-800 dark:shadow-[0_14px_32px_-12px_rgba(0,0,0,0.7)] dark:ring-white/10"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs break-keep text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
        {bio}
      </p>
    </section>
  );
}
