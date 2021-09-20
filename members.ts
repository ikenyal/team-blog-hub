import { Member } from '@src/types';

export const members: Member[] = [
  {
    id: 'taro',
    nickname: 'たろう',
    realName: '長澤太郎',
    bio: 'Kotlinの人だけど、いろいろやってるよ！',
    avatarSrc: '/avatars/taro.jpg',
    sources: ['https://taro.hatenablog.jp/feed'],
    includeUrlRegex: 'taro.hatenablog.jp',
    twitterUsername: 'ngsw_taro',
    githubUsername: 'ngsw_taro',
    websiteUrl: 'https://taro.hatenablog.jp/',
  },
  {
    id: 'jimbo',
    nickname: 'jimbo',
    realName: '神保嘉秀',
    bio: '大阪からリモートワークしてます',
    avatarSrc: '/avatars/jimbo.png',
    sources: [
      'https://jmblog.jp/atom.xml',
      'https://qiita.com/jimbo/feed',
      'https://zenn.dev/jimbo/feed',
      'https://note.com/yjimbo/rss',
    ],
    twitterUsername: 'jmblog',
    githubUsername: 'jmblog',
    websiteUrl: 'https://jmblog.jp',
  },
  {
    id: 'tatsuroro',
    nickname: 'たつろろ',
    realName: '中村達郎',
    bio: 'Webフロントエンドが得意です。福岡在住',
    avatarSrc: '/avatars/tatsuroro.jpg',
    sources: ['https://tatsuroro.hateblo.jp/feed'],
    includeUrlRegex: 'tatsuroro.hateblo.jp',
    twitterUsername: 'tatsuroro',
    githubUsername: 'tatsuroro',
    websiteUrl: 'https://tatsuroro.hateblo.jp/',
  },
  {
    id: 'shiraji',
    nickname: 'しらじ',
    realName: '磯貝佳典',
    bio: '家紋アイコンしらじです。フロント、バックエンドやってます',
    avatarSrc: '/avatars/shiraji.png',
    sources: ['https://shiraji.hatenablog.com/feed'],
    includeUrlRegex: 'shiraji.hatenablog.com',
    twitterUsername: 'shiraj_i',
    githubUsername: 'shiraji',
    websiteUrl: 'https://shiraji.hatenablog.com',
  },
  {
    id: 'shikichee',
    nickname: 'しきち',
    realName: '敷地琢也',
    bio: 'フロント、バックエンド、スクラムマスターなんでもやります。最近はプロダクトオーナーやってます',
    avatarSrc: '/avatars/shikichee.jpg',
    sources: ['https://note.com/shikichee/rss'],
    includeUrlRegex: 'note.com/shikichee',
    twitterUsername: 'shikichee',
    githubUsername: 'shikichee',
    websiteUrl: 'https://note.com/shikichee',
  },
  {
    id: 'maguhiro',
    nickname: 'maguhiro',
    realName: '目黒博隆',
    bio: '4児の父親エンジニア。フロント・バックエンド担当してます。',
    avatarSrc: '/avatars/megu.jpg',
    sources: ['https://qiita.com/maguhiro/feed', 'https://note.com/maguhiro/rss'],
    twitterUsername: 'maguhiro',
    githubUsername: 'maguhiro',
    websiteUrl: 'https://note.com/maguhiro',
  },
  {
    id: 'quvo',
    nickname: 'quvo',
    realName: '久保恒太',
    bio: '共同代表。元エンジニア兼なんでも屋',
    avatarSrc: '/avatars/quvo.jpg',
    sources: [
      'https://note.com/quvo_ub/rss',
      'https://anchor.fm/s/3b652dc8/podcast/rss',
      'https://anchor.fm/s/667d3c6c/podcast/rss',
    ],
    twitterUsername: 'quvo_ubie',
    githubUsername: 'quvo',
    websiteUrl: 'https://note.com/quvo_ub',
  },
  {
    id: 'itkq',
    nickname: 'itkq',
    realName: 'Takuya Kosugiyama',
    bio: 'YAML難しい',
    avatarSrc: '/avatars/itkq.png',
    sources: ['https://zenn.dev/itkq/feed'],
    twitterUsername: 'itkq',
    githubUsername: 'itkq',
    websiteUrl: 'https://itkq.jp/about/',
  },
  {
    id: 'h13i32maru',
    nickname: 'h13i32maru',
    realName: 'Ryo Maruyama',
    bio: 'JasperとかTrickleとか作ってる',
    avatarSrc: '/avatars/h13i32maru.jpg',
    sources: ['https://blog.h13i32maru.jp/feed'],
    twitterUsername: 'h13i32maru',
    githubUsername: 'h13i32maru',
    websiteUrl: 'https://h13i32maru.jp',
  },
  {
    id: 'empitsu',
    nickname: 'えんぴつ',
    realName: 'empitsu',
    bio: 'Software Engineer. フロントエンドが好きです。1児の母。',
    avatarSrc: '/avatars/empitsu.jpeg',
    sources: ['https://note.com/empitsu88/rss', 'https://zenn.dev/empitsu88/feed', 'https://qiita.com/empitsu88/feed'],
    twitterUsername: 'empitsu88',
    websiteUrl: 'https://empitsu88.hatenablog.com/entry/myprofile',
  },
  {
    id: 'yuku',
    nickname: 'ゆうく',
    realName: 'Yuku Kotani',
    bio: 'Webと長濱ねるさんが好きです',
    avatarSrc: '/avatars/yuku.png',
    sources: ['https://yuku.dev/feed.xml', 'https://zenn.dev/yuku/feed'],
    githubUsername: 'Monchi',
    twitterUsername: 'MonchiFC',
    websiteUrl: 'https://yuku.dev',
  },
  {
    id: 'kamina_zzz',
    nickname: 'kamina_zzz',
    realName: 'Kaito Minatoya',
    bio: 'Sake Reliability Engineer',
    avatarSrc: '/avatars/kamina_zzz.jpg',
    sources: [
      'https://note.com/kamina_zzz/rss',
      'https://zenn.dev/kamina_zzz/feed',
      'https://qiita.com/kamina_zzz/feed',
    ],
    twitterUsername: 'kamina_zzz',
    websiteUrl: 'https://y.at/🍺🤘🎧🤘🍺',
  },
  {
    id: 'mizutani',
    nickname: 'mizutani',
    realName: 'Masayoshi Mizutani',
    bio: 'セキュリティやってます',
    avatarSrc: '/avatars/mizutani.jpg',
    sources: ['https://mztn.hatenablog.com/rss', 'https://zenn.dev/mizutani/feed'],
    twitterUsername: 'm_mizutani',
    githubUsername: 'm-mizutani',
    websiteUrl: 'https://github.com/m-mizutani',
  },
  {
    id: 'yag_ays',
    nickname: 'yag_ays',
    realName: 'Yuki Okuda',
    bio: '機械学習エンジニア。専門は自然言語処理。愛犬はコーギー。',
    avatarSrc: '/avatars/yag.png',
    sources: ['https://zenn.dev/yag_ays/feed', 'https://yag-ays.github.io/index.xml'],
    githubUsername: 'yagays',
    twitterUsername: 'yag_ays',
    websiteUrl: 'https://yag.xyz/',
  },
  {
    id: 'syucream',
    nickname: 'syucream',
    realName: 'Ryo Okubo',
    bio: 'A software Engineer',
    avatarSrc: '/avatars/syucream.jpg',
    sources: ['https://syucream.hatenablog.jp/feed'],
    githubUsername: 'syucream',
    twitterUsername: 'syu_cream',
    websiteUrl: 'https://syucream.hatenablog.jp/',
  },
  {
    id: 'lukasjapan',
    nickname: 'lukasjapan',
    realName: 'Lukas Prasuhn',
    bio: 'Full Stack Software Engineer based in Tokyo',
    avatarSrc: '/avatars/lukas.png',
    sources: ['https://blog.cvguy.de/feed.xml', 'https://medium.com/feed/@lukasjp'],
    githubUsername: 'lukasjapan',
    twitterUsername: 'cvguy84', // inactive
    websiteUrl: 'https://blog.cvguy.de/',
  },
  {
    id: 'sys1yagi',
    nickname: 'やぎ',
    realName: '八木俊広',
    bio: 'Androidアプリエンジニアだったけどなんでもやってるよ',
    avatarSrc: '/avatars/sys1yagi.png',
    sources: ['https://note.com/sys1yagi/rss', 'https://sys1yagi.hatenablog.com/rss'],
    twitterUsername: 'sys1yagi',
    githubUsername: 'sys1yagi',
    websiteUrl: 'https://note.com/sys1yagi/',
  },
  {
    id: 'yoheikikuta',
    nickname: 'yoheikikuta',
    realName: 'Yohei Kikuta',
    bio: 'learning machine learning',
    avatarSrc: '/avatars/yoheikikuta.jpg',
    sources: ['https://yoheikikuta.github.io/feed.xml'],
    twitterUsername: 'yohei_kikuta',
    githubUsername: 'yoheikikuta',
    websiteUrl: 'https://github.com/yoheikikuta/resume',
  },
  {
    id: 'smochi',
    nickname: 'smochi',
    realName: 'Shunichi Mochizuki',
    bio: '新規事業のグロースなど、いろいろやってます。スタートアップや機械学習に興味があります',
    avatarSrc: '/avatars/smochi.jpeg',
    sources: ['https://qiita.com/smochi/feed', 'https://note.com/smochi_pub/rss'],
    twitterUsername: 'smochi_pub',
  },
  {
    id: 'masa_kazama',
    nickname: 'masa_kazama',
    realName: 'masa_kazama',
    bio: '機械学習エンジニア。専門は推薦システム。愛犬は柴犬。',
    avatarSrc: '/avatars/masa_kazama.jpg',
    sources: ['https://note.com/masa_kazama/rss'],
    githubUsername: 'masa3141',
    twitterUsername: 'masa_kazama',
    websiteUrl: 'https://note.com/masa_kazama',
  },
  {
    id: "jaga",
    nickname: "Jaga",
    realName: "Naoto Sakai",
    bio: "Data Analyst",
    avatarSrc: "/avatars/jaga.jpeg",
    sources: ["https://note.com/jagabass/rss"],
    twitterUsername: "jagabass"
  },
  {
    id: "atsumi",
    nickname: "atsumi",
    realName: "Tatsuya Atsumi",
    bio: "Data Engineer",
    avatarSrc: "/avatars/atsumi.png",
    sources: ["https://attsun1031.github.io/index.xml"],
    twitterUsername: "__Attsun__"
  },
  {
    id: "Schumi543",
    nickname: "Schumi543",
    realName: "Shuji Mihara",
    bio: "Software Engineer(Data, ML)",
    avatarSrc: "/avatars/schumi.jpeg",
    sources: ["https://schumi543.hatenablog.com/feed"],
    twitterUsername: "Schumi543"
  },
  {
    id: "shikajiro",
    nickname: "shikajiro",
    realName: "Shinjiro Watanabe",
    bio: "鹿似のエンジニアです。犬が好きです。",
    avatarSrc: "/avatars/shikajiro.jpeg",
    sources: ["https://note.com/shikajiro/rss", "https://zenn.dev/shikajiro/feed", "https://qiita.com/shikajiro/feed"],
    githubUsername: "shikajiro",
    twitterUsername: "shikajiro",
    websiteUrl: "https://shikajiro.github.io/"
  },
  {
    id: "hokaccha",
    nickname: "hokaccha",
    realName: "Kazuhito Hokamura",
    bio: "Software Engineer. 福岡在住。",
    avatarSrc: "/avatars/hokaccha.jpg",
    sources: ["https://hokaccha.hatenablog.com/feed", "https://zenn.dev/hokaccha/feed"],
    githubUsername: "hokaccha",
    twitterUsername: "hokaccha",
  },
  {
    id: "dtaniwaki",
    nickname: "dtaniwaki",
    realName: "Daisuke Taniwaki",
    bio: "Software Engineer.",
    avatarSrc: "/avatars/dtaniwaki.jpeg",
    sources: ['https://note.com/dtaniwaki/rss'],
    includeUrlRegex: 'note.com/dtaniwaki',
    twitterUsername: 'dtaniwaki',
    githubUsername: 'dtaniwaki',
    websiteUrl: 'https://note.com/dtaniwaki',
  },
  {
    id: 'takahi-i',
    nickname: 'takahi-i',
    realName: '伊藤敬彦',
    bio: '文字列をゴニョゴヨするプログラムを書くのが好きです',
    avatarSrc: '/avatars/takahi-i.jpeg',
    sources: ['https://note.com/takahi_i/rss'],
    twitterUsername: 'takahi_i',
    githubUsername: 'takahi-i',
  },
].sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
