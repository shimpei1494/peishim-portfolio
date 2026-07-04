interface HobbyItemBase {
  id: string;
  title: string;
}

export interface YoutubeHobbyItem extends HobbyItemBase {
  type: "youtube";
  /** YouTube 動画 ID */
  videoId: string;
}

export interface ImageHobbyItem extends HobbyItemBase {
  type: "image";
  src: string;
  alt: string;
}

export interface LinkHobbyItem extends HobbyItemBase {
  type: "link";
  url: string;
  description?: string;
}

export type HobbyItem = YoutubeHobbyItem | ImageHobbyItem | LinkHobbyItem;

export interface HobbyCategory {
  id: string;
  title: string;
  description: string;
  items: HobbyItem[];
}

export const hobbyCategories: HobbyCategory[] = [
  {
    id: "youtube",
    title: "YouTube",
    description: "スノーボードなどの動画を投稿しています。",
    items: [
      {
        id: "video-1",
        type: "youtube",
        title: "スノーボード動画",
        videoId: "dQw4w9WgXcQ",
      },
    ],
  },
];
