const API_BASE = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard";
const STANDINGS_API = "https://site.web.api.espn.com/apis/v2/sports/soccer/fifa.world/standings?season=2026";
const STATS_API = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/statistics?season=2026";
const TOURNAMENT_API = `${API_BASE}?dates=20260611-20260720`;
const KNOCKOUT_API = `${API_BASE}?dates=20260628-20260720`;
const CCTV_IOS_APP_URL = "cctvvideo://open";
const IOS_STORE_URL = "itms-apps://itunes.apple.com/cn/app/id1479814602";
const IOS_STORE_WEB_URL = "https://apps.apple.com/cn/app/id1479814602";
const REFRESH_MS = 60_000;
const LANG_KEY = "worldCupLiveLanguage";
const PLAYER_NAME_CACHE_KEY = "worldCupPlayerNameCache";
const FINAL_DATE_LOCAL = "2026-07-20";
const APP_VERSION = "20260701-9";

const copy = {
  zh: {
    locale: "zh-CN",
    htmlLang: "zh-CN",
    title: "世界杯战报",
    syncReady: "准备同步",
    syncLoading: "同步中...",
    syncFailed: "同步失败",
    updatedAt: "已更新",
    refresh: "刷新比赛数据",
    languageSwitch: "语言切换",
    languageLabel: "语言",
    dateControls: "日期控制",
    prevDay: "前一天",
    nextDay: "后一天",
    today: "今天",
    matchDate: "比赛日期",
    summary: "比赛摘要",
    totalMatches: "场比赛",
    liveMatches: "进行中",
    doneMatches: "已结束",
    loading: "正在读取比赛数据...",
    noMatches: "这一天暂时没有查到比赛。",
    loadError: "数据暂时读取失败。请检查网络，或稍后再刷新。",
    livePrefix: "直播",
    live: "直播中",
    done: "已结束",
    scheduled: "未开赛",
    details: "央视频",
    openCctv: "打开央视频",
    appPromptClose: "关闭",
    appPromptTitle: "未能自动打开央视频",
    appPromptBody: "如果已安装，请用 Safari 顶部的 App 横幅打开；如果没有安装，可以前往应用商店下载。",
    iosStore: "App Store 下载",
    scorersBy: "进球",
    crest: "队徽",
    tba: "待定",
    venueTba: "场馆待定",
    scheduleTitle: "比赛日程",
    scorersTitle: "射手榜",
    scorersHint: "当届比赛与世界杯历史进球排名",
    currentScorers: "当届射手榜",
    historyScorers: "历史射手榜",
    player: "球员",
    goals: "进球",
    scorersEmpty: "暂时没有进球数据。",
    standingsTitle: "小组积分",
    advancementTitle: "晋级情况",
    advancementHint: "按 ESPN 当前积分榜与淘汰赛对阵更新",
    scheduleEmpty: "暂时没有后续赛程。",
    standingsEmpty: "暂时没有积分榜数据。",
    rank: "排名",
    team: "球队",
    played: "赛",
    win: "胜",
    draw: "平",
    loss: "负",
    goalDiff: "净",
    points: "分",
    qualified: "晋级区",
    knockoutTitle: "淘汰赛对阵",
    bracketButton: "对阵图",
    bracketTitle: "对阵图",
    pending: "待定",
    pendingMatchup: "待定 - 待定",
    groupLabel: "小组",
    winner: "第 1 名",
    runnerUp: "第 2 名",
    thirdPlace: "第三名",
    worldCup: "世界杯",
    groupStage: "小组赛",
    roundOf32: "32 强赛",
    roundOf16: "16 强赛",
    quarterfinal: "四分之一决赛",
    semifinal: "半决赛",
    thirdPlaceMatch: "季军赛",
    final: "决赛",
    finalBadge: "决赛 7月20日",
    moreGroups: "显示其他小组",
    roundWinner: "第 {number} 场胜者",
    round32Label: "32进16",
    round16Label: "16进8",
    quarterfinalLabel: "8进4",
    semifinalLabel: "半决赛",
    thirdPlaceLabel: "季军赛",
    visitorCount: "访问数",
    close: "关闭",
    ownGoal: "乌龙",
  },
  ja: {
    locale: "ja-JP",
    htmlLang: "ja",
    title: "ワールドカップ戦報",
    syncReady: "同期準備中",
    syncLoading: "同期中...",
    syncFailed: "同期失敗",
    updatedAt: "更新済み",
    refresh: "試合データを更新",
    languageSwitch: "言語切り替え",
    languageLabel: "言語",
    dateControls: "日付操作",
    prevDay: "前日",
    nextDay: "翌日",
    today: "今日",
    matchDate: "試合日",
    summary: "試合サマリー",
    totalMatches: "試合",
    liveMatches: "ライブ",
    doneMatches: "終了",
    loading: "試合データを読み込み中...",
    noMatches: "この日の試合は見つかりませんでした。",
    loadError: "データを読み込めませんでした。ネットワークを確認するか、後でもう一度お試しください。",
    livePrefix: "ライブ",
    live: "ライブ中",
    done: "終了",
    scheduled: "開始前",
    details: "央视频",
    openCctv: "央视频を開く",
    appPromptClose: "閉じる",
    appPromptTitle: "央视频を自動で開けませんでした",
    appPromptBody: "インストール済みの場合は、Safari上部のAppバナーから開いてください。未インストールの場合はストアから入手できます。",
    iosStore: "App Storeで入手",
    scorersBy: "得点",
    crest: "エンブレム",
    tba: "未定",
    venueTba: "会場未定",
    scheduleTitle: "試合日程",
    scorersTitle: "得点ランキング",
    scorersHint: "今大会とワールドカップ歴代の得点ランキング",
    currentScorers: "今大会得点ランキング",
    historyScorers: "歴代得点ランキング",
    player: "選手",
    goals: "得点",
    scorersEmpty: "得点データはまだありません。",
    standingsTitle: "グループ順位",
    advancementTitle: "勝ち上がり",
    advancementHint: "ESPN の現在順位と決勝トーナメント表に基づいて更新",
    scheduleEmpty: "今後の試合日程はまだありません。",
    standingsEmpty: "順位表データはまだありません。",
    rank: "順位",
    team: "チーム",
    played: "試合",
    win: "勝",
    draw: "分",
    loss: "敗",
    goalDiff: "差",
    points: "点",
    qualified: "突破圏",
    knockoutTitle: "決勝トーナメント",
    bracketButton: "トーナメント表",
    bracketTitle: "トーナメント表",
    pending: "未定",
    pendingMatchup: "未定 - 未定",
    groupLabel: "グループ",
    winner: "1位",
    runnerUp: "2位",
    thirdPlace: "3位",
    worldCup: "FIFAワールドカップ",
    groupStage: "グループステージ",
    roundOf32: "ラウンド32",
    roundOf16: "ラウンド16",
    quarterfinal: "準々決勝",
    semifinal: "準決勝",
    thirdPlaceMatch: "3位決定戦",
    final: "決勝",
    finalBadge: "決勝 7月20日",
    moreGroups: "ほかのグループを表示",
    roundWinner: "第{number}試合の勝者",
    round32Label: "ラウンド32",
    round16Label: "ラウンド16",
    quarterfinalLabel: "準々決勝",
    semifinalLabel: "準決勝",
    thirdPlaceLabel: "3位決定戦",
    visitorCount: "訪問数",
    close: "閉じる",
    ownGoal: "オウンゴール",
  },
  en: {
    locale: "en-US",
    htmlLang: "en",
    title: "World Cup Report",
    syncReady: "Ready",
    syncLoading: "Syncing...",
    syncFailed: "Sync failed",
    updatedAt: "Updated",
    refresh: "Refresh match data",
    languageSwitch: "Language",
    languageLabel: "Language",
    dateControls: "Date controls",
    prevDay: "Previous day",
    nextDay: "Next day",
    today: "Today",
    matchDate: "Match date",
    summary: "Match summary",
    totalMatches: "matches",
    liveMatches: "live",
    doneMatches: "finished",
    loading: "Loading match data...",
    noMatches: "No matches found for this day.",
    loadError: "Could not load data. Please check the network or refresh later.",
    livePrefix: "Live",
    live: "Live",
    done: "Finished",
    scheduled: "Scheduled",
    details: "CCTV Video",
    openCctv: "Open CCTV Video",
    appPromptClose: "Close",
    appPromptTitle: "Could not open CCTV Video",
    appPromptBody: "If installed, open it from the Safari app banner. Otherwise, download it from the App Store.",
    iosStore: "Download on App Store",
    scorersBy: "Goals",
    crest: "crest",
    tba: "TBD",
    venueTba: "Venue TBD",
    scheduleTitle: "Schedule",
    scorersTitle: "Top Scorers",
    scorersHint: "Current tournament and all-time World Cup scoring leaders",
    currentScorers: "Current Top Scorers",
    historyScorers: "All-Time Top Scorers",
    player: "Player",
    goals: "Goals",
    scorersEmpty: "No scoring data yet.",
    standingsTitle: "Group Standings",
    advancementTitle: "Advancement",
    advancementHint: "Updated from ESPN standings and knockout fixtures",
    scheduleEmpty: "No upcoming matches yet.",
    standingsEmpty: "No standings data yet.",
    rank: "Rank",
    team: "Team",
    played: "P",
    win: "W",
    draw: "D",
    loss: "L",
    goalDiff: "GD",
    points: "Pts",
    qualified: "Qualified",
    knockoutTitle: "Knockout Bracket",
    bracketButton: "Bracket",
    bracketTitle: "Bracket",
    pending: "TBD",
    pendingMatchup: "TBD - TBD",
    groupLabel: "Group",
    winner: "Winner",
    runnerUp: "Runner-up",
    thirdPlace: "Third place",
    worldCup: "World Cup",
    groupStage: "Group Stage",
    roundOf32: "Round of 32",
    roundOf16: "Round of 16",
    quarterfinal: "Quarterfinal",
    semifinal: "Semifinal",
    thirdPlaceMatch: "Third-place match",
    final: "Final",
    finalBadge: "Final July 20",
    moreGroups: "Show other groups",
    roundWinner: "Match {number} winner",
    round32Label: "Round of 32",
    round16Label: "Round of 16",
    quarterfinalLabel: "Quarterfinal",
    semifinalLabel: "Semifinal",
    thirdPlaceLabel: "Third-place match",
    visitorCount: "Visits",
    close: "Close",
    ownGoal: "OG",
  },
};

const teamNames = {
  ALG: { zh: "阿尔及利亚", ja: "アルジェリア" },
  ARG: { zh: "阿根廷", ja: "アルゼンチン" },
  AUS: { zh: "澳大利亚", ja: "オーストラリア" },
  AUT: { zh: "奥地利", ja: "オーストリア" },
  BEL: { zh: "比利时", ja: "ベルギー" },
  BIH: { zh: "波黑", ja: "ボスニア・ヘルツェゴビナ" },
  BRA: { zh: "巴西", ja: "ブラジル" },
  CAN: { zh: "加拿大", ja: "カナダ" },
  CHI: { zh: "智利", ja: "チリ" },
  CIV: { zh: "科特迪瓦", ja: "コートジボワール" },
  CMR: { zh: "喀麦隆", ja: "カメルーン" },
  COD: { zh: "刚果（金）", ja: "コンゴ民主共和国" },
  COL: { zh: "哥伦比亚", ja: "コロンビア" },
  CPV: { zh: "佛得角", ja: "カーボベルデ" },
  CRC: { zh: "哥斯达黎加", ja: "コスタリカ" },
  CRO: { zh: "克罗地亚", ja: "クロアチア" },
  CUW: { zh: "库拉索", ja: "キュラソー" },
  CZE: { zh: "捷克", ja: "チェコ" },
  DEN: { zh: "丹麦", ja: "デンマーク" },
  ECU: { zh: "厄瓜多尔", ja: "エクアドル" },
  EGY: { zh: "埃及", ja: "エジプト" },
  ENG: { zh: "英格兰", ja: "イングランド" },
  ESP: { zh: "西班牙", ja: "スペイン" },
  FRA: { zh: "法国", ja: "フランス" },
  GER: { zh: "德国", ja: "ドイツ" },
  GHA: { zh: "加纳", ja: "ガーナ" },
  HAI: { zh: "海地", ja: "ハイチ" },
  HUN: { zh: "匈牙利", ja: "ハンガリー" },
  IRN: { zh: "伊朗", ja: "イラン" },
  IRQ: { zh: "伊拉克", ja: "イラク" },
  ITA: { zh: "意大利", ja: "イタリア" },
  JOR: { zh: "约旦", ja: "ヨルダン" },
  JPN: { zh: "日本", ja: "日本" },
  KOR: { zh: "韩国", ja: "韓国" },
  MAR: { zh: "摩洛哥", ja: "モロッコ" },
  MEX: { zh: "墨西哥", ja: "メキシコ" },
  NED: { zh: "荷兰", ja: "オランダ" },
  NGA: { zh: "尼日利亚", ja: "ナイジェリア" },
  NOR: { zh: "挪威", ja: "ノルウェー" },
  NZL: { zh: "新西兰", ja: "ニュージーランド" },
  PAN: { zh: "巴拿马", ja: "パナマ" },
  PAR: { zh: "巴拉圭", ja: "パラグアイ" },
  PER: { zh: "秘鲁", ja: "ペルー" },
  POL: { zh: "波兰", ja: "ポーランド" },
  POR: { zh: "葡萄牙", ja: "ポルトガル" },
  QAT: { zh: "卡塔尔", ja: "カタール" },
  RSA: { zh: "南非", ja: "南アフリカ" },
  KSA: { zh: "沙特阿拉伯", ja: "サウジアラビア" },
  SAU: { zh: "沙特阿拉伯", ja: "サウジアラビア" },
  SCO: { zh: "苏格兰", ja: "スコットランド" },
  SEN: { zh: "塞内加尔", ja: "セネガル" },
  SRB: { zh: "塞尔维亚", ja: "セルビア" },
  SUI: { zh: "瑞士", ja: "スイス" },
  SWE: { zh: "瑞典", ja: "スウェーデン" },
  TUN: { zh: "突尼斯", ja: "チュニジア" },
  TUR: { zh: "土耳其", ja: "トルコ" },
  UKR: { zh: "乌克兰", ja: "ウクライナ" },
  URU: { zh: "乌拉圭", ja: "ウルグアイ" },
  USA: { zh: "美国", ja: "アメリカ" },
  UZB: { zh: "乌兹别克斯坦", ja: "ウズベキスタン" },
  WAL: { zh: "威尔士", ja: "ウェールズ" },
  ZAF: { zh: "南非", ja: "南アフリカ" },
};

const venueNames = {
  "AT&T Stadium": { zh: "AT&T 体育场", ja: "AT&Tスタジアム" },
  "BC Place": { zh: "BC Place 体育场", ja: "BCプレイス" },
  "BMO Field": { zh: "BMO 球场", ja: "BMOフィールド" },
  "Estadio Akron": { zh: "阿克伦体育场", ja: "エスタディオ・アクロン" },
  "Estadio BBVA": { zh: "BBVA 体育场", ja: "エスタディオBBVA" },
  "Estadio Banorte": { zh: "Banorte 体育场", ja: "エスタディオ・バノルテ" },
  "GEHA Field at Arrowhead Stadium": { zh: "箭头体育场 GEHA 球场", ja: "GEHAフィールド・アット・アローヘッド・スタジアム" },
  "Gillette Stadium": { zh: "吉列体育场", ja: "ジレット・スタジアム" },
  "Hard Rock Stadium": { zh: "硬石体育场", ja: "ハードロック・スタジアム" },
  "Levi's Stadium": { zh: "李维斯体育场", ja: "リーバイス・スタジアム" },
  "Lincoln Financial Field": { zh: "林肯金融球场", ja: "リンカーン・フィナンシャル・フィールド" },
  "Lumen Field": { zh: "流明球场", ja: "ルーメン・フィールド" },
  "Mercedes-Benz Stadium": { zh: "梅赛德斯-奔驰体育场", ja: "メルセデス・ベンツ・スタジアム" },
  "MetLife Stadium": { zh: "大都会人寿体育场", ja: "メットライフ・スタジアム" },
  "NRG Stadium": { zh: "NRG 体育场", ja: "NRGスタジアム" },
  "SoFi Stadium": { zh: "SoFi 体育场", ja: "SoFiスタジアム" },
};

const playerNames = {
  "Folarin Balogun": { zh: "弗拉林·巴洛贡", ja: "フォラリン・バログン" },
  "Cyle Larin": { zh: "赛尔·拉林", ja: "サイル・ラリン" },
  "Damián Bobadilla": { zh: "达米安·博巴迪利亚", ja: "ダミアン・ボバディージャ" },
  "Giovanni Reyna": { zh: "吉奥瓦尼·雷纳", ja: "ジョバンニ・レイナ" },
  "Hwang In-Beom": { zh: "黄仁范", ja: "ファン・インボム" },
  "Jovo Lukic": { zh: "约沃·卢基奇", ja: "ヨヴォ・ルキッチ" },
  "Julián Quiñones": { zh: "胡利安·基尼奥内斯", ja: "フリアン・キニョネス" },
  "Ladislav Krejcí": { zh: "拉迪斯拉夫·克雷伊奇", ja: "ラディスラフ・クレイチー" },
  "Maurício": { zh: "毛里西奥", ja: "マウリシオ" },
  "Oh Hyeon-Gyu": { zh: "吴贤揆", ja: "オ・ヒョンギュ" },
  "Raúl Jiménez": { zh: "劳尔·希门尼斯", ja: "ラウール・ヒメネス" },
  "Breel Embolo": { zh: "布雷尔·恩博洛", ja: "ブレール・エンボロ" },
  "Miro Muheim": { zh: "米罗·穆海姆", ja: "ミロ・ムハイム" },
  "Homam Ahmed": { zh: "霍曼·艾哈迈德", ja: "ホマム・アハメド" },
  "Ismael Saibari": { zh: "伊斯梅尔·塞巴里", ja: "イスマエル・サイバリ" },
  "Vinícius Júnior": { zh: "维尼修斯", ja: "ヴィニシウス" },
  "John McGinn": { zh: "约翰·麦金", ja: "ジョン・マッギン" },
  "Christian Pulisic": { zh: "克里斯蒂安·普利西奇", ja: "クリスチャン・プリシッチ" },
  "Malik Tillman": { zh: "马利克·蒂尔曼", ja: "マリク・ティルマン" },
  "Alex Freeman": { zh: "亚历克斯·弗里曼", ja: "アレックス・フリーマン" },
  "Julio Enciso": { zh: "胡里奥·恩西索", ja: "フリオ・エンシソ" },
  "César Montes": { zh: "塞萨尔·蒙特斯", ja: "セサル・モンテス" },
  "Cesar Montes": { zh: "塞萨尔·蒙特斯", ja: "セサル・モンテス" },
  "Bradley Barcola": { zh: "布拉德利·巴尔科拉", ja: "ブラッドリー・バルコラ" },
  "Elijah Just": { zh: "伊莱贾·贾斯特", ja: "イライジャ・ジャスト" },
  "Ibrahim Mbaye": { zh: "易卜拉欣·姆巴耶", ja: "イブラヒム・エムバイェ" },
  "Ibrahima Mbaye": { zh: "易卜拉欣·姆巴耶", ja: "イブラヒム・エムバイェ" },
  "Ibrahima Konaté": { zh: "伊布拉希马·科纳特", ja: "イブラヒマ・コナテ" },
  "Michael Olise": { zh: "迈克尔·奥利塞", ja: "マイケル・オリーズ" },
  "Aymen Hussein": { zh: "艾曼·胡辛", ja: "アイメン・フセイン" },
  "Erling Haaland": { zh: "埃尔林·哈兰德", ja: "アーリング・ハーランド" },
  "Leo Ostigard": { zh: "莱奥·厄斯蒂高", ja: "レオ・エスティゴール" },
  "Leo Østigård": { zh: "莱奥·厄斯蒂高", ja: "レオ・エスティゴール" },
  "Romano Schmid": { zh: "罗曼诺·施密德", ja: "ロマーノ・シュミット" },
  "Yazan Al-Arab": { zh: "亚赞·阿布·阿拉伯", ja: "ヤザン・アルアラブ" },
  "Marko Arnautovic": { zh: "马尔科·阿瑙托维奇", ja: "マルコ・アルナウトヴィッチ" },
  "Marko Arnautović": { zh: "马尔科·阿瑙托维奇", ja: "マルコ・アルナウトヴィッチ" },
  "Ali Olwan": { zh: "阿里·奥尔旺", ja: "アリ・オルワン" },
  "Kai Havertz": { zh: "凯·哈费尔茨", ja: "カイ・ハフェルツ" },
  "Yasin Ayari": { zh: "亚辛·阿亚里", ja: "ヤシン・アヤリ" },
  "Abdulelah Al-Amri": { zh: "阿卜杜勒拉·阿尔-阿姆里", ja: "アブドゥレラー・アルアムリ" },
  "Alexander Isak": { zh: "亚历山大·伊萨克", ja: "アレクサンデル・イサク" },
  "Kylian Mbappé": { zh: "基利安·姆巴佩", ja: "キリアン・エムバペ" },
  "Livano Comenencia": { zh: "利瓦诺·科门西亚", ja: "リヴァノ・コメネンシア" },
  "Maxi Araújo": { zh: "马克西·阿劳霍", ja: "マクシ・アラウホ" },
  "Mohammad Mohebbi": { zh: "穆罕默德·穆赫比", ja: "モハマド・モヘビ" },
  "Nathaniel Brown": { zh: "纳撒尼尔·布朗", ja: "ナサニエル・ブラウン" },
  "Omar Rekik": { zh: "奥马尔·雷基克", ja: "オマル・レキク" },
  "Miroslav Klose": { zh: "米洛斯拉夫·克洛泽", ja: "ミロスラフ・クローゼ" },
  Ronaldo: { zh: "罗纳尔多", ja: "ロナウド" },
  "Gerd Muller": { zh: "盖德·穆勒", ja: "ゲルト・ミュラー" },
  "Lionel Messi": { zh: "莱昂内尔·梅西", ja: "リオネル・メッシ" },
  "Just Fontaine": { zh: "朱斯特·方丹", ja: "ジュスト・フォンテーヌ" },
  "Kylian Mbappe": { zh: "基利安·姆巴佩", ja: "キリアン・エムバペ" },
  Pele: { zh: "贝利", ja: "ペレ" },
  "Jurgen Klinsmann": { zh: "尤尔根·克林斯曼", ja: "ユルゲン・クリンスマン" },
  "Sandor Kocsis": { zh: "桑多尔·柯奇士", ja: "シャーンドル・コチシュ" },
  "Thomas Muller": { zh: "托马斯·穆勒", ja: "トーマス・ミュラー" },
  "Helmut Rahn": { zh: "赫尔穆特·拉恩", ja: "ヘルムート・ラーン" },
  "Gary Lineker": { zh: "加里·莱因克尔", ja: "ゲーリー・リネカー" },
  "Gabriel Batistuta": { zh: "加布里埃尔·巴蒂斯图塔", ja: "ガブリエル・バティストゥータ" },
  "Teofilo Cubillas": { zh: "特奥菲洛·库比利亚斯", ja: "テオフィロ・クビジャス" },
  "Grzegorz Lato": { zh: "格热戈日·拉托", ja: "グジェゴシ・ラトー" },
  "Ademir": { zh: "阿德米尔", ja: "アデミール" },
  "Eusebio": { zh: "尤西比奥", ja: "エウゼビオ" },
  "Christian Vieri": { zh: "克里斯蒂安·维耶里", ja: "クリスティアン・ヴィエリ" },
  "Vava": { zh: "瓦瓦", ja: "ババ" },
  "David Villa": { zh: "大卫·比利亚", ja: "ダビド・ビジャ" },
  "Paolo Rossi": { zh: "保罗·罗西", ja: "パオロ・ロッシ" },
  "Diego Maradona": { zh: "迭戈·马拉多纳", ja: "ディエゴ・マラドーナ" },
  "Rivaldo": { zh: "里瓦尔多", ja: "リバウド" },
  "Rudi Voller": { zh: "鲁迪·沃勒尔", ja: "ルディ・フェラー" },
  "Careca": { zh: "卡雷卡", ja: "カレカ" },
  "Johnny Rep": { zh: "约翰尼·雷普", ja: "ヨニー・レップ" },
  "Luis Suarez": { zh: "路易斯·苏亚雷斯", ja: "ルイス・スアレス" },
  "Cristiano Ronaldo": { zh: "克里斯蒂亚诺·罗纳尔多", ja: "クリスティアーノ・ロナウド" },
  "Jairzinho": { zh: "雅伊尔津霍", ja: "ジャイルジーニョ" },
  "Roberto Baggio": { zh: "罗伯托·巴乔", ja: "ロベルト・バッジョ" },
  "Uwe Seeler": { zh: "乌韦·席勒", ja: "ウーヴェ・ゼーラー" },
  "Karl-Heinz Rummenigge": { zh: "卡尔-海因茨·鲁梅尼格", ja: "カール＝ハインツ・ルンメニゲ" },
  "Guillermo Stabile": { zh: "吉列尔莫·斯塔比莱", ja: "ギジェルモ・スタービレ" },
  "Leonidas": { zh: "莱昂尼达斯", ja: "レオニダス" },
  "Oscar Miguez": { zh: "奥斯卡·米格斯", ja: "オスカル・ミゲス" },
  "Davor Suker": { zh: "达沃·苏克", ja: "ダヴォール・シュケル" },
  "Neymar": { zh: "内马尔", ja: "ネイマール" },
  "James Rodriguez": { zh: "哈梅斯·罗德里格斯", ja: "ハメス・ロドリゲス" },
  "Oldrich Nejedly": { zh: "奥尔德日赫·内耶德利", ja: "オルドジフ・ネイエドリー" },
  "Lajos Tichy": { zh: "拉约什·蒂希", ja: "ラヨシュ・ティヒ" },
  "Andrzej Szarmach": { zh: "安杰伊·沙尔马赫", ja: "アンジェイ・シャルマフ" },
  "Hans Schafer": { zh: "汉斯·舍费尔", ja: "ハンス・シェーファー" },
  "João Neves": { zh: "若昂·内维斯", ja: "ジョアン・ネヴェス" },
  "Yoane Wissa": { zh: "约安·维萨", ja: "ヨアン・ウィサ" },
  "Harry Kane": { zh: "哈里·凯恩", ja: "ハリー・ケイン" },
  "Martin Baturina": { zh: "马丁·巴图里纳", ja: "マルティン・バトゥリナ" },
  "Petar Musa": { zh: "佩塔尔·穆萨", ja: "ペタル・ムサ" },
  "Jude Bellingham": { zh: "裘德·贝林厄姆", ja: "ジュード・ベリンガム" },
  "Marcus Rashford": { zh: "马库斯·拉什福德", ja: "マーカス・ラッシュフォード" },
  "Michal Sadílek": { zh: "米哈尔·萨迪莱克", ja: "ミハル・サディーレク" },
  "Teboho Mokoena": { zh: "特博霍·莫科纳", ja: "テボホ・モコエナ" },
  "Johan Manzambi": { zh: "约翰·曼赞比", ja: "ヨハン・マンザンビ" },
  "Rubén Vargas": { zh: "鲁文·巴尔加斯", ja: "ルベン・バルガス" },
  "Ermin Mahmic": { zh: "埃尔明·马赫米奇", ja: "エルミン・マフミッチ" },
  "Granit Xhaka": { zh: "格拉尼特·扎卡", ja: "グラニト・ジャカ" },
  "Jonathan David": { zh: "乔纳森·戴维", ja: "ジョナサン・デイヴィッド" },
  "Nathan Saliba": { zh: "内森·萨利巴", ja: "ネイサン・サリバ" },
  "Mohamed Manai": { zh: "穆罕默德·马奈", ja: "モハメド・マナイ" },
  "Luis Romo": { zh: "路易斯·罗莫", ja: "ルイス・ロモ" },
};

const playerTeams = {
  "Folarin Balogun": "USA",
  "Cyle Larin": "CAN",
  "Damián Bobadilla": "PAR",
  "Giovanni Reyna": "USA",
  "Hwang In-Beom": "KOR",
  "Jovo Lukic": "BIH",
  "Julián Quiñones": "MEX",
  "Ladislav Krejcí": "CZE",
  "Maurício": "BRA",
  "Oh Hyeon-Gyu": "KOR",
  "Raúl Jiménez": "MEX",
  "Breel Embolo": "SUI",
  "Miro Muheim": "SUI",
  "Homam Ahmed": "QAT",
  "Ismael Saibari": "MAR",
  "Vinícius Júnior": "BRA",
  "John McGinn": "SCO",
  "Christian Pulisic": "USA",
  "Malik Tillman": "USA",
  "Alex Freeman": "USA",
  "Julio Enciso": "PAR",
  "César Montes": "MEX",
  "Cesar Montes": "MEX",
  "Bradley Barcola": "FRA",
  "Elijah Just": "NZL",
  "Ibrahim Mbaye": "SEN",
  "Ibrahima Mbaye": "SEN",
  "Ibrahima Konaté": "FRA",
  "Michael Olise": "FRA",
  "Aymen Hussein": "IRQ",
  "Erling Haaland": "NOR",
  "Leo Ostigard": "NOR",
  "Leo Østigård": "NOR",
  "Romano Schmid": "AUT",
  "Yazan Al-Arab": "JOR",
  "Marko Arnautovic": "AUT",
  "Marko Arnautović": "AUT",
  "Ali Olwan": "JOR",
  "Kai Havertz": "GER",
  "Yasin Ayari": "SWE",
  "Abdulelah Al-Amri": "KSA",
  "Alexander Isak": "SWE",
  "Kylian Mbappé": "FRA",
  "João Neves": "POR",
  "Yoane Wissa": "COD",
  "Harry Kane": "ENG",
  "Martin Baturina": "CRO",
  "Petar Musa": "CRO",
  "Jude Bellingham": "ENG",
  "Marcus Rashford": "ENG",
  "Michal Sadílek": "CZE",
  "Teboho Mokoena": "RSA",
  "Johan Manzambi": "SUI",
  "Rubén Vargas": "SUI",
  "Ermin Mahmic": "BIH",
  "Granit Xhaka": "SUI",
  "Jonathan David": "CAN",
  "Nathan Saliba": "CAN",
  "Mohamed Manai": "QAT",
  "Luis Romo": "MEX",
};

const playerAliases = {
  "Kylian Mbappé": "Kylian Mbappe",
  "Leo Østigård": "Leo Ostigard",
  "Marko Arnautović": "Marko Arnautovic",
};

const teamFlags = {
  ALG: "🇩🇿", ARG: "🇦🇷", AUS: "🇦🇺", AUT: "🇦🇹", BEL: "🇧🇪", BIH: "🇧🇦", BRA: "🇧🇷",
  CAN: "🇨🇦", CHI: "🇨🇱", CIV: "🇨🇮", CMR: "🇨🇲", COD: "🇨🇩", COL: "🇨🇴", CPV: "🇨🇻",
  CRC: "🇨🇷", CRO: "🇭🇷", CUW: "🇨🇼", CZE: "🇨🇿", DEN: "🇩🇰", ECU: "🇪🇨", EGY: "🇪🇬",
  ENG: "🏴", ESP: "🇪🇸", FRA: "🇫🇷", GER: "🇩🇪", GHA: "🇬🇭", HAI: "🇭🇹", HUN: "🇭🇺",
  IRN: "🇮🇷", IRQ: "🇮🇶", ITA: "🇮🇹", JOR: "🇯🇴", JPN: "🇯🇵", KOR: "🇰🇷", MAR: "🇲🇦",
  MEX: "🇲🇽", NED: "🇳🇱", NGA: "🇳🇬", NOR: "🇳🇴", NZL: "🇳🇿", PAN: "🇵🇦", PAR: "🇵🇾", PER: "🇵🇪",
  POL: "🇵🇱", POR: "🇵🇹", QAT: "🇶🇦", RSA: "🇿🇦", KSA: "🇸🇦", SAU: "🇸🇦", SCO: "🏴",
  SEN: "🇸🇳", SRB: "🇷🇸", SUI: "🇨🇭", SWE: "🇸🇪", TUN: "🇹🇳", TUR: "🇹🇷", UKR: "🇺🇦",
  URU: "🇺🇾", USA: "🇺🇸", UZB: "🇺🇿", WAL: "🏴", ZAF: "🇿🇦",
};

const flagImageOverrides = {
  ENG: "https://flagcdn.com/w80/gb-eng.png",
  SCO: "https://flagcdn.com/w80/gb-sct.png",
  WAL: "https://flagcdn.com/w80/gb-wls.png",
};

const historicalScorers = [
  { player: "Miroslav Klose", team: "GER", goals: 16 },
  { player: "Ronaldo", team: "BRA", goals: 15 },
  { player: "Gerd Muller", team: "GER", goals: 14 },
  { player: "Lionel Messi", team: "ARG", goals: 13 },
  { player: "Just Fontaine", team: "FRA", goals: 13 },
  { player: "Kylian Mbappe", team: "FRA", goals: 12 },
  { player: "Pele", team: "BRA", goals: 12 },
  { player: "Jurgen Klinsmann", team: "GER", goals: 11 },
  { player: "Sandor Kocsis", team: "HUN", goals: 11 },
  { player: "Helmut Rahn", team: "GER", goals: 10 },
  { player: "Gary Lineker", team: "ENG", goals: 10 },
  { player: "Gabriel Batistuta", team: "ARG", goals: 10 },
  { player: "Teofilo Cubillas", team: "PER", goals: 10 },
  { player: "Grzegorz Lato", team: "POL", goals: 10 },
  { player: "Thomas Muller", team: "GER", goals: 10 },
  { player: "Ademir", team: "BRA", goals: 9 },
  { player: "Eusebio", team: "POR", goals: 9 },
  { player: "Christian Vieri", team: "ITA", goals: 9 },
  { player: "Vava", team: "BRA", goals: 9 },
  { player: "David Villa", team: "ESP", goals: 9 },
  { player: "Paolo Rossi", team: "ITA", goals: 9 },
  { player: "Jairzinho", team: "BRA", goals: 9 },
  { player: "Roberto Baggio", team: "ITA", goals: 9 },
  { player: "Uwe Seeler", team: "GER", goals: 9 },
  { player: "Karl-Heinz Rummenigge", team: "GER", goals: 9 },
  { player: "Diego Maradona", team: "ARG", goals: 8 },
  { player: "Rivaldo", team: "BRA", goals: 8 },
  { player: "Rudi Voller", team: "GER", goals: 8 },
  { player: "Cristiano Ronaldo", team: "POR", goals: 8 },
  { player: "Guillermo Stabile", team: "ARG", goals: 8 },
  { player: "Leonidas", team: "BRA", goals: 8 },
  { player: "Oscar Miguez", team: "URU", goals: 8 },
  { player: "Davor Suker", team: "CRO", goals: 8 },
  { player: "Neymar", team: "BRA", goals: 8 },
  { player: "James Rodriguez", team: "COL", goals: 8 },
  { player: "Careca", team: "BRA", goals: 7 },
  { player: "Johnny Rep", team: "NED", goals: 7 },
  { player: "Luis Suarez", team: "URU", goals: 7 },
  { player: "Oldrich Nejedly", team: "CZE", goals: 7 },
  { player: "Lajos Tichy", team: "HUN", goals: 7 },
  { player: "Andrzej Szarmach", team: "POL", goals: 7 },
  { player: "Hans Schafer", team: "GER", goals: 7 },
];

const els = {
  date: document.querySelector("#matchDate"),
  prev: document.querySelector("#prevDay"),
  next: document.querySelector("#nextDay"),
  refresh: document.querySelector("#refreshButton"),
  today: document.querySelector("#todayButton"),
  dateDisplay: document.querySelector("#dateDisplay"),
  finalBadge: document.querySelector("#finalBadge"),
  syncStatus: document.querySelector("#syncStatus"),
  matches: document.querySelector("#matches"),
  scheduleList: document.querySelector("#scheduleList"),
  scheduleStatus: document.querySelector("#scheduleStatus"),
  scorersGrid: document.querySelector("#scorersGrid"),
  standingsGrid: document.querySelector("#standingsGrid"),
  standingsStatus: document.querySelector("#standingsStatus"),
  advancementGrid: document.querySelector("#advancementGrid"),
  template: document.querySelector("#matchTemplate"),
  totalCount: document.querySelector("#totalCount"),
  liveCount: document.querySelector("#liveCount"),
  doneCount: document.querySelector("#doneCount"),
  appPrompt: document.querySelector("#appPrompt"),
  appPromptTitle: document.querySelector("#appPromptTitle"),
  appPromptBody: document.querySelector("#appPromptBody"),
  appPromptClose: document.querySelector("#appPromptClose"),
  iosStoreLink: document.querySelector("#iosStoreLink"),
  namePrompt: document.querySelector("#namePrompt"),
  namePromptText: document.querySelector("#namePromptText"),
  namePromptClose: document.querySelector("#namePromptClose"),
  bracketPrompt: document.querySelector("#bracketPrompt"),
  bracketPromptTitle: document.querySelector("#bracketPromptTitle"),
  bracketPromptClose: document.querySelector("#bracketPromptClose"),
  bracketBoard: document.querySelector("#bracketBoard"),
  languageMenu: document.querySelector(".language-menu"),
  languageButtons: document.querySelectorAll("[data-lang]"),
  visitorBadge: document.querySelector("#visitorBadge"),
};

let refreshTimer = null;
let refreshInFlight = false;
let matchesRequestId = 0;
let currentLang = localStorage.getItem(LANG_KEY) || "zh";
let currentMatches = [];
let tournamentEvents = [];
let officialTournamentScorers = [];
let standingsGroups = [];
let matchesRenderSignature = "";
let scorersRenderSignature = "";
let standingsRenderSignature = "";
let advancementRenderSignature = "";
const pendingPlayerNameLookups = new Set();
const failedPlayerNameLookups = new Set();
let playerNameCache = loadPlayerNameCache();
const detailsOpenState = new Set();
let syncState = "ready";
let lastUpdatedAt = null;
let translationRefreshTimer = null;

if (!copy[currentLang]) currentLang = "zh";

function t(key) {
  return copy[currentLang][key] || copy.zh[key] || key;
}

function localDateValue(date = new Date()) {
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function espnDateValue(value) {
  return value.replaceAll("-", "");
}

function freshUrl(url) {
  return `${url}${url.includes("?") ? "&" : "?"}_=${Date.now()}`;
}

function espnDateRangeForLocalDate(value) {
  return `${espnDateValue(shiftDate(value, -1))}-${espnDateValue(shiftDate(value, 1))}`;
}

function shiftDate(value, days) {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + days);
  return localDateValue(date);
}

function clampTournamentDate(value) {
  return value > FINAL_DATE_LOCAL ? FINAL_DATE_LOCAL : value;
}

function formatTime(value) {
  return new Intl.DateTimeFormat(t("locale"), {
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function formatScheduleTime(value) {
  return new Intl.DateTimeFormat(t("locale"), {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatDateOnly(value) {
  return localDateValue(new Date(value));
}

function formatWeekday(value) {
  return new Intl.DateTimeFormat(t("locale"), { weekday: "short" }).format(new Date(`${value}T12:00:00`));
}

function formatDisplayDate(value) {
  const date = new Date(`${value}T12:00:00`);
  const weekday = formatWeekday(value);
  if (currentLang === "zh") {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日（${weekday}）`;
  }
  if (currentLang === "ja") {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日（${weekday}）`;
  }
  return `${new Intl.DateTimeFormat(t("locale"), {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date)} (${weekday})`;
}

function getTeams(competition) {
  const teams = competition.competitors || [];
  const home = teams.find((item) => item.homeAway === "home") || teams[0];
  const away = teams.find((item) => item.homeAway === "away") || teams[1];
  return { home, away };
}

function statusLabel(status) {
  const type = status?.type || {};
  if (type.state === "in") return status.displayClock ? `${t("livePrefix")} ${status.displayClock}` : t("live");
  if (type.completed) return t("done");
  return t("scheduled");
}

function statusClass(status) {
  const type = status?.type || {};
  if (type.state === "in") return "live";
  if (type.completed) return "done";
  return "";
}

function normalizeEvent(event) {
  const competition = event.competitions?.[0] || {};
  const { home, away } = getTeams(competition);
  const status = competition.status || event.status || {};
  const link = event.links?.find((item) => item.rel?.includes("summary"))?.href || "https://www.espn.com/soccer/";

  return {
    id: event.id,
    date: event.date,
    note: competition.altGameNote || event.season?.slug || "FIFA World Cup",
    status,
    venue: competition.venue?.fullName || event.venue?.displayName || t("venueTba"),
    link,
    home,
    away,
    event,
  };
}

function statValue(entry, name) {
  const stat = entry.stats?.find((item) => item.name === name || item.type === name);
  return stat?.displayValue || "0";
}

function groupLabel(name = "") {
  const letter = name.match(/Group\s+([A-Z])/i)?.[1] || name;
  if (currentLang === "en") return `${t("groupLabel")} ${letter}`;
  return `${t("groupLabel")} ${letter}`;
}

function localizedTeamFromText(text = "") {
  return text
    .replace(/Round of\s+(\d+)\s+(\d+)\s+Winner/gi, (_, round, number) => `${roundLabelFromNumber(round)}${t("roundWinner").replace("{number}", number)}`)
    .replace(/Third Place\s+Group\s+([A-Z/]+)/gi, (_, groups) => `${groups.split("/").map((group) => groupLabel(`Group ${group}`)).join("/")} ${t("thirdPlace")}`)
    .replace(/Group\s+([A-Z])\s+Winner/gi, (_, group) => `${groupLabel(`Group ${group}`)} ${t("winner")}`)
    .replace(/Group\s+([A-Z])\s+2nd Place/gi, (_, group) => `${groupLabel(`Group ${group}`)} ${t("runnerUp")}`)
    .replace(/Third Place/gi, t("thirdPlace"));
}

function roundLabelFromNumber(round) {
  if (round === "32") return t("roundOf32");
  if (round === "16") return t("roundOf16");
  return `Round of ${round}`;
}

function localizedCompetitionNote(note = "") {
  const group = note.match(/Group\s+([A-Z])/i)?.[1];
  if (group) return `${t("worldCup")} · ${groupLabel(`Group ${group}`)}`;
  if (/Round of 32/i.test(note)) return `${t("worldCup")} · ${t("roundOf32")}`;
  if (/Rd of 16|Round of 16/i.test(note)) return `${t("worldCup")} · ${t("roundOf16")}`;
  if (/Quarterfinal/i.test(note)) return `${t("worldCup")} · ${t("quarterfinal")}`;
  if (/Semifinal/i.test(note)) return `${t("worldCup")} · ${t("semifinal")}`;
  if (/3rd-Place|Third-Place|Third Place/i.test(note)) return `${t("worldCup")} · ${t("thirdPlaceMatch")}`;
  if (/Final/i.test(note)) return `${t("worldCup")} · ${t("final")}`;
  if (/FIFA World Cup/i.test(note)) return t("worldCup");
  return note;
}

function localizedVenue(name = "") {
  if (!name) return t("venueTba");
  if (currentLang === "en") return name;
  return venueNames[name]?.[currentLang] || name;
}

function eventTeamsText(event) {
  const competitors = event.competitions?.[0]?.competitors || [];
  return competitors
    .map((competitor) => localizedTeamWithFlag(competitor.team) || localizedTeamFromText(competitor.team?.displayName))
    .join(" - ");
}

function knockoutTeamsText(event) {
  if (!isGroupStageComplete()) {
    return localizedKnockoutPlaceholder(event);
  }
  return eventTeamsText(event);
}

function isGroupStageComplete() {
  const groupEvents = tournamentEvents.filter((event) => new Date(event.date) < new Date("2026-06-28T00:00:00Z"));
  return groupEvents.length > 0 && groupEvents.every((event) => {
    const status = event.competitions?.[0]?.status || event.status || {};
    return status.type?.completed;
  });
}

function localizedKnockoutPlaceholder(event) {
  const competition = event.competitions?.[0] || {};
  const note = competition.altGameNote || event.name || "";
  const localized = localizedTeamFromText(note);
  return localized && localized !== note ? localized : t("pendingMatchup");
}

function knockoutRoundLabel(value) {
  const date = formatDateOnly(value);
  if (date >= "2026-06-28" && date <= "2026-07-03") return t("round32Label");
  if (date >= "2026-07-04" && date <= "2026-07-07") return t("round16Label");
  if (date >= "2026-07-09" && date <= "2026-07-11") return t("quarterfinalLabel");
  if (date >= "2026-07-14" && date <= "2026-07-15") return t("semifinalLabel");
  if (date === "2026-07-18" || date === "2026-07-19") return t("thirdPlaceLabel");
  if (date === FINAL_DATE_LOCAL || date === "2026-07-19") return t("final");
  return "";
}

function knockoutRoundLabelForEvent(event) {
  const slug = event?.season?.slug || "";
  if (slug === "round-of-32") return t("round32Label");
  if (slug === "round-of-16") return t("round16Label");
  if (slug === "quarterfinals") return t("quarterfinalLabel");
  if (slug === "semifinals") return t("semifinalLabel");
  if (slug === "3rd-place-match") return t("thirdPlaceLabel");
  if (slug === "final") return t("final");
  return knockoutRoundLabel(event?.date || "");
}

function knockoutEvents() {
  return tournamentEvents
    .filter((event) => new Date(event.date) >= new Date("2026-06-28T00:00:00Z"))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function mergeEventsById(...eventLists) {
  const map = new Map();
  eventLists.flat().forEach((event) => {
    if (!event?.id) return;
    const previous = map.get(event.id);
    if (!previous || eventHasRicherTeams(event, previous)) {
      map.set(event.id, event);
    }
  });
  return [...map.values()].sort((a, b) => new Date(a.date) - new Date(b.date));
}

function eventHasRicherTeams(next, previous) {
  const nextTeams = next.competitions?.[0]?.competitors || [];
  const previousTeams = previous.competitions?.[0]?.competitors || [];
  const nextResolved = nextTeams.filter((competitor) => isResolvedTeam(competitor.team)).length;
  const previousResolved = previousTeams.filter((competitor) => isResolvedTeam(competitor.team)).length;
  if (nextResolved !== previousResolved) return nextResolved > previousResolved;
  return nextTeams.length >= previousTeams.length;
}

function isResolvedTeam(team = {}) {
  const abbr = team.abbreviation || "";
  if (!abbr || !teamNames[abbr]) return false;
  if (/winner|loser|semifinal|quarterfinal|round|third place/i.test(team.displayName || team.name || "")) return false;
  return true;
}

function createKnockoutTeamChip(team, compact = false) {
  const chip = document.createElement("span");
  chip.className = compact ? "bracket-team compact" : "advancement-team";

  if (!isResolvedTeam(team)) {
    const icon = document.createElement("span");
    icon.className = "pending-dot";
    icon.textContent = "?";
    const label = document.createElement("span");
    label.textContent = compact ? t("pending") : localizedTeamFromText(team?.displayName || team?.name || t("pending"));
    if (!team?.abbreviation || !teamNames[team.abbreviation]) label.textContent = t("pending");
    chip.append(icon, label);
    return chip;
  }

  appendTeamFlag(chip, team);
  const name = document.createElement("span");
  name.textContent = localizedTeamName(team);
  chip.append(name);
  return chip;
}

function createKnockoutTeamsNode(event) {
  const teams = event.competitions?.[0]?.competitors || [];
  const node = document.createElement("span");
  node.className = "advancement-teams";
  if (!teams.length) {
    node.textContent = t("pendingMatchup");
    return node;
  }
  node.append(createKnockoutTeamChip(teams[0]?.team || {}));
  const dash = document.createElement("span");
  dash.className = "match-dash";
  dash.textContent = "-";
  node.append(dash);
  node.append(createKnockoutTeamChip(teams[1]?.team || {}));
  return node;
}

function setCounts(matches) {
  els.totalCount.textContent = matches.length;
  els.liveCount.textContent = matches.filter((match) => match.status?.type?.state === "in").length;
  els.doneCount.textContent = matches.filter((match) => match.status?.type?.completed).length;
}

function renderTeam(root, competitor, goals = []) {
  const team = competitor?.team || {};
  const name = localizedTeamName(team);
  root.querySelector("img").src = teamLogoUrl(team);
  root.querySelector("img").alt = name ? `${name} ${t("crest")}` : "";
  root.querySelector(".name").textContent = name || t("tba");
  root.querySelector(".abbr").textContent = "";
  const goalList = root.querySelector(".goal-list");
  goalList.textContent = "";
  goals.forEach((goal) => {
    const item = document.createElement("li");
    const name = document.createElement("span");
    const playerName = localizedPlayerName(goal.player);
    name.className = "goal-name";
    name.setAttribute("role", "button");
    name.tabIndex = 0;
    name.textContent = playerName;
    name.title = playerName;
    name.addEventListener("click", () => showNamePrompt(playerName));
    name.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showNamePrompt(playerName);
      }
    });
    const minute = document.createElement("span");
    minute.className = "goal-minute";
    minute.textContent = `${goal.minute || ""}${goal.ownGoal ? ` ${t("ownGoal")}` : ""}`.trim();
    item.append(name, minute);
    goalList.append(item);
  });
}

function localizedTeamName(team) {
  const abbr = team?.abbreviation;
  if (currentLang === "en") return team?.displayName || team?.name || abbr || localizedTeamFromText(team?.displayName || "");
  if (!abbr) return localizedTeamFromText(team?.displayName || "");
  return teamNames[abbr]?.[currentLang] || localizedTeamFromText(team.displayName || abbr);
}

function teamLogoUrl(teamOrAbbr) {
  const abbr = typeof teamOrAbbr === "string" ? teamOrAbbr : teamOrAbbr?.abbreviation;
  if (abbr && flagImageOverrides[abbr]) return flagImageOverrides[abbr];
  if (typeof teamOrAbbr !== "string") {
    const logo = teamOrAbbr?.logo || teamOrAbbr?.logos?.find?.((item) => item.rel?.includes("default"))?.href || teamOrAbbr?.logos?.[0]?.href;
    if (logo) return logo;
  }
  return abbr ? `https://a.espncdn.com/i/teamlogos/countries/500/${abbr.toLowerCase()}.png` : "";
}

function appendTeamFlag(root, teamOrAbbr, className = "") {
  const src = teamLogoUrl(teamOrAbbr);
  if (!src) return null;
  const flag = document.createElement("img");
  flag.src = src;
  flag.alt = "";
  flag.loading = "lazy";
  if (className) flag.className = className;
  root.append(flag);
  return flag;
}

function localizedTeamWithFlag(team) {
  const name = localizedTeamName(team);
  const abbr = typeof team === "string" ? team : team?.abbreviation;
  const flag = teamFlags[abbr] || "";
  return `${flag ? `${flag} ` : ""}${name}`;
}

function createStandingTeamLabel(team) {
  const content = document.createElement("span");
  content.className = "standing-team";
  const abbr = team?.abbreviation || "";
  if (abbr) appendTeamFlag(content, team);
  const name = document.createElement("span");
  name.textContent = localizedTeamName(team);
  content.append(name);
  return content;
}

function renderStaticText() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("title");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    node.title = t(node.dataset.i18nTitle);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });

  els.languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
  els.date.max = FINAL_DATE_LOCAL;
  els.finalBadge.textContent = t("finalBadge");
  if (els.bracketPromptTitle) els.bracketPromptTitle.textContent = t("bracketTitle");
  renderDateDisplay();

  renderSyncStatus();
  renderVisitorBadge();
  renderAppPromptText();
  renderSchedule();
  renderScorers();
  renderStandings();
  renderAdvancement();
}

function renderDateDisplay() {
  if (!els.dateDisplay || !els.date.value) return;
  els.dateDisplay.textContent = formatDisplayDate(els.date.value);
}

function renderVisitorBadge() {
  if (!els.visitorBadge) return;
  els.visitorBadge.src = "https://visitor-badge.laobi.icu/badge?page_id=JiaNan79.world-cup-live-site&left_text=%20&left_color=%23f6f5f1&right_color=%2300685b";
  els.visitorBadge.alt = t("visitorCount");
}

function renderAppPromptText() {
  els.appPromptTitle.textContent = t("appPromptTitle");
  els.appPromptBody.textContent = t("appPromptBody");
  els.appPromptClose.setAttribute("aria-label", t("appPromptClose"));
  els.iosStoreLink.textContent = t("iosStore");
  els.iosStoreLink.href = isIOS() ? IOS_STORE_URL : IOS_STORE_WEB_URL;
}

function renderSyncStatus() {
  if (syncState === "loading") {
    els.syncStatus.textContent = t("syncLoading");
    return;
  }

  if (syncState === "failed") {
    els.syncStatus.textContent = t("syncFailed");
    return;
  }

  if (syncState === "updated" && lastUpdatedAt) {
    els.syncStatus.textContent = `${t("updatedAt")} ${new Intl.DateTimeFormat(t("locale"), {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(lastUpdatedAt)}`;
    return;
  }

  els.syncStatus.textContent = t("syncReady");
}

function renderMatches(matches) {
  setCounts(matches);
  const visiblePlayerNames = new Set();

  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("noMatches");
    els.matches.replaceChildren(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  matches.forEach((match) => {
    const node = els.template.content.firstElementChild.cloneNode(true);
    const status = node.querySelector(".status-pill");
    const homeScore = match.home?.score ?? "0";
    const awayScore = match.away?.score ?? "0";
    const stateClass = statusClass(match.status);

    status.textContent = statusLabel(match.status);
    if (stateClass) status.classList.add(stateClass);
    node.querySelector(".time-text").textContent = `${formatTime(match.date)} · ${localizedCompetitionNote(match.note)}`;
    node.querySelector(".score").textContent = `${homeScore} - ${awayScore}`;
    const goalsByTeam = matchGoalsByTeam(match);
    goalsByTeam.forEach((goals) => goals.forEach((goal) => visiblePlayerNames.add(goal.player)));
    const homeTeam = match.home?.team || {};
    const awayTeam = match.away?.team || {};
    const cctvButton = node.querySelector(".details");
    cctvButton.textContent = t("details");
    cctvButton.setAttribute("aria-label", t("openCctv"));
    cctvButton.addEventListener("click", openCctvApp);
    cctvButton.hidden = currentLang !== "zh" || !isIOS();
    node.querySelector(".venue").hidden = true;
    node.querySelector(".match-footer").hidden = true;

    renderTeam(node.querySelector(".team-home"), match.home, goalsByTeam.get(homeTeam.abbreviation) || []);
    renderTeam(node.querySelector(".team-away"), match.away, goalsByTeam.get(awayTeam.abbreviation) || []);
    fragment.append(node);
  });

  els.matches.replaceChildren(fragment);
  queuePlayerNameLookups([...visiblePlayerNames]);
}

function matchGoalsByTeam(match) {
  const source = match.event || {};
  const goals = eventGoalDetails(source)
    .filter(isGoalDetail)
    .map((detail) => detailScorer(detail, source))
    .filter((goal) => goal.player && goal.team && teamNames[goal.team]);

  const grouped = new Map();
  goals.forEach((goal) => {
    const list = grouped.get(goal.team) || [];
    list.push(goal);
    grouped.set(goal.team, list);
  });

  return grouped;
}

function isIOS() {
  return /iPad|iPhone|iPod/i.test(navigator.userAgent);
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function isMobileDevice() {
  return isIOS() || isAndroid();
}

function openCctvApp() {
  if (!isIOS()) {
    showAppPrompt();
    return;
  }

  hideAppPrompt();
  let appOpened = false;
  const markOpened = () => {
    appOpened = true;
  };

  document.addEventListener("visibilitychange", markOpened, { once: true });
  window.addEventListener("pagehide", markOpened, { once: true });

  window.location.href = CCTV_IOS_APP_URL;

  window.setTimeout(() => {
    document.removeEventListener("visibilitychange", markOpened);
    window.removeEventListener("pagehide", markOpened);
    if (!appOpened && !document.hidden) showAppPrompt();
  }, 2200);
}

function showAppPrompt() {
  renderAppPromptText();
  els.appPrompt.hidden = false;
}

function hideAppPrompt() {
  els.appPrompt.hidden = true;
}

function showNamePrompt(name) {
  els.namePromptText.textContent = name;
  els.namePromptClose.setAttribute("aria-label", t("close"));
  els.namePrompt.hidden = false;
}

function hideNamePrompt() {
  els.namePrompt.hidden = true;
}

function captureUiState() {
  rememberDetailsState();
  return {
    openKeys: [...detailsOpenState],
    scorerScrolls: [...document.querySelectorAll(".scorers-scroll")].map((node) => node.scrollTop),
    advancementScroll: document.querySelector(".advancement-list")?.scrollTop || 0,
    bracketScroll: {
      top: document.querySelector(".bracket-board")?.scrollTop || 0,
      left: document.querySelector(".bracket-board")?.scrollLeft || 0,
    },
  };
}

function restoreUiState(state) {
  if (!state) return;
  const openKeys = new Set(state.openKeys || []);
  detailsOpenState.clear();
  openKeys.forEach((key) => detailsOpenState.add(key));
  document.querySelectorAll("details[data-state-key]").forEach((details) => {
    details.open = detailsOpenState.has(details.dataset.stateKey);
  });
  document.querySelectorAll(".scorers-scroll").forEach((node, index) => {
    node.scrollTop = state.scorerScrolls?.[index] || 0;
  });
  const advancementList = document.querySelector(".advancement-list");
  if (advancementList) advancementList.scrollTop = state.advancementScroll || 0;
  const bracketBoard = document.querySelector(".bracket-board");
  if (bracketBoard) {
    bracketBoard.scrollTop = state.bracketScroll?.top || 0;
    bracketBoard.scrollLeft = state.bracketScroll?.left || 0;
  }
}

function rememberDetailsState() {
  document.querySelectorAll("details[data-state-key]").forEach((details) => {
    if (details.open) {
      detailsOpenState.add(details.dataset.stateKey);
    } else {
      detailsOpenState.delete(details.dataset.stateKey);
    }
  });
}

function bindDetailsState(details, key) {
  details.dataset.stateKey = key;
  details.open = detailsOpenState.has(key);
  details.addEventListener("toggle", () => {
    if (details.open) {
      detailsOpenState.add(key);
    } else {
      detailsOpenState.delete(key);
    }
  });
}

function renderSchedule() {
  if (!els.scheduleList) return;
  els.scheduleList.textContent = "";
  const now = new Date();
  const upcoming = tournamentEvents
    .filter((event) => new Date(event.date) >= new Date(now.getTime() - 3 * 60 * 60 * 1000))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 12);

  els.scheduleStatus.textContent = tournamentEvents.length ? `${upcoming.length}/${tournamentEvents.length}` : t("loading");

  if (!upcoming.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("scheduleEmpty");
    els.scheduleList.append(empty);
    return;
  }

  upcoming.forEach((event) => {
    const item = document.createElement("div");
    item.className = "schedule-item";

    const date = document.createElement("div");
    date.className = "schedule-date";
    date.textContent = formatScheduleTime(event.date);

    const teams = document.createElement("div");
    teams.className = "schedule-teams";
    teams.textContent = eventTeamsText(event);

    const note = document.createElement("div");
    note.className = "schedule-note";
    note.textContent = localizedCompetitionNote(event.competitions?.[0]?.altGameNote || "FIFA World Cup");

    item.append(date, teams, note);
    els.scheduleList.append(item);
  });
}

function renderScorers() {
  if (!els.scorersGrid) return;
  const previousScrolls = [...document.querySelectorAll(".scorers-scroll")].map((node) => node.scrollTop);
  const allCurrentScorers = collectTournamentScorers();
  const currentScorers = topRanksWithTies(allCurrentScorers, 10);
  const historyScorers = topRanksWithTies(collectLiveHistoricalScorers(allCurrentScorers), 10);
  els.scorersGrid.replaceChildren(
    createScorersCard(t("currentScorers"), currentScorers, "current"),
    createScorersCard(t("historyScorers"), historyScorers, "history"),
  );
  document.querySelectorAll(".scorers-scroll").forEach((node, index) => {
    node.scrollTop = previousScrolls[index] || 0;
  });
  queuePlayerNameLookups([...currentScorers, ...historyScorers].map((scorer) => scorer.player));
}

function createScorersCard(title, scorers) {
  const card = document.createElement("article");
  card.className = "scorers-card";

  const heading = document.createElement("h3");
  heading.textContent = title;

  if (!scorers.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact";
    empty.textContent = t("scorersEmpty");
    card.append(heading, empty);
    return card;
  }

  const table = document.createElement("table");
  table.className = "scorers-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>${t("rank")}</th>
        <th>${t("player")}</th>
        <th>${t("team")}</th>
        <th>${t("goals")}</th>
      </tr>
    </thead>
  `;

  const body = document.createElement("tbody");
  appendScorerRows(body, scorers);

  table.append(body);
  const scroller = document.createElement("div");
  scroller.className = "scorers-scroll";
  scroller.append(table);
  card.append(heading, scroller);

  return card;
}

function appendScorerRows(body, scorers) {
  scorers.forEach((scorer) => {
    const row = document.createElement("tr");
    const rankCell = document.createElement("td");
    rankCell.textContent = scorer.rank;
    const playerCell = document.createElement("td");
    const playerName = document.createElement("strong");
    playerName.textContent = localizedPlayerName(scorer.player);
    playerCell.append(playerName);
    const teamCell = document.createElement("td");
    const teamContent = document.createElement("span");
    teamContent.className = "scorer-team";
    if (typeof scorer.team === "string" && teamNames[scorer.team]) {
      appendTeamFlag(teamContent, scorer.team);
    }
    const teamName = document.createElement("span");
    teamName.textContent = localizedScorerTeamName(scorer.team);
    teamContent.append(teamName);
    teamCell.append(teamContent);
    const goalsCell = document.createElement("td");
    const goals = document.createElement("strong");
    goals.textContent = scorer.goals;
    goalsCell.append(goals);
    row.append(rankCell, playerCell, teamCell, goalsCell);
    body.append(row);
  });
}

function collectTournamentScorers() {
  const fromEvents = collectScorersFromEvents(tournamentEvents);
  return mergeScorerSources(officialTournamentScorers, fromEvents);
}

function mergeScorerSources(...sources) {
  const scorerMap = new Map();

  sources.flat().forEach((scorer) => {
    if (!scorer?.player || !scorer?.team) return;
    const player = canonicalPlayerName(scorer.player);
    const key = `${player}|${scorer.team}`;
    const goals = Number(scorer.goals || 0);
    const current = scorerMap.get(key);
    if (!current || goals > current.goals) {
      scorerMap.set(key, { player, team: scorer.team, goals });
    }
  });

  return sortAndMarkTies([...scorerMap.values()]);
}

function collectLiveHistoricalScorers(currentScorers) {
  const historicalMap = new Map(historicalScorers.map((scorer) => [
    scorer.player,
    { ...scorer, goals: Number(scorer.goals || 0) },
  ]));

  currentScorers.forEach((scorer) => {
    const base = historicalMap.get(scorer.player);
    if (base) {
      base.goals += Number(scorer.goals || 0);
    } else if (Number(scorer.goals || 0) >= 5) {
      historicalMap.set(scorer.player, { ...scorer });
    }
  });

  return sortAndMarkTies([...historicalMap.values()]);
}

function sortAndMarkTies(scorers) {
  const sorted = [...scorers]
    .sort((a, b) => Number(b.goals || 0) - Number(a.goals || 0) || a.player.localeCompare(b.player));
  let rank = 0;
  let previousGoals = null;
  return sorted.map((scorer) => {
    if (scorer.goals !== previousGoals) {
      rank += 1;
      previousGoals = scorer.goals;
    }
    return { ...scorer, rank };
  });
}

function topRanksWithTies(scorers, rankLimit) {
  return scorers.filter((scorer) => Number(scorer.rank || 0) <= rankLimit);
}

function collectScorersFromEvents(events) {
  const scorerMap = new Map();

  events.forEach((event) => {
    const details = eventGoalDetails(event);
    const seenGoals = new Set();
    details.filter((detail) => isGoalDetail(detail) && !detail.ownGoal).forEach((detail) => {
      const scorer = detailScorer(detail, event);
      if (!scorer.player) return;
      if (!scorer.team || !teamNames[scorer.team]) return;
      const fingerprint = `${scorer.player}|${scorer.team}|${scorer.minute}|${detail.scoreValue || 1}`;
      if (seenGoals.has(fingerprint)) return;
      seenGoals.add(fingerprint);
      const key = `${scorer.player}|${scorer.team || ""}`;
      const current = scorerMap.get(key) || { player: scorer.player, team: scorer.team, goals: 0 };
      current.goals += Number(detail.scoreValue || 1);
      scorerMap.set(key, current);
    });
  });

  return sortAndMarkTies([...scorerMap.values()]);
}

function eventGoalDetails(event) {
  const competition = event.competitions?.[0] || event.header?.competitions?.[0] || {};
  return [
    ...(event.details || []),
    ...(event.scoringPlays || []),
    ...(event.plays || []),
    ...(competition.details || []),
    ...(competition.scoringPlays || []),
    ...(competition.plays || []),
  ];
}

function isGoalDetail(detail) {
  const text = [
    detail.type?.text,
    detail.type?.description,
    detail.type?.abbreviation,
    detail.displayName,
    detail.shortDisplayName,
    detail.text,
  ].filter(Boolean).join(" ");
  return detail.scoringPlay === true
    || Number(detail.scoreValue || 0) > 0
    || /\b(goal|penalty\s*-\s*scored)\b/i.test(text)
    || detail.type?.abbreviation === "G";
}

function detailScorer(detail, event = null) {
  const participant = detail.participants?.find((item) => item.athlete || item.athleteId) || detail.participants?.[0] || {};
  const athlete = detail.athlete || detail.athletes?.[0] || detail.athletesInvolved?.[0] || participant.athlete || {};
  const team = detail.team || participant.team || {};
  const player = canonicalPlayerName(athlete.displayName || athlete.shortName || athlete.fullName || detail.athleteName || detail.scorer || "");
  const competition = event?.competitions?.[0] || event?.header?.competitions?.[0] || {};
  const teamId = String(team.id || "");
  const eventTeam = (competition.competitors || [])
    .find((competitor) => String(competitor.team?.id || competitor.id || "") === teamId)?.team || {};
  const teamCode = team.abbreviation || team.shortDisplayName || team.displayName
    || eventTeam.abbreviation || eventTeam.shortDisplayName || eventTeam.displayName
    || playerTeams[player] || "";
  return {
    player,
    team: teamNames[teamCode] ? teamCode : playerTeams[player] || "",
    minute: detail.clock?.displayValue || detail.time?.displayValue || detail.period?.displayValue || "",
    ownGoal: Boolean(detail.ownGoal),
  };
}

function localizedPlayerName(name) {
  name = canonicalPlayerName(name);
  if (currentLang === "en") return name;
  return playerNames[name]?.[currentLang] || playerNameCache[name]?.[currentLang] || name;
}

function canonicalPlayerName(name) {
  return playerAliases[name] || name;
}

function loadPlayerNameCache() {
  try {
    const cache = JSON.parse(localStorage.getItem(PLAYER_NAME_CACHE_KEY) || "{}");
    Object.values(cache).forEach((entry) => {
      if (!entry || typeof entry !== "object") return;
      Object.keys(entry)
        .filter((key) => key.startsWith("missing_"))
        .forEach((key) => delete entry[key]);
    });
    return cache;
  } catch {
    return {};
  }
}

function savePlayerNameCache() {
  localStorage.setItem(PLAYER_NAME_CACHE_KEY, JSON.stringify(playerNameCache));
}

function queuePlayerNameLookups(names) {
  const lookupLang = currentLang;
  if (lookupLang === "en") return;
  const targets = [...new Set(names)]
    .filter(Boolean)
    .filter((name) => !playerNames[name]?.[lookupLang])
    .filter((name) => !playerNameCache[name]?.[lookupLang])
    .filter((name) => !failedPlayerNameLookups.has(`${lookupLang}:${name}`))
    .filter((name) => !pendingPlayerNameLookups.has(`${lookupLang}:${name}`));

  if (!targets.length) return;

  targets.forEach((name) => pendingPlayerNameLookups.add(`${lookupLang}:${name}`));

  Promise.all(targets.map(fetchPlayerTranslation))
    .then((results) => {
      let changed = false;
      results.forEach(({ name, labels }) => {
        pendingPlayerNameLookups.delete(`${lookupLang}:${name}`);
        if (!labels) {
          failedPlayerNameLookups.add(`${lookupLang}:${name}`);
          return;
        }
        playerNameCache[name] = { ...(playerNameCache[name] || {}), ...labels };
        changed = true;
      });
      if (!changed) return;
      savePlayerNameCache();
      scheduleLocalizedDataRefresh();
    })
    .catch((error) => {
      targets.forEach((name) => pendingPlayerNameLookups.delete(`${lookupLang}:${name}`));
      console.error(error);
    });
}

function scheduleLocalizedDataRefresh() {
  if (translationRefreshTimer) clearTimeout(translationRefreshTimer);
  translationRefreshTimer = window.setTimeout(() => {
    translationRefreshTimer = null;
    const state = captureUiState();
    renderScorers();
    renderMatches(currentMatches);
    restoreUiState(state);
  }, 900);
}

async function fetchPlayerTranslation(name) {
  const searchUrl = `https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json&language=en&limit=5&search=${encodeURIComponent(name)}`;
  const searchResponse = await fetch(searchUrl, { cache: "force-cache" });
  if (!searchResponse.ok) return { name, labels: null };
  const searchData = await searchResponse.json();
  const entity = (searchData.search || []).find((item) => /football|soccer/i.test(item.description || "")) || searchData.search?.[0];
  if (!entity?.id) return { name, labels: null };

  const labelsUrl = `https://www.wikidata.org/w/api.php?action=wbgetentities&origin=*&format=json&props=labels&languages=zh|zh-cn|zh-hans|ja&ids=${entity.id}`;
  const labelsResponse = await fetch(labelsUrl, { cache: "force-cache" });
  if (!labelsResponse.ok) return { name, labels: null };
  const labelsData = await labelsResponse.json();
  const labels = labelsData.entities?.[entity.id]?.labels || {};
  const zh = labels["zh-cn"]?.value || labels["zh-hans"]?.value || labels.zh?.value;
  const ja = labels.ja?.value;
  if (!zh && !ja) return { name, labels: null };
  return {
    name,
    labels: {
      ...(zh ? { zh } : {}),
      ...(ja ? { ja } : {}),
    },
  };
}

function localizedScorerTeamName(team) {
  if (!team) return t("tba");
  if (currentLang === "en" && typeof team === "string" && teamNames[team]) return englishTeamName(team);
  if (typeof team === "string" && teamNames[team]) return teamNames[team][currentLang];
  if (typeof team === "string") return localizedTeamFromText(team);
  return localizedTeamName(team);
}

function englishTeamName(abbr) {
  const eventTeam = tournamentEvents
    .flatMap((event) => event.competitions?.[0]?.competitors || [])
    .map((competitor) => competitor.team)
    .find((team) => team?.abbreviation === abbr);
  return eventTeam?.displayName || eventTeam?.name || abbr;
}

function renderStandings() {
  if (!els.standingsGrid) return;
  els.standingsStatus.textContent = standingsGroups.length ? `${standingsGroups.length}` : t("loading");

  if (!standingsGroups.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("standingsEmpty");
    els.standingsGrid.replaceChildren(empty);
    return;
  }

  const cards = standingsGroups.map((group) => createStandingsCard(group));
  const fragment = document.createDocumentFragment();
  fragment.append(...cards.slice(0, 2));

  if (cards.length > 2) {
    const details = document.createElement("details");
    details.className = "standings-more";
    bindDetailsState(details, "standings:more");
    const summary = document.createElement("summary");
    summary.textContent = t("moreGroups");
    const grid = document.createElement("div");
    grid.className = "standings-more-grid";
    grid.append(...cards.slice(2));
    details.append(summary, grid);
    fragment.append(details);
  }
  els.standingsGrid.replaceChildren(fragment);
}

function createStandingsCard(group) {
    const card = document.createElement("article");
    card.className = "standings-card";

    const heading = document.createElement("h3");
    heading.textContent = groupLabel(group.name);

    const table = document.createElement("table");
    table.className = "standings-table";
    table.innerHTML = `
      <thead>
        <tr>
          <th>${t("rank")}</th>
          <th>${t("team")}</th>
          <th>${t("played")}</th>
          <th>${t("win")}</th>
          <th>${t("draw")}</th>
          <th>${t("loss")}</th>
          <th>${t("goalDiff")}</th>
          <th>${t("points")}</th>
        </tr>
      </thead>
    `;

    const body = document.createElement("tbody");
    [...(group.standings?.entries || [])]
      .sort((a, b) => Number(statValue(a, "rank")) - Number(statValue(b, "rank")))
      .forEach((entry) => {
      const row = document.createElement("tr");
      if (entry.note?.description) row.className = "advance-row";
      const values = [
        statValue(entry, "rank"),
        statValue(entry, "gamesPlayed"),
        statValue(entry, "wins"),
        statValue(entry, "ties"),
        statValue(entry, "losses"),
        statValue(entry, "pointDifferential"),
      ];
      const rankCell = document.createElement("td");
      rankCell.textContent = values[0];
      const teamCell = document.createElement("td");
      teamCell.append(createStandingTeamLabel(entry.team));
      const statCells = values.slice(1).map((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        return cell;
      });
      const pointsCell = document.createElement("td");
      const points = document.createElement("strong");
      points.textContent = statValue(entry, "points");
      pointsCell.append(points);
      row.append(rankCell, teamCell, ...statCells, pointsCell);
      body.append(row);
    });

    table.append(body);
    card.append(heading, table);
    return card;
}

function renderAdvancement() {
  if (!els.advancementGrid) return;

  const previousScrollTop = document.querySelector(".advancement-list")?.scrollTop || 0;
  const events = knockoutEvents();
  const knockout = document.createElement("article");
  knockout.className = "advancement-card";
  const header = document.createElement("div");
  header.className = "advancement-card__header";
  const knockoutHeading = document.createElement("h3");
  knockoutHeading.textContent = t("knockoutTitle");
  const bracketButton = document.createElement("button");
  bracketButton.className = "bracket-button";
  bracketButton.type = "button";
  bracketButton.textContent = t("bracketButton");
  bracketButton.addEventListener("click", showBracketPrompt);
  header.append(knockoutHeading, bracketButton);
  const knockoutList = document.createElement("div");
  knockoutList.className = "advancement-list";

  if (!events.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact";
    empty.textContent = t("scheduleEmpty");
    knockoutList.append(empty);
  }

  events.forEach((event) => {
    const item = document.createElement("div");
    item.className = "advancement-item";
    const label = document.createElement("strong");
    const round = knockoutRoundLabelForEvent(event);
    label.textContent = round ? `${formatScheduleTime(event.date)} · ${round}` : formatScheduleTime(event.date);
    item.append(label, createKnockoutTeamsNode(event));
    knockoutList.append(item);
  });

  knockout.append(header, knockoutList);
  els.advancementGrid.replaceChildren(knockout);
  const nextList = document.querySelector(".advancement-list");
  if (nextList) nextList.scrollTop = previousScrollTop;
  if (!els.bracketPrompt.hidden) renderBracketBoard();
}

function showBracketPrompt() {
  renderBracketBoard();
  els.bracketPromptTitle.textContent = t("bracketTitle");
  els.bracketPrompt.hidden = false;
}

function hideBracketPrompt() {
  els.bracketPrompt.hidden = true;
}

function renderBracketBoard() {
  if (!els.bracketBoard) return;
  const events = knockoutEvents();
  const bySlug = (slug) => events
    .filter((event) => event.season?.slug === slug)
    .sort((a, b) => Number(a.id || 0) - Number(b.id || 0));
  const round32 = bySlug("round-of-32");
  const round16 = bySlug("round-of-16");
  const quarters = bySlug("quarterfinals");
  const semis = bySlug("semifinals");
  const final = bySlug("final")[0];
  const canvas = document.createElement("div");
  canvas.className = "bracket-canvas";
  const svg = createBracketSvg();
  const nodes = document.createElement("div");
  nodes.className = "bracket-nodes";
  canvas.append(svg, nodes);

  renderBracketSide(svg, nodes, "top", [
    { events: round32.slice(0, 8), y: 18, units: bracketLayerUnits(16, 0, 1) },
    { events: round16.slice(0, 4), fallback: round32.slice(0, 8), y: 122, units: bracketLayerUnits(8, 0.5, 2) },
    { events: quarters.slice(0, 2), fallback: round16.slice(0, 4), y: 236, units: bracketLayerUnits(4, 1.5, 4) },
    { events: semis.slice(0, 1), fallback: quarters.slice(0, 2), y: 350, units: bracketLayerUnits(2, 3.5, 8) },
    { events: [final], fallback: semis.slice(0, 1), y: 456, units: [6], limit: 1, nodeSide: "final" },
  ]);
  renderBracketFinal(svg, nodes, final);
  renderBracketSide(svg, nodes, "bottom", [
    { events: round32.slice(8, 16), y: 1044, units: bracketLayerUnits(16, 0, 1) },
    { events: round16.slice(4, 8), fallback: round32.slice(8, 16), y: 940, units: bracketLayerUnits(8, 0.5, 2) },
    { events: quarters.slice(2, 4), fallback: round16.slice(4, 8), y: 826, units: bracketLayerUnits(4, 1.5, 4) },
    { events: semis.slice(1, 2), fallback: quarters.slice(2, 4), y: 712, units: bracketLayerUnits(2, 3.5, 8) },
    { events: [final], fallback: semis.slice(1, 2), y: 456, units: [9], limit: 1, competitorOffset: 1, nodeSide: "final" },
  ]);

  els.bracketBoard.replaceChildren(canvas);
}

function createBracketSvg() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "bracket-lines");
  svg.setAttribute("viewBox", "0 0 1320 1100");
  svg.setAttribute("aria-hidden", "true");
  return svg;
}

function bracketLayerUnits(count, first, step) {
  return Array.from({ length: count }, (_, index) => first + index * step);
}

function bracketX(unit) {
  return 52 + unit * 81;
}

function renderBracketSide(svg, nodes, side, layers) {
  const normalized = layers.map((layer, index) => ({
    ...layer,
    competitors: bracketLayerCompetitors(layer, index === 0 ? [] : layers[index - 1].events),
  }));

  normalized.forEach((layer) => {
    layer.units.forEach((unit, index) => {
      addBracketNode(nodes, layer.competitors[index], bracketX(unit), layer.y, layer.nodeSide || side, "entrant");
    });
  });

  for (let index = 0; index < normalized.length - 1; index += 1) {
    const from = normalized[index];
    const to = normalized[index + 1];
    to.units.forEach((unit, outputIndex) => {
      const leftIndex = outputIndex * 2;
      const rightIndex = leftIndex + 1;
      const event = from.events[outputIndex] || null;
      addBracketConnector(
        svg,
        bracketX(from.units[leftIndex]),
        bracketX(from.units[rightIndex]),
        bracketX(unit),
        from.y,
        to.y,
        side,
        Boolean((event?.competitions?.[0]?.status || event?.status || {}).type?.completed),
      );
      addBracketScore(
        nodes,
        bracketScoreText(event?.competitions?.[0]?.competitors || [], event),
        (bracketX(from.units[leftIndex]) + bracketX(from.units[rightIndex])) / 2,
        side === "top" ? from.y + 62 : from.y - 62,
      );
    });
  }
}

function bracketLayerCompetitors(layer, previousEvents = []) {
  const expected = layer.units.length;
  const fromCurrent = flattenBracketCompetitors(layer.events, layer.limit, layer.competitorOffset || 0);
  const fromFallback = bracketWinners(layer.fallback || previousEvents);
  return Array.from({ length: expected }, (_, index) => {
    const fallback = fromFallback[index];
    if (fallback && isResolvedTeam(fallback.team)) return fallback;
    const candidate = fromCurrent[index];
    if (candidate && isResolvedTeam(candidate.team)) return candidate;
    return null;
  });
}

function flattenBracketCompetitors(events = [], limit = Infinity, offset = 0) {
  return (events || [])
    .filter(Boolean)
    .flatMap((event) => (event.competitions?.[0]?.competitors || []).slice(offset))
    .slice(0, limit);
}

function bracketWinners(events = []) {
  return (events || []).map((event) => bracketWinner(event));
}

function renderBracketFinal(svg, nodes, finalEvent) {
  const competitors = finalEvent?.competitions?.[0]?.competitors || [];
  addBracketScore(nodes, bracketScoreText(competitors, finalEvent), bracketX(7.5), 490);
  addBracketFinalLine(svg, bracketX(6), 528, bracketX(7.02), 528);
  addBracketFinalLine(svg, bracketX(9), 528, bracketX(7.98), 528);

  const finalBadge = document.createElement("div");
  finalBadge.className = "bracket-final-badge";
  finalBadge.textContent = t("final");
  placeBracketElement(finalBadge, bracketX(7.5), 528);
  nodes.append(finalBadge);
}

function bracketWinner(event = null) {
  const competitors = event?.competitions?.[0]?.competitors || [];
  const status = event?.competitions?.[0]?.status || event?.status || {};
  if (!status.type?.completed) return null;
  return competitors.find((competitor) => competitor.winner) || null;
}

function addBracketConnector(svg, leftX, rightX, midX, inY, outY, side, completed) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const inputY = side === "top" ? inY + 54 : inY - 54;
  const outputY = side === "top" ? outY - 4 : outY + 4;
  const jointY = side === "top" ? outputY - 24 : outputY + 24;
  path.setAttribute("d", `M ${leftX} ${inputY} V ${jointY} H ${midX} V ${outputY} M ${rightX} ${inputY} V ${jointY} H ${midX}`);
  path.setAttribute("class", completed ? "bracket-path completed" : "bracket-path");
  svg.append(path);
}

function addBracketFinalLine(svg, x1, y1, x2, y2) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", `M ${x1} ${y1} H ${x2}`);
  path.setAttribute("class", "bracket-path");
  svg.append(path);
}

function addBracketScore(nodes, text, x, y) {
  if (!text || text === "vs") return;
  const score = document.createElement("strong");
  score.className = "bracket-score";
  score.textContent = text;
  placeBracketElement(score, x, y);
  nodes.append(score);
}

function addBracketNode(nodes, competitor, x, y, side, role) {
  const node = createBracketTeamNode(competitor || {});
  node.classList.add(`bracket-node--${role}`);
  if (side === "bottom") node.classList.add("bracket-node--bottom");
  placeBracketElement(node, x, y);
  nodes.append(node);
}

function placeBracketElement(element, x, y) {
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function createBracketTeamNode(competitor = {}) {
  const team = competitor.team || {};
  const node = document.createElement("div");
  node.className = "bracket-node";
  if (competitor.winner) node.classList.add("winner");

  if (isResolvedTeam(team)) {
    appendTeamFlag(node, team);
    const name = document.createElement("span");
    name.textContent = localizedTeamName(team);
    node.append(name);
  } else {
    const icon = document.createElement("span");
    icon.className = "pending-dot";
    icon.textContent = "?";
    const name = document.createElement("span");
    name.textContent = t("pending");
    node.append(icon, name);
  }

  return node;
}

function bracketScoreText(competitors = [], event = null) {
  const status = event?.competitions?.[0]?.status || event?.status || {};
  const state = String(status.type?.state || "").toLowerCase();
  const description = String(status.type?.description || status.type?.name || "").toLowerCase();
  if (!event || state === "pre" || /scheduled|pre-game|not started/.test(description)) return "";
  const home = competitors[0]?.score;
  const away = competitors[1]?.score;
  if (home !== undefined && home !== "" && away !== undefined && away !== "") return `${home}:${away}`;
  return "vs";
}

async function loadMatches() {
  const requestId = ++matchesRequestId;
  const selectedDate = els.date.value;
  const url = `${API_BASE}?dates=${espnDateRangeForLocalDate(selectedDate)}`;
  syncState = "loading";
  renderSyncStatus();

  try {
    const response = await fetch(freshUrl(url), { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (requestId !== matchesRequestId || els.date.value !== selectedDate) return;
    const matches = (data.events || [])
      .filter((event) => formatDateOnly(event.date) === selectedDate)
      .map(normalizeEvent)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    currentMatches = matches;
    const nextSignature = JSON.stringify(matches.map((match) => ({
      id: match.id,
      date: match.date,
      status: match.status,
      homeScore: match.home?.score,
      awayScore: match.away?.score,
      details: eventGoalDetails(match.event).filter(isGoalDetail),
    })));
    if (nextSignature !== matchesRenderSignature) {
      matchesRenderSignature = nextSignature;
      renderMatches(currentMatches);
    }
    syncState = "updated";
    lastUpdatedAt = new Date();
    renderSyncStatus();
  } catch (error) {
    if (requestId !== matchesRequestId || els.date.value !== selectedDate) return;
    currentMatches = [];
    syncState = "failed";
    setCounts([]);
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("loadError");
    els.matches.textContent = "";
    els.matches.append(empty);
    renderSyncStatus();
    console.error(error);
  }
}

async function loadTournamentData() {
  try {
    const [standingsResponse, tournamentResponse, knockoutResponse, statsResponse] = await Promise.all([
      fetch(freshUrl(STANDINGS_API), { cache: "no-store" }),
      fetch(freshUrl(TOURNAMENT_API), { cache: "no-store" }),
      fetch(freshUrl(KNOCKOUT_API), { cache: "no-store" }),
      fetch(freshUrl(STATS_API), { cache: "no-store" }).catch(() => null),
    ]);
    if (!standingsResponse.ok || !tournamentResponse.ok || !knockoutResponse.ok) throw new Error("Tournament data failed");

    const standingsData = await standingsResponse.json();
    const tournamentData = await tournamentResponse.json();
    const knockoutData = await knockoutResponse.json();
    const statsData = statsResponse?.ok ? await statsResponse.json() : null;
    standingsGroups = standingsData.children || [];
    tournamentEvents = mergeEventsById(tournamentData.events || [], knockoutData.events || []);
    officialTournamentScorers = statsData ? parseOfficialScorers(statsData) : [];

    const scorersSignature = JSON.stringify(collectTournamentScorers()
      .map((scorer) => [scorer.player, scorer.team, scorer.goals]));
    if (scorersSignature !== scorersRenderSignature) {
      scorersRenderSignature = scorersSignature;
      renderScorers();
    }

    const nextStandingsSignature = JSON.stringify(standingsGroups.map((group) => ({
      name: group.name,
      entries: (group.standings?.entries || []).map((entry) => ({
        team: entry.team?.abbreviation,
        stats: entry.stats,
      })),
    })));
    if (nextStandingsSignature !== standingsRenderSignature) {
      standingsRenderSignature = nextStandingsSignature;
      renderStandings();
    }

    const nextAdvancementSignature = JSON.stringify(knockoutEvents()
      .map((event) => [
        event.id,
        event.date,
        event.competitions?.[0]?.status || event.status,
        event.name,
        (event.competitions?.[0]?.competitors || []).map((competitor) => [
          competitor.team?.abbreviation || "",
          competitor.team?.displayName || competitor.team?.name || "",
          competitor.score || "",
          Boolean(competitor.winner),
        ]),
      ]));
    if (nextAdvancementSignature !== advancementRenderSignature) {
      advancementRenderSignature = nextAdvancementSignature;
      renderAdvancement();
    }
  } catch (error) {
    els.standingsStatus.textContent = t("syncFailed");
    console.error(error);
  }
}

function parseOfficialScorers(statsData) {
  const goalsCategory = (statsData.stats || statsData.categories || [])
    .find((category) => category.name === "goalsLeaders" || category.abbreviation === "G");
  const leaders = goalsCategory?.leaders || [];
  return sortAndMarkTies(leaders
    .map((leader) => {
      const athlete = leader.athlete || {};
      const team = athlete.team || leader.team || {};
      return {
        player: canonicalPlayerName(athlete.displayName || athlete.shortName || ""),
        team: team.abbreviation || team.name || "",
        goals: Number(leader.value || athlete.statistics?.find?.((stat) => stat.name === "totalGoals")?.value || 0),
      };
    })
    .filter((scorer) => scorer.player && scorer.team && teamNames[scorer.team] && scorer.goals > 0));
}

async function refreshAll() {
  if (refreshInFlight) return;
  refreshInFlight = true;
  const state = captureUiState();
  try {
    await Promise.all([loadMatches(), loadTournamentData()]);
  } finally {
    restoreUiState(state);
    refreshInFlight = false;
  }
}

function scheduleRefresh() {
  if (refreshTimer) clearInterval(refreshTimer);
  refreshTimer = setInterval(refreshAll, REFRESH_MS);
}

els.prev.addEventListener("click", () => {
  els.date.value = shiftDate(els.date.value, -1);
  renderDateDisplay();
  loadMatches();
});

els.next.addEventListener("click", () => {
  els.date.value = clampTournamentDate(shiftDate(els.date.value, 1));
  renderDateDisplay();
  loadMatches();
});

els.date.addEventListener("change", () => {
  els.date.value = clampTournamentDate(els.date.value);
  renderDateDisplay();
  loadMatches();
});
els.refresh.addEventListener("click", refreshAll);
els.today.addEventListener("click", () => {
  els.date.value = clampTournamentDate(localDateValue());
  renderDateDisplay();
  loadMatches();
});
els.appPromptClose.addEventListener("click", hideAppPrompt);
els.namePromptClose.addEventListener("click", hideNamePrompt);
els.bracketPromptClose.addEventListener("click", hideBracketPrompt);
els.appPrompt.addEventListener("click", (event) => {
  if (event.target === els.appPrompt) hideAppPrompt();
});
els.namePrompt.addEventListener("click", (event) => {
  if (event.target === els.namePrompt) hideNamePrompt();
});
els.bracketPrompt.addEventListener("click", (event) => {
  if (event.target === els.bracketPrompt) hideBracketPrompt();
});
document.addEventListener("pointerdown", (event) => {
  if (!els.languageMenu.open) return;
  if (els.languageMenu.contains(event.target)) return;
  els.languageMenu.open = false;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.appPrompt.hidden) hideAppPrompt();
  if (event.key === "Escape" && !els.namePrompt.hidden) hideNamePrompt();
  if (event.key === "Escape" && !els.bracketPrompt.hidden) hideBracketPrompt();
  if (event.key === "Escape" && els.languageMenu.open) els.languageMenu.open = false;
});
els.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem(LANG_KEY, currentLang);
    els.languageMenu.open = false;
    renderStaticText();
    renderMatches(currentMatches);
  });
});

els.date.max = FINAL_DATE_LOCAL;
els.date.value = clampTournamentDate(localDateValue());
renderStaticText();
loadMatches();
loadTournamentData();
scheduleRefresh();
// registerServiceWorker();

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", async () => {
    try {
      let reloading = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (reloading) return;
        reloading = true;
        window.location.reload();
      });
      const registration = await navigator.serviceWorker.register(`sw.js?v=${APP_VERSION}`);
      await registration.update();
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
    } catch (error) {
      console.error(error);
    }
  });
}
