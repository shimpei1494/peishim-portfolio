"use client";

import { useEffect } from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
}

/** lite-youtube-embed による軽量 YouTube 埋め込み（クリックまで iframe を読み込まない） */
export function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  useEffect(() => {
    // カスタム要素の登録はクライアントでのみ行う
    void import("lite-youtube-embed");
  }, []);

  return <lite-youtube videoid={videoId} playlabel={`再生: ${title}`} />;
}
