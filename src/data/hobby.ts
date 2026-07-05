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
    id: "snowboarding",
    title: "Snowboard",
    description:
      "学生時代はシーズン30回ペースで滑りに行っていました。グラトリ多め。社会人になってからは年数回ほど。",
    items: [
      {
        id: "snowboard-solo-2019",
        type: "youtube",
        title: "個人のソロ動画（2019-2020シーズン）",
        videoId: "aFjI7OqTL70",
      },
      {
        id: "snowboard-circle-2018",
        type: "youtube",
        title: "大学のサークル動画（2018-2019シーズン）",
        videoId: "p98DfFvn15Q",
      },
    ],
  },
  {
    id: "sauna",
    title: "Sauna",
    description: "特に良かったサウナ、ユニークだったサウナを紹介。",
    items: [
      {
        id: "sauna-rakan",
        type: "link",
        title: "らかんの湯",
        url: "https://www.mifuneyama.co.jp/rakan.html",
      },
      {
        id: "sauna-the-sauna",
        type: "link",
        title: "The Sauna",
        url: "https://lampinc.co.jp/nojiriko/sauna/",
      },
      {
        id: "sauna-tokyo",
        type: "link",
        title: "サウナ東京",
        url: "https://sauna-tokyo.jp/",
      },
      {
        id: "sauna-tenryu",
        type: "link",
        title: "サウナ天竜",
        url: "https://www.saunatenryu.info/",
      },
    ],
  },
  {
    id: "anime",
    title: "Anime",
    description: "1個しか挙げてないですが、色々見てます！",
    items: [
      {
        id: "anime-rezero",
        type: "link",
        title: "Re：ゼロから始める異世界生活",
        url: "https://re-zero-anime.jp/tv/",
      },
    ],
  },
  {
    id: "live",
    title: "Live",
    description: "ライブに行くのも好きです。最近はアイドルのライブばかり行っています。",
    items: [
      {
        id: "cutie-street",
        type: "link",
        title: "CUTIE STREET",
        url: "https://cutiestreet.asobisystem.com/",
        description: "推しアイドル。全員かわいくて、ライブもめちゃ楽しい。",
      },
    ],
  },
];
