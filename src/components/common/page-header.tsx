interface PageHeaderProps {
  /** 見出し（末尾のアクセントドットは自動付与） */
  title: string;
  /** ターミナル風プロンプト行（"$ " は自動付与） */
  prompt: string;
  description?: string;
}

export function PageHeader({ title, prompt, description }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-10 md:px-12 md:pt-16">
      <p className="mb-2 font-mono text-[13px] font-medium text-accent-pop md:mb-3 md:text-[15px]">
        $ {prompt}
      </p>
      <h1 className="text-[44px] leading-none font-black tracking-[-0.02em] md:text-[80px]">
        {title}
        <span className="text-accent-pop">.</span>
      </h1>
      {description && (
        <p className="mt-4 max-w-[640px] leading-[1.9] text-muted-foreground md:mt-5">
          {description}
        </p>
      )}
    </div>
  );
}
