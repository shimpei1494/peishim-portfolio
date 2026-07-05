import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 font-mono text-[13px] font-medium sm:flex-row md:px-12">
        <span>© 2026 peishim.dev</span>
        <div className="flex gap-5">
          {profile.socials.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-soft"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
