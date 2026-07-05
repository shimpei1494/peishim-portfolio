import type { ReactNode } from "react";

interface SectionTitleProps {
  /** 見出しテキスト（末尾のアクセントドットは自動付与） */
  title: string;
  /** 右端に置くリンク等 */
  action?: ReactNode;
}

export function SectionTitle({ title, action }: SectionTitleProps) {
  return (
    <div className="mb-5 flex items-baseline justify-between md:mb-7">
      <h2 className="text-[26px] font-black md:text-[40px]">
        {title}
        <span className="text-accent-pop">.</span>
      </h2>
      {action}
    </div>
  );
}
