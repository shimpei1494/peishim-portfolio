"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Top", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Blog", href: "/blog" },
  { label: "Hobby", href: "/hobby" },
] as const;

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-12 md:py-5">
        <Link
          href="/"
          className="font-mono text-[17px] font-semibold"
          onClick={() => setIsMenuOpen(false)}
        >
          peishim<span className="text-accent-pop">.dev</span>
        </Link>
        <nav className="hidden gap-7 font-mono text-sm font-medium md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={
                isActivePath(pathname, href)
                  ? "text-accent-pop"
                  : "transition-colors hover:text-accent-pop"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="flex flex-col gap-[5px] py-1.5 md:hidden"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="h-[2.5px] w-6 rounded-sm bg-ink" />
          <span className="h-[2.5px] w-6 rounded-sm bg-ink" />
          <span className="h-[2.5px] w-6 rounded-sm bg-ink" />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="border-t-2 border-ink bg-cream md:hidden">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block border-b border-divider-soft px-5 py-3.5 font-mono text-sm font-medium last:border-b-0 ${
                isActivePath(pathname, href) ? "text-accent-pop" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
