"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "@/data/profile";

/** ステッカーの配置・配色・浮遊アニメーション（デザイン準拠、heroStickers と順に対応） */
const STICKER_STYLES = [
  "right-[240px] top-[250px] bg-sticker-yellow animate-bob [animation-duration:4s]",
  "right-[80px] top-[300px] bg-sticker-cyan animate-float-r [animation-duration:4.6s]",
  "right-[180px] top-[380px] bg-white animate-bob [animation-duration:5.2s]",
] as const;

const SOCIAL_PILL_STYLES: Record<string, string> = {
  GitHub: "bg-ink text-cream",
  Zenn: "bg-accent-pop text-white",
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <motion.section
      className="relative mx-auto max-w-6xl overflow-hidden px-5 pt-11 md:px-12 md:pt-[72px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={fadeUp}
        className="mb-2.5 font-mono text-[13px] font-medium text-accent-pop md:mb-3 md:text-[15px]"
      >
        $ hello, I am
        <span className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-accent-pop animate-blink" />
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className="text-[62px] leading-[0.95] font-black tracking-[-0.02em] md:text-[148px]"
      >
        {profile.alias}
        <span className="text-accent-pop">.</span>
      </motion.h1>
      <motion.div
        variants={fadeUp}
        aria-hidden
        className="text-[62px] leading-[0.95] font-black tracking-[-0.02em] text-transparent select-none [-webkit-text-stroke:1.5px_var(--accent-soft)] md:text-[148px] md:[-webkit-text-stroke:2px_var(--accent-soft)]"
      >
        {profile.alias}.
      </motion.div>

      {/* モバイル: 写真 + キャッチコピーを横並び */}
      <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 md:hidden">
        <div className="size-[88px] flex-none overflow-hidden rounded-full border-[3px] border-ink shadow-[5px_5px_0_var(--accent-soft)]">
          <Image
            src={profile.avatar}
            alt={profile.alias}
            width={88}
            height={88}
            className="size-full object-cover object-[50%_20%]"
            priority
          />
        </div>
        <div>
          <p className="mb-1 text-lg leading-normal font-bold">
            つくって、ためして、
            <br />
            発信する。
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {profile.title} / TypeScript
          </p>
        </div>
      </motion.div>

      {/* デスクトップ: キャッチコピー + リード文 */}
      <motion.p
        variants={fadeUp}
        className="mt-9 mb-2 hidden text-[26px] leading-relaxed font-bold md:block"
      >
        {profile.catchphrase}
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="hidden max-w-[560px] leading-[1.9] text-muted-foreground md:block"
      >
        {profile.lead}
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-6 mb-8 flex flex-wrap gap-2 md:mt-7 md:mb-0 md:gap-3"
      >
        {profile.socials.map(({ label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-4 py-2 font-mono text-xs font-semibold transition-transform hover:-translate-y-0.5 md:px-5 md:py-2.5 md:text-[13px] ${
              SOCIAL_PILL_STYLES[label] ?? "border-2 border-ink"
            } ${label === "X" ? "hidden md:inline-block" : ""}`}
          >
            {label} <span aria-hidden>↗</span>
          </a>
        ))}
      </motion.div>

      {/* デスクトップ: 浮遊する丸型写真 + ステッカー */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="absolute top-16 right-16 size-[168px] overflow-hidden rounded-full border-4 border-ink shadow-[8px_8px_0_var(--accent-soft)] animate-float">
          <Image
            src={profile.avatar}
            alt={profile.alias}
            width={168}
            height={168}
            className="size-full object-cover object-[50%_20%]"
            priority
          />
        </div>
        {profile.heroStickers.map((label, index) => (
          <div
            key={label}
            className={`absolute rounded-lg border-2 border-ink px-3.5 py-2 font-mono text-[13px] font-semibold shadow-[4px_4px_0_var(--ink)] ${
              STICKER_STYLES[index % STICKER_STYLES.length]
            }`}
          >
            {label}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
