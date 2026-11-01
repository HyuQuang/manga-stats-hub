/**
 * MangaStats Hub - Complete 370+ Genres & Tags Database
 */

export const OFFICIAL_GENRES = new Set(["Action", "Adventure", "Comedy", "Drama", "Ecchi", "Fantasy", "Hentai", "Horror", "Mahou Shoujo", "Mecha", "Music", "Mystery", "Psychological", "Romance", "Sci-Fi", "Slice of Life", "Sports", "Supernatural", "Thriller"]);

export const GENRE_ICONS = {
  "Action": "⚔️",
  "Adventure": "🧭",
  "Comedy": "🤣",
  "Drama": "🎭",
  "Ecchi": "🔞",
  "Fantasy": "🔮",
  "Hentai": "🔞",
  "Horror": "🩸",
  "Mahou Shoujo": "🪄",
  "Mecha": "🤖",
  "Music": "🎵",
  "Mystery": "🕵️",
  "Psychological": "🧠",
  "Romance": "❤️",
  "Sci-Fi": "🚀",
  "Slice of Life": "☕",
  "Sports": "⚽",
  "Supernatural": "👻",
  "Thriller": "😱",
  "4-koma": "📰",
  "Achromatic": "🏷️",
  "Achronological Order": "🏷️",
  "Acrobatics": "🤸",
  "Acting": "🎬",
  "Adoption": "🤝",
  "Afterlife": "🌌",
  "Age Gap": "⏳",
  "Age Regression": "🏷️",
  "Agender": "🏷️",
  "Agriculture": "🌾",
  "Airsoft": "⚽",
  "Alchemy": "🧪",
  "Aliens": "👽",
  "Alternate Universe": "🌌",
  "American Football": "⚽",
  "Amnesia": "❓",
  "Anachronism": "🏷️",
  "Ancient China": "🏯",
  "Angels": "🪽",
  "Animals": "🐱",
  "Anthology": "📚",
  "Anthropomorphism": "🏷️",
  "Anti-Hero": "🦇",
  "Archery": "🏹",
  "Aromantic": "🏷️",
  "Arranged Marriage": "💍",
  "Artificial Intelligence": "💻",
  "Asexual": "🏷️",
  "Assassins": "🗡️",
  "Astronomy": "🔭",
  "Athletics": "⚽",
  "Augmented Reality": "🕶️",
  "Autobiographical": "📔",
  "Aviation": "✈️",
  "Badminton": "🏸",
  "Ballet": "🩰",
  "Band": "🎸",
  "Bar": "🏷️",
  "Baseball": "⚾",
  "Basketball": "🏀",
  "Battle Royale": "💥",
  "Biographical": "📖",
  "Bisexual": "🏷️",
  "Blackmail": "🏷️",
  "Board Game": "🎲",
  "Boarding School": "🏰",
  "Body Horror": "🧟",
  "Body Image": "🏷️",
  "Body Swapping": "🔄",
  "Bowling": "⚽",
  "Boxing": "🥊",
  "Boys' Love": "👬",
  "Brainwashing": "🌀",
  "Bullying": "💥",
  "Butler": "🤵",
  "Calligraphy": "🎨",
  "Camping": "🏷️",
  "Cannibalism": "🏷️",
  "Card Battle": "🃏",
  "Cars": "🏎️",
  "Centaur": "🏷️",
  "Cheating": "⚡",
  "Cheerleading": "⚽",
  "Chibi": "🏷️",
  "Chimera": "🏷️",
  "Chuunibyou": "👁️",
  "Circus": "🏷️",
  "Class Struggle": "⚖️",
  "Classic Literature": "🎨",
  "Classical Music": "🏷️",
  "Clone": "🏷️",
  "Coastal": "🏷️",
  "Cohabitation": "🏠",
  "College": "🎓",
  "Coming of Age": "🌱",
  "Conspiracy": "🕵️",
  "Cosmic Horror": "🐙",
  "Cosplay": "👗",
  "Cowboys": "🤠",
  "Crafts": "🎨",
  "Creature Taming": "🦁",
  "Crime": "🏷️",
  "Criminal Organization": "🕶️",
  "Crossdressing": "👗",
  "Crossover": "🏷️",
  "Cult": "🕯️",
  "Cultivation": "🧘‍♂️",
  "Curses": "🧿",
  "Cute Boys Doing Cute Things": "✨",
  "Cute Girls Doing Cute Things": "🎀",
  "Cyberpunk": "🏙️",
  "Cyborg": "🦾",
  "Cycling": "🚴",
  "Dancing": "💃",
  "Death Game": "🎯",
  "Delinquents": "👊",
  "Demons": "😈",
  "Denpa": "🏷️",
  "Desert": "🏷️",
  "Detective": "🔍",
  "Dinosaurs": "🏷️",
  "Disability": "🏷️",
  "Dissociative Identities": "🏷️",
  "Dragons": "🐉",
  "Drawing": "🎨",
  "Drugs": "💊",
  "Dullahan": "🏷️",
  "Dungeon": "🏰",
  "Dystopian": "👁️",
  "E-Sports": "🏆",
  "Eco-Horror": "🏷️",
  "Economics": "💰",
  "Educational": "🏷️",
  "Elderly Protagonist": "👴",
  "Elf": "🧝",
  "Ensemble Cast": "👥",
  "Environmental": "🌍",
  "Episodic": "📺",
  "Ero Guro": "🏷️",
  "Espionage": "🕵️",
  "Estranged Family": "🏷️",
  "Exiled": "🏷️",
  "Exorcism": "📿",
  "Fairy": "🧚",
  "Fairy Tale": "🧚",
  "Fake Relationship": "🤝",
  "Family Life": "🏡",
  "Fashion": "🎨",
  "Female Harem": "👑",
  "Female Protagonist": "👩",
  "Femboy": "🎀",
  "Fencing": "⚽",
  "Filmmaking": "🏷️",
  "Firefighters": "🚒",
  "Fishing": "🎣",
  "Fitness": "💪",
  "Food": "🍜",
  "Football": "⚽",
  "Foreign": "🏷️",
  "Found Family": "🫂",
  "Fugitive": "🏃",
  "Full Color": "🎨",
  "Gambling": "🎰",
  "Gangs": "🥊",
  "Gekiga": "🏷️",
  "Gender Bending": "⚧️",
  "Ghost": "👻",
  "Go": "⚪",
  "Goblin": "👺",
  "Gods": "⚡",
  "Golf": "⚽",
  "Gore": "🩸",
  "Guns": "🔫",
  "Gyaru": "💅",
  "Handball": "⚽",
  "Henshin": "✨",
  "Heterosexual": "👫",
  "Hikikomori": "🚪",
  "Hip-hop Music": "🏷️",
  "Historical": "📜",
  "Homeless": "🏷️",
  "Horticulture": "☕",
  "Human Experimentation": "🧪",
  "Ice Sports": "⚽",
  "Idol": "🎤",
  "Incest": "❤️",
  "Indigenous Cultures": "🏷️",
  "Inn": "🏷️",
  "Inseki": "🏡",
  "Interspecies": "🐾",
  "Isekai": "🌀",
  "Iyashikei": "🌸",
  "Jazz Music": "🏷️",
  "Josei": "👩",
  "Judo": "🥋",
  "Kabuki": "🎨",
  "Kaiju": "🦖",
  "Karuta": "🎴",
  "Kemonomimi": "🦊",
  "Kids": "👶",
  "Kingdom Management": "👑",
  "Konbini": "🏷️",
  "Kuudere": "🧊",
  "Lacrosse": "⚽",
  "Language Barrier": "🏷️",
  "LGBTQ+ Themes": "🏳️‍🌈",
  "Long Strip": "📜",
  "Lost Civilization": "🏷️",
  "Love Triangle": "🔺",
  "Mafia": "🕶️",
  "Magic": "✨",
  "Mahjong": "🀄",
  "Maids": "🧹",
  "Makeup": "🎨",
  "Male Harem": "🤴",
  "Male Protagonist": "👦",
  "Manzai": "🎨",
  "Marriage": "🏷️",
  "Martial Arts": "🥋",
  "Matchmaking": "💌",
  "Matriarchy": "🏷️",
  "Medicine": "🩺",
  "Medieval": "🏰",
  "Memory Manipulation": "🧠",
  "Mermaid": "🧜‍♀️",
  "Meta": "🏷️",
  "Metal Music": "🏷️",
  "Middle East": "🕌",
  "Military": "🪖",
  "Mixed Gender Harem": "👥",
  "Modeling": "🎨",
  "Monster Boy": "🐺",
  "Monster Girl": "🐾",
  "Mopeds": "🏷️",
  "Motorcycles": "🏍️",
  "Mountaineering": "🧗",
  "Musical Theater": "🏷️",
  "Mythology": "🏛️",
  "Natural Disaster": "🏷️",
  "Necromancy": "💀",
  "Nekomimi": "🐱",
  "Ninja": "🥷",
  "No Dialogue": "🏷️",
  "Noir": "🏷️",
  "Non-fiction": "📰",
  "Nudity": "🏷️",
  "Nun": "🏷️",
  "Office": "🏷️",
  "Office Lady": "👠",
  "Oiran": "🏷️",
  "Ojou-sama": "💎",
  "Orphan": "🏷️",
  "Otaku Culture": "🤓",
  "Outdoor Activities": "🏷️",
  "Pandemic": "☣️",
  "Parenthood": "🍼",
  "Parkour": "🏃",
  "Parody": "🎭",
  "Philosophy": "📖",
  "Photography": "🎨",
  "Pirates": "🏴‍☠️",
  "Poker": "♠️",
  "Police": "👮",
  "Politics": "🏛️",
  "Polyamorous": "💞",
  "Post-Apocalyptic": "☢️",
  "POV": "🏷️",
  "Poverty": "☕",
  "Pregnancy": "🏷️",
  "Primarily Adult Cast": "👔",
  "Primarily Animal Cast": "🏷️",
  "Primarily Child Cast": "🏷️",
  "Primarily Female Cast": "👭",
  "Primarily Male Cast": "👬",
  "Primarily Teen Cast": "🏷️",
  "Prison": "🏷️",
  "Prophecy": "🏷️",
  "Proxy Battle": "🏷️",
  "Psychosexual": "🏷️",
  "Rakugo": "🎨",
  "Real Robot": "🤖",
  "Rehabilitation": "🏷️",
  "Reincarnation": "⏳",
  "Religion": "🏷️",
  "Rescue": "🏷️",
  "Restaurant": "🏷️",
  "Revenge": "🔥",
  "Reverse Isekai": "🔄",
  "Robots": "🤖",
  "Rock Music": "🏷️",
  "Royal Affairs": "🏷️",
  "Rugby": "⚽",
  "Rural": "🏷️",
  "Samurai": "⚔️",
  "Satire": "🏷️",
  "School": "🏫",
  "School Club": "🎪",
  "Scuba Diving": "⚽",
  "Seinen": "🧑",
  "Shapeshifting": "🦊",
  "Ships": "🚢",
  "Shogi": "♟️",
  "Short-Form Chapter": "📄",
  "Shoujo": "👧",
  "Shounen": "👦",
  "Shrine Maiden": "⛩️",
  "Skateboarding": "⚽",
  "Skeleton": "💀",
  "Slapstick": "🏷️",
  "Slavery": "⛓️",
  "Snowscape": "🏷️",
  "Software Development": "🏷️",
  "Space": "🪐",
  "Space Opera": "🛸",
  "Spearplay": "🔱",
  "Steampunk": "⚙️",
  "Succubus": "😈",
  "Suicide": "🏷️",
  "Sumo": "🤼",
  "Super Power": "💥",
  "Super Robot": "🦾",
  "Superhero": "🦸",
  "Surfing": "⚽",
  "Surreal Comedy": "🏷️",
  "Survival": "⛺",
  "Swimming": "🏊",
  "Swordplay": "🗡️",
  "Table Tennis": "⚽",
  "Tanks": "🎖️",
  "Tanned Skin": "🏷️",
  "Teacher": "🏷️",
  "Teens' Love": "💖",
  "Tennis": "🎾",
  "Terrorism": "🏷️",
  "Time Loop": "🔁",
  "Time Manipulation": "⌛",
  "Time Skip": "⏩",
  "Tokusatsu": "🦸",
  "Tomboy": "🧢",
  "Torture": "🏷️",
  "Tragedy": "🥀",
  "Trains": "🚂",
  "Transgender": "🏷️",
  "Travel": "🏷️",
  "Triads": "🐉",
  "Tsundere": "😤",
  "Twins": "🏷️",
  "Unrequited Love": "💔",
  "Urban": "🏷️",
  "Urban Fantasy": "🌆",
  "Vampire": "🧛",
  "Veterinarian": "🐕",
  "Video Games": "👾",
  "Vikings": "🪓",
  "Villainess": "👸",
  "Virtual World": "🌐",
  "Vocal Synth": "🏷️",
  "Volleyball": "🏐",
  "VTuber": "🎙️",
  "War": "💣",
  "Werewolf": "🐺",
  "Wilderness": "🏷️",
  "Witch": "🧙‍♀️",
  "Work": "💼",
  "Wrestling": "⚽",
  "Writing": "✍️",
  "Wuxia": "🗡️",
  "Yakuza": "🗡️",
  "Yandere": "🔪",
  "Youkai": "👺",
  "Yuri": "👭",
  "Zombie": "🧟"
};

export const GENRE_KEYWORDS = {
  "Action": [
    "hanh dong",
    "danh nhau",
    "chien dau"
  ],
  "Adventure": [
    "phieu luu",
    "kham pha",
    "hanh trinh"
  ],
  "Comedy": [
    "hai huoc",
    "hai bua",
    "vui nhon",
    "cuoi"
  ],
  "Drama": [
    "kich tinh",
    "tam ly",
    "xuc dong"
  ],
  "Ecchi": [
    "goi cam",
    "ecchi",
    "nong bong",
    "16+"
  ],
  "Fantasy": [
    "ky ao",
    "huyen ao",
    "ma ao",
    "huyen huyen"
  ],
  "Hentai": [
    "18+",
    "nguoi lon"
  ],
  "Horror": [
    "kinh di",
    "ma",
    "rung ron",
    "am anh"
  ],
  "Mahou Shoujo": [
    "ma phap thieu nu",
    "mahou shoujo"
  ],
  "Mecha": [
    "nguoi may",
    "robot",
    "co giap",
    "gundam"
  ],
  "Music": [
    "am nhac",
    "ca hat",
    "nhac"
  ],
  "Mystery": [
    "bi an",
    "pha an",
    "trinh tham",
    "dieu tra"
  ],
  "Psychological": [
    "tam ly",
    "xoan nao",
    "dau tri"
  ],
  "Romance": [
    "tinh cam",
    "lang man",
    "ngon tinh",
    "yeu duong"
  ],
  "Sci-Fi": [
    "khoa hoc",
    "vien tuong",
    "tuong lai"
  ],
  "Slice of Life": [
    "doi thuong",
    "hang ngay",
    "binh yen",
    "nhe nhang"
  ],
  "Sports": [
    "the thao",
    "bong da",
    "bong ro",
    "the luc"
  ],
  "Supernatural": [
    "sieu nhien",
    "huyen bi",
    "tam linh"
  ],
  "Thriller": [
    "giat gan",
    "hoi hop",
    "nghet tho"
  ],
  "4-koma": [
    "4 khung",
    "4-koma",
    "yonkoma"
  ],
  "Achromatic": [
    "achromatic"
  ],
  "Achronological Order": [
    "achronological order"
  ],
  "Acrobatics": [
    "nhao lon",
    "xiec"
  ],
  "Acting": [
    "dien xuat",
    "dien vien"
  ],
  "Adoption": [
    "con nuoi",
    "nhan nuoi"
  ],
  "Afterlife": [
    "afterlife"
  ],
  "Age Gap": [
    "chenh lech tuoi",
    "tinh chi em",
    "chu chau"
  ],
  "Age Regression": [
    "age regression"
  ],
  "Agender": [
    "agender"
  ],
  "Agriculture": [
    "nong nghiep",
    "lam ruong",
    "trong trot"
  ],
  "Airsoft": [
    "airsoft"
  ],
  "Alchemy": [
    "gia kim",
    "luyen dan",
    "dan duoc",
    "thuoc"
  ],
  "Aliens": [
    "nguoi ngoai hanh tinh",
    "alien"
  ],
  "Alternate Universe": [
    "vu tru song song",
    "da vu tru"
  ],
  "American Football": [
    "american football"
  ],
  "Amnesia": [
    "mat tri nho",
    "quen qua khu"
  ],
  "Anachronism": [
    "anachronism"
  ],
  "Ancient China": [
    "trung hoa co dai",
    "trieu dinh"
  ],
  "Angels": [
    "thien than",
    "thien toc"
  ],
  "Animals": [
    "dong vat",
    "thu cung",
    "cho meo"
  ],
  "Anthology": [
    "tuyen tap",
    "truyen ngan"
  ],
  "Anthropomorphism": [
    "anthropomorphism"
  ],
  "Anti-Hero": [
    "phan anh hung",
    "chinh ta",
    "ta dao"
  ],
  "Archery": [
    "cung thuat",
    "ban cung",
    "cung thu"
  ],
  "Aromantic": [
    "aromantic"
  ],
  "Arranged Marriage": [
    "hon nhan sap dat",
    "cuoi truoc yeu sau"
  ],
  "Artificial Intelligence": [
    "tri tue nhan tao",
    "ai"
  ],
  "Asexual": [
    "asexual"
  ],
  "Assassins": [
    "sat thu",
    "am sat"
  ],
  "Astronomy": [
    "thien van",
    "ngam sao"
  ],
  "Athletics": [
    "athletics"
  ],
  "Augmented Reality": [
    "thuc te tang cuong",
    "ar"
  ],
  "Autobiographical": [
    "tu truyen"
  ],
  "Aviation": [
    "may bay",
    "phi cong"
  ],
  "Badminton": [
    "cau long"
  ],
  "Ballet": [
    "ba le",
    "ballet"
  ],
  "Band": [
    "ban nhac",
    "rock"
  ],
  "Bar": [
    "bar"
  ],
  "Baseball": [
    "bong chay"
  ],
  "Basketball": [
    "bong ro",
    "slam dunk"
  ],
  "Battle Royale": [
    "dau truong sinh tu",
    "battle royale",
    "song con"
  ],
  "Biographical": [
    "tieu su"
  ],
  "Bisexual": [
    "bisexual"
  ],
  "Blackmail": [
    "blackmail"
  ],
  "Board Game": [
    "co ban",
    "board game"
  ],
  "Boarding School": [
    "truong noi tru"
  ],
  "Body Horror": [
    "bien dang co the",
    "body horror"
  ],
  "Body Image": [
    "body image"
  ],
  "Body Swapping": [
    "hoan doi than xac",
    "doi xac"
  ],
  "Bowling": [
    "bowling"
  ],
  "Boxing": [
    "quyen anh",
    "dam boc",
    "boxing"
  ],
  "Boys' Love": [
    "dam my",
    "bl",
    "boys love",
    "danmei",
    "nam x nam",
    "dong tinh nam"
  ],
  "Brainwashing": [
    "tay nao",
    "thao tung tam ly"
  ],
  "Bullying": [
    "bao luc hoc duong",
    "bat nat"
  ],
  "Butler": [
    "quan gia",
    "butler"
  ],
  "Calligraphy": [
    "calligraphy"
  ],
  "Camping": [
    "camping"
  ],
  "Cannibalism": [
    "cannibalism"
  ],
  "Card Battle": [
    "dau the bai",
    "the bai",
    "yugioh"
  ],
  "Cars": [
    "dua xe",
    "o to",
    "initial d"
  ],
  "Centaur": [
    "centaur"
  ],
  "Cheating": [
    "ngoai tinh",
    "phan boi"
  ],
  "Cheerleading": [
    "cheerleading"
  ],
  "Chibi": [
    "chibi"
  ],
  "Chimera": [
    "chimera"
  ],
  "Chuunibyou": [
    "ao tuong",
    "chuunibyou"
  ],
  "Circus": [
    "circus"
  ],
  "Class Struggle": [
    "dau tranh giai cap",
    "quy toc"
  ],
  "Classic Literature": [
    "classic literature"
  ],
  "Classical Music": [
    "classical music"
  ],
  "Clone": [
    "clone"
  ],
  "Coastal": [
    "coastal"
  ],
  "Cohabitation": [
    "song chung",
    "o chung nha"
  ],
  "College": [
    "dai hoc",
    "sinh vien"
  ],
  "Coming of Age": [
    "truong thanh",
    "buoc vao doi"
  ],
  "Conspiracy": [
    "am muu",
    "thuyet am muu"
  ],
  "Cosmic Horror": [
    "cthulhu",
    "kinh di vu tru"
  ],
  "Cosplay": [
    "cosplay",
    "hoa trang"
  ],
  "Cowboys": [
    "cao boi",
    "western"
  ],
  "Crafts": [
    "crafts"
  ],
  "Creature Taming": [
    "thuan thu",
    "huan luyen thu",
    "pokemon"
  ],
  "Crime": [
    "crime"
  ],
  "Criminal Organization": [
    "to chuc toi pham",
    "bang dang"
  ],
  "Crossdressing": [
    "gia gai",
    "gia trai"
  ],
  "Crossover": [
    "crossover"
  ],
  "Cult": [
    "ta giao",
    "giao phai"
  ],
  "Cultivation": [
    "tu tien",
    "tu chan",
    "dao gia",
    "phi thang",
    "tien hiep",
    "dan ton",
    "chan nhan",
    "tien ton",
    "kiem tien",
    "luyen khi",
    "kim dan",
    "nguyen anh"
  ],
  "Curses": [
    "loi nguyen",
    "tru em"
  ],
  "Cute Boys Doing Cute Things": [
    "trai dep",
    "cute boys"
  ],
  "Cute Girls Doing Cute Things": [
    "gai xinh",
    "cgdct",
    "moe"
  ],
  "Cyberpunk": [
    "cong nghe cao",
    "cyberpunk"
  ],
  "Cyborg": [
    "cyborg",
    "nua nguoi nua may"
  ],
  "Cycling": [
    "xe dap",
    "dua xe dap"
  ],
  "Dancing": [
    "nhay mua",
    "khieu vu"
  ],
  "Death Game": [
    "tro choi sinh tu",
    "death game"
  ],
  "Delinquents": [
    "bat luong",
    "dau gau",
    "gangster"
  ],
  "Demons": [
    "yeu ma",
    "ma toc",
    "quy",
    "ac ma"
  ],
  "Denpa": [
    "denpa"
  ],
  "Desert": [
    "desert"
  ],
  "Detective": [
    "tham tu",
    "pha an",
    "conan"
  ],
  "Dinosaurs": [
    "dinosaurs"
  ],
  "Disability": [
    "disability"
  ],
  "Dissociative Identities": [
    "dissociative identities"
  ],
  "Dragons": [
    "long toc",
    "rong",
    "dragon"
  ],
  "Drawing": [
    "hoi hoa",
    "ve tranh",
    "hoa si"
  ],
  "Drugs": [
    "chat cam",
    "ma tuy"
  ],
  "Dullahan": [
    "dullahan"
  ],
  "Dungeon": [
    "ham nguc",
    "pho ban",
    "thap",
    "tower",
    "boss",
    "gate"
  ],
  "Dystopian": [
    "phan dia dang",
    "dystopia"
  ],
  "E-Sports": [
    "esports",
    "dau giai game",
    "tuyen thu"
  ],
  "Eco-Horror": [
    "eco-horror"
  ],
  "Economics": [
    "kinh te",
    "kinh doanh",
    "lam giau",
    "kiem tien"
  ],
  "Educational": [
    "educational"
  ],
  "Elderly Protagonist": [
    "nhan vat chinh gia",
    "cu gia"
  ],
  "Elf": [
    "toc elf",
    "yeu tinh"
  ],
  "Ensemble Cast": [
    "nhieu goc nhin",
    "tap the"
  ],
  "Environmental": [
    "moi truong",
    "thien nhien"
  ],
  "Episodic": [
    "tung mau chuyen"
  ],
  "Ero Guro": [
    "ero guro"
  ],
  "Espionage": [
    "diep vien",
    "gian diep"
  ],
  "Estranged Family": [
    "estranged family"
  ],
  "Exiled": [
    "exiled"
  ],
  "Exorcism": [
    "tru ta",
    "tru ma",
    "phong an"
  ],
  "Fairy": [
    "tien nu"
  ],
  "Fairy Tale": [
    "co tich",
    "than tien"
  ],
  "Fake Relationship": [
    "hop dong tinh yeu",
    "nguoi yeu gia"
  ],
  "Family Life": [
    "gia dinh",
    "nuoi con",
    "cha con",
    "me con"
  ],
  "Fashion": [
    "fashion"
  ],
  "Female Harem": [
    "harem",
    "nhieu nu",
    "hau cung",
    "da the",
    "nhieu vo"
  ],
  "Female Protagonist": [
    "nu chinh",
    "nu chu"
  ],
  "Femboy": [
    "femboy",
    "de thuong"
  ],
  "Fencing": [
    "fencing"
  ],
  "Filmmaking": [
    "filmmaking"
  ],
  "Firefighters": [
    "linh cuu hoa",
    "fire force"
  ],
  "Fishing": [
    "cau ca",
    "di cau"
  ],
  "Fitness": [
    "tap gym",
    "the hinh"
  ],
  "Food": [
    "mon ngon",
    "an uong"
  ],
  "Football": [
    "bong da",
    "cau thu",
    "sut bong"
  ],
  "Foreign": [
    "foreign"
  ],
  "Found Family": [
    "gia dinh khong huyet thong"
  ],
  "Fugitive": [
    "dao tau",
    "truy na",
    "chay tron"
  ],
  "Full Color": [
    "truyen mau",
    "full color",
    "manhwa mau",
    "manhua mau"
  ],
  "Gambling": [
    "co bac",
    "do den",
    "danh bac"
  ],
  "Gangs": [
    "bang nhom",
    "giang ho"
  ],
  "Gekiga": [
    "gekiga"
  ],
  "Gender Bending": [
    "chuyen doi gioi tinh",
    "bien nam thanh nu",
    "bien nu thanh nam"
  ],
  "Ghost": [
    "hon ma",
    "linh hon",
    "bong ma"
  ],
  "Go": [
    "co vay",
    "hikaru no go"
  ],
  "Goblin": [
    "goblin"
  ],
  "Gods": [
    "than thanh",
    "tien nhan",
    "than thoai",
    "vi than"
  ],
  "Golf": [
    "golf"
  ],
  "Gore": [
    "mau me",
    "tan khoc",
    "kinh di mau"
  ],
  "Guns": [
    "sung dan",
    "ban sung",
    "xa thu"
  ],
  "Gyaru": [
    "gyaru",
    "ca tinh"
  ],
  "Handball": [
    "handball"
  ],
  "Henshin": [
    "bien than",
    "henshin",
    "sieu nhan"
  ],
  "Heterosexual": [
    "nam nu",
    "ngon tinh"
  ],
  "Hikikomori": [
    "o nha",
    "khong ra ngoai",
    "hikikomori"
  ],
  "Hip-hop Music": [
    "hip-hop music"
  ],
  "Historical": [
    "lich su",
    "co dai",
    "trieu dinh",
    "hoang gia"
  ],
  "Homeless": [
    "homeless"
  ],
  "Horticulture": [
    "horticulture"
  ],
  "Human Experimentation": [
    "thi nghiem nguoi"
  ],
  "Ice Sports": [
    "ice sports"
  ],
  "Idol": [
    "than tuong",
    "idol",
    "ca si"
  ],
  "Incest": [
    "incest"
  ],
  "Indigenous Cultures": [
    "indigenous cultures"
  ],
  "Inn": [
    "inn"
  ],
  "Inseki": [
    "ho hang",
    "con rieng"
  ],
  "Interspecies": [
    "di toc",
    "khac loai"
  ],
  "Isekai": [
    "chuyen sinh",
    "xuyen khong",
    "di gioi",
    "the gioi khac",
    "tai sinh di gioi"
  ],
  "Iyashikei": [
    "chua lanh",
    "thu gian",
    "binh yen",
    "iyashikei"
  ],
  "Jazz Music": [
    "jazz music"
  ],
  "Josei": [
    "phu nu",
    "quy co",
    "josei"
  ],
  "Judo": [
    "judo",
    "nhu dao"
  ],
  "Kabuki": [
    "kabuki"
  ],
  "Kaiju": [
    "quai vat khong lo",
    "kaiju",
    "godzilla"
  ],
  "Karuta": [
    "karuta",
    "chihayafuru"
  ],
  "Kemonomimi": [
    "tai thu",
    "duoi thu",
    "kemonomimi"
  ],
  "Kids": [
    "tre em",
    "thieu nhi"
  ],
  "Kingdom Management": [
    "xay dung vuong quoc",
    "lanh dia",
    "lanh chua"
  ],
  "Konbini": [
    "konbini"
  ],
  "Kuudere": [
    "kuudere",
    "lanh lung"
  ],
  "Lacrosse": [
    "lacrosse"
  ],
  "Language Barrier": [
    "language barrier"
  ],
  "LGBTQ+ Themes": [
    "lgbt",
    "lgbtq"
  ],
  "Long Strip": [
    "cuon doc",
    "webtoon",
    "long strip"
  ],
  "Lost Civilization": [
    "lost civilization"
  ],
  "Love Triangle": [
    "tinh tay ba",
    "tam giac tinh yeu"
  ],
  "Mafia": [
    "mafia",
    "xa hoi den"
  ],
  "Magic": [
    "ma phap",
    "phep thuat",
    "phap su",
    "ma thuat",
    "phu thuy"
  ],
  "Mahjong": [
    "mat chuoc",
    "saki"
  ],
  "Maids": [
    "hau gai",
    "maid"
  ],
  "Makeup": [
    "makeup"
  ],
  "Male Harem": [
    "harem nam",
    "nhieu nam",
    "reverse harem"
  ],
  "Male Protagonist": [
    "nam chinh",
    "nam chu"
  ],
  "Manzai": [
    "manzai"
  ],
  "Marriage": [
    "marriage"
  ],
  "Martial Arts": [
    "vo thuat",
    "dau khi",
    "vo hiep",
    "kiem hiep",
    "quyen cuoc",
    "chan khi",
    "kungfu"
  ],
  "Matchmaking": [
    "mai moi",
    "xem mat"
  ],
  "Matriarchy": [
    "matriarchy"
  ],
  "Medicine": [
    "y hoc",
    "bac si",
    "chua benh"
  ],
  "Medieval": [
    "trung co",
    "hiep si"
  ],
  "Memory Manipulation": [
    "sua ky uc",
    "thao tung ky uc"
  ],
  "Mermaid": [
    "nguoi ca",
    "my nhan ngu"
  ],
  "Meta": [
    "meta"
  ],
  "Metal Music": [
    "metal music"
  ],
  "Middle East": [
    "trung dong",
    "magi"
  ],
  "Military": [
    "quan su",
    "chien tranh",
    "quan doi",
    "vu khi"
  ],
  "Mixed Gender Harem": [
    "harem hon hop"
  ],
  "Modeling": [
    "modeling"
  ],
  "Monster Boy": [
    "quai vat nam",
    "monster boy"
  ],
  "Monster Girl": [
    "quai vat nu",
    "monster girl"
  ],
  "Mopeds": [
    "mopeds"
  ],
  "Motorcycles": [
    "dua xe may",
    "mo to"
  ],
  "Mountaineering": [
    "leo nui"
  ],
  "Musical Theater": [
    "musical theater"
  ],
  "Mythology": [
    "than thoai",
    "huyen thoai"
  ],
  "Natural Disaster": [
    "natural disaster"
  ],
  "Necromancy": [
    "chieu hon",
    "tu linh",
    "xac song",
    "goi hon"
  ],
  "Nekomimi": [
    "tai meo",
    "nekomimi"
  ],
  "Ninja": [
    "ninja",
    "nhan gia",
    "naruto"
  ],
  "No Dialogue": [
    "no dialogue"
  ],
  "Noir": [
    "noir"
  ],
  "Non-fiction": [
    "phi hu cau",
    "co that"
  ],
  "Nudity": [
    "nudity"
  ],
  "Nun": [
    "nun"
  ],
  "Office": [
    "office"
  ],
  "Office Lady": [
    "nu van phong",
    "ol"
  ],
  "Oiran": [
    "oiran"
  ],
  "Ojou-sama": [
    "tieu thu",
    "nha giau"
  ],
  "Orphan": [
    "orphan"
  ],
  "Otaku Culture": [
    "otaku",
    "wibu",
    "anime manga"
  ],
  "Outdoor Activities": [
    "outdoor activities"
  ],
  "Pandemic": [
    "dai dich",
    "dich benh"
  ],
  "Parenthood": [
    "lam cha me",
    "nuoi em be"
  ],
  "Parkour": [
    "parkour"
  ],
  "Parody": [
    "nhai lai",
    "parody",
    "gintama"
  ],
  "Philosophy": [
    "triet hoc",
    "chieu sau"
  ],
  "Photography": [
    "photography"
  ],
  "Pirates": [
    "hai tac",
    "cuop bien",
    "one piece"
  ],
  "Poker": [
    "poker",
    "bai tay"
  ],
  "Police": [
    "canh sat",
    "hinh su",
    "cong an"
  ],
  "Politics": [
    "chinh tri",
    "quyen muu",
    "dau da"
  ],
  "Polyamorous": [
    "da ai"
  ],
  "Post-Apocalyptic": [
    "hau tan the",
    "tan the",
    "ngay tan the"
  ],
  "POV": [
    "pov"
  ],
  "Poverty": [
    "poverty"
  ],
  "Pregnancy": [
    "pregnancy"
  ],
  "Primarily Adult Cast": [
    "nguoi lon"
  ],
  "Primarily Animal Cast": [
    "primarily animal cast"
  ],
  "Primarily Child Cast": [
    "primarily child cast"
  ],
  "Primarily Female Cast": [
    "toan nu"
  ],
  "Primarily Male Cast": [
    "toan nam"
  ],
  "Primarily Teen Cast": [
    "primarily teen cast"
  ],
  "Prison": [
    "prison"
  ],
  "Prophecy": [
    "prophecy"
  ],
  "Proxy Battle": [
    "proxy battle"
  ],
  "Psychosexual": [
    "psychosexual"
  ],
  "Rakugo": [
    "rakugo"
  ],
  "Real Robot": [
    "robot thuc te",
    "gundam"
  ],
  "Rehabilitation": [
    "rehabilitation"
  ],
  "Reincarnation": [
    "trong sinh",
    "tai sinh",
    "song lai",
    "hoi quy",
    "tro ve qua khu"
  ],
  "Religion": [
    "religion"
  ],
  "Rescue": [
    "rescue"
  ],
  "Restaurant": [
    "restaurant"
  ],
  "Revenge": [
    "bao thu",
    "tra thu",
    "phuc thu"
  ],
  "Reverse Isekai": [
    "xuyen ve hien dai",
    "reverse isekai"
  ],
  "Robots": [
    "robot",
    "nguoi may"
  ],
  "Rock Music": [
    "rock music"
  ],
  "Royal Affairs": [
    "royal affairs"
  ],
  "Rugby": [
    "rugby"
  ],
  "Rural": [
    "rural"
  ],
  "Samurai": [
    "samurai",
    "vo si dao"
  ],
  "Satire": [
    "satire"
  ],
  "School": [
    "hoc duong",
    "truong hoc",
    "hoc sinh",
    "lop hoc"
  ],
  "School Club": [
    "cau lac bo",
    "clb"
  ],
  "Scuba Diving": [
    "scuba diving"
  ],
  "Seinen": [
    "thanh nien",
    "truong thanh",
    "seinen"
  ],
  "Shapeshifting": [
    "bien hinh",
    "hoa hinh"
  ],
  "Ships": [
    "tau thuy",
    "hai quan"
  ],
  "Shogi": [
    "co shogi"
  ],
  "Short-Form Chapter": [
    "chuong ngan"
  ],
  "Shoujo": [
    "thieu nu",
    "shoujo",
    "nu tinh"
  ],
  "Shounen": [
    "thieu nien",
    "nam",
    "shonen"
  ],
  "Shrine Maiden": [
    "miko",
    "vu nu"
  ],
  "Skateboarding": [
    "skateboarding"
  ],
  "Skeleton": [
    "bo xuong",
    "cot toc"
  ],
  "Slapstick": [
    "slapstick"
  ],
  "Slavery": [
    "no le",
    "giai phong"
  ],
  "Snowscape": [
    "snowscape"
  ],
  "Software Development": [
    "software development"
  ],
  "Space": [
    "vu tru",
    "khong gian",
    "hanh tinh"
  ],
  "Space Opera": [
    "chien tranh vu tru",
    "ham doi vu tru"
  ],
  "Spearplay": [
    "thuong thuat",
    "giao thuat"
  ],
  "Steampunk": [
    "hoi nuoc",
    "steampunk"
  ],
  "Succubus": [
    "nu quy",
    "succubus"
  ],
  "Suicide": [
    "suicide"
  ],
  "Sumo": [
    "sumo"
  ],
  "Super Power": [
    "sieu nang luc",
    "nang luc dac biet"
  ],
  "Super Robot": [
    "sieu robot",
    "gurren lagann"
  ],
  "Superhero": [
    "sieu anh hung",
    "hero"
  ],
  "Surfing": [
    "surfing"
  ],
  "Surreal Comedy": [
    "surreal comedy"
  ],
  "Survival": [
    "sinh ton",
    "song con",
    "hoang dao"
  ],
  "Swimming": [
    "boi loi",
    "duoi nuoc"
  ],
  "Swordplay": [
    "kiem thuat",
    "kiem dao",
    "dung kiem",
    "kiem si"
  ],
  "Table Tennis": [
    "table tennis"
  ],
  "Tanks": [
    "xe tang",
    "girls und panzer"
  ],
  "Tanned Skin": [
    "tanned skin"
  ],
  "Teacher": [
    "teacher"
  ],
  "Teens' Love": [
    "teens love",
    "tinh yeu tuoi tre"
  ],
  "Tennis": [
    "quan vot",
    "tennis"
  ],
  "Terrorism": [
    "terrorism"
  ],
  "Time Loop": [
    "vong lap thoi gian",
    "time loop"
  ],
  "Time Manipulation": [
    "thao tung thoi gian",
    "ngung dong thoi gian"
  ],
  "Time Skip": [
    "time skip",
    "nhay coc thoi gian"
  ],
  "Tokusatsu": [
    "tokusatsu",
    "kamen rider"
  ],
  "Tomboy": [
    "tomboy",
    "ca tinh"
  ],
  "Torture": [
    "torture"
  ],
  "Tragedy": [
    "bi kich",
    "nuoc mat",
    "dau thuong"
  ],
  "Trains": [
    "tau hoa",
    "duong sat"
  ],
  "Transgender": [
    "transgender"
  ],
  "Travel": [
    "travel"
  ],
  "Triads": [
    "tam hoang",
    "xa hoi den hong kong"
  ],
  "Tsundere": [
    "tsundere",
    "ngoai lanh trong nong"
  ],
  "Twins": [
    "twins"
  ],
  "Unrequited Love": [
    "yeu don phuong",
    "mot chieu"
  ],
  "Urban": [
    "urban"
  ],
  "Urban Fantasy": [
    "ky ao do thi",
    "tu tien do thi",
    "hien dai"
  ],
  "Vampire": [
    "ma ca rong",
    "huyet toc",
    "vampire",
    "hut mau"
  ],
  "Veterinarian": [
    "bac si thu y"
  ],
  "Video Games": [
    "he thong",
    "game thu",
    "tro choi",
    "level",
    "thang cap",
    "rpg"
  ],
  "Vikings": [
    "viking",
    "vinland saga"
  ],
  "Villainess": [
    "nu phu",
    "phan dien",
    "ac nu",
    "nhan vat phan dien"
  ],
  "Virtual World": [
    "the gioi ao",
    "vr",
    "game online",
    "thuc te ao"
  ],
  "Vocal Synth": [
    "vocal synth"
  ],
  "Volleyball": [
    "bong chuyen",
    "haikyuu"
  ],
  "VTuber": [
    "vtuber",
    "livestream"
  ],
  "War": [
    "chien tranh",
    "xung dot"
  ],
  "Werewolf": [
    "nguoi soi",
    "lang toc",
    "werewolf"
  ],
  "Wilderness": [
    "wilderness"
  ],
  "Witch": [
    "phu thuy",
    "vu nu",
    "witch"
  ],
  "Work": [
    "cong so",
    "lam viec",
    "nghe nghiep"
  ],
  "Wrestling": [
    "wrestling"
  ],
  "Writing": [
    "viet van",
    "tac gia",
    "tieu thuyet"
  ],
  "Wuxia": [
    "vo hiep",
    "giang ho",
    "kiem hiep",
    "co phong",
    "kiem khach"
  ],
  "Yakuza": [
    "yakuza",
    "giang ho nhat"
  ],
  "Yandere": [
    "yandere",
    "yeu cuong dien",
    "chiem huu"
  ],
  "Youkai": [
    "yeu quai",
    "youkai"
  ],
  "Yuri": [
    "bach hop",
    "yuri",
    "girls love",
    "gl",
    "nu x nu",
    "dong tinh nu"
  ],
  "Zombie": [
    "xac song",
    "zombie",
    "tang thi"
  ]
};

export const ALL_GENRES_AND_TAGS = [
  {
    "id": "Action",
    "name": "Action (Hành động)",
    "type": "genre",
    "icon": "⚔️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "hanh dong",
      "danh nhau",
      "chien dau"
    ]
  },
  {
    "id": "Adventure",
    "name": "Adventure (Phiêu lưu)",
    "type": "genre",
    "icon": "🧭",
    "category": "POPULAR",
    "keywords": [
      "phieu luu",
      "kham pha",
      "hanh trinh"
    ]
  },
  {
    "id": "Comedy",
    "name": "Comedy (Hài hước / Bựa)",
    "type": "genre",
    "icon": "🤣",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "hai huoc",
      "hai bua",
      "vui nhon",
      "cuoi"
    ]
  },
  {
    "id": "Drama",
    "name": "Drama (Kịch tính / Xúc động)",
    "type": "genre",
    "icon": "🎭",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "kich tinh",
      "tam ly",
      "xuc dong"
    ]
  },
  {
    "id": "Ecchi",
    "name": "Ecchi (Gợi cảm / 16+)",
    "type": "genre",
    "icon": "🔞",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "goi cam",
      "ecchi",
      "nong bong",
      "16+"
    ]
  },
  {
    "id": "Fantasy",
    "name": "Fantasy (Kỳ ảo / Huyền huyễn)",
    "type": "genre",
    "icon": "🔮",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "ky ao",
      "huyen ao",
      "ma ao",
      "huyen huyen"
    ]
  },
  {
    "id": "Hentai",
    "name": "Hentai (18+ Người lớn)",
    "type": "genre",
    "icon": "🔞",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "18+",
      "nguoi lon"
    ]
  },
  {
    "id": "Horror",
    "name": "Horror (Kinh dị / Rùng rợn)",
    "type": "genre",
    "icon": "🩸",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "kinh di",
      "ma",
      "rung ron",
      "am anh"
    ]
  },
  {
    "id": "Mahou Shoujo",
    "name": "Mahou Shoujo (Thiếu nữ ma pháp)",
    "type": "genre",
    "icon": "🪄",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "ma phap thieu nu",
      "mahou shoujo"
    ]
  },
  {
    "id": "Mecha",
    "name": "Mecha (Người máy / Robot)",
    "type": "genre",
    "icon": "🤖",
    "category": "SCIFI_GAME",
    "keywords": [
      "nguoi may",
      "robot",
      "co giap",
      "gundam"
    ]
  },
  {
    "id": "Music",
    "name": "Music (Âm nhạc / Thần tượng)",
    "type": "genre",
    "icon": "🎵",
    "category": "SPORTS_ARTS",
    "keywords": [
      "am nhac",
      "ca hat",
      "nhac"
    ]
  },
  {
    "id": "Mystery",
    "name": "Mystery (Bí ẩn / Trinh thám)",
    "type": "genre",
    "icon": "🕵️",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "bi an",
      "pha an",
      "trinh tham",
      "dieu tra"
    ]
  },
  {
    "id": "Psychological",
    "name": "Psychological (Tâm lý / Đấu trí)",
    "type": "genre",
    "icon": "🧠",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "tam ly",
      "xoan nao",
      "dau tri"
    ]
  },
  {
    "id": "Romance",
    "name": "Romance (Tình cảm / Lãng mạn)",
    "type": "genre",
    "icon": "❤️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tinh cam",
      "lang man",
      "ngon tinh",
      "yeu duong"
    ]
  },
  {
    "id": "Sci-Fi",
    "name": "Sci-Fi (Khoa học viễn tưởng)",
    "type": "genre",
    "icon": "🚀",
    "category": "SCIFI_GAME",
    "keywords": [
      "khoa hoc",
      "vien tuong",
      "tuong lai"
    ]
  },
  {
    "id": "Slice of Life",
    "name": "Slice of Life (Đời thường / Bình yên)",
    "type": "genre",
    "icon": "☕",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "doi thuong",
      "hang ngay",
      "binh yen",
      "nhe nhang"
    ]
  },
  {
    "id": "Sports",
    "name": "Sports (Thể thao / Vận động)",
    "type": "genre",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "the thao",
      "bong da",
      "bong ro",
      "the luc"
    ]
  },
  {
    "id": "Supernatural",
    "name": "Supernatural (Siêu nhiên / Thần bí)",
    "type": "genre",
    "icon": "👻",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "sieu nhien",
      "huyen bi",
      "tam linh"
    ]
  },
  {
    "id": "Thriller",
    "name": "Thriller (Hồi hộp / Giật gân)",
    "type": "genre",
    "icon": "😱",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "giat gan",
      "hoi hop",
      "nghet tho"
    ]
  },
  {
    "id": "4-koma",
    "name": "4-koma (Truyện tranh 4 khung hài)",
    "type": "tag",
    "icon": "📰",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "4 khung",
      "4-koma",
      "yonkoma"
    ]
  },
  {
    "id": "Achromatic",
    "name": "Achromatic",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "achromatic"
    ]
  },
  {
    "id": "Achronological Order",
    "name": "Achronological Order",
    "type": "tag",
    "icon": "🏷️",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "achronological order"
    ]
  },
  {
    "id": "Acrobatics",
    "name": "Acrobatics (Xiếc / Nhào lộn)",
    "type": "tag",
    "icon": "🤸",
    "category": "SPORTS_ARTS",
    "keywords": [
      "nhao lon",
      "xiec"
    ]
  },
  {
    "id": "Acting",
    "name": "Acting (Diễn xuất / Diễn viên)",
    "type": "tag",
    "icon": "🎬",
    "category": "SPORTS_ARTS",
    "keywords": [
      "dien xuat",
      "dien vien"
    ]
  },
  {
    "id": "Adoption",
    "name": "Adoption (Nhận nuôi / Con nuôi)",
    "type": "tag",
    "icon": "🤝",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "con nuoi",
      "nhan nuoi"
    ]
  },
  {
    "id": "Afterlife",
    "name": "Afterlife",
    "type": "tag",
    "icon": "🌌",
    "category": "SCIFI_GAME",
    "keywords": [
      "afterlife"
    ]
  },
  {
    "id": "Age Gap",
    "name": "Age Gap (Chênh lệch tuổi tác)",
    "type": "tag",
    "icon": "⏳",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "chenh lech tuoi",
      "tinh chi em",
      "chu chau"
    ]
  },
  {
    "id": "Age Regression",
    "name": "Age Regression",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "age regression"
    ]
  },
  {
    "id": "Agender",
    "name": "Agender",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "agender"
    ]
  },
  {
    "id": "Agriculture",
    "name": "Agriculture (Nông nghiệp / Làm ruộng)",
    "type": "tag",
    "icon": "🌾",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "nong nghiep",
      "lam ruong",
      "trong trot"
    ]
  },
  {
    "id": "Airsoft",
    "name": "Airsoft",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "airsoft"
    ]
  },
  {
    "id": "Alchemy",
    "name": "Alchemy (Giả kim thuật / Luyện đan)",
    "type": "tag",
    "icon": "🧪",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "gia kim",
      "luyen dan",
      "dan duoc",
      "thuoc"
    ]
  },
  {
    "id": "Aliens",
    "name": "Aliens (Người ngoài hành tinh)",
    "type": "tag",
    "icon": "👽",
    "category": "SCIFI_GAME",
    "keywords": [
      "nguoi ngoai hanh tinh",
      "alien"
    ]
  },
  {
    "id": "Alternate Universe",
    "name": "Alternate Universe (Vũ trụ song song)",
    "type": "tag",
    "icon": "🌌",
    "category": "SCIFI_GAME",
    "keywords": [
      "vu tru song song",
      "da vu tru"
    ]
  },
  {
    "id": "American Football",
    "name": "American Football",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "american football"
    ]
  },
  {
    "id": "Amnesia",
    "name": "Amnesia (Mất trí nhớ)",
    "type": "tag",
    "icon": "❓",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "mat tri nho",
      "quen qua khu"
    ]
  },
  {
    "id": "Anachronism",
    "name": "Anachronism",
    "type": "tag",
    "icon": "🏷️",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "anachronism"
    ]
  },
  {
    "id": "Ancient China",
    "name": "Ancient China (Cổ đại Trung Hoa)",
    "type": "tag",
    "icon": "🏯",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "trung hoa co dai",
      "trieu dinh"
    ]
  },
  {
    "id": "Angels",
    "name": "Angels (Thiên thần / Thiên tộc)",
    "type": "tag",
    "icon": "🪽",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "thien than",
      "thien toc"
    ]
  },
  {
    "id": "Animals",
    "name": "Animals (Động vật / Thú cưng)",
    "type": "tag",
    "icon": "🐱",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "dong vat",
      "thu cung",
      "cho meo"
    ]
  },
  {
    "id": "Anthology",
    "name": "Anthology (Tuyển tập truyện ngắn)",
    "type": "tag",
    "icon": "📚",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tuyen tap",
      "truyen ngan"
    ]
  },
  {
    "id": "Anthropomorphism",
    "name": "Anthropomorphism",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "anthropomorphism"
    ]
  },
  {
    "id": "Anti-Hero",
    "name": "Anti-Hero (Phản anh hùng / Tà đạo)",
    "type": "tag",
    "icon": "🦇",
    "category": "ACTION_COMBAT",
    "keywords": [
      "phan anh hung",
      "chinh ta",
      "ta dao"
    ]
  },
  {
    "id": "Archery",
    "name": "Archery (Cung thuật / Bắn cung)",
    "type": "tag",
    "icon": "🏹",
    "category": "ACTION_COMBAT",
    "keywords": [
      "cung thuat",
      "ban cung",
      "cung thu"
    ]
  },
  {
    "id": "Aromantic",
    "name": "Aromantic",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "aromantic"
    ]
  },
  {
    "id": "Arranged Marriage",
    "name": "Arranged Marriage (Hôn nhân sắp đặt)",
    "type": "tag",
    "icon": "💍",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "hon nhan sap dat",
      "cuoi truoc yeu sau"
    ]
  },
  {
    "id": "Artificial Intelligence",
    "name": "AI (Trí tuệ nhân tạo)",
    "type": "tag",
    "icon": "💻",
    "category": "SCIFI_GAME",
    "keywords": [
      "tri tue nhan tao",
      "ai"
    ]
  },
  {
    "id": "Asexual",
    "name": "Asexual",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "asexual"
    ]
  },
  {
    "id": "Assassins",
    "name": "Assassins (Sát thủ / Ám sát)",
    "type": "tag",
    "icon": "🗡️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "sat thu",
      "am sat"
    ]
  },
  {
    "id": "Astronomy",
    "name": "Astronomy (Thiên văn học / Ngắm sao)",
    "type": "tag",
    "icon": "🔭",
    "category": "SCIFI_GAME",
    "keywords": [
      "thien van",
      "ngam sao"
    ]
  },
  {
    "id": "Athletics",
    "name": "Athletics",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "athletics"
    ]
  },
  {
    "id": "Augmented Reality",
    "name": "Augmented Reality (Thực tế tăng cường)",
    "type": "tag",
    "icon": "🕶️",
    "category": "SCIFI_GAME",
    "keywords": [
      "thuc te tang cuong",
      "ar"
    ]
  },
  {
    "id": "Autobiographical",
    "name": "Autobiographical (Tự truyện)",
    "type": "tag",
    "icon": "📔",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tu truyen"
    ]
  },
  {
    "id": "Aviation",
    "name": "Aviation (Máy bay / Hàng không)",
    "type": "tag",
    "icon": "✈️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "may bay",
      "phi cong"
    ]
  },
  {
    "id": "Badminton",
    "name": "Badminton (Cầu lông)",
    "type": "tag",
    "icon": "🏸",
    "category": "SPORTS_ARTS",
    "keywords": [
      "cau long"
    ]
  },
  {
    "id": "Ballet",
    "name": "Ballet (Múa Ba lê)",
    "type": "tag",
    "icon": "🩰",
    "category": "SPORTS_ARTS",
    "keywords": [
      "ba le",
      "ballet"
    ]
  },
  {
    "id": "Band",
    "name": "Band (Ban nhạc / Rock)",
    "type": "tag",
    "icon": "🎸",
    "category": "SPORTS_ARTS",
    "keywords": [
      "ban nhac",
      "rock"
    ]
  },
  {
    "id": "Bar",
    "name": "Bar",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "bar"
    ]
  },
  {
    "id": "Baseball",
    "name": "Baseball (Bóng chày)",
    "type": "tag",
    "icon": "⚾",
    "category": "SPORTS_ARTS",
    "keywords": [
      "bong chay"
    ]
  },
  {
    "id": "Basketball",
    "name": "Basketball (Bóng rổ)",
    "type": "tag",
    "icon": "🏀",
    "category": "SPORTS_ARTS",
    "keywords": [
      "bong ro",
      "slam dunk"
    ]
  },
  {
    "id": "Battle Royale",
    "name": "Battle Royale (Đấu trường sinh tử)",
    "type": "tag",
    "icon": "💥",
    "category": "ACTION_COMBAT",
    "keywords": [
      "dau truong sinh tu",
      "battle royale",
      "song con"
    ]
  },
  {
    "id": "Biographical",
    "name": "Biographical (Tiểu sử nhân vật)",
    "type": "tag",
    "icon": "📖",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tieu su"
    ]
  },
  {
    "id": "Bisexual",
    "name": "Bisexual",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "bisexual"
    ]
  },
  {
    "id": "Blackmail",
    "name": "Blackmail",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "blackmail"
    ]
  },
  {
    "id": "Board Game",
    "name": "Board Game (Cờ bàn / Trò chơi trí tuệ)",
    "type": "tag",
    "icon": "🎲",
    "category": "SCIFI_GAME",
    "keywords": [
      "co ban",
      "board game"
    ]
  },
  {
    "id": "Boarding School",
    "name": "Boarding School (Trường nội trú)",
    "type": "tag",
    "icon": "🏰",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "truong noi tru"
    ]
  },
  {
    "id": "Body Horror",
    "name": "Body Horror (Kinh dị biến dạng cơ thể)",
    "type": "tag",
    "icon": "🧟",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "bien dang co the",
      "body horror"
    ]
  },
  {
    "id": "Body Image",
    "name": "Body Image",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "body image"
    ]
  },
  {
    "id": "Body Swapping",
    "name": "Body Swapping (Hoán đổi thân xác)",
    "type": "tag",
    "icon": "🔄",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "hoan doi than xac",
      "doi xac"
    ]
  },
  {
    "id": "Bowling",
    "name": "Bowling",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "bowling"
    ]
  },
  {
    "id": "Boxing",
    "name": "Boxing (Quyền anh / Đấm bốc)",
    "type": "tag",
    "icon": "🥊",
    "category": "SPORTS_ARTS",
    "keywords": [
      "quyen anh",
      "dam boc",
      "boxing"
    ]
  },
  {
    "id": "Boys' Love",
    "name": "Boys' Love (BL / Đam mỹ)",
    "type": "tag",
    "icon": "👬",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "dam my",
      "bl",
      "boys love",
      "danmei",
      "nam x nam",
      "dong tinh nam"
    ]
  },
  {
    "id": "Brainwashing",
    "name": "Brainwashing (Tẩy não / Thao túng tâm lý)",
    "type": "tag",
    "icon": "🌀",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "tay nao",
      "thao tung tam ly"
    ]
  },
  {
    "id": "Bullying",
    "name": "Bullying (Bạo lực học đường)",
    "type": "tag",
    "icon": "💥",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "bao luc hoc duong",
      "bat nat"
    ]
  },
  {
    "id": "Butler",
    "name": "Butler (Quản gia)",
    "type": "tag",
    "icon": "🤵",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "quan gia",
      "butler"
    ]
  },
  {
    "id": "Calligraphy",
    "name": "Calligraphy",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "calligraphy"
    ]
  },
  {
    "id": "Camping",
    "name": "Camping",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "camping"
    ]
  },
  {
    "id": "Cannibalism",
    "name": "Cannibalism",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "cannibalism"
    ]
  },
  {
    "id": "Card Battle",
    "name": "Card Battle (Đấu thẻ bài)",
    "type": "tag",
    "icon": "🃏",
    "category": "SCIFI_GAME",
    "keywords": [
      "dau the bai",
      "the bai",
      "yugioh"
    ]
  },
  {
    "id": "Cars",
    "name": "Cars (Đua xe ô tô / Xe hơi)",
    "type": "tag",
    "icon": "🏎️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "dua xe",
      "o to",
      "initial d"
    ]
  },
  {
    "id": "Centaur",
    "name": "Centaur",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "centaur"
    ]
  },
  {
    "id": "Cheating",
    "name": "Cheating (Ngoại tình / Bắt cá hai tay)",
    "type": "tag",
    "icon": "⚡",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "ngoai tinh",
      "phan boi"
    ]
  },
  {
    "id": "Cheerleading",
    "name": "Cheerleading",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "cheerleading"
    ]
  },
  {
    "id": "Chibi",
    "name": "Chibi",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "chibi"
    ]
  },
  {
    "id": "Chimera",
    "name": "Chimera",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "chimera"
    ]
  },
  {
    "id": "Chuunibyou",
    "name": "Chuunibyou (Hội chứng ảo tưởng tuổi dậy thì)",
    "type": "tag",
    "icon": "👁️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "ao tuong",
      "chuunibyou"
    ]
  },
  {
    "id": "Circus",
    "name": "Circus",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "circus"
    ]
  },
  {
    "id": "Class Struggle",
    "name": "Class Struggle (Đấu tranh giai cấp / Quý tộc)",
    "type": "tag",
    "icon": "⚖️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "dau tranh giai cap",
      "quy toc"
    ]
  },
  {
    "id": "Classic Literature",
    "name": "Classic Literature",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "classic literature"
    ]
  },
  {
    "id": "Classical Music",
    "name": "Classical Music",
    "type": "tag",
    "icon": "🏷️",
    "category": "SPORTS_ARTS",
    "keywords": [
      "classical music"
    ]
  },
  {
    "id": "Clone",
    "name": "Clone",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "clone"
    ]
  },
  {
    "id": "Coastal",
    "name": "Coastal",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "coastal"
    ]
  },
  {
    "id": "Cohabitation",
    "name": "Cohabitation (Sống chung một nhà)",
    "type": "tag",
    "icon": "🏠",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "song chung",
      "o chung nha"
    ]
  },
  {
    "id": "College",
    "name": "College (Đại học / Sinh viên)",
    "type": "tag",
    "icon": "🎓",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "dai hoc",
      "sinh vien"
    ]
  },
  {
    "id": "Coming of Age",
    "name": "Coming of Age (Quá trình trưởng thành)",
    "type": "tag",
    "icon": "🌱",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "truong thanh",
      "buoc vao doi"
    ]
  },
  {
    "id": "Conspiracy",
    "name": "Conspiracy (Âm mưu / Thuyết âm mưu)",
    "type": "tag",
    "icon": "🕵️",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "am muu",
      "thuyet am muu"
    ]
  },
  {
    "id": "Cosmic Horror",
    "name": "Cosmic Horror (Kinh dị vũ trụ Cthulhu)",
    "type": "tag",
    "icon": "🐙",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "cthulhu",
      "kinh di vu tru"
    ]
  },
  {
    "id": "Cosplay",
    "name": "Cosplay (Hóa trang Cosplay)",
    "type": "tag",
    "icon": "👗",
    "category": "SPORTS_ARTS",
    "keywords": [
      "cosplay",
      "hoa trang"
    ]
  },
  {
    "id": "Cowboys",
    "name": "Cowboys (Cao bồi miền Tây)",
    "type": "tag",
    "icon": "🤠",
    "category": "ACTION_COMBAT",
    "keywords": [
      "cao boi",
      "western"
    ]
  },
  {
    "id": "Crafts",
    "name": "Crafts",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "crafts"
    ]
  },
  {
    "id": "Creature Taming",
    "name": "Creature Taming (Thuần thú / Nuôi thú cưng)",
    "type": "tag",
    "icon": "🦁",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "thuan thu",
      "huan luyen thu",
      "pokemon"
    ]
  },
  {
    "id": "Crime",
    "name": "Crime",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "crime"
    ]
  },
  {
    "id": "Criminal Organization",
    "name": "Criminal Organization (Tổ chức tội phạm)",
    "type": "tag",
    "icon": "🕶️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "to chuc toi pham",
      "bang dang"
    ]
  },
  {
    "id": "Crossdressing",
    "name": "Crossdressing (Giả gái / Giả trai)",
    "type": "tag",
    "icon": "👗",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "gia gai",
      "gia trai"
    ]
  },
  {
    "id": "Crossover",
    "name": "Crossover",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "crossover"
    ]
  },
  {
    "id": "Cult",
    "name": "Cult (Tà giáo / Tà phái)",
    "type": "tag",
    "icon": "🕯️",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "ta giao",
      "giao phai"
    ]
  },
  {
    "id": "Cultivation",
    "name": "Cultivation (Tu tiên / Tu chân)",
    "type": "tag",
    "icon": "🧘‍♂️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "tu tien",
      "tu chan",
      "dao gia",
      "phi thang",
      "tien hiep",
      "dan ton",
      "chan nhan",
      "tien ton",
      "kiem tien",
      "luyen khi",
      "kim dan",
      "nguyen anh"
    ]
  },
  {
    "id": "Curses",
    "name": "Curses (Lời nguyền / Trù ếm)",
    "type": "tag",
    "icon": "🧿",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "loi nguyen",
      "tru em"
    ]
  },
  {
    "id": "Cute Boys Doing Cute Things",
    "name": "Cute Boys (Các chàng trai dễ thương)",
    "type": "tag",
    "icon": "✨",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "trai dep",
      "cute boys"
    ]
  },
  {
    "id": "Cute Girls Doing Cute Things",
    "name": "Cute Girls (Các cô gái dễ thương / CGDCT)",
    "type": "tag",
    "icon": "🎀",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "gai xinh",
      "cgdct",
      "moe"
    ]
  },
  {
    "id": "Cyberpunk",
    "name": "Cyberpunk (Công nghệ tương lai / Cyber)",
    "type": "tag",
    "icon": "🏙️",
    "category": "SCIFI_GAME",
    "keywords": [
      "cong nghe cao",
      "cyberpunk"
    ]
  },
  {
    "id": "Cyborg",
    "name": "Cyborg (Người máy sinh học)",
    "type": "tag",
    "icon": "🦾",
    "category": "SCIFI_GAME",
    "keywords": [
      "cyborg",
      "nua nguoi nua may"
    ]
  },
  {
    "id": "Cycling",
    "name": "Cycling (Đua xe đạp)",
    "type": "tag",
    "icon": "🚴",
    "category": "SPORTS_ARTS",
    "keywords": [
      "xe dap",
      "dua xe dap"
    ]
  },
  {
    "id": "Dancing",
    "name": "Dancing (Nhảy múa / Khiêu vũ)",
    "type": "tag",
    "icon": "💃",
    "category": "SPORTS_ARTS",
    "keywords": [
      "nhay mua",
      "khieu vu"
    ]
  },
  {
    "id": "Death Game",
    "name": "Death Game (Trò chơi sinh tử)",
    "type": "tag",
    "icon": "🎯",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "tro choi sinh tu",
      "death game"
    ]
  },
  {
    "id": "Delinquents",
    "name": "Delinquents (Bất lương / Đầu gấu học đường)",
    "type": "tag",
    "icon": "👊",
    "category": "ACTION_COMBAT",
    "keywords": [
      "bat luong",
      "dau gau",
      "gangster"
    ]
  },
  {
    "id": "Demons",
    "name": "Demons (Yêu ma / Ma tộc)",
    "type": "tag",
    "icon": "😈",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "yeu ma",
      "ma toc",
      "quy",
      "ac ma"
    ]
  },
  {
    "id": "Denpa",
    "name": "Denpa",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "denpa"
    ]
  },
  {
    "id": "Desert",
    "name": "Desert",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "desert"
    ]
  },
  {
    "id": "Detective",
    "name": "Detective (Thám tử / Phá án)",
    "type": "tag",
    "icon": "🔍",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "tham tu",
      "pha an",
      "conan"
    ]
  },
  {
    "id": "Dinosaurs",
    "name": "Dinosaurs",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "dinosaurs"
    ]
  },
  {
    "id": "Disability",
    "name": "Disability",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "disability"
    ]
  },
  {
    "id": "Dissociative Identities",
    "name": "Dissociative Identities",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "dissociative identities"
    ]
  },
  {
    "id": "Dragons",
    "name": "Dragons (Long tộc / Rồng)",
    "type": "tag",
    "icon": "🐉",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "long toc",
      "rong",
      "dragon"
    ]
  },
  {
    "id": "Drawing",
    "name": "Drawing (Hội họa / Vẽ tranh / Họa sĩ)",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "hoi hoa",
      "ve tranh",
      "hoa si"
    ]
  },
  {
    "id": "Drugs",
    "name": "Drugs (Chất cấm / Ma túy)",
    "type": "tag",
    "icon": "💊",
    "category": "ACTION_COMBAT",
    "keywords": [
      "chat cam",
      "ma tuy"
    ]
  },
  {
    "id": "Dullahan",
    "name": "Dullahan",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "dullahan"
    ]
  },
  {
    "id": "Dungeon",
    "name": "Dungeon (Hầm ngục / Phó bản)",
    "type": "tag",
    "icon": "🏰",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "ham nguc",
      "pho ban",
      "thap",
      "tower",
      "boss",
      "gate"
    ]
  },
  {
    "id": "Dystopian",
    "name": "Dystopian (Xã hội đen tối / Phản địa đàng)",
    "type": "tag",
    "icon": "👁️",
    "category": "SCIFI_GAME",
    "keywords": [
      "phan dia dang",
      "dystopia"
    ]
  },
  {
    "id": "E-Sports",
    "name": "E-Sports (Thể thao điện tử / Đấu giải)",
    "type": "tag",
    "icon": "🏆",
    "category": "SCIFI_GAME",
    "keywords": [
      "esports",
      "dau giai game",
      "tuyen thu"
    ]
  },
  {
    "id": "Eco-Horror",
    "name": "Eco-Horror",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "eco-horror"
    ]
  },
  {
    "id": "Economics",
    "name": "Economics (Kinh tế / Làm giàu)",
    "type": "tag",
    "icon": "💰",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "kinh te",
      "kinh doanh",
      "lam giau",
      "kiem tien"
    ]
  },
  {
    "id": "Educational",
    "name": "Educational",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "educational"
    ]
  },
  {
    "id": "Elderly Protagonist",
    "name": "Elderly Protagonist (Nhân vật chính lớn tuổi / Cụ già)",
    "type": "tag",
    "icon": "👴",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "nhan vat chinh gia",
      "cu gia"
    ]
  },
  {
    "id": "Elf",
    "name": "Elf (Yêu tinh Elf / Tộc Elf)",
    "type": "tag",
    "icon": "🧝",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "toc elf",
      "yeu tinh"
    ]
  },
  {
    "id": "Ensemble Cast",
    "name": "Ensemble Cast (Dàn nhân vật đông đảo / Đa góc nhìn)",
    "type": "tag",
    "icon": "👥",
    "category": "POPULAR",
    "keywords": [
      "nhieu goc nhin",
      "tap the"
    ]
  },
  {
    "id": "Environmental",
    "name": "Environmental (Môi trường / Thiên nhiên)",
    "type": "tag",
    "icon": "🌍",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "moi truong",
      "thien nhien"
    ]
  },
  {
    "id": "Episodic",
    "name": "Episodic (Từng mẩu chuyện độc lập)",
    "type": "tag",
    "icon": "📺",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tung mau chuyen"
    ]
  },
  {
    "id": "Ero Guro",
    "name": "Ero Guro",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "ero guro"
    ]
  },
  {
    "id": "Espionage",
    "name": "Espionage (Điệp viên / Gián điệp)",
    "type": "tag",
    "icon": "🕵️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "diep vien",
      "gian diep"
    ]
  },
  {
    "id": "Estranged Family",
    "name": "Estranged Family",
    "type": "tag",
    "icon": "🏷️",
    "category": "POPULAR",
    "keywords": [
      "estranged family"
    ]
  },
  {
    "id": "Exiled",
    "name": "Exiled",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "exiled"
    ]
  },
  {
    "id": "Exorcism",
    "name": "Exorcism (Trừ tà / Trừ ma)",
    "type": "tag",
    "icon": "📿",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "tru ta",
      "tru ma",
      "phong an"
    ]
  },
  {
    "id": "Fairy",
    "name": "Fairy (Tiên nữ nhỏ)",
    "type": "tag",
    "icon": "🧚",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "tien nu"
    ]
  },
  {
    "id": "Fairy Tale",
    "name": "Fairy Tale (Truyện cổ tích)",
    "type": "tag",
    "icon": "🧚",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "co tich",
      "than tien"
    ]
  },
  {
    "id": "Fake Relationship",
    "name": "Fake Relationship (Hợp đồng tình yêu / Giả vờ yêu)",
    "type": "tag",
    "icon": "🤝",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "hop dong tinh yeu",
      "nguoi yeu gia"
    ]
  },
  {
    "id": "Family Life",
    "name": "Family Life (Gia đình / Nuôi con)",
    "type": "tag",
    "icon": "🏡",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "gia dinh",
      "nuoi con",
      "cha con",
      "me con"
    ]
  },
  {
    "id": "Fashion",
    "name": "Fashion",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "fashion"
    ]
  },
  {
    "id": "Female Harem",
    "name": "Harem (Nhiều nữ chính / Hậu cung)",
    "type": "tag",
    "icon": "👑",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "harem",
      "nhieu nu",
      "hau cung",
      "da the",
      "nhieu vo"
    ]
  },
  {
    "id": "Female Protagonist",
    "name": "Female Protagonist (Nữ chính xuất sắc)",
    "type": "tag",
    "icon": "👩",
    "category": "POPULAR",
    "keywords": [
      "nu chinh",
      "nu chu"
    ]
  },
  {
    "id": "Femboy",
    "name": "Femboy (Chàng trai dễ thương / Femboy)",
    "type": "tag",
    "icon": "🎀",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "femboy",
      "de thuong"
    ]
  },
  {
    "id": "Fencing",
    "name": "Fencing",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "fencing"
    ]
  },
  {
    "id": "Filmmaking",
    "name": "Filmmaking",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "filmmaking"
    ]
  },
  {
    "id": "Firefighters",
    "name": "Firefighters (Lính cứu hỏa)",
    "type": "tag",
    "icon": "🚒",
    "category": "ACTION_COMBAT",
    "keywords": [
      "linh cuu hoa",
      "fire force"
    ]
  },
  {
    "id": "Fishing",
    "name": "Fishing (Câu cá)",
    "type": "tag",
    "icon": "🎣",
    "category": "SPORTS_ARTS",
    "keywords": [
      "cau ca",
      "di cau"
    ]
  },
  {
    "id": "Fitness",
    "name": "Fitness (Tập gym / Thể hình)",
    "type": "tag",
    "icon": "💪",
    "category": "SPORTS_ARTS",
    "keywords": [
      "tap gym",
      "the hinh"
    ]
  },
  {
    "id": "Food",
    "name": "Food (Món ngon / Ăn uống)",
    "type": "tag",
    "icon": "🍜",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "mon ngon",
      "an uong"
    ]
  },
  {
    "id": "Football",
    "name": "Football (Bóng đá / Cầu thủ)",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "bong da",
      "cau thu",
      "sut bong"
    ]
  },
  {
    "id": "Foreign",
    "name": "Foreign",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "foreign"
    ]
  },
  {
    "id": "Found Family",
    "name": "Found Family (Gia đình tình thương)",
    "type": "tag",
    "icon": "🫂",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "gia dinh khong huyet thong"
    ]
  },
  {
    "id": "Fugitive",
    "name": "Fugitive (Đào tẩu / Bị truy nã)",
    "type": "tag",
    "icon": "🏃",
    "category": "ACTION_COMBAT",
    "keywords": [
      "dao tau",
      "truy na",
      "chay tron"
    ]
  },
  {
    "id": "Full Color",
    "name": "Full Color (Truyện tranh màu sắc nét)",
    "type": "tag",
    "icon": "🎨",
    "category": "POPULAR",
    "keywords": [
      "truyen mau",
      "full color",
      "manhwa mau",
      "manhua mau"
    ]
  },
  {
    "id": "Gambling",
    "name": "Gambling (Cờ bạc / Đỏ đen)",
    "type": "tag",
    "icon": "🎰",
    "category": "ACTION_COMBAT",
    "keywords": [
      "co bac",
      "do den",
      "danh bac"
    ]
  },
  {
    "id": "Gangs",
    "name": "Gangs (Băng nhóm đường phố)",
    "type": "tag",
    "icon": "🥊",
    "category": "ACTION_COMBAT",
    "keywords": [
      "bang nhom",
      "giang ho"
    ]
  },
  {
    "id": "Gekiga",
    "name": "Gekiga",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "gekiga"
    ]
  },
  {
    "id": "Gender Bending",
    "name": "Gender Bending (Chuyển đổi giới tính)",
    "type": "tag",
    "icon": "⚧️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "chuyen doi gioi tinh",
      "bien nam thanh nu",
      "bien nu thanh nam"
    ]
  },
  {
    "id": "Ghost",
    "name": "Ghost (Hồn ma / Linh hồn)",
    "type": "tag",
    "icon": "👻",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "hon ma",
      "linh hon",
      "bong ma"
    ]
  },
  {
    "id": "Go",
    "name": "Go (Cờ vây)",
    "type": "tag",
    "icon": "⚪",
    "category": "SCIFI_GAME",
    "keywords": [
      "co vay",
      "hikaru no go"
    ]
  },
  {
    "id": "Goblin",
    "name": "Goblin (Yêu tinh Goblin)",
    "type": "tag",
    "icon": "👺",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "goblin"
    ]
  },
  {
    "id": "Gods",
    "name": "Gods (Thần thánh / Tiên nhân)",
    "type": "tag",
    "icon": "⚡",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "than thanh",
      "tien nhan",
      "than thoai",
      "vi than"
    ]
  },
  {
    "id": "Golf",
    "name": "Golf",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "golf"
    ]
  },
  {
    "id": "Gore",
    "name": "Gore (Máu me / Tàn khốc)",
    "type": "tag",
    "icon": "🩸",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "mau me",
      "tan khoc",
      "kinh di mau"
    ]
  },
  {
    "id": "Guns",
    "name": "Guns (Súng đạn / Xạ thủ)",
    "type": "tag",
    "icon": "🔫",
    "category": "ACTION_COMBAT",
    "keywords": [
      "sung dan",
      "ban sung",
      "xa thu"
    ]
  },
  {
    "id": "Gyaru",
    "name": "Gyaru (Cô nàng cá tính Gyaru)",
    "type": "tag",
    "icon": "💅",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "gyaru",
      "ca tinh"
    ]
  },
  {
    "id": "Handball",
    "name": "Handball",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "handball"
    ]
  },
  {
    "id": "Henshin",
    "name": "Henshin (Biến thân siêu anh hùng)",
    "type": "tag",
    "icon": "✨",
    "category": "ACTION_COMBAT",
    "keywords": [
      "bien than",
      "henshin",
      "sieu nhan"
    ]
  },
  {
    "id": "Heterosexual",
    "name": "Heterosexual (Nam Nữ / Ngôn tình truyền thống)",
    "type": "tag",
    "icon": "👫",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "nam nu",
      "ngon tinh"
    ]
  },
  {
    "id": "Hikikomori",
    "name": "Hikikomori (Sống khép kín / Ở nhà)",
    "type": "tag",
    "icon": "🚪",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "o nha",
      "khong ra ngoai",
      "hikikomori"
    ]
  },
  {
    "id": "Hip-hop Music",
    "name": "Hip-hop Music",
    "type": "tag",
    "icon": "🏷️",
    "category": "SPORTS_ARTS",
    "keywords": [
      "hip-hop music"
    ]
  },
  {
    "id": "Historical",
    "name": "Historical (Lịch sử / Cổ đại)",
    "type": "tag",
    "icon": "📜",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "lich su",
      "co dai",
      "trieu dinh",
      "hoang gia"
    ]
  },
  {
    "id": "Homeless",
    "name": "Homeless",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "homeless"
    ]
  },
  {
    "id": "Horticulture",
    "name": "Horticulture",
    "type": "tag",
    "icon": "☕",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "horticulture"
    ]
  },
  {
    "id": "Human Experimentation",
    "name": "Human Experimentation (Thí nghiệm trên người)",
    "type": "tag",
    "icon": "🧪",
    "category": "ACTION_COMBAT",
    "keywords": [
      "thi nghiem nguoi"
    ]
  },
  {
    "id": "Ice Sports",
    "name": "Ice Sports",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "ice sports"
    ]
  },
  {
    "id": "Idol",
    "name": "Idol (Thần tượng / Ca sĩ)",
    "type": "tag",
    "icon": "🎤",
    "category": "SPORTS_ARTS",
    "keywords": [
      "than tuong",
      "idol",
      "ca si"
    ]
  },
  {
    "id": "Incest",
    "name": "Incest",
    "type": "tag",
    "icon": "❤️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "incest"
    ]
  },
  {
    "id": "Indigenous Cultures",
    "name": "Indigenous Cultures",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "indigenous cultures"
    ]
  },
  {
    "id": "Inn",
    "name": "Inn",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "inn"
    ]
  },
  {
    "id": "Inseki",
    "name": "Inseki (Quan hệ họ hàng không huyết thống)",
    "type": "tag",
    "icon": "🏡",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "ho hang",
      "con rieng"
    ]
  },
  {
    "id": "Interspecies",
    "name": "Interspecies (Tình yêu dị tộc / Khác loài)",
    "type": "tag",
    "icon": "🐾",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "di toc",
      "khac loai"
    ]
  },
  {
    "id": "Isekai",
    "name": "Isekai (Xuyên không / Thế giới khác)",
    "type": "tag",
    "icon": "🌀",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "chuyen sinh",
      "xuyen khong",
      "di gioi",
      "the gioi khac",
      "tai sinh di gioi"
    ]
  },
  {
    "id": "Iyashikei",
    "name": "Iyashikei (Chữa lành / Thư giãn tâm hồn)",
    "type": "tag",
    "icon": "🌸",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "chua lanh",
      "thu gian",
      "binh yen",
      "iyashikei"
    ]
  },
  {
    "id": "Jazz Music",
    "name": "Jazz Music",
    "type": "tag",
    "icon": "🏷️",
    "category": "SPORTS_ARTS",
    "keywords": [
      "jazz music"
    ]
  },
  {
    "id": "Josei",
    "name": "Josei (Phụ nữ trưởng thành)",
    "type": "tag",
    "icon": "👩",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "phu nu",
      "quy co",
      "josei"
    ]
  },
  {
    "id": "Judo",
    "name": "Judo (Võ Nhu đạo / Judo)",
    "type": "tag",
    "icon": "🥋",
    "category": "SPORTS_ARTS",
    "keywords": [
      "judo",
      "nhu dao"
    ]
  },
  {
    "id": "Kabuki",
    "name": "Kabuki",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "kabuki"
    ]
  },
  {
    "id": "Kaiju",
    "name": "Kaiju (Quái vật khổng lồ)",
    "type": "tag",
    "icon": "🦖",
    "category": "ACTION_COMBAT",
    "keywords": [
      "quai vat khong lo",
      "kaiju",
      "godzilla"
    ]
  },
  {
    "id": "Karuta",
    "name": "Karuta (Bài Karuta truyền thống)",
    "type": "tag",
    "icon": "🎴",
    "category": "SCIFI_GAME",
    "keywords": [
      "karuta",
      "chihayafuru"
    ]
  },
  {
    "id": "Kemonomimi",
    "name": "Kemonomimi (Người tai thú / Đuôi thú)",
    "type": "tag",
    "icon": "🦊",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "tai thu",
      "duoi thu",
      "kemonomimi"
    ]
  },
  {
    "id": "Kids",
    "name": "Kids (Thiếu nhi / Trẻ em)",
    "type": "tag",
    "icon": "👶",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "tre em",
      "thieu nhi"
    ]
  },
  {
    "id": "Kingdom Management",
    "name": "Kingdom Management (Xây dựng lãnh địa / Lãnh chúa)",
    "type": "tag",
    "icon": "👑",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "xay dung vuong quoc",
      "lanh dia",
      "lanh chua"
    ]
  },
  {
    "id": "Konbini",
    "name": "Konbini",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "konbini"
    ]
  },
  {
    "id": "Kuudere",
    "name": "Kuudere (Lạnh lùng / Ít nói)",
    "type": "tag",
    "icon": "🧊",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "kuudere",
      "lanh lung"
    ]
  },
  {
    "id": "Lacrosse",
    "name": "Lacrosse",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "lacrosse"
    ]
  },
  {
    "id": "Language Barrier",
    "name": "Language Barrier",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "language barrier"
    ]
  },
  {
    "id": "LGBTQ+ Themes",
    "name": "LGBTQ+ (Chủ đề LGBTQ+ đa dạng)",
    "type": "tag",
    "icon": "🏳️‍🌈",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "lgbt",
      "lgbtq"
    ]
  },
  {
    "id": "Long Strip",
    "name": "Long Strip (Đọc dạng cuộn dọc / Webtoon)",
    "type": "tag",
    "icon": "📜",
    "category": "POPULAR",
    "keywords": [
      "cuon doc",
      "webtoon",
      "long strip"
    ]
  },
  {
    "id": "Lost Civilization",
    "name": "Lost Civilization",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "lost civilization"
    ]
  },
  {
    "id": "Love Triangle",
    "name": "Love Triangle (Tình tay ba)",
    "type": "tag",
    "icon": "🔺",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tinh tay ba",
      "tam giac tinh yeu"
    ]
  },
  {
    "id": "Mafia",
    "name": "Mafia (Băng đảng Mafia)",
    "type": "tag",
    "icon": "🕶️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "mafia",
      "xa hoi den"
    ]
  },
  {
    "id": "Magic",
    "name": "Magic (Ma pháp / Phép thuật)",
    "type": "tag",
    "icon": "✨",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "ma phap",
      "phep thuat",
      "phap su",
      "ma thuat",
      "phu thuy"
    ]
  },
  {
    "id": "Mahjong",
    "name": "Mahjong (Mạt chược)",
    "type": "tag",
    "icon": "🀄",
    "category": "SCIFI_GAME",
    "keywords": [
      "mat chuoc",
      "saki"
    ]
  },
  {
    "id": "Maids",
    "name": "Maids (Hầu gái / Maid)",
    "type": "tag",
    "icon": "🧹",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "hau gai",
      "maid"
    ]
  },
  {
    "id": "Makeup",
    "name": "Makeup",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "makeup"
    ]
  },
  {
    "id": "Male Harem",
    "name": "Harem Nam (Nhiều nam chính / Ngược harem)",
    "type": "tag",
    "icon": "🤴",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "harem nam",
      "nhieu nam",
      "reverse harem"
    ]
  },
  {
    "id": "Male Protagonist",
    "name": "Male Protagonist (Nam chính xuất sắc)",
    "type": "tag",
    "icon": "👦",
    "category": "POPULAR",
    "keywords": [
      "nam chinh",
      "nam chu"
    ]
  },
  {
    "id": "Manzai",
    "name": "Manzai",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "manzai"
    ]
  },
  {
    "id": "Marriage",
    "name": "Marriage",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "marriage"
    ]
  },
  {
    "id": "Martial Arts",
    "name": "Martial Arts (Võ thuật / Đấu khí)",
    "type": "tag",
    "icon": "🥋",
    "category": "ACTION_COMBAT",
    "keywords": [
      "vo thuat",
      "dau khi",
      "vo hiep",
      "kiem hiep",
      "quyen cuoc",
      "chan khi",
      "kungfu"
    ]
  },
  {
    "id": "Matchmaking",
    "name": "Matchmaking (Mai mối / Xem mắt)",
    "type": "tag",
    "icon": "💌",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "mai moi",
      "xem mat"
    ]
  },
  {
    "id": "Matriarchy",
    "name": "Matriarchy",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "matriarchy"
    ]
  },
  {
    "id": "Medicine",
    "name": "Medicine (Y học / Bác sĩ / Trị liệu)",
    "type": "tag",
    "icon": "🩺",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "y hoc",
      "bac si",
      "chua benh"
    ]
  },
  {
    "id": "Medieval",
    "name": "Medieval (Thời Trung Cổ phương Tây)",
    "type": "tag",
    "icon": "🏰",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "trung co",
      "hiep si"
    ]
  },
  {
    "id": "Memory Manipulation",
    "name": "Memory Manipulation (Sửa đổi ký ức)",
    "type": "tag",
    "icon": "🧠",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "sua ky uc",
      "thao tung ky uc"
    ]
  },
  {
    "id": "Mermaid",
    "name": "Mermaid (Người cá / Mỹ nhân ngư)",
    "type": "tag",
    "icon": "🧜‍♀️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "nguoi ca",
      "my nhan ngu"
    ]
  },
  {
    "id": "Meta",
    "name": "Meta",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "meta"
    ]
  },
  {
    "id": "Metal Music",
    "name": "Metal Music",
    "type": "tag",
    "icon": "🏷️",
    "category": "SPORTS_ARTS",
    "keywords": [
      "metal music"
    ]
  },
  {
    "id": "Middle East",
    "name": "Middle East (Trung Đông / Xứ nghìn lẻ một đêm)",
    "type": "tag",
    "icon": "🕌",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "trung dong",
      "magi"
    ]
  },
  {
    "id": "Military",
    "name": "Military (Quân sự / Chiến tranh)",
    "type": "tag",
    "icon": "🪖",
    "category": "ACTION_COMBAT",
    "keywords": [
      "quan su",
      "chien tranh",
      "quan doi",
      "vu khi"
    ]
  },
  {
    "id": "Mixed Gender Harem",
    "name": "Mixed Harem (Hậu cung hỗn hợp)",
    "type": "tag",
    "icon": "👥",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "harem hon hop"
    ]
  },
  {
    "id": "Modeling",
    "name": "Modeling",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "modeling"
    ]
  },
  {
    "id": "Monster Boy",
    "name": "Monster Boy (Quái vật nhân hình nam)",
    "type": "tag",
    "icon": "🐺",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "quai vat nam",
      "monster boy"
    ]
  },
  {
    "id": "Monster Girl",
    "name": "Monster Girl (Quái vật nhân hình nữ)",
    "type": "tag",
    "icon": "🐾",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "quai vat nu",
      "monster girl"
    ]
  },
  {
    "id": "Mopeds",
    "name": "Mopeds",
    "type": "tag",
    "icon": "🏷️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "mopeds"
    ]
  },
  {
    "id": "Motorcycles",
    "name": "Motorcycles (Đua mô tô / Xe máy)",
    "type": "tag",
    "icon": "🏍️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "dua xe may",
      "mo to"
    ]
  },
  {
    "id": "Mountaineering",
    "name": "Mountaineering (Leo núi / Chinh phục đỉnh cao)",
    "type": "tag",
    "icon": "🧗",
    "category": "SPORTS_ARTS",
    "keywords": [
      "leo nui"
    ]
  },
  {
    "id": "Musical Theater",
    "name": "Musical Theater",
    "type": "tag",
    "icon": "🏷️",
    "category": "SPORTS_ARTS",
    "keywords": [
      "musical theater"
    ]
  },
  {
    "id": "Mythology",
    "name": "Mythology (Thần thoại cổ xưa)",
    "type": "tag",
    "icon": "🏛️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "than thoai",
      "huyen thoai"
    ]
  },
  {
    "id": "Natural Disaster",
    "name": "Natural Disaster",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "natural disaster"
    ]
  },
  {
    "id": "Necromancy",
    "name": "Necromancy (Thuật chiêu hồn / Tử linh)",
    "type": "tag",
    "icon": "💀",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "chieu hon",
      "tu linh",
      "xac song",
      "goi hon"
    ]
  },
  {
    "id": "Nekomimi",
    "name": "Nekomimi (Người tai mèo / Neko)",
    "type": "tag",
    "icon": "🐱",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "tai meo",
      "nekomimi"
    ]
  },
  {
    "id": "Ninja",
    "name": "Ninja (Nhẫn giả / Ninja)",
    "type": "tag",
    "icon": "🥷",
    "category": "ACTION_COMBAT",
    "keywords": [
      "ninja",
      "nhan gia",
      "naruto"
    ]
  },
  {
    "id": "No Dialogue",
    "name": "No Dialogue",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "no dialogue"
    ]
  },
  {
    "id": "Noir",
    "name": "Noir",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "noir"
    ]
  },
  {
    "id": "Non-fiction",
    "name": "Non-fiction (Phi hư cấu / Chuyện có thật)",
    "type": "tag",
    "icon": "📰",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "phi hu cau",
      "co that"
    ]
  },
  {
    "id": "Nudity",
    "name": "Nudity",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "nudity"
    ]
  },
  {
    "id": "Nun",
    "name": "Nun",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "nun"
    ]
  },
  {
    "id": "Office",
    "name": "Office",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "office"
    ]
  },
  {
    "id": "Office Lady",
    "name": "Office Lady (Nữ nhân viên văn phòng)",
    "type": "tag",
    "icon": "👠",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "nu van phong",
      "ol"
    ]
  },
  {
    "id": "Oiran",
    "name": "Oiran",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "oiran"
    ]
  },
  {
    "id": "Ojou-sama",
    "name": "Ojou-sama (Tiểu thư đài các)",
    "type": "tag",
    "icon": "💎",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tieu thu",
      "nha giau"
    ]
  },
  {
    "id": "Orphan",
    "name": "Orphan",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "orphan"
    ]
  },
  {
    "id": "Otaku Culture",
    "name": "Otaku Culture (Văn hóa Otaku / Wibu)",
    "type": "tag",
    "icon": "🤓",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "otaku",
      "wibu",
      "anime manga"
    ]
  },
  {
    "id": "Outdoor Activities",
    "name": "Outdoor Activities",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "outdoor activities"
    ]
  },
  {
    "id": "Pandemic",
    "name": "Pandemic (Đại dịch / Bệnh dịch lây lan)",
    "type": "tag",
    "icon": "☣️",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "dai dich",
      "dich benh"
    ]
  },
  {
    "id": "Parenthood",
    "name": "Parenthood (Làm cha mẹ)",
    "type": "tag",
    "icon": "🍼",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "lam cha me",
      "nuoi em be"
    ]
  },
  {
    "id": "Parkour",
    "name": "Parkour (Chạy vượt chướng ngại vật)",
    "type": "tag",
    "icon": "🏃",
    "category": "SPORTS_ARTS",
    "keywords": [
      "parkour"
    ]
  },
  {
    "id": "Parody",
    "name": "Parody (Nhại lại / Châm biếm hài)",
    "type": "tag",
    "icon": "🎭",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "nhai lai",
      "parody",
      "gintama"
    ]
  },
  {
    "id": "Philosophy",
    "name": "Philosophy (Triết học / Chiêm nghiệm sâu sắc)",
    "type": "tag",
    "icon": "📖",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "triet hoc",
      "chieu sau"
    ]
  },
  {
    "id": "Photography",
    "name": "Photography",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "photography"
    ]
  },
  {
    "id": "Pirates",
    "name": "Pirates (Hải tặc / Cướp biển)",
    "type": "tag",
    "icon": "🏴‍☠️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "hai tac",
      "cuop bien",
      "one piece"
    ]
  },
  {
    "id": "Poker",
    "name": "Poker (Bài Poker)",
    "type": "tag",
    "icon": "♠️",
    "category": "SCIFI_GAME",
    "keywords": [
      "poker",
      "bai tay"
    ]
  },
  {
    "id": "Police",
    "name": "Police (Cảnh sát / Hình sự)",
    "type": "tag",
    "icon": "👮",
    "category": "ACTION_COMBAT",
    "keywords": [
      "canh sat",
      "hinh su",
      "cong an"
    ]
  },
  {
    "id": "Politics",
    "name": "Politics (Chính trị / Quyền mưu)",
    "type": "tag",
    "icon": "🏛️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "chinh tri",
      "quyen muu",
      "dau da"
    ]
  },
  {
    "id": "Polyamorous",
    "name": "Polyamorous (Đa ái / Nhiều bạn đời)",
    "type": "tag",
    "icon": "💞",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "da ai"
    ]
  },
  {
    "id": "Post-Apocalyptic",
    "name": "Post-Apocalyptic (Hậu tận thế)",
    "type": "tag",
    "icon": "☢️",
    "category": "SCIFI_GAME",
    "keywords": [
      "hau tan the",
      "tan the",
      "ngay tan the"
    ]
  },
  {
    "id": "POV",
    "name": "POV",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "pov"
    ]
  },
  {
    "id": "Poverty",
    "name": "Poverty",
    "type": "tag",
    "icon": "☕",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "poverty"
    ]
  },
  {
    "id": "Pregnancy",
    "name": "Pregnancy",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "pregnancy"
    ]
  },
  {
    "id": "Primarily Adult Cast",
    "name": "Adult Cast (Dàn nhân vật người lớn / Công sở)",
    "type": "tag",
    "icon": "👔",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "nguoi lon"
    ]
  },
  {
    "id": "Primarily Animal Cast",
    "name": "Primarily Animal Cast",
    "type": "tag",
    "icon": "🏷️",
    "category": "POPULAR",
    "keywords": [
      "primarily animal cast"
    ]
  },
  {
    "id": "Primarily Child Cast",
    "name": "Primarily Child Cast",
    "type": "tag",
    "icon": "🏷️",
    "category": "POPULAR",
    "keywords": [
      "primarily child cast"
    ]
  },
  {
    "id": "Primarily Female Cast",
    "name": "Female Cast (Chủ yếu nhân vật nữ)",
    "type": "tag",
    "icon": "👭",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "toan nu"
    ]
  },
  {
    "id": "Primarily Male Cast",
    "name": "Male Cast (Chủ yếu nhân vật nam)",
    "type": "tag",
    "icon": "👬",
    "category": "ACTION_COMBAT",
    "keywords": [
      "toan nam"
    ]
  },
  {
    "id": "Primarily Teen Cast",
    "name": "Primarily Teen Cast",
    "type": "tag",
    "icon": "🏷️",
    "category": "POPULAR",
    "keywords": [
      "primarily teen cast"
    ]
  },
  {
    "id": "Prison",
    "name": "Prison",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "prison"
    ]
  },
  {
    "id": "Prophecy",
    "name": "Prophecy",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "prophecy"
    ]
  },
  {
    "id": "Proxy Battle",
    "name": "Proxy Battle",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "proxy battle"
    ]
  },
  {
    "id": "Psychosexual",
    "name": "Psychosexual",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "psychosexual"
    ]
  },
  {
    "id": "Rakugo",
    "name": "Rakugo",
    "type": "tag",
    "icon": "🎨",
    "category": "SPORTS_ARTS",
    "keywords": [
      "rakugo"
    ]
  },
  {
    "id": "Real Robot",
    "name": "Real Robot (Robot cơ khí quân sự)",
    "type": "tag",
    "icon": "🤖",
    "category": "SCIFI_GAME",
    "keywords": [
      "robot thuc te",
      "gundam"
    ]
  },
  {
    "id": "Rehabilitation",
    "name": "Rehabilitation",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "rehabilitation"
    ]
  },
  {
    "id": "Reincarnation",
    "name": "Reincarnation (Trọng sinh / Tái sinh)",
    "type": "tag",
    "icon": "⏳",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "trong sinh",
      "tai sinh",
      "song lai",
      "hoi quy",
      "tro ve qua khu"
    ]
  },
  {
    "id": "Religion",
    "name": "Religion",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "religion"
    ]
  },
  {
    "id": "Rescue",
    "name": "Rescue",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "rescue"
    ]
  },
  {
    "id": "Restaurant",
    "name": "Restaurant",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "restaurant"
    ]
  },
  {
    "id": "Revenge",
    "name": "Revenge (Báo thù / Trả thù)",
    "type": "tag",
    "icon": "🔥",
    "category": "ACTION_COMBAT",
    "keywords": [
      "bao thu",
      "tra thu",
      "phuc thu"
    ]
  },
  {
    "id": "Reverse Isekai",
    "name": "Reverse Isekai (Chuyển sinh về hiện đại)",
    "type": "tag",
    "icon": "🔄",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "xuyen ve hien dai",
      "reverse isekai"
    ]
  },
  {
    "id": "Robots",
    "name": "Robots (Robot thông minh)",
    "type": "tag",
    "icon": "🤖",
    "category": "SCIFI_GAME",
    "keywords": [
      "robot",
      "nguoi may"
    ]
  },
  {
    "id": "Rock Music",
    "name": "Rock Music",
    "type": "tag",
    "icon": "🏷️",
    "category": "SPORTS_ARTS",
    "keywords": [
      "rock music"
    ]
  },
  {
    "id": "Royal Affairs",
    "name": "Royal Affairs",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "royal affairs"
    ]
  },
  {
    "id": "Rugby",
    "name": "Rugby",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "rugby"
    ]
  },
  {
    "id": "Rural",
    "name": "Rural",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "rural"
    ]
  },
  {
    "id": "Samurai",
    "name": "Samurai (Võ sĩ đạo Samurai)",
    "type": "tag",
    "icon": "⚔️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "samurai",
      "vo si dao"
    ]
  },
  {
    "id": "Satire",
    "name": "Satire",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "satire"
    ]
  },
  {
    "id": "School",
    "name": "School (Học đường / Trường học)",
    "type": "tag",
    "icon": "🏫",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "hoc duong",
      "truong hoc",
      "hoc sinh",
      "lop hoc"
    ]
  },
  {
    "id": "School Club",
    "name": "School Club (Câu lạc bộ học đường)",
    "type": "tag",
    "icon": "🎪",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "cau lac bo",
      "clb"
    ]
  },
  {
    "id": "Scuba Diving",
    "name": "Scuba Diving",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "scuba diving"
    ]
  },
  {
    "id": "Seinen",
    "name": "Seinen (Thanh niên / Trưởng thành 18+)",
    "type": "tag",
    "icon": "🧑",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "thanh nien",
      "truong thanh",
      "seinen"
    ]
  },
  {
    "id": "Shapeshifting",
    "name": "Shapeshifting (Biến hình / Hóa hình)",
    "type": "tag",
    "icon": "🦊",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "bien hinh",
      "hoa hinh"
    ]
  },
  {
    "id": "Ships",
    "name": "Ships (Tàu thủy / Hải quân)",
    "type": "tag",
    "icon": "🚢",
    "category": "ACTION_COMBAT",
    "keywords": [
      "tau thuy",
      "hai quan"
    ]
  },
  {
    "id": "Shogi",
    "name": "Shogi (Cờ tướng Nhật Shogi)",
    "type": "tag",
    "icon": "♟️",
    "category": "SCIFI_GAME",
    "keywords": [
      "co shogi"
    ]
  },
  {
    "id": "Short-Form Chapter",
    "name": "Short Chapter (Chương ngắn)",
    "type": "tag",
    "icon": "📄",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "chuong ngan"
    ]
  },
  {
    "id": "Shoujo",
    "name": "Shoujo (Thiếu nữ / Thiếu nữ mộng mơ)",
    "type": "tag",
    "icon": "👧",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "thieu nu",
      "shoujo",
      "nu tinh"
    ]
  },
  {
    "id": "Shounen",
    "name": "Shounen (Thiếu niên nam)",
    "type": "tag",
    "icon": "👦",
    "category": "DEMOGRAPHICS",
    "keywords": [
      "thieu nien",
      "nam",
      "shonen"
    ]
  },
  {
    "id": "Shrine Maiden",
    "name": "Shrine Maiden (Miko / Vu nữ đền thần)",
    "type": "tag",
    "icon": "⛩️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "miko",
      "vu nu"
    ]
  },
  {
    "id": "Skateboarding",
    "name": "Skateboarding",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "skateboarding"
    ]
  },
  {
    "id": "Skeleton",
    "name": "Skeleton (Bộ xương / Cốt tộc)",
    "type": "tag",
    "icon": "💀",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "bo xuong",
      "cot toc"
    ]
  },
  {
    "id": "Slapstick",
    "name": "Slapstick",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "slapstick"
    ]
  },
  {
    "id": "Slavery",
    "name": "Slavery (Nô lệ / Giải phóng nô lệ)",
    "type": "tag",
    "icon": "⛓️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "no le",
      "giai phong"
    ]
  },
  {
    "id": "Snowscape",
    "name": "Snowscape",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "snowscape"
    ]
  },
  {
    "id": "Software Development",
    "name": "Software Development",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "software development"
    ]
  },
  {
    "id": "Space",
    "name": "Space (Vũ trụ / Không gian)",
    "type": "tag",
    "icon": "🪐",
    "category": "SCIFI_GAME",
    "keywords": [
      "vu tru",
      "khong gian",
      "hanh tinh"
    ]
  },
  {
    "id": "Space Opera",
    "name": "Space Opera (Chiến tranh vũ trụ)",
    "type": "tag",
    "icon": "🛸",
    "category": "SCIFI_GAME",
    "keywords": [
      "chien tranh vu tru",
      "ham doi vu tru"
    ]
  },
  {
    "id": "Spearplay",
    "name": "Spearplay (Thương thuật / Dùng thương)",
    "type": "tag",
    "icon": "🔱",
    "category": "ACTION_COMBAT",
    "keywords": [
      "thuong thuat",
      "giao thuat"
    ]
  },
  {
    "id": "Steampunk",
    "name": "Steampunk (Khoa học hơi nước)",
    "type": "tag",
    "icon": "⚙️",
    "category": "SCIFI_GAME",
    "keywords": [
      "hoi nuoc",
      "steampunk"
    ]
  },
  {
    "id": "Succubus",
    "name": "Succubus (Nữ quỷ quyến rũ)",
    "type": "tag",
    "icon": "😈",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "nu quy",
      "succubus"
    ]
  },
  {
    "id": "Suicide",
    "name": "Suicide",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "suicide"
    ]
  },
  {
    "id": "Sumo",
    "name": "Sumo (Võ Sumo truyền thống)",
    "type": "tag",
    "icon": "🤼",
    "category": "SPORTS_ARTS",
    "keywords": [
      "sumo"
    ]
  },
  {
    "id": "Super Power",
    "name": "Super Power (Siêu năng lực)",
    "type": "tag",
    "icon": "💥",
    "category": "ACTION_COMBAT",
    "keywords": [
      "sieu nang luc",
      "nang luc dac biet"
    ]
  },
  {
    "id": "Super Robot",
    "name": "Super Robot (Siêu Robot thần bí)",
    "type": "tag",
    "icon": "🦾",
    "category": "SCIFI_GAME",
    "keywords": [
      "sieu robot",
      "gurren lagann"
    ]
  },
  {
    "id": "Superhero",
    "name": "Superhero (Siêu anh hùng)",
    "type": "tag",
    "icon": "🦸",
    "category": "ACTION_COMBAT",
    "keywords": [
      "sieu anh hung",
      "hero"
    ]
  },
  {
    "id": "Surfing",
    "name": "Surfing",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "surfing"
    ]
  },
  {
    "id": "Surreal Comedy",
    "name": "Surreal Comedy",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "surreal comedy"
    ]
  },
  {
    "id": "Survival",
    "name": "Survival (Sinh tồn)",
    "type": "tag",
    "icon": "⛺",
    "category": "ACTION_COMBAT",
    "keywords": [
      "sinh ton",
      "song con",
      "hoang dao"
    ]
  },
  {
    "id": "Swimming",
    "name": "Swimming (Bơi lội)",
    "type": "tag",
    "icon": "🏊",
    "category": "SPORTS_ARTS",
    "keywords": [
      "boi loi",
      "duoi nuoc"
    ]
  },
  {
    "id": "Swordplay",
    "name": "Swordplay (Kiếm đạo / Kiếm thuật)",
    "type": "tag",
    "icon": "🗡️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "kiem thuat",
      "kiem dao",
      "dung kiem",
      "kiem si"
    ]
  },
  {
    "id": "Table Tennis",
    "name": "Table Tennis",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "table tennis"
    ]
  },
  {
    "id": "Tanks",
    "name": "Tanks (Xe tăng / Thiết giáp)",
    "type": "tag",
    "icon": "🎖️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "xe tang",
      "girls und panzer"
    ]
  },
  {
    "id": "Tanned Skin",
    "name": "Tanned Skin",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "tanned skin"
    ]
  },
  {
    "id": "Teacher",
    "name": "Teacher",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "teacher"
    ]
  },
  {
    "id": "Teens' Love",
    "name": "Teens' Love (Tình yêu lãng mạn tuổi teen)",
    "type": "tag",
    "icon": "💖",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "teens love",
      "tinh yeu tuoi tre"
    ]
  },
  {
    "id": "Tennis",
    "name": "Tennis (Quần vợt)",
    "type": "tag",
    "icon": "🎾",
    "category": "SPORTS_ARTS",
    "keywords": [
      "quan vot",
      "tennis"
    ]
  },
  {
    "id": "Terrorism",
    "name": "Terrorism",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "terrorism"
    ]
  },
  {
    "id": "Time Loop",
    "name": "Time Loop (Vòng lặp thời gian)",
    "type": "tag",
    "icon": "🔁",
    "category": "SCIFI_GAME",
    "keywords": [
      "vong lap thoi gian",
      "time loop"
    ]
  },
  {
    "id": "Time Manipulation",
    "name": "Time Manipulation (Thao túng thời gian)",
    "type": "tag",
    "icon": "⌛",
    "category": "SCIFI_GAME",
    "keywords": [
      "thao tung thoi gian",
      "ngung dong thoi gian"
    ]
  },
  {
    "id": "Time Skip",
    "name": "Time Skip (Bỏ qua thời gian / Lớn lên)",
    "type": "tag",
    "icon": "⏩",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "time skip",
      "nhay coc thoi gian"
    ]
  },
  {
    "id": "Tokusatsu",
    "name": "Tokusatsu (Hiệp sĩ mặt nạ / Tokusatsu)",
    "type": "tag",
    "icon": "🦸",
    "category": "ACTION_COMBAT",
    "keywords": [
      "tokusatsu",
      "kamen rider"
    ]
  },
  {
    "id": "Tomboy",
    "name": "Tomboy (Cô nàng cá tính / Tomboy)",
    "type": "tag",
    "icon": "🧢",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tomboy",
      "ca tinh"
    ]
  },
  {
    "id": "Torture",
    "name": "Torture",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "torture"
    ]
  },
  {
    "id": "Tragedy",
    "name": "Tragedy (Bi kịch / Đau thương)",
    "type": "tag",
    "icon": "🥀",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "bi kich",
      "nuoc mat",
      "dau thuong"
    ]
  },
  {
    "id": "Trains",
    "name": "Trains (Đường sắt / Tàu hỏa)",
    "type": "tag",
    "icon": "🚂",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tau hoa",
      "duong sat"
    ]
  },
  {
    "id": "Transgender",
    "name": "Transgender",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "transgender"
    ]
  },
  {
    "id": "Travel",
    "name": "Travel",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "travel"
    ]
  },
  {
    "id": "Triads",
    "name": "Triads (Xã hội đen Hồng Kông / Tam Hoàng)",
    "type": "tag",
    "icon": "🐉",
    "category": "ACTION_COMBAT",
    "keywords": [
      "tam hoang",
      "xa hoi den hong kong"
    ]
  },
  {
    "id": "Tsundere",
    "name": "Tsundere (Ngoài lạnh trong ấm)",
    "type": "tag",
    "icon": "😤",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "tsundere",
      "ngoai lanh trong nong"
    ]
  },
  {
    "id": "Twins",
    "name": "Twins",
    "type": "tag",
    "icon": "🏷️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "twins"
    ]
  },
  {
    "id": "Unrequited Love",
    "name": "Unrequited Love (Yêu đơn phương)",
    "type": "tag",
    "icon": "💔",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "yeu don phuong",
      "mot chieu"
    ]
  },
  {
    "id": "Urban",
    "name": "Urban",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "urban"
    ]
  },
  {
    "id": "Urban Fantasy",
    "name": "Urban Fantasy (Kỳ ảo đô thị hiện đại)",
    "type": "tag",
    "icon": "🌆",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "ky ao do thi",
      "tu tien do thi",
      "hien dai"
    ]
  },
  {
    "id": "Vampire",
    "name": "Vampire (Ma cà rồng / Huyết tộc)",
    "type": "tag",
    "icon": "🧛",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "ma ca rong",
      "huyet toc",
      "vampire",
      "hut mau"
    ]
  },
  {
    "id": "Veterinarian",
    "name": "Veterinarian (Bác sĩ thú y)",
    "type": "tag",
    "icon": "🐕",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "bac si thu y"
    ]
  },
  {
    "id": "Video Games",
    "name": "Video Games (Hệ thống / Game thủ)",
    "type": "tag",
    "icon": "👾",
    "category": "SCIFI_GAME",
    "keywords": [
      "he thong",
      "game thu",
      "tro choi",
      "level",
      "thang cap",
      "rpg"
    ]
  },
  {
    "id": "Vikings",
    "name": "Vikings (Chiến binh Viking Bắc Âu)",
    "type": "tag",
    "icon": "🪓",
    "category": "ACTION_COMBAT",
    "keywords": [
      "viking",
      "vinland saga"
    ]
  },
  {
    "id": "Villainess",
    "name": "Villainess (Nữ phụ phản diện / Ác nữ)",
    "type": "tag",
    "icon": "👸",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "nu phu",
      "phan dien",
      "ac nu",
      "nhan vat phan dien"
    ]
  },
  {
    "id": "Virtual World",
    "name": "Virtual World (Thế giới ảo / VR)",
    "type": "tag",
    "icon": "🌐",
    "category": "SCIFI_GAME",
    "keywords": [
      "the gioi ao",
      "vr",
      "game online",
      "thuc te ao"
    ]
  },
  {
    "id": "Vocal Synth",
    "name": "Vocal Synth",
    "type": "tag",
    "icon": "🏷️",
    "category": "ALL_TAGS",
    "keywords": [
      "vocal synth"
    ]
  },
  {
    "id": "Volleyball",
    "name": "Volleyball (Bóng chuyền)",
    "type": "tag",
    "icon": "🏐",
    "category": "SPORTS_ARTS",
    "keywords": [
      "bong chuyen",
      "haikyuu"
    ]
  },
  {
    "id": "VTuber",
    "name": "VTuber (YouTuber ảo / VTuber)",
    "type": "tag",
    "icon": "🎙️",
    "category": "SPORTS_ARTS",
    "keywords": [
      "vtuber",
      "livestream"
    ]
  },
  {
    "id": "War",
    "name": "War (Chiến tranh / Khói lửa)",
    "type": "tag",
    "icon": "💣",
    "category": "ACTION_COMBAT",
    "keywords": [
      "chien tranh",
      "xung dot"
    ]
  },
  {
    "id": "Werewolf",
    "name": "Werewolf (Người sói / Lang tộc)",
    "type": "tag",
    "icon": "🐺",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "nguoi soi",
      "lang toc",
      "werewolf"
    ]
  },
  {
    "id": "Wilderness",
    "name": "Wilderness",
    "type": "tag",
    "icon": "🏷️",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "wilderness"
    ]
  },
  {
    "id": "Witch",
    "name": "Witch (Phù thủy / Vu nữ)",
    "type": "tag",
    "icon": "🧙‍♀️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "phu thuy",
      "vu nu",
      "witch"
    ]
  },
  {
    "id": "Work",
    "name": "Work Life (Công sở / Nghề nghiệp)",
    "type": "tag",
    "icon": "💼",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "cong so",
      "lam viec",
      "nghe nghiep"
    ]
  },
  {
    "id": "Wrestling",
    "name": "Wrestling",
    "type": "tag",
    "icon": "⚽",
    "category": "SPORTS_ARTS",
    "keywords": [
      "wrestling"
    ]
  },
  {
    "id": "Writing",
    "name": "Writing (Viết văn / Tác giả / Tiểu thuyết)",
    "type": "tag",
    "icon": "✍️",
    "category": "SPORTS_ARTS",
    "keywords": [
      "viet van",
      "tac gia",
      "tieu thuyet"
    ]
  },
  {
    "id": "Wuxia",
    "name": "Wuxia (Võ hiệp / Cổ phong)",
    "type": "tag",
    "icon": "🗡️",
    "category": "ISEKAI_CULTIVATION",
    "keywords": [
      "vo hiep",
      "giang ho",
      "kiem hiep",
      "co phong",
      "kiem khach"
    ]
  },
  {
    "id": "Yakuza",
    "name": "Yakuza (Yakuza Nhật Bản)",
    "type": "tag",
    "icon": "🗡️",
    "category": "ACTION_COMBAT",
    "keywords": [
      "yakuza",
      "giang ho nhat"
    ]
  },
  {
    "id": "Yandere",
    "name": "Yandere (Yêu cuồng điên / Chiếm hữu)",
    "type": "tag",
    "icon": "🔪",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "yandere",
      "yeu cuong dien",
      "chiem huu"
    ]
  },
  {
    "id": "Youkai",
    "name": "Youkai (Yêu quái Nhật Bản)",
    "type": "tag",
    "icon": "👺",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "yeu quai",
      "youkai"
    ]
  },
  {
    "id": "Yuri",
    "name": "Yuri (GL / Bách hợp)",
    "type": "tag",
    "icon": "👭",
    "category": "ROMANCE_SCHOOL",
    "keywords": [
      "bach hop",
      "yuri",
      "girls love",
      "gl",
      "nu x nu",
      "dong tinh nu"
    ]
  },
  {
    "id": "Zombie",
    "name": "Zombies (Xác sống / Tang thi)",
    "type": "tag",
    "icon": "🧟",
    "category": "MYSTERY_HORROR",
    "keywords": [
      "xac song",
      "zombie",
      "tang thi"
    ]
  }
];

export const GENRE_CATEGORIES = {
  "POPULAR": {
    "label": "🔥 Phổ biến nhất",
    "items": [
      {
        "id": "Action",
        "name": "Action (Hành động)",
        "type": "genre",
        "icon": "⚔️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "hanh dong",
          "danh nhau",
          "chien dau"
        ]
      },
      {
        "id": "Adventure",
        "name": "Adventure (Phiêu lưu)",
        "type": "genre",
        "icon": "🧭",
        "category": "POPULAR",
        "keywords": [
          "phieu luu",
          "kham pha",
          "hanh trinh"
        ]
      },
      {
        "id": "Comedy",
        "name": "Comedy (Hài hước / Bựa)",
        "type": "genre",
        "icon": "🤣",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hai huoc",
          "hai bua",
          "vui nhon",
          "cuoi"
        ]
      },
      {
        "id": "Drama",
        "name": "Drama (Kịch tính / Xúc động)",
        "type": "genre",
        "icon": "🎭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "kich tinh",
          "tam ly",
          "xuc dong"
        ]
      },
      {
        "id": "Fantasy",
        "name": "Fantasy (Kỳ ảo / Huyền huyễn)",
        "type": "genre",
        "icon": "🔮",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ky ao",
          "huyen ao",
          "ma ao",
          "huyen huyen"
        ]
      },
      {
        "id": "Romance",
        "name": "Romance (Tình cảm / Lãng mạn)",
        "type": "genre",
        "icon": "❤️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tinh cam",
          "lang man",
          "ngon tinh",
          "yeu duong"
        ]
      },
      {
        "id": "Cultivation",
        "name": "Cultivation (Tu tiên / Tu chân)",
        "type": "tag",
        "icon": "🧘‍♂️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tu tien",
          "tu chan",
          "dao gia",
          "phi thang",
          "tien hiep",
          "dan ton",
          "chan nhan",
          "tien ton",
          "kiem tien",
          "luyen khi",
          "kim dan",
          "nguyen anh"
        ]
      },
      {
        "id": "Dungeon",
        "name": "Dungeon (Hầm ngục / Phó bản)",
        "type": "tag",
        "icon": "🏰",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ham nguc",
          "pho ban",
          "thap",
          "tower",
          "boss",
          "gate"
        ]
      },
      {
        "id": "Ensemble Cast",
        "name": "Ensemble Cast (Dàn nhân vật đông đảo / Đa góc nhìn)",
        "type": "tag",
        "icon": "👥",
        "category": "POPULAR",
        "keywords": [
          "nhieu goc nhin",
          "tap the"
        ]
      },
      {
        "id": "Estranged Family",
        "name": "Estranged Family",
        "type": "tag",
        "icon": "🏷️",
        "category": "POPULAR",
        "keywords": [
          "estranged family"
        ]
      },
      {
        "id": "Female Harem",
        "name": "Harem (Nhiều nữ chính / Hậu cung)",
        "type": "tag",
        "icon": "👑",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "harem",
          "nhieu nu",
          "hau cung",
          "da the",
          "nhieu vo"
        ]
      },
      {
        "id": "Female Protagonist",
        "name": "Female Protagonist (Nữ chính xuất sắc)",
        "type": "tag",
        "icon": "👩",
        "category": "POPULAR",
        "keywords": [
          "nu chinh",
          "nu chu"
        ]
      },
      {
        "id": "Full Color",
        "name": "Full Color (Truyện tranh màu sắc nét)",
        "type": "tag",
        "icon": "🎨",
        "category": "POPULAR",
        "keywords": [
          "truyen mau",
          "full color",
          "manhwa mau",
          "manhua mau"
        ]
      },
      {
        "id": "Isekai",
        "name": "Isekai (Xuyên không / Thế giới khác)",
        "type": "tag",
        "icon": "🌀",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "chuyen sinh",
          "xuyen khong",
          "di gioi",
          "the gioi khac",
          "tai sinh di gioi"
        ]
      },
      {
        "id": "Long Strip",
        "name": "Long Strip (Đọc dạng cuộn dọc / Webtoon)",
        "type": "tag",
        "icon": "📜",
        "category": "POPULAR",
        "keywords": [
          "cuon doc",
          "webtoon",
          "long strip"
        ]
      },
      {
        "id": "Magic",
        "name": "Magic (Ma pháp / Phép thuật)",
        "type": "tag",
        "icon": "✨",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ma phap",
          "phep thuat",
          "phap su",
          "ma thuat",
          "phu thuy"
        ]
      },
      {
        "id": "Male Protagonist",
        "name": "Male Protagonist (Nam chính xuất sắc)",
        "type": "tag",
        "icon": "👦",
        "category": "POPULAR",
        "keywords": [
          "nam chinh",
          "nam chu"
        ]
      },
      {
        "id": "Martial Arts",
        "name": "Martial Arts (Võ thuật / Đấu khí)",
        "type": "tag",
        "icon": "🥋",
        "category": "ACTION_COMBAT",
        "keywords": [
          "vo thuat",
          "dau khi",
          "vo hiep",
          "kiem hiep",
          "quyen cuoc",
          "chan khi",
          "kungfu"
        ]
      },
      {
        "id": "Primarily Animal Cast",
        "name": "Primarily Animal Cast",
        "type": "tag",
        "icon": "🏷️",
        "category": "POPULAR",
        "keywords": [
          "primarily animal cast"
        ]
      },
      {
        "id": "Primarily Child Cast",
        "name": "Primarily Child Cast",
        "type": "tag",
        "icon": "🏷️",
        "category": "POPULAR",
        "keywords": [
          "primarily child cast"
        ]
      },
      {
        "id": "Primarily Teen Cast",
        "name": "Primarily Teen Cast",
        "type": "tag",
        "icon": "🏷️",
        "category": "POPULAR",
        "keywords": [
          "primarily teen cast"
        ]
      },
      {
        "id": "Reincarnation",
        "name": "Reincarnation (Trọng sinh / Tái sinh)",
        "type": "tag",
        "icon": "⏳",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "trong sinh",
          "tai sinh",
          "song lai",
          "hoi quy",
          "tro ve qua khu"
        ]
      },
      {
        "id": "School",
        "name": "School (Học đường / Trường học)",
        "type": "tag",
        "icon": "🏫",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hoc duong",
          "truong hoc",
          "hoc sinh",
          "lop hoc"
        ]
      },
      {
        "id": "Seinen",
        "name": "Seinen (Thanh niên / Trưởng thành 18+)",
        "type": "tag",
        "icon": "🧑",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "thanh nien",
          "truong thanh",
          "seinen"
        ]
      },
      {
        "id": "Shounen",
        "name": "Shounen (Thiếu niên nam)",
        "type": "tag",
        "icon": "👦",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "thieu nien",
          "nam",
          "shonen"
        ]
      },
      {
        "id": "Super Power",
        "name": "Super Power (Siêu năng lực)",
        "type": "tag",
        "icon": "💥",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sieu nang luc",
          "nang luc dac biet"
        ]
      },
      {
        "id": "Video Games",
        "name": "Video Games (Hệ thống / Game thủ)",
        "type": "tag",
        "icon": "👾",
        "category": "SCIFI_GAME",
        "keywords": [
          "he thong",
          "game thu",
          "tro choi",
          "level",
          "thang cap",
          "rpg"
        ]
      }
    ]
  },
  "ISEKAI_CULTIVATION": {
    "label": "🌀 Tu tiên & Xuyên không",
    "items": [
      {
        "id": "Fantasy",
        "name": "Fantasy (Kỳ ảo / Huyền huyễn)",
        "type": "genre",
        "icon": "🔮",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ky ao",
          "huyen ao",
          "ma ao",
          "huyen huyen"
        ]
      },
      {
        "id": "Mahou Shoujo",
        "name": "Mahou Shoujo (Thiếu nữ ma pháp)",
        "type": "genre",
        "icon": "🪄",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ma phap thieu nu",
          "mahou shoujo"
        ]
      },
      {
        "id": "Age Regression",
        "name": "Age Regression",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "age regression"
        ]
      },
      {
        "id": "Agender",
        "name": "Agender",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "agender"
        ]
      },
      {
        "id": "Alchemy",
        "name": "Alchemy (Giả kim thuật / Luyện đan)",
        "type": "tag",
        "icon": "🧪",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "gia kim",
          "luyen dan",
          "dan duoc",
          "thuoc"
        ]
      },
      {
        "id": "Ancient China",
        "name": "Ancient China (Cổ đại Trung Hoa)",
        "type": "tag",
        "icon": "🏯",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "trung hoa co dai",
          "trieu dinh"
        ]
      },
      {
        "id": "Angels",
        "name": "Angels (Thiên thần / Thiên tộc)",
        "type": "tag",
        "icon": "🪽",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "thien than",
          "thien toc"
        ]
      },
      {
        "id": "Anthropomorphism",
        "name": "Anthropomorphism",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "anthropomorphism"
        ]
      },
      {
        "id": "Aromantic",
        "name": "Aromantic",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "aromantic"
        ]
      },
      {
        "id": "Asexual",
        "name": "Asexual",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "asexual"
        ]
      },
      {
        "id": "Bisexual",
        "name": "Bisexual",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "bisexual"
        ]
      },
      {
        "id": "Body Swapping",
        "name": "Body Swapping (Hoán đổi thân xác)",
        "type": "tag",
        "icon": "🔄",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "hoan doi than xac",
          "doi xac"
        ]
      },
      {
        "id": "Centaur",
        "name": "Centaur",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "centaur"
        ]
      },
      {
        "id": "Chimera",
        "name": "Chimera",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "chimera"
        ]
      },
      {
        "id": "Clone",
        "name": "Clone",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "clone"
        ]
      },
      {
        "id": "Creature Taming",
        "name": "Creature Taming (Thuần thú / Nuôi thú cưng)",
        "type": "tag",
        "icon": "🦁",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "thuan thu",
          "huan luyen thu",
          "pokemon"
        ]
      },
      {
        "id": "Cultivation",
        "name": "Cultivation (Tu tiên / Tu chân)",
        "type": "tag",
        "icon": "🧘‍♂️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tu tien",
          "tu chan",
          "dao gia",
          "phi thang",
          "tien hiep",
          "dan ton",
          "chan nhan",
          "tien ton",
          "kiem tien",
          "luyen khi",
          "kim dan",
          "nguyen anh"
        ]
      },
      {
        "id": "Demons",
        "name": "Demons (Yêu ma / Ma tộc)",
        "type": "tag",
        "icon": "😈",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "yeu ma",
          "ma toc",
          "quy",
          "ac ma"
        ]
      },
      {
        "id": "Dinosaurs",
        "name": "Dinosaurs",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "dinosaurs"
        ]
      },
      {
        "id": "Disability",
        "name": "Disability",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "disability"
        ]
      },
      {
        "id": "Dissociative Identities",
        "name": "Dissociative Identities",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "dissociative identities"
        ]
      },
      {
        "id": "Dragons",
        "name": "Dragons (Long tộc / Rồng)",
        "type": "tag",
        "icon": "🐉",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "long toc",
          "rong",
          "dragon"
        ]
      },
      {
        "id": "Dullahan",
        "name": "Dullahan",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "dullahan"
        ]
      },
      {
        "id": "Dungeon",
        "name": "Dungeon (Hầm ngục / Phó bản)",
        "type": "tag",
        "icon": "🏰",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ham nguc",
          "pho ban",
          "thap",
          "tower",
          "boss",
          "gate"
        ]
      },
      {
        "id": "Elf",
        "name": "Elf (Yêu tinh Elf / Tộc Elf)",
        "type": "tag",
        "icon": "🧝",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "toc elf",
          "yeu tinh"
        ]
      },
      {
        "id": "Fairy",
        "name": "Fairy (Tiên nữ nhỏ)",
        "type": "tag",
        "icon": "🧚",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tien nu"
        ]
      },
      {
        "id": "Fairy Tale",
        "name": "Fairy Tale (Truyện cổ tích)",
        "type": "tag",
        "icon": "🧚",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "co tich",
          "than tien"
        ]
      },
      {
        "id": "Goblin",
        "name": "Goblin (Yêu tinh Goblin)",
        "type": "tag",
        "icon": "👺",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "goblin"
        ]
      },
      {
        "id": "Gods",
        "name": "Gods (Thần thánh / Tiên nhân)",
        "type": "tag",
        "icon": "⚡",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "than thanh",
          "tien nhan",
          "than thoai",
          "vi than"
        ]
      },
      {
        "id": "Homeless",
        "name": "Homeless",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "homeless"
        ]
      },
      {
        "id": "Isekai",
        "name": "Isekai (Xuyên không / Thế giới khác)",
        "type": "tag",
        "icon": "🌀",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "chuyen sinh",
          "xuyen khong",
          "di gioi",
          "the gioi khac",
          "tai sinh di gioi"
        ]
      },
      {
        "id": "Kemonomimi",
        "name": "Kemonomimi (Người tai thú / Đuôi thú)",
        "type": "tag",
        "icon": "🦊",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tai thu",
          "duoi thu",
          "kemonomimi"
        ]
      },
      {
        "id": "Kingdom Management",
        "name": "Kingdom Management (Xây dựng lãnh địa / Lãnh chúa)",
        "type": "tag",
        "icon": "👑",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "xay dung vuong quoc",
          "lanh dia",
          "lanh chua"
        ]
      },
      {
        "id": "Magic",
        "name": "Magic (Ma pháp / Phép thuật)",
        "type": "tag",
        "icon": "✨",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ma phap",
          "phep thuat",
          "phap su",
          "ma thuat",
          "phu thuy"
        ]
      },
      {
        "id": "Mermaid",
        "name": "Mermaid (Người cá / Mỹ nhân ngư)",
        "type": "tag",
        "icon": "🧜‍♀️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "nguoi ca",
          "my nhan ngu"
        ]
      },
      {
        "id": "Monster Boy",
        "name": "Monster Boy (Quái vật nhân hình nam)",
        "type": "tag",
        "icon": "🐺",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "quai vat nam",
          "monster boy"
        ]
      },
      {
        "id": "Monster Girl",
        "name": "Monster Girl (Quái vật nhân hình nữ)",
        "type": "tag",
        "icon": "🐾",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "quai vat nu",
          "monster girl"
        ]
      },
      {
        "id": "Mythology",
        "name": "Mythology (Thần thoại cổ xưa)",
        "type": "tag",
        "icon": "🏛️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "than thoai",
          "huyen thoai"
        ]
      },
      {
        "id": "Necromancy",
        "name": "Necromancy (Thuật chiêu hồn / Tử linh)",
        "type": "tag",
        "icon": "💀",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "chieu hon",
          "tu linh",
          "xac song",
          "goi hon"
        ]
      },
      {
        "id": "Nekomimi",
        "name": "Nekomimi (Người tai mèo / Neko)",
        "type": "tag",
        "icon": "🐱",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tai meo",
          "nekomimi"
        ]
      },
      {
        "id": "Nudity",
        "name": "Nudity",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "nudity"
        ]
      },
      {
        "id": "Nun",
        "name": "Nun",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "nun"
        ]
      },
      {
        "id": "Oiran",
        "name": "Oiran",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "oiran"
        ]
      },
      {
        "id": "Orphan",
        "name": "Orphan",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "orphan"
        ]
      },
      {
        "id": "Reincarnation",
        "name": "Reincarnation (Trọng sinh / Tái sinh)",
        "type": "tag",
        "icon": "⏳",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "trong sinh",
          "tai sinh",
          "song lai",
          "hoi quy",
          "tro ve qua khu"
        ]
      },
      {
        "id": "Reverse Isekai",
        "name": "Reverse Isekai (Chuyển sinh về hiện đại)",
        "type": "tag",
        "icon": "🔄",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "xuyen ve hien dai",
          "reverse isekai"
        ]
      },
      {
        "id": "Shapeshifting",
        "name": "Shapeshifting (Biến hình / Hóa hình)",
        "type": "tag",
        "icon": "🦊",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "bien hinh",
          "hoa hinh"
        ]
      },
      {
        "id": "Shrine Maiden",
        "name": "Shrine Maiden (Miko / Vu nữ đền thần)",
        "type": "tag",
        "icon": "⛩️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "miko",
          "vu nu"
        ]
      },
      {
        "id": "Skeleton",
        "name": "Skeleton (Bộ xương / Cốt tộc)",
        "type": "tag",
        "icon": "💀",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "bo xuong",
          "cot toc"
        ]
      },
      {
        "id": "Tanned Skin",
        "name": "Tanned Skin",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tanned skin"
        ]
      },
      {
        "id": "Teacher",
        "name": "Teacher",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "teacher"
        ]
      },
      {
        "id": "Transgender",
        "name": "Transgender",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "transgender"
        ]
      },
      {
        "id": "Twins",
        "name": "Twins",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "twins"
        ]
      },
      {
        "id": "Urban Fantasy",
        "name": "Urban Fantasy (Kỳ ảo đô thị hiện đại)",
        "type": "tag",
        "icon": "🌆",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ky ao do thi",
          "tu tien do thi",
          "hien dai"
        ]
      },
      {
        "id": "Witch",
        "name": "Witch (Phù thủy / Vu nữ)",
        "type": "tag",
        "icon": "🧙‍♀️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "phu thuy",
          "vu nu",
          "witch"
        ]
      },
      {
        "id": "Wuxia",
        "name": "Wuxia (Võ hiệp / Cổ phong)",
        "type": "tag",
        "icon": "🗡️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "vo hiep",
          "giang ho",
          "kiem hiep",
          "co phong",
          "kiem khach"
        ]
      }
    ]
  },
  "ACTION_COMBAT": {
    "label": "⚔️ Hành động & Chiến đấu",
    "items": [
      {
        "id": "Action",
        "name": "Action (Hành động)",
        "type": "genre",
        "icon": "⚔️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "hanh dong",
          "danh nhau",
          "chien dau"
        ]
      },
      {
        "id": "Anti-Hero",
        "name": "Anti-Hero (Phản anh hùng / Tà đạo)",
        "type": "tag",
        "icon": "🦇",
        "category": "ACTION_COMBAT",
        "keywords": [
          "phan anh hung",
          "chinh ta",
          "ta dao"
        ]
      },
      {
        "id": "Archery",
        "name": "Archery (Cung thuật / Bắn cung)",
        "type": "tag",
        "icon": "🏹",
        "category": "ACTION_COMBAT",
        "keywords": [
          "cung thuat",
          "ban cung",
          "cung thu"
        ]
      },
      {
        "id": "Assassins",
        "name": "Assassins (Sát thủ / Ám sát)",
        "type": "tag",
        "icon": "🗡️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sat thu",
          "am sat"
        ]
      },
      {
        "id": "Aviation",
        "name": "Aviation (Máy bay / Hàng không)",
        "type": "tag",
        "icon": "✈️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "may bay",
          "phi cong"
        ]
      },
      {
        "id": "Battle Royale",
        "name": "Battle Royale (Đấu trường sinh tử)",
        "type": "tag",
        "icon": "💥",
        "category": "ACTION_COMBAT",
        "keywords": [
          "dau truong sinh tu",
          "battle royale",
          "song con"
        ]
      },
      {
        "id": "Cars",
        "name": "Cars (Đua xe ô tô / Xe hơi)",
        "type": "tag",
        "icon": "🏎️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "dua xe",
          "o to",
          "initial d"
        ]
      },
      {
        "id": "Cowboys",
        "name": "Cowboys (Cao bồi miền Tây)",
        "type": "tag",
        "icon": "🤠",
        "category": "ACTION_COMBAT",
        "keywords": [
          "cao boi",
          "western"
        ]
      },
      {
        "id": "Criminal Organization",
        "name": "Criminal Organization (Tổ chức tội phạm)",
        "type": "tag",
        "icon": "🕶️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "to chuc toi pham",
          "bang dang"
        ]
      },
      {
        "id": "Delinquents",
        "name": "Delinquents (Bất lương / Đầu gấu học đường)",
        "type": "tag",
        "icon": "👊",
        "category": "ACTION_COMBAT",
        "keywords": [
          "bat luong",
          "dau gau",
          "gangster"
        ]
      },
      {
        "id": "Drugs",
        "name": "Drugs (Chất cấm / Ma túy)",
        "type": "tag",
        "icon": "💊",
        "category": "ACTION_COMBAT",
        "keywords": [
          "chat cam",
          "ma tuy"
        ]
      },
      {
        "id": "Espionage",
        "name": "Espionage (Điệp viên / Gián điệp)",
        "type": "tag",
        "icon": "🕵️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "diep vien",
          "gian diep"
        ]
      },
      {
        "id": "Firefighters",
        "name": "Firefighters (Lính cứu hỏa)",
        "type": "tag",
        "icon": "🚒",
        "category": "ACTION_COMBAT",
        "keywords": [
          "linh cuu hoa",
          "fire force"
        ]
      },
      {
        "id": "Fugitive",
        "name": "Fugitive (Đào tẩu / Bị truy nã)",
        "type": "tag",
        "icon": "🏃",
        "category": "ACTION_COMBAT",
        "keywords": [
          "dao tau",
          "truy na",
          "chay tron"
        ]
      },
      {
        "id": "Gambling",
        "name": "Gambling (Cờ bạc / Đỏ đen)",
        "type": "tag",
        "icon": "🎰",
        "category": "ACTION_COMBAT",
        "keywords": [
          "co bac",
          "do den",
          "danh bac"
        ]
      },
      {
        "id": "Gangs",
        "name": "Gangs (Băng nhóm đường phố)",
        "type": "tag",
        "icon": "🥊",
        "category": "ACTION_COMBAT",
        "keywords": [
          "bang nhom",
          "giang ho"
        ]
      },
      {
        "id": "Guns",
        "name": "Guns (Súng đạn / Xạ thủ)",
        "type": "tag",
        "icon": "🔫",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sung dan",
          "ban sung",
          "xa thu"
        ]
      },
      {
        "id": "Henshin",
        "name": "Henshin (Biến thân siêu anh hùng)",
        "type": "tag",
        "icon": "✨",
        "category": "ACTION_COMBAT",
        "keywords": [
          "bien than",
          "henshin",
          "sieu nhan"
        ]
      },
      {
        "id": "Human Experimentation",
        "name": "Human Experimentation (Thí nghiệm trên người)",
        "type": "tag",
        "icon": "🧪",
        "category": "ACTION_COMBAT",
        "keywords": [
          "thi nghiem nguoi"
        ]
      },
      {
        "id": "Kaiju",
        "name": "Kaiju (Quái vật khổng lồ)",
        "type": "tag",
        "icon": "🦖",
        "category": "ACTION_COMBAT",
        "keywords": [
          "quai vat khong lo",
          "kaiju",
          "godzilla"
        ]
      },
      {
        "id": "Mafia",
        "name": "Mafia (Băng đảng Mafia)",
        "type": "tag",
        "icon": "🕶️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "mafia",
          "xa hoi den"
        ]
      },
      {
        "id": "Martial Arts",
        "name": "Martial Arts (Võ thuật / Đấu khí)",
        "type": "tag",
        "icon": "🥋",
        "category": "ACTION_COMBAT",
        "keywords": [
          "vo thuat",
          "dau khi",
          "vo hiep",
          "kiem hiep",
          "quyen cuoc",
          "chan khi",
          "kungfu"
        ]
      },
      {
        "id": "Military",
        "name": "Military (Quân sự / Chiến tranh)",
        "type": "tag",
        "icon": "🪖",
        "category": "ACTION_COMBAT",
        "keywords": [
          "quan su",
          "chien tranh",
          "quan doi",
          "vu khi"
        ]
      },
      {
        "id": "Mopeds",
        "name": "Mopeds",
        "type": "tag",
        "icon": "🏷️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "mopeds"
        ]
      },
      {
        "id": "Motorcycles",
        "name": "Motorcycles (Đua mô tô / Xe máy)",
        "type": "tag",
        "icon": "🏍️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "dua xe may",
          "mo to"
        ]
      },
      {
        "id": "Ninja",
        "name": "Ninja (Nhẫn giả / Ninja)",
        "type": "tag",
        "icon": "🥷",
        "category": "ACTION_COMBAT",
        "keywords": [
          "ninja",
          "nhan gia",
          "naruto"
        ]
      },
      {
        "id": "Pirates",
        "name": "Pirates (Hải tặc / Cướp biển)",
        "type": "tag",
        "icon": "🏴‍☠️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "hai tac",
          "cuop bien",
          "one piece"
        ]
      },
      {
        "id": "Police",
        "name": "Police (Cảnh sát / Hình sự)",
        "type": "tag",
        "icon": "👮",
        "category": "ACTION_COMBAT",
        "keywords": [
          "canh sat",
          "hinh su",
          "cong an"
        ]
      },
      {
        "id": "Politics",
        "name": "Politics (Chính trị / Quyền mưu)",
        "type": "tag",
        "icon": "🏛️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "chinh tri",
          "quyen muu",
          "dau da"
        ]
      },
      {
        "id": "Primarily Male Cast",
        "name": "Male Cast (Chủ yếu nhân vật nam)",
        "type": "tag",
        "icon": "👬",
        "category": "ACTION_COMBAT",
        "keywords": [
          "toan nam"
        ]
      },
      {
        "id": "Revenge",
        "name": "Revenge (Báo thù / Trả thù)",
        "type": "tag",
        "icon": "🔥",
        "category": "ACTION_COMBAT",
        "keywords": [
          "bao thu",
          "tra thu",
          "phuc thu"
        ]
      },
      {
        "id": "Samurai",
        "name": "Samurai (Võ sĩ đạo Samurai)",
        "type": "tag",
        "icon": "⚔️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "samurai",
          "vo si dao"
        ]
      },
      {
        "id": "Ships",
        "name": "Ships (Tàu thủy / Hải quân)",
        "type": "tag",
        "icon": "🚢",
        "category": "ACTION_COMBAT",
        "keywords": [
          "tau thuy",
          "hai quan"
        ]
      },
      {
        "id": "Slavery",
        "name": "Slavery (Nô lệ / Giải phóng nô lệ)",
        "type": "tag",
        "icon": "⛓️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "no le",
          "giai phong"
        ]
      },
      {
        "id": "Spearplay",
        "name": "Spearplay (Thương thuật / Dùng thương)",
        "type": "tag",
        "icon": "🔱",
        "category": "ACTION_COMBAT",
        "keywords": [
          "thuong thuat",
          "giao thuat"
        ]
      },
      {
        "id": "Super Power",
        "name": "Super Power (Siêu năng lực)",
        "type": "tag",
        "icon": "💥",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sieu nang luc",
          "nang luc dac biet"
        ]
      },
      {
        "id": "Superhero",
        "name": "Superhero (Siêu anh hùng)",
        "type": "tag",
        "icon": "🦸",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sieu anh hung",
          "hero"
        ]
      },
      {
        "id": "Survival",
        "name": "Survival (Sinh tồn)",
        "type": "tag",
        "icon": "⛺",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sinh ton",
          "song con",
          "hoang dao"
        ]
      },
      {
        "id": "Swordplay",
        "name": "Swordplay (Kiếm đạo / Kiếm thuật)",
        "type": "tag",
        "icon": "🗡️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "kiem thuat",
          "kiem dao",
          "dung kiem",
          "kiem si"
        ]
      },
      {
        "id": "Tanks",
        "name": "Tanks (Xe tăng / Thiết giáp)",
        "type": "tag",
        "icon": "🎖️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "xe tang",
          "girls und panzer"
        ]
      },
      {
        "id": "Tokusatsu",
        "name": "Tokusatsu (Hiệp sĩ mặt nạ / Tokusatsu)",
        "type": "tag",
        "icon": "🦸",
        "category": "ACTION_COMBAT",
        "keywords": [
          "tokusatsu",
          "kamen rider"
        ]
      },
      {
        "id": "Triads",
        "name": "Triads (Xã hội đen Hồng Kông / Tam Hoàng)",
        "type": "tag",
        "icon": "🐉",
        "category": "ACTION_COMBAT",
        "keywords": [
          "tam hoang",
          "xa hoi den hong kong"
        ]
      },
      {
        "id": "Vikings",
        "name": "Vikings (Chiến binh Viking Bắc Âu)",
        "type": "tag",
        "icon": "🪓",
        "category": "ACTION_COMBAT",
        "keywords": [
          "viking",
          "vinland saga"
        ]
      },
      {
        "id": "War",
        "name": "War (Chiến tranh / Khói lửa)",
        "type": "tag",
        "icon": "💣",
        "category": "ACTION_COMBAT",
        "keywords": [
          "chien tranh",
          "xung dot"
        ]
      },
      {
        "id": "Yakuza",
        "name": "Yakuza (Yakuza Nhật Bản)",
        "type": "tag",
        "icon": "🗡️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "yakuza",
          "giang ho nhat"
        ]
      }
    ]
  },
  "ROMANCE_SCHOOL": {
    "label": "❤️ Tình cảm & Đời thường",
    "items": [
      {
        "id": "Comedy",
        "name": "Comedy (Hài hước / Bựa)",
        "type": "genre",
        "icon": "🤣",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hai huoc",
          "hai bua",
          "vui nhon",
          "cuoi"
        ]
      },
      {
        "id": "Drama",
        "name": "Drama (Kịch tính / Xúc động)",
        "type": "genre",
        "icon": "🎭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "kich tinh",
          "tam ly",
          "xuc dong"
        ]
      },
      {
        "id": "Ecchi",
        "name": "Ecchi (Gợi cảm / 16+)",
        "type": "genre",
        "icon": "🔞",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "goi cam",
          "ecchi",
          "nong bong",
          "16+"
        ]
      },
      {
        "id": "Hentai",
        "name": "Hentai (18+ Người lớn)",
        "type": "genre",
        "icon": "🔞",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "18+",
          "nguoi lon"
        ]
      },
      {
        "id": "Romance",
        "name": "Romance (Tình cảm / Lãng mạn)",
        "type": "genre",
        "icon": "❤️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tinh cam",
          "lang man",
          "ngon tinh",
          "yeu duong"
        ]
      },
      {
        "id": "Slice of Life",
        "name": "Slice of Life (Đời thường / Bình yên)",
        "type": "genre",
        "icon": "☕",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "doi thuong",
          "hang ngay",
          "binh yen",
          "nhe nhang"
        ]
      },
      {
        "id": "4-koma",
        "name": "4-koma (Truyện tranh 4 khung hài)",
        "type": "tag",
        "icon": "📰",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "4 khung",
          "4-koma",
          "yonkoma"
        ]
      },
      {
        "id": "Adoption",
        "name": "Adoption (Nhận nuôi / Con nuôi)",
        "type": "tag",
        "icon": "🤝",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "con nuoi",
          "nhan nuoi"
        ]
      },
      {
        "id": "Age Gap",
        "name": "Age Gap (Chênh lệch tuổi tác)",
        "type": "tag",
        "icon": "⏳",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "chenh lech tuoi",
          "tinh chi em",
          "chu chau"
        ]
      },
      {
        "id": "Agriculture",
        "name": "Agriculture (Nông nghiệp / Làm ruộng)",
        "type": "tag",
        "icon": "🌾",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nong nghiep",
          "lam ruong",
          "trong trot"
        ]
      },
      {
        "id": "Animals",
        "name": "Animals (Động vật / Thú cưng)",
        "type": "tag",
        "icon": "🐱",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "dong vat",
          "thu cung",
          "cho meo"
        ]
      },
      {
        "id": "Anthology",
        "name": "Anthology (Tuyển tập truyện ngắn)",
        "type": "tag",
        "icon": "📚",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tuyen tap",
          "truyen ngan"
        ]
      },
      {
        "id": "Arranged Marriage",
        "name": "Arranged Marriage (Hôn nhân sắp đặt)",
        "type": "tag",
        "icon": "💍",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hon nhan sap dat",
          "cuoi truoc yeu sau"
        ]
      },
      {
        "id": "Autobiographical",
        "name": "Autobiographical (Tự truyện)",
        "type": "tag",
        "icon": "📔",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tu truyen"
        ]
      },
      {
        "id": "Bar",
        "name": "Bar",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bar"
        ]
      },
      {
        "id": "Biographical",
        "name": "Biographical (Tiểu sử nhân vật)",
        "type": "tag",
        "icon": "📖",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tieu su"
        ]
      },
      {
        "id": "Boarding School",
        "name": "Boarding School (Trường nội trú)",
        "type": "tag",
        "icon": "🏰",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "truong noi tru"
        ]
      },
      {
        "id": "Boys' Love",
        "name": "Boys' Love (BL / Đam mỹ)",
        "type": "tag",
        "icon": "👬",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "dam my",
          "bl",
          "boys love",
          "danmei",
          "nam x nam",
          "dong tinh nam"
        ]
      },
      {
        "id": "Bullying",
        "name": "Bullying (Bạo lực học đường)",
        "type": "tag",
        "icon": "💥",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bao luc hoc duong",
          "bat nat"
        ]
      },
      {
        "id": "Butler",
        "name": "Butler (Quản gia)",
        "type": "tag",
        "icon": "🤵",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "quan gia",
          "butler"
        ]
      },
      {
        "id": "Camping",
        "name": "Camping",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "camping"
        ]
      },
      {
        "id": "Cheating",
        "name": "Cheating (Ngoại tình / Bắt cá hai tay)",
        "type": "tag",
        "icon": "⚡",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "ngoai tinh",
          "phan boi"
        ]
      },
      {
        "id": "Chuunibyou",
        "name": "Chuunibyou (Hội chứng ảo tưởng tuổi dậy thì)",
        "type": "tag",
        "icon": "👁️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "ao tuong",
          "chuunibyou"
        ]
      },
      {
        "id": "Circus",
        "name": "Circus",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "circus"
        ]
      },
      {
        "id": "Class Struggle",
        "name": "Class Struggle (Đấu tranh giai cấp / Quý tộc)",
        "type": "tag",
        "icon": "⚖️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "dau tranh giai cap",
          "quy toc"
        ]
      },
      {
        "id": "Coastal",
        "name": "Coastal",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "coastal"
        ]
      },
      {
        "id": "Cohabitation",
        "name": "Cohabitation (Sống chung một nhà)",
        "type": "tag",
        "icon": "🏠",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "song chung",
          "o chung nha"
        ]
      },
      {
        "id": "College",
        "name": "College (Đại học / Sinh viên)",
        "type": "tag",
        "icon": "🎓",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "dai hoc",
          "sinh vien"
        ]
      },
      {
        "id": "Coming of Age",
        "name": "Coming of Age (Quá trình trưởng thành)",
        "type": "tag",
        "icon": "🌱",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "truong thanh",
          "buoc vao doi"
        ]
      },
      {
        "id": "Crossdressing",
        "name": "Crossdressing (Giả gái / Giả trai)",
        "type": "tag",
        "icon": "👗",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gia gai",
          "gia trai"
        ]
      },
      {
        "id": "Cute Boys Doing Cute Things",
        "name": "Cute Boys (Các chàng trai dễ thương)",
        "type": "tag",
        "icon": "✨",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "trai dep",
          "cute boys"
        ]
      },
      {
        "id": "Cute Girls Doing Cute Things",
        "name": "Cute Girls (Các cô gái dễ thương / CGDCT)",
        "type": "tag",
        "icon": "🎀",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gai xinh",
          "cgdct",
          "moe"
        ]
      },
      {
        "id": "Desert",
        "name": "Desert",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "desert"
        ]
      },
      {
        "id": "Eco-Horror",
        "name": "Eco-Horror",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "eco-horror"
        ]
      },
      {
        "id": "Economics",
        "name": "Economics (Kinh tế / Làm giàu)",
        "type": "tag",
        "icon": "💰",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "kinh te",
          "kinh doanh",
          "lam giau",
          "kiem tien"
        ]
      },
      {
        "id": "Elderly Protagonist",
        "name": "Elderly Protagonist (Nhân vật chính lớn tuổi / Cụ già)",
        "type": "tag",
        "icon": "👴",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nhan vat chinh gia",
          "cu gia"
        ]
      },
      {
        "id": "Environmental",
        "name": "Environmental (Môi trường / Thiên nhiên)",
        "type": "tag",
        "icon": "🌍",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "moi truong",
          "thien nhien"
        ]
      },
      {
        "id": "Episodic",
        "name": "Episodic (Từng mẩu chuyện độc lập)",
        "type": "tag",
        "icon": "📺",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tung mau chuyen"
        ]
      },
      {
        "id": "Fake Relationship",
        "name": "Fake Relationship (Hợp đồng tình yêu / Giả vờ yêu)",
        "type": "tag",
        "icon": "🤝",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hop dong tinh yeu",
          "nguoi yeu gia"
        ]
      },
      {
        "id": "Family Life",
        "name": "Family Life (Gia đình / Nuôi con)",
        "type": "tag",
        "icon": "🏡",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gia dinh",
          "nuoi con",
          "cha con",
          "me con"
        ]
      },
      {
        "id": "Female Harem",
        "name": "Harem (Nhiều nữ chính / Hậu cung)",
        "type": "tag",
        "icon": "👑",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "harem",
          "nhieu nu",
          "hau cung",
          "da the",
          "nhieu vo"
        ]
      },
      {
        "id": "Femboy",
        "name": "Femboy (Chàng trai dễ thương / Femboy)",
        "type": "tag",
        "icon": "🎀",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "femboy",
          "de thuong"
        ]
      },
      {
        "id": "Food",
        "name": "Food (Món ngon / Ăn uống)",
        "type": "tag",
        "icon": "🍜",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "mon ngon",
          "an uong"
        ]
      },
      {
        "id": "Foreign",
        "name": "Foreign",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "foreign"
        ]
      },
      {
        "id": "Found Family",
        "name": "Found Family (Gia đình tình thương)",
        "type": "tag",
        "icon": "🫂",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gia dinh khong huyet thong"
        ]
      },
      {
        "id": "Gender Bending",
        "name": "Gender Bending (Chuyển đổi giới tính)",
        "type": "tag",
        "icon": "⚧️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "chuyen doi gioi tinh",
          "bien nam thanh nu",
          "bien nu thanh nam"
        ]
      },
      {
        "id": "Gyaru",
        "name": "Gyaru (Cô nàng cá tính Gyaru)",
        "type": "tag",
        "icon": "💅",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gyaru",
          "ca tinh"
        ]
      },
      {
        "id": "Heterosexual",
        "name": "Heterosexual (Nam Nữ / Ngôn tình truyền thống)",
        "type": "tag",
        "icon": "👫",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nam nu",
          "ngon tinh"
        ]
      },
      {
        "id": "Hikikomori",
        "name": "Hikikomori (Sống khép kín / Ở nhà)",
        "type": "tag",
        "icon": "🚪",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "o nha",
          "khong ra ngoai",
          "hikikomori"
        ]
      },
      {
        "id": "Horticulture",
        "name": "Horticulture",
        "type": "tag",
        "icon": "☕",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "horticulture"
        ]
      },
      {
        "id": "Incest",
        "name": "Incest",
        "type": "tag",
        "icon": "❤️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "incest"
        ]
      },
      {
        "id": "Inn",
        "name": "Inn",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "inn"
        ]
      },
      {
        "id": "Inseki",
        "name": "Inseki (Quan hệ họ hàng không huyết thống)",
        "type": "tag",
        "icon": "🏡",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "ho hang",
          "con rieng"
        ]
      },
      {
        "id": "Interspecies",
        "name": "Interspecies (Tình yêu dị tộc / Khác loài)",
        "type": "tag",
        "icon": "🐾",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "di toc",
          "khac loai"
        ]
      },
      {
        "id": "Iyashikei",
        "name": "Iyashikei (Chữa lành / Thư giãn tâm hồn)",
        "type": "tag",
        "icon": "🌸",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "chua lanh",
          "thu gian",
          "binh yen",
          "iyashikei"
        ]
      },
      {
        "id": "Konbini",
        "name": "Konbini",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "konbini"
        ]
      },
      {
        "id": "Kuudere",
        "name": "Kuudere (Lạnh lùng / Ít nói)",
        "type": "tag",
        "icon": "🧊",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "kuudere",
          "lanh lung"
        ]
      },
      {
        "id": "LGBTQ+ Themes",
        "name": "LGBTQ+ (Chủ đề LGBTQ+ đa dạng)",
        "type": "tag",
        "icon": "🏳️‍🌈",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "lgbt",
          "lgbtq"
        ]
      },
      {
        "id": "Love Triangle",
        "name": "Love Triangle (Tình tay ba)",
        "type": "tag",
        "icon": "🔺",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tinh tay ba",
          "tam giac tinh yeu"
        ]
      },
      {
        "id": "Maids",
        "name": "Maids (Hầu gái / Maid)",
        "type": "tag",
        "icon": "🧹",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hau gai",
          "maid"
        ]
      },
      {
        "id": "Male Harem",
        "name": "Harem Nam (Nhiều nam chính / Ngược harem)",
        "type": "tag",
        "icon": "🤴",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "harem nam",
          "nhieu nam",
          "reverse harem"
        ]
      },
      {
        "id": "Matchmaking",
        "name": "Matchmaking (Mai mối / Xem mắt)",
        "type": "tag",
        "icon": "💌",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "mai moi",
          "xem mat"
        ]
      },
      {
        "id": "Medicine",
        "name": "Medicine (Y học / Bác sĩ / Trị liệu)",
        "type": "tag",
        "icon": "🩺",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "y hoc",
          "bac si",
          "chua benh"
        ]
      },
      {
        "id": "Mixed Gender Harem",
        "name": "Mixed Harem (Hậu cung hỗn hợp)",
        "type": "tag",
        "icon": "👥",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "harem hon hop"
        ]
      },
      {
        "id": "Natural Disaster",
        "name": "Natural Disaster",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "natural disaster"
        ]
      },
      {
        "id": "Non-fiction",
        "name": "Non-fiction (Phi hư cấu / Chuyện có thật)",
        "type": "tag",
        "icon": "📰",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "phi hu cau",
          "co that"
        ]
      },
      {
        "id": "Office",
        "name": "Office",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "office"
        ]
      },
      {
        "id": "Office Lady",
        "name": "Office Lady (Nữ nhân viên văn phòng)",
        "type": "tag",
        "icon": "👠",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nu van phong",
          "ol"
        ]
      },
      {
        "id": "Ojou-sama",
        "name": "Ojou-sama (Tiểu thư đài các)",
        "type": "tag",
        "icon": "💎",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tieu thu",
          "nha giau"
        ]
      },
      {
        "id": "Otaku Culture",
        "name": "Otaku Culture (Văn hóa Otaku / Wibu)",
        "type": "tag",
        "icon": "🤓",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "otaku",
          "wibu",
          "anime manga"
        ]
      },
      {
        "id": "Outdoor Activities",
        "name": "Outdoor Activities",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "outdoor activities"
        ]
      },
      {
        "id": "Parenthood",
        "name": "Parenthood (Làm cha mẹ)",
        "type": "tag",
        "icon": "🍼",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "lam cha me",
          "nuoi em be"
        ]
      },
      {
        "id": "Parody",
        "name": "Parody (Nhại lại / Châm biếm hài)",
        "type": "tag",
        "icon": "🎭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nhai lai",
          "parody",
          "gintama"
        ]
      },
      {
        "id": "Polyamorous",
        "name": "Polyamorous (Đa ái / Nhiều bạn đời)",
        "type": "tag",
        "icon": "💞",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "da ai"
        ]
      },
      {
        "id": "Poverty",
        "name": "Poverty",
        "type": "tag",
        "icon": "☕",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "poverty"
        ]
      },
      {
        "id": "Primarily Female Cast",
        "name": "Female Cast (Chủ yếu nhân vật nữ)",
        "type": "tag",
        "icon": "👭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "toan nu"
        ]
      },
      {
        "id": "Prison",
        "name": "Prison",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "prison"
        ]
      },
      {
        "id": "Rehabilitation",
        "name": "Rehabilitation",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "rehabilitation"
        ]
      },
      {
        "id": "Restaurant",
        "name": "Restaurant",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "restaurant"
        ]
      },
      {
        "id": "Rural",
        "name": "Rural",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "rural"
        ]
      },
      {
        "id": "Satire",
        "name": "Satire",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "satire"
        ]
      },
      {
        "id": "School",
        "name": "School (Học đường / Trường học)",
        "type": "tag",
        "icon": "🏫",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hoc duong",
          "truong hoc",
          "hoc sinh",
          "lop hoc"
        ]
      },
      {
        "id": "School Club",
        "name": "School Club (Câu lạc bộ học đường)",
        "type": "tag",
        "icon": "🎪",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "cau lac bo",
          "clb"
        ]
      },
      {
        "id": "Short-Form Chapter",
        "name": "Short Chapter (Chương ngắn)",
        "type": "tag",
        "icon": "📄",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "chuong ngan"
        ]
      },
      {
        "id": "Slapstick",
        "name": "Slapstick",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "slapstick"
        ]
      },
      {
        "id": "Snowscape",
        "name": "Snowscape",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "snowscape"
        ]
      },
      {
        "id": "Succubus",
        "name": "Succubus (Nữ quỷ quyến rũ)",
        "type": "tag",
        "icon": "😈",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nu quy",
          "succubus"
        ]
      },
      {
        "id": "Suicide",
        "name": "Suicide",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "suicide"
        ]
      },
      {
        "id": "Surreal Comedy",
        "name": "Surreal Comedy",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "surreal comedy"
        ]
      },
      {
        "id": "Teens' Love",
        "name": "Teens' Love (Tình yêu lãng mạn tuổi teen)",
        "type": "tag",
        "icon": "💖",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "teens love",
          "tinh yeu tuoi tre"
        ]
      },
      {
        "id": "Time Skip",
        "name": "Time Skip (Bỏ qua thời gian / Lớn lên)",
        "type": "tag",
        "icon": "⏩",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "time skip",
          "nhay coc thoi gian"
        ]
      },
      {
        "id": "Tomboy",
        "name": "Tomboy (Cô nàng cá tính / Tomboy)",
        "type": "tag",
        "icon": "🧢",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tomboy",
          "ca tinh"
        ]
      },
      {
        "id": "Tragedy",
        "name": "Tragedy (Bi kịch / Đau thương)",
        "type": "tag",
        "icon": "🥀",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bi kich",
          "nuoc mat",
          "dau thuong"
        ]
      },
      {
        "id": "Trains",
        "name": "Trains (Đường sắt / Tàu hỏa)",
        "type": "tag",
        "icon": "🚂",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tau hoa",
          "duong sat"
        ]
      },
      {
        "id": "Tsundere",
        "name": "Tsundere (Ngoài lạnh trong ấm)",
        "type": "tag",
        "icon": "😤",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tsundere",
          "ngoai lanh trong nong"
        ]
      },
      {
        "id": "Unrequited Love",
        "name": "Unrequited Love (Yêu đơn phương)",
        "type": "tag",
        "icon": "💔",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "yeu don phuong",
          "mot chieu"
        ]
      },
      {
        "id": "Urban",
        "name": "Urban",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "urban"
        ]
      },
      {
        "id": "Veterinarian",
        "name": "Veterinarian (Bác sĩ thú y)",
        "type": "tag",
        "icon": "🐕",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bac si thu y"
        ]
      },
      {
        "id": "Villainess",
        "name": "Villainess (Nữ phụ phản diện / Ác nữ)",
        "type": "tag",
        "icon": "👸",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nu phu",
          "phan dien",
          "ac nu",
          "nhan vat phan dien"
        ]
      },
      {
        "id": "Wilderness",
        "name": "Wilderness",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "wilderness"
        ]
      },
      {
        "id": "Work",
        "name": "Work Life (Công sở / Nghề nghiệp)",
        "type": "tag",
        "icon": "💼",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "cong so",
          "lam viec",
          "nghe nghiep"
        ]
      },
      {
        "id": "Yandere",
        "name": "Yandere (Yêu cuồng điên / Chiếm hữu)",
        "type": "tag",
        "icon": "🔪",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "yandere",
          "yeu cuong dien",
          "chiem huu"
        ]
      },
      {
        "id": "Yuri",
        "name": "Yuri (GL / Bách hợp)",
        "type": "tag",
        "icon": "👭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bach hop",
          "yuri",
          "girls love",
          "gl",
          "nu x nu",
          "dong tinh nu"
        ]
      }
    ]
  },
  "MYSTERY_HORROR": {
    "label": "🕵️ Bí ẩn & Kinh dị",
    "items": [
      {
        "id": "Horror",
        "name": "Horror (Kinh dị / Rùng rợn)",
        "type": "genre",
        "icon": "🩸",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "kinh di",
          "ma",
          "rung ron",
          "am anh"
        ]
      },
      {
        "id": "Mystery",
        "name": "Mystery (Bí ẩn / Trinh thám)",
        "type": "genre",
        "icon": "🕵️",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "bi an",
          "pha an",
          "trinh tham",
          "dieu tra"
        ]
      },
      {
        "id": "Psychological",
        "name": "Psychological (Tâm lý / Đấu trí)",
        "type": "genre",
        "icon": "🧠",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tam ly",
          "xoan nao",
          "dau tri"
        ]
      },
      {
        "id": "Supernatural",
        "name": "Supernatural (Siêu nhiên / Thần bí)",
        "type": "genre",
        "icon": "👻",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "sieu nhien",
          "huyen bi",
          "tam linh"
        ]
      },
      {
        "id": "Thriller",
        "name": "Thriller (Hồi hộp / Giật gân)",
        "type": "genre",
        "icon": "😱",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "giat gan",
          "hoi hop",
          "nghet tho"
        ]
      },
      {
        "id": "Amnesia",
        "name": "Amnesia (Mất trí nhớ)",
        "type": "tag",
        "icon": "❓",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "mat tri nho",
          "quen qua khu"
        ]
      },
      {
        "id": "Body Horror",
        "name": "Body Horror (Kinh dị biến dạng cơ thể)",
        "type": "tag",
        "icon": "🧟",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "bien dang co the",
          "body horror"
        ]
      },
      {
        "id": "Brainwashing",
        "name": "Brainwashing (Tẩy não / Thao túng tâm lý)",
        "type": "tag",
        "icon": "🌀",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tay nao",
          "thao tung tam ly"
        ]
      },
      {
        "id": "Conspiracy",
        "name": "Conspiracy (Âm mưu / Thuyết âm mưu)",
        "type": "tag",
        "icon": "🕵️",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "am muu",
          "thuyet am muu"
        ]
      },
      {
        "id": "Cosmic Horror",
        "name": "Cosmic Horror (Kinh dị vũ trụ Cthulhu)",
        "type": "tag",
        "icon": "🐙",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "cthulhu",
          "kinh di vu tru"
        ]
      },
      {
        "id": "Cult",
        "name": "Cult (Tà giáo / Tà phái)",
        "type": "tag",
        "icon": "🕯️",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "ta giao",
          "giao phai"
        ]
      },
      {
        "id": "Curses",
        "name": "Curses (Lời nguyền / Trù ếm)",
        "type": "tag",
        "icon": "🧿",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "loi nguyen",
          "tru em"
        ]
      },
      {
        "id": "Death Game",
        "name": "Death Game (Trò chơi sinh tử)",
        "type": "tag",
        "icon": "🎯",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tro choi sinh tu",
          "death game"
        ]
      },
      {
        "id": "Detective",
        "name": "Detective (Thám tử / Phá án)",
        "type": "tag",
        "icon": "🔍",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tham tu",
          "pha an",
          "conan"
        ]
      },
      {
        "id": "Exorcism",
        "name": "Exorcism (Trừ tà / Trừ ma)",
        "type": "tag",
        "icon": "📿",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tru ta",
          "tru ma",
          "phong an"
        ]
      },
      {
        "id": "Ghost",
        "name": "Ghost (Hồn ma / Linh hồn)",
        "type": "tag",
        "icon": "👻",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "hon ma",
          "linh hon",
          "bong ma"
        ]
      },
      {
        "id": "Gore",
        "name": "Gore (Máu me / Tàn khốc)",
        "type": "tag",
        "icon": "🩸",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "mau me",
          "tan khoc",
          "kinh di mau"
        ]
      },
      {
        "id": "Memory Manipulation",
        "name": "Memory Manipulation (Sửa đổi ký ức)",
        "type": "tag",
        "icon": "🧠",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "sua ky uc",
          "thao tung ky uc"
        ]
      },
      {
        "id": "Pandemic",
        "name": "Pandemic (Đại dịch / Bệnh dịch lây lan)",
        "type": "tag",
        "icon": "☣️",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "dai dich",
          "dich benh"
        ]
      },
      {
        "id": "Philosophy",
        "name": "Philosophy (Triết học / Chiêm nghiệm sâu sắc)",
        "type": "tag",
        "icon": "📖",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "triet hoc",
          "chieu sau"
        ]
      },
      {
        "id": "Vampire",
        "name": "Vampire (Ma cà rồng / Huyết tộc)",
        "type": "tag",
        "icon": "🧛",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "ma ca rong",
          "huyet toc",
          "vampire",
          "hut mau"
        ]
      },
      {
        "id": "Werewolf",
        "name": "Werewolf (Người sói / Lang tộc)",
        "type": "tag",
        "icon": "🐺",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "nguoi soi",
          "lang toc",
          "werewolf"
        ]
      },
      {
        "id": "Youkai",
        "name": "Youkai (Yêu quái Nhật Bản)",
        "type": "tag",
        "icon": "👺",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "yeu quai",
          "youkai"
        ]
      },
      {
        "id": "Zombie",
        "name": "Zombies (Xác sống / Tang thi)",
        "type": "tag",
        "icon": "🧟",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "xac song",
          "zombie",
          "tang thi"
        ]
      }
    ]
  },
  "SCIFI_GAME": {
    "label": "🚀 Viễn tưởng & Game",
    "items": [
      {
        "id": "Mecha",
        "name": "Mecha (Người máy / Robot)",
        "type": "genre",
        "icon": "🤖",
        "category": "SCIFI_GAME",
        "keywords": [
          "nguoi may",
          "robot",
          "co giap",
          "gundam"
        ]
      },
      {
        "id": "Sci-Fi",
        "name": "Sci-Fi (Khoa học viễn tưởng)",
        "type": "genre",
        "icon": "🚀",
        "category": "SCIFI_GAME",
        "keywords": [
          "khoa hoc",
          "vien tuong",
          "tuong lai"
        ]
      },
      {
        "id": "Afterlife",
        "name": "Afterlife",
        "type": "tag",
        "icon": "🌌",
        "category": "SCIFI_GAME",
        "keywords": [
          "afterlife"
        ]
      },
      {
        "id": "Aliens",
        "name": "Aliens (Người ngoài hành tinh)",
        "type": "tag",
        "icon": "👽",
        "category": "SCIFI_GAME",
        "keywords": [
          "nguoi ngoai hanh tinh",
          "alien"
        ]
      },
      {
        "id": "Alternate Universe",
        "name": "Alternate Universe (Vũ trụ song song)",
        "type": "tag",
        "icon": "🌌",
        "category": "SCIFI_GAME",
        "keywords": [
          "vu tru song song",
          "da vu tru"
        ]
      },
      {
        "id": "Artificial Intelligence",
        "name": "AI (Trí tuệ nhân tạo)",
        "type": "tag",
        "icon": "💻",
        "category": "SCIFI_GAME",
        "keywords": [
          "tri tue nhan tao",
          "ai"
        ]
      },
      {
        "id": "Astronomy",
        "name": "Astronomy (Thiên văn học / Ngắm sao)",
        "type": "tag",
        "icon": "🔭",
        "category": "SCIFI_GAME",
        "keywords": [
          "thien van",
          "ngam sao"
        ]
      },
      {
        "id": "Augmented Reality",
        "name": "Augmented Reality (Thực tế tăng cường)",
        "type": "tag",
        "icon": "🕶️",
        "category": "SCIFI_GAME",
        "keywords": [
          "thuc te tang cuong",
          "ar"
        ]
      },
      {
        "id": "Board Game",
        "name": "Board Game (Cờ bàn / Trò chơi trí tuệ)",
        "type": "tag",
        "icon": "🎲",
        "category": "SCIFI_GAME",
        "keywords": [
          "co ban",
          "board game"
        ]
      },
      {
        "id": "Card Battle",
        "name": "Card Battle (Đấu thẻ bài)",
        "type": "tag",
        "icon": "🃏",
        "category": "SCIFI_GAME",
        "keywords": [
          "dau the bai",
          "the bai",
          "yugioh"
        ]
      },
      {
        "id": "Cyberpunk",
        "name": "Cyberpunk (Công nghệ tương lai / Cyber)",
        "type": "tag",
        "icon": "🏙️",
        "category": "SCIFI_GAME",
        "keywords": [
          "cong nghe cao",
          "cyberpunk"
        ]
      },
      {
        "id": "Cyborg",
        "name": "Cyborg (Người máy sinh học)",
        "type": "tag",
        "icon": "🦾",
        "category": "SCIFI_GAME",
        "keywords": [
          "cyborg",
          "nua nguoi nua may"
        ]
      },
      {
        "id": "Dystopian",
        "name": "Dystopian (Xã hội đen tối / Phản địa đàng)",
        "type": "tag",
        "icon": "👁️",
        "category": "SCIFI_GAME",
        "keywords": [
          "phan dia dang",
          "dystopia"
        ]
      },
      {
        "id": "E-Sports",
        "name": "E-Sports (Thể thao điện tử / Đấu giải)",
        "type": "tag",
        "icon": "🏆",
        "category": "SCIFI_GAME",
        "keywords": [
          "esports",
          "dau giai game",
          "tuyen thu"
        ]
      },
      {
        "id": "Go",
        "name": "Go (Cờ vây)",
        "type": "tag",
        "icon": "⚪",
        "category": "SCIFI_GAME",
        "keywords": [
          "co vay",
          "hikaru no go"
        ]
      },
      {
        "id": "Karuta",
        "name": "Karuta (Bài Karuta truyền thống)",
        "type": "tag",
        "icon": "🎴",
        "category": "SCIFI_GAME",
        "keywords": [
          "karuta",
          "chihayafuru"
        ]
      },
      {
        "id": "Mahjong",
        "name": "Mahjong (Mạt chược)",
        "type": "tag",
        "icon": "🀄",
        "category": "SCIFI_GAME",
        "keywords": [
          "mat chuoc",
          "saki"
        ]
      },
      {
        "id": "Poker",
        "name": "Poker (Bài Poker)",
        "type": "tag",
        "icon": "♠️",
        "category": "SCIFI_GAME",
        "keywords": [
          "poker",
          "bai tay"
        ]
      },
      {
        "id": "Post-Apocalyptic",
        "name": "Post-Apocalyptic (Hậu tận thế)",
        "type": "tag",
        "icon": "☢️",
        "category": "SCIFI_GAME",
        "keywords": [
          "hau tan the",
          "tan the",
          "ngay tan the"
        ]
      },
      {
        "id": "Real Robot",
        "name": "Real Robot (Robot cơ khí quân sự)",
        "type": "tag",
        "icon": "🤖",
        "category": "SCIFI_GAME",
        "keywords": [
          "robot thuc te",
          "gundam"
        ]
      },
      {
        "id": "Robots",
        "name": "Robots (Robot thông minh)",
        "type": "tag",
        "icon": "🤖",
        "category": "SCIFI_GAME",
        "keywords": [
          "robot",
          "nguoi may"
        ]
      },
      {
        "id": "Shogi",
        "name": "Shogi (Cờ tướng Nhật Shogi)",
        "type": "tag",
        "icon": "♟️",
        "category": "SCIFI_GAME",
        "keywords": [
          "co shogi"
        ]
      },
      {
        "id": "Space",
        "name": "Space (Vũ trụ / Không gian)",
        "type": "tag",
        "icon": "🪐",
        "category": "SCIFI_GAME",
        "keywords": [
          "vu tru",
          "khong gian",
          "hanh tinh"
        ]
      },
      {
        "id": "Space Opera",
        "name": "Space Opera (Chiến tranh vũ trụ)",
        "type": "tag",
        "icon": "🛸",
        "category": "SCIFI_GAME",
        "keywords": [
          "chien tranh vu tru",
          "ham doi vu tru"
        ]
      },
      {
        "id": "Steampunk",
        "name": "Steampunk (Khoa học hơi nước)",
        "type": "tag",
        "icon": "⚙️",
        "category": "SCIFI_GAME",
        "keywords": [
          "hoi nuoc",
          "steampunk"
        ]
      },
      {
        "id": "Super Robot",
        "name": "Super Robot (Siêu Robot thần bí)",
        "type": "tag",
        "icon": "🦾",
        "category": "SCIFI_GAME",
        "keywords": [
          "sieu robot",
          "gurren lagann"
        ]
      },
      {
        "id": "Time Loop",
        "name": "Time Loop (Vòng lặp thời gian)",
        "type": "tag",
        "icon": "🔁",
        "category": "SCIFI_GAME",
        "keywords": [
          "vong lap thoi gian",
          "time loop"
        ]
      },
      {
        "id": "Time Manipulation",
        "name": "Time Manipulation (Thao túng thời gian)",
        "type": "tag",
        "icon": "⌛",
        "category": "SCIFI_GAME",
        "keywords": [
          "thao tung thoi gian",
          "ngung dong thoi gian"
        ]
      },
      {
        "id": "Video Games",
        "name": "Video Games (Hệ thống / Game thủ)",
        "type": "tag",
        "icon": "👾",
        "category": "SCIFI_GAME",
        "keywords": [
          "he thong",
          "game thu",
          "tro choi",
          "level",
          "thang cap",
          "rpg"
        ]
      },
      {
        "id": "Virtual World",
        "name": "Virtual World (Thế giới ảo / VR)",
        "type": "tag",
        "icon": "🌐",
        "category": "SCIFI_GAME",
        "keywords": [
          "the gioi ao",
          "vr",
          "game online",
          "thuc te ao"
        ]
      }
    ]
  },
  "SPORTS_ARTS": {
    "label": "⚽ Thể thao & Nghệ thuật",
    "items": [
      {
        "id": "Music",
        "name": "Music (Âm nhạc / Thần tượng)",
        "type": "genre",
        "icon": "🎵",
        "category": "SPORTS_ARTS",
        "keywords": [
          "am nhac",
          "ca hat",
          "nhac"
        ]
      },
      {
        "id": "Sports",
        "name": "Sports (Thể thao / Vận động)",
        "type": "genre",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "the thao",
          "bong da",
          "bong ro",
          "the luc"
        ]
      },
      {
        "id": "Acrobatics",
        "name": "Acrobatics (Xiếc / Nhào lộn)",
        "type": "tag",
        "icon": "🤸",
        "category": "SPORTS_ARTS",
        "keywords": [
          "nhao lon",
          "xiec"
        ]
      },
      {
        "id": "Acting",
        "name": "Acting (Diễn xuất / Diễn viên)",
        "type": "tag",
        "icon": "🎬",
        "category": "SPORTS_ARTS",
        "keywords": [
          "dien xuat",
          "dien vien"
        ]
      },
      {
        "id": "Airsoft",
        "name": "Airsoft",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "airsoft"
        ]
      },
      {
        "id": "American Football",
        "name": "American Football",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "american football"
        ]
      },
      {
        "id": "Athletics",
        "name": "Athletics",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "athletics"
        ]
      },
      {
        "id": "Badminton",
        "name": "Badminton (Cầu lông)",
        "type": "tag",
        "icon": "🏸",
        "category": "SPORTS_ARTS",
        "keywords": [
          "cau long"
        ]
      },
      {
        "id": "Ballet",
        "name": "Ballet (Múa Ba lê)",
        "type": "tag",
        "icon": "🩰",
        "category": "SPORTS_ARTS",
        "keywords": [
          "ba le",
          "ballet"
        ]
      },
      {
        "id": "Band",
        "name": "Band (Ban nhạc / Rock)",
        "type": "tag",
        "icon": "🎸",
        "category": "SPORTS_ARTS",
        "keywords": [
          "ban nhac",
          "rock"
        ]
      },
      {
        "id": "Baseball",
        "name": "Baseball (Bóng chày)",
        "type": "tag",
        "icon": "⚾",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bong chay"
        ]
      },
      {
        "id": "Basketball",
        "name": "Basketball (Bóng rổ)",
        "type": "tag",
        "icon": "🏀",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bong ro",
          "slam dunk"
        ]
      },
      {
        "id": "Bowling",
        "name": "Bowling",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bowling"
        ]
      },
      {
        "id": "Boxing",
        "name": "Boxing (Quyền anh / Đấm bốc)",
        "type": "tag",
        "icon": "🥊",
        "category": "SPORTS_ARTS",
        "keywords": [
          "quyen anh",
          "dam boc",
          "boxing"
        ]
      },
      {
        "id": "Calligraphy",
        "name": "Calligraphy",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "calligraphy"
        ]
      },
      {
        "id": "Cheerleading",
        "name": "Cheerleading",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "cheerleading"
        ]
      },
      {
        "id": "Classic Literature",
        "name": "Classic Literature",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "classic literature"
        ]
      },
      {
        "id": "Classical Music",
        "name": "Classical Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "classical music"
        ]
      },
      {
        "id": "Cosplay",
        "name": "Cosplay (Hóa trang Cosplay)",
        "type": "tag",
        "icon": "👗",
        "category": "SPORTS_ARTS",
        "keywords": [
          "cosplay",
          "hoa trang"
        ]
      },
      {
        "id": "Crafts",
        "name": "Crafts",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "crafts"
        ]
      },
      {
        "id": "Cycling",
        "name": "Cycling (Đua xe đạp)",
        "type": "tag",
        "icon": "🚴",
        "category": "SPORTS_ARTS",
        "keywords": [
          "xe dap",
          "dua xe dap"
        ]
      },
      {
        "id": "Dancing",
        "name": "Dancing (Nhảy múa / Khiêu vũ)",
        "type": "tag",
        "icon": "💃",
        "category": "SPORTS_ARTS",
        "keywords": [
          "nhay mua",
          "khieu vu"
        ]
      },
      {
        "id": "Drawing",
        "name": "Drawing (Hội họa / Vẽ tranh / Họa sĩ)",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "hoi hoa",
          "ve tranh",
          "hoa si"
        ]
      },
      {
        "id": "Fashion",
        "name": "Fashion",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "fashion"
        ]
      },
      {
        "id": "Fencing",
        "name": "Fencing",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "fencing"
        ]
      },
      {
        "id": "Fishing",
        "name": "Fishing (Câu cá)",
        "type": "tag",
        "icon": "🎣",
        "category": "SPORTS_ARTS",
        "keywords": [
          "cau ca",
          "di cau"
        ]
      },
      {
        "id": "Fitness",
        "name": "Fitness (Tập gym / Thể hình)",
        "type": "tag",
        "icon": "💪",
        "category": "SPORTS_ARTS",
        "keywords": [
          "tap gym",
          "the hinh"
        ]
      },
      {
        "id": "Football",
        "name": "Football (Bóng đá / Cầu thủ)",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bong da",
          "cau thu",
          "sut bong"
        ]
      },
      {
        "id": "Golf",
        "name": "Golf",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "golf"
        ]
      },
      {
        "id": "Handball",
        "name": "Handball",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "handball"
        ]
      },
      {
        "id": "Hip-hop Music",
        "name": "Hip-hop Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "hip-hop music"
        ]
      },
      {
        "id": "Ice Sports",
        "name": "Ice Sports",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "ice sports"
        ]
      },
      {
        "id": "Idol",
        "name": "Idol (Thần tượng / Ca sĩ)",
        "type": "tag",
        "icon": "🎤",
        "category": "SPORTS_ARTS",
        "keywords": [
          "than tuong",
          "idol",
          "ca si"
        ]
      },
      {
        "id": "Jazz Music",
        "name": "Jazz Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "jazz music"
        ]
      },
      {
        "id": "Judo",
        "name": "Judo (Võ Nhu đạo / Judo)",
        "type": "tag",
        "icon": "🥋",
        "category": "SPORTS_ARTS",
        "keywords": [
          "judo",
          "nhu dao"
        ]
      },
      {
        "id": "Kabuki",
        "name": "Kabuki",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "kabuki"
        ]
      },
      {
        "id": "Lacrosse",
        "name": "Lacrosse",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "lacrosse"
        ]
      },
      {
        "id": "Makeup",
        "name": "Makeup",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "makeup"
        ]
      },
      {
        "id": "Manzai",
        "name": "Manzai",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "manzai"
        ]
      },
      {
        "id": "Metal Music",
        "name": "Metal Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "metal music"
        ]
      },
      {
        "id": "Modeling",
        "name": "Modeling",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "modeling"
        ]
      },
      {
        "id": "Mountaineering",
        "name": "Mountaineering (Leo núi / Chinh phục đỉnh cao)",
        "type": "tag",
        "icon": "🧗",
        "category": "SPORTS_ARTS",
        "keywords": [
          "leo nui"
        ]
      },
      {
        "id": "Musical Theater",
        "name": "Musical Theater",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "musical theater"
        ]
      },
      {
        "id": "Parkour",
        "name": "Parkour (Chạy vượt chướng ngại vật)",
        "type": "tag",
        "icon": "🏃",
        "category": "SPORTS_ARTS",
        "keywords": [
          "parkour"
        ]
      },
      {
        "id": "Photography",
        "name": "Photography",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "photography"
        ]
      },
      {
        "id": "Rakugo",
        "name": "Rakugo",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "rakugo"
        ]
      },
      {
        "id": "Rock Music",
        "name": "Rock Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "rock music"
        ]
      },
      {
        "id": "Rugby",
        "name": "Rugby",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "rugby"
        ]
      },
      {
        "id": "Scuba Diving",
        "name": "Scuba Diving",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "scuba diving"
        ]
      },
      {
        "id": "Skateboarding",
        "name": "Skateboarding",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "skateboarding"
        ]
      },
      {
        "id": "Sumo",
        "name": "Sumo (Võ Sumo truyền thống)",
        "type": "tag",
        "icon": "🤼",
        "category": "SPORTS_ARTS",
        "keywords": [
          "sumo"
        ]
      },
      {
        "id": "Surfing",
        "name": "Surfing",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "surfing"
        ]
      },
      {
        "id": "Swimming",
        "name": "Swimming (Bơi lội)",
        "type": "tag",
        "icon": "🏊",
        "category": "SPORTS_ARTS",
        "keywords": [
          "boi loi",
          "duoi nuoc"
        ]
      },
      {
        "id": "Table Tennis",
        "name": "Table Tennis",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "table tennis"
        ]
      },
      {
        "id": "Tennis",
        "name": "Tennis (Quần vợt)",
        "type": "tag",
        "icon": "🎾",
        "category": "SPORTS_ARTS",
        "keywords": [
          "quan vot",
          "tennis"
        ]
      },
      {
        "id": "Volleyball",
        "name": "Volleyball (Bóng chuyền)",
        "type": "tag",
        "icon": "🏐",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bong chuyen",
          "haikyuu"
        ]
      },
      {
        "id": "VTuber",
        "name": "VTuber (YouTuber ảo / VTuber)",
        "type": "tag",
        "icon": "🎙️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "vtuber",
          "livestream"
        ]
      },
      {
        "id": "Wrestling",
        "name": "Wrestling",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "wrestling"
        ]
      },
      {
        "id": "Writing",
        "name": "Writing (Viết văn / Tác giả / Tiểu thuyết)",
        "type": "tag",
        "icon": "✍️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "viet van",
          "tac gia",
          "tieu thuyet"
        ]
      }
    ]
  },
  "DEMOGRAPHICS": {
    "label": "👥 Phân khúc độc giả",
    "items": [
      {
        "id": "Achronological Order",
        "name": "Achronological Order",
        "type": "tag",
        "icon": "🏷️",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "achronological order"
        ]
      },
      {
        "id": "Anachronism",
        "name": "Anachronism",
        "type": "tag",
        "icon": "🏷️",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "anachronism"
        ]
      },
      {
        "id": "Historical",
        "name": "Historical (Lịch sử / Cổ đại)",
        "type": "tag",
        "icon": "📜",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "lich su",
          "co dai",
          "trieu dinh",
          "hoang gia"
        ]
      },
      {
        "id": "Josei",
        "name": "Josei (Phụ nữ trưởng thành)",
        "type": "tag",
        "icon": "👩",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "phu nu",
          "quy co",
          "josei"
        ]
      },
      {
        "id": "Kids",
        "name": "Kids (Thiếu nhi / Trẻ em)",
        "type": "tag",
        "icon": "👶",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "tre em",
          "thieu nhi"
        ]
      },
      {
        "id": "Medieval",
        "name": "Medieval (Thời Trung Cổ phương Tây)",
        "type": "tag",
        "icon": "🏰",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "trung co",
          "hiep si"
        ]
      },
      {
        "id": "Middle East",
        "name": "Middle East (Trung Đông / Xứ nghìn lẻ một đêm)",
        "type": "tag",
        "icon": "🕌",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "trung dong",
          "magi"
        ]
      },
      {
        "id": "Primarily Adult Cast",
        "name": "Adult Cast (Dàn nhân vật người lớn / Công sở)",
        "type": "tag",
        "icon": "👔",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "nguoi lon"
        ]
      },
      {
        "id": "Seinen",
        "name": "Seinen (Thanh niên / Trưởng thành 18+)",
        "type": "tag",
        "icon": "🧑",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "thanh nien",
          "truong thanh",
          "seinen"
        ]
      },
      {
        "id": "Shoujo",
        "name": "Shoujo (Thiếu nữ / Thiếu nữ mộng mơ)",
        "type": "tag",
        "icon": "👧",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "thieu nu",
          "shoujo",
          "nu tinh"
        ]
      },
      {
        "id": "Shounen",
        "name": "Shounen (Thiếu niên nam)",
        "type": "tag",
        "icon": "👦",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "thieu nien",
          "nam",
          "shonen"
        ]
      }
    ]
  },
  "ALL_TAGS": {
    "label": "✨ Tất cả 370+ thể loại",
    "items": [
      {
        "id": "Action",
        "name": "Action (Hành động)",
        "type": "genre",
        "icon": "⚔️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "hanh dong",
          "danh nhau",
          "chien dau"
        ]
      },
      {
        "id": "Adventure",
        "name": "Adventure (Phiêu lưu)",
        "type": "genre",
        "icon": "🧭",
        "category": "POPULAR",
        "keywords": [
          "phieu luu",
          "kham pha",
          "hanh trinh"
        ]
      },
      {
        "id": "Comedy",
        "name": "Comedy (Hài hước / Bựa)",
        "type": "genre",
        "icon": "🤣",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hai huoc",
          "hai bua",
          "vui nhon",
          "cuoi"
        ]
      },
      {
        "id": "Drama",
        "name": "Drama (Kịch tính / Xúc động)",
        "type": "genre",
        "icon": "🎭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "kich tinh",
          "tam ly",
          "xuc dong"
        ]
      },
      {
        "id": "Ecchi",
        "name": "Ecchi (Gợi cảm / 16+)",
        "type": "genre",
        "icon": "🔞",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "goi cam",
          "ecchi",
          "nong bong",
          "16+"
        ]
      },
      {
        "id": "Fantasy",
        "name": "Fantasy (Kỳ ảo / Huyền huyễn)",
        "type": "genre",
        "icon": "🔮",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ky ao",
          "huyen ao",
          "ma ao",
          "huyen huyen"
        ]
      },
      {
        "id": "Hentai",
        "name": "Hentai (18+ Người lớn)",
        "type": "genre",
        "icon": "🔞",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "18+",
          "nguoi lon"
        ]
      },
      {
        "id": "Horror",
        "name": "Horror (Kinh dị / Rùng rợn)",
        "type": "genre",
        "icon": "🩸",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "kinh di",
          "ma",
          "rung ron",
          "am anh"
        ]
      },
      {
        "id": "Mahou Shoujo",
        "name": "Mahou Shoujo (Thiếu nữ ma pháp)",
        "type": "genre",
        "icon": "🪄",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ma phap thieu nu",
          "mahou shoujo"
        ]
      },
      {
        "id": "Mecha",
        "name": "Mecha (Người máy / Robot)",
        "type": "genre",
        "icon": "🤖",
        "category": "SCIFI_GAME",
        "keywords": [
          "nguoi may",
          "robot",
          "co giap",
          "gundam"
        ]
      },
      {
        "id": "Music",
        "name": "Music (Âm nhạc / Thần tượng)",
        "type": "genre",
        "icon": "🎵",
        "category": "SPORTS_ARTS",
        "keywords": [
          "am nhac",
          "ca hat",
          "nhac"
        ]
      },
      {
        "id": "Mystery",
        "name": "Mystery (Bí ẩn / Trinh thám)",
        "type": "genre",
        "icon": "🕵️",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "bi an",
          "pha an",
          "trinh tham",
          "dieu tra"
        ]
      },
      {
        "id": "Psychological",
        "name": "Psychological (Tâm lý / Đấu trí)",
        "type": "genre",
        "icon": "🧠",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tam ly",
          "xoan nao",
          "dau tri"
        ]
      },
      {
        "id": "Romance",
        "name": "Romance (Tình cảm / Lãng mạn)",
        "type": "genre",
        "icon": "❤️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tinh cam",
          "lang man",
          "ngon tinh",
          "yeu duong"
        ]
      },
      {
        "id": "Sci-Fi",
        "name": "Sci-Fi (Khoa học viễn tưởng)",
        "type": "genre",
        "icon": "🚀",
        "category": "SCIFI_GAME",
        "keywords": [
          "khoa hoc",
          "vien tuong",
          "tuong lai"
        ]
      },
      {
        "id": "Slice of Life",
        "name": "Slice of Life (Đời thường / Bình yên)",
        "type": "genre",
        "icon": "☕",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "doi thuong",
          "hang ngay",
          "binh yen",
          "nhe nhang"
        ]
      },
      {
        "id": "Sports",
        "name": "Sports (Thể thao / Vận động)",
        "type": "genre",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "the thao",
          "bong da",
          "bong ro",
          "the luc"
        ]
      },
      {
        "id": "Supernatural",
        "name": "Supernatural (Siêu nhiên / Thần bí)",
        "type": "genre",
        "icon": "👻",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "sieu nhien",
          "huyen bi",
          "tam linh"
        ]
      },
      {
        "id": "Thriller",
        "name": "Thriller (Hồi hộp / Giật gân)",
        "type": "genre",
        "icon": "😱",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "giat gan",
          "hoi hop",
          "nghet tho"
        ]
      },
      {
        "id": "4-koma",
        "name": "4-koma (Truyện tranh 4 khung hài)",
        "type": "tag",
        "icon": "📰",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "4 khung",
          "4-koma",
          "yonkoma"
        ]
      },
      {
        "id": "Achromatic",
        "name": "Achromatic",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "achromatic"
        ]
      },
      {
        "id": "Achronological Order",
        "name": "Achronological Order",
        "type": "tag",
        "icon": "🏷️",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "achronological order"
        ]
      },
      {
        "id": "Acrobatics",
        "name": "Acrobatics (Xiếc / Nhào lộn)",
        "type": "tag",
        "icon": "🤸",
        "category": "SPORTS_ARTS",
        "keywords": [
          "nhao lon",
          "xiec"
        ]
      },
      {
        "id": "Acting",
        "name": "Acting (Diễn xuất / Diễn viên)",
        "type": "tag",
        "icon": "🎬",
        "category": "SPORTS_ARTS",
        "keywords": [
          "dien xuat",
          "dien vien"
        ]
      },
      {
        "id": "Adoption",
        "name": "Adoption (Nhận nuôi / Con nuôi)",
        "type": "tag",
        "icon": "🤝",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "con nuoi",
          "nhan nuoi"
        ]
      },
      {
        "id": "Afterlife",
        "name": "Afterlife",
        "type": "tag",
        "icon": "🌌",
        "category": "SCIFI_GAME",
        "keywords": [
          "afterlife"
        ]
      },
      {
        "id": "Age Gap",
        "name": "Age Gap (Chênh lệch tuổi tác)",
        "type": "tag",
        "icon": "⏳",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "chenh lech tuoi",
          "tinh chi em",
          "chu chau"
        ]
      },
      {
        "id": "Age Regression",
        "name": "Age Regression",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "age regression"
        ]
      },
      {
        "id": "Agender",
        "name": "Agender",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "agender"
        ]
      },
      {
        "id": "Agriculture",
        "name": "Agriculture (Nông nghiệp / Làm ruộng)",
        "type": "tag",
        "icon": "🌾",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nong nghiep",
          "lam ruong",
          "trong trot"
        ]
      },
      {
        "id": "Airsoft",
        "name": "Airsoft",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "airsoft"
        ]
      },
      {
        "id": "Alchemy",
        "name": "Alchemy (Giả kim thuật / Luyện đan)",
        "type": "tag",
        "icon": "🧪",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "gia kim",
          "luyen dan",
          "dan duoc",
          "thuoc"
        ]
      },
      {
        "id": "Aliens",
        "name": "Aliens (Người ngoài hành tinh)",
        "type": "tag",
        "icon": "👽",
        "category": "SCIFI_GAME",
        "keywords": [
          "nguoi ngoai hanh tinh",
          "alien"
        ]
      },
      {
        "id": "Alternate Universe",
        "name": "Alternate Universe (Vũ trụ song song)",
        "type": "tag",
        "icon": "🌌",
        "category": "SCIFI_GAME",
        "keywords": [
          "vu tru song song",
          "da vu tru"
        ]
      },
      {
        "id": "American Football",
        "name": "American Football",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "american football"
        ]
      },
      {
        "id": "Amnesia",
        "name": "Amnesia (Mất trí nhớ)",
        "type": "tag",
        "icon": "❓",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "mat tri nho",
          "quen qua khu"
        ]
      },
      {
        "id": "Anachronism",
        "name": "Anachronism",
        "type": "tag",
        "icon": "🏷️",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "anachronism"
        ]
      },
      {
        "id": "Ancient China",
        "name": "Ancient China (Cổ đại Trung Hoa)",
        "type": "tag",
        "icon": "🏯",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "trung hoa co dai",
          "trieu dinh"
        ]
      },
      {
        "id": "Angels",
        "name": "Angels (Thiên thần / Thiên tộc)",
        "type": "tag",
        "icon": "🪽",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "thien than",
          "thien toc"
        ]
      },
      {
        "id": "Animals",
        "name": "Animals (Động vật / Thú cưng)",
        "type": "tag",
        "icon": "🐱",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "dong vat",
          "thu cung",
          "cho meo"
        ]
      },
      {
        "id": "Anthology",
        "name": "Anthology (Tuyển tập truyện ngắn)",
        "type": "tag",
        "icon": "📚",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tuyen tap",
          "truyen ngan"
        ]
      },
      {
        "id": "Anthropomorphism",
        "name": "Anthropomorphism",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "anthropomorphism"
        ]
      },
      {
        "id": "Anti-Hero",
        "name": "Anti-Hero (Phản anh hùng / Tà đạo)",
        "type": "tag",
        "icon": "🦇",
        "category": "ACTION_COMBAT",
        "keywords": [
          "phan anh hung",
          "chinh ta",
          "ta dao"
        ]
      },
      {
        "id": "Archery",
        "name": "Archery (Cung thuật / Bắn cung)",
        "type": "tag",
        "icon": "🏹",
        "category": "ACTION_COMBAT",
        "keywords": [
          "cung thuat",
          "ban cung",
          "cung thu"
        ]
      },
      {
        "id": "Aromantic",
        "name": "Aromantic",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "aromantic"
        ]
      },
      {
        "id": "Arranged Marriage",
        "name": "Arranged Marriage (Hôn nhân sắp đặt)",
        "type": "tag",
        "icon": "💍",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hon nhan sap dat",
          "cuoi truoc yeu sau"
        ]
      },
      {
        "id": "Artificial Intelligence",
        "name": "AI (Trí tuệ nhân tạo)",
        "type": "tag",
        "icon": "💻",
        "category": "SCIFI_GAME",
        "keywords": [
          "tri tue nhan tao",
          "ai"
        ]
      },
      {
        "id": "Asexual",
        "name": "Asexual",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "asexual"
        ]
      },
      {
        "id": "Assassins",
        "name": "Assassins (Sát thủ / Ám sát)",
        "type": "tag",
        "icon": "🗡️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sat thu",
          "am sat"
        ]
      },
      {
        "id": "Astronomy",
        "name": "Astronomy (Thiên văn học / Ngắm sao)",
        "type": "tag",
        "icon": "🔭",
        "category": "SCIFI_GAME",
        "keywords": [
          "thien van",
          "ngam sao"
        ]
      },
      {
        "id": "Athletics",
        "name": "Athletics",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "athletics"
        ]
      },
      {
        "id": "Augmented Reality",
        "name": "Augmented Reality (Thực tế tăng cường)",
        "type": "tag",
        "icon": "🕶️",
        "category": "SCIFI_GAME",
        "keywords": [
          "thuc te tang cuong",
          "ar"
        ]
      },
      {
        "id": "Autobiographical",
        "name": "Autobiographical (Tự truyện)",
        "type": "tag",
        "icon": "📔",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tu truyen"
        ]
      },
      {
        "id": "Aviation",
        "name": "Aviation (Máy bay / Hàng không)",
        "type": "tag",
        "icon": "✈️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "may bay",
          "phi cong"
        ]
      },
      {
        "id": "Badminton",
        "name": "Badminton (Cầu lông)",
        "type": "tag",
        "icon": "🏸",
        "category": "SPORTS_ARTS",
        "keywords": [
          "cau long"
        ]
      },
      {
        "id": "Ballet",
        "name": "Ballet (Múa Ba lê)",
        "type": "tag",
        "icon": "🩰",
        "category": "SPORTS_ARTS",
        "keywords": [
          "ba le",
          "ballet"
        ]
      },
      {
        "id": "Band",
        "name": "Band (Ban nhạc / Rock)",
        "type": "tag",
        "icon": "🎸",
        "category": "SPORTS_ARTS",
        "keywords": [
          "ban nhac",
          "rock"
        ]
      },
      {
        "id": "Bar",
        "name": "Bar",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bar"
        ]
      },
      {
        "id": "Baseball",
        "name": "Baseball (Bóng chày)",
        "type": "tag",
        "icon": "⚾",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bong chay"
        ]
      },
      {
        "id": "Basketball",
        "name": "Basketball (Bóng rổ)",
        "type": "tag",
        "icon": "🏀",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bong ro",
          "slam dunk"
        ]
      },
      {
        "id": "Battle Royale",
        "name": "Battle Royale (Đấu trường sinh tử)",
        "type": "tag",
        "icon": "💥",
        "category": "ACTION_COMBAT",
        "keywords": [
          "dau truong sinh tu",
          "battle royale",
          "song con"
        ]
      },
      {
        "id": "Biographical",
        "name": "Biographical (Tiểu sử nhân vật)",
        "type": "tag",
        "icon": "📖",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tieu su"
        ]
      },
      {
        "id": "Bisexual",
        "name": "Bisexual",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "bisexual"
        ]
      },
      {
        "id": "Blackmail",
        "name": "Blackmail",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "blackmail"
        ]
      },
      {
        "id": "Board Game",
        "name": "Board Game (Cờ bàn / Trò chơi trí tuệ)",
        "type": "tag",
        "icon": "🎲",
        "category": "SCIFI_GAME",
        "keywords": [
          "co ban",
          "board game"
        ]
      },
      {
        "id": "Boarding School",
        "name": "Boarding School (Trường nội trú)",
        "type": "tag",
        "icon": "🏰",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "truong noi tru"
        ]
      },
      {
        "id": "Body Horror",
        "name": "Body Horror (Kinh dị biến dạng cơ thể)",
        "type": "tag",
        "icon": "🧟",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "bien dang co the",
          "body horror"
        ]
      },
      {
        "id": "Body Image",
        "name": "Body Image",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "body image"
        ]
      },
      {
        "id": "Body Swapping",
        "name": "Body Swapping (Hoán đổi thân xác)",
        "type": "tag",
        "icon": "🔄",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "hoan doi than xac",
          "doi xac"
        ]
      },
      {
        "id": "Bowling",
        "name": "Bowling",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bowling"
        ]
      },
      {
        "id": "Boxing",
        "name": "Boxing (Quyền anh / Đấm bốc)",
        "type": "tag",
        "icon": "🥊",
        "category": "SPORTS_ARTS",
        "keywords": [
          "quyen anh",
          "dam boc",
          "boxing"
        ]
      },
      {
        "id": "Boys' Love",
        "name": "Boys' Love (BL / Đam mỹ)",
        "type": "tag",
        "icon": "👬",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "dam my",
          "bl",
          "boys love",
          "danmei",
          "nam x nam",
          "dong tinh nam"
        ]
      },
      {
        "id": "Brainwashing",
        "name": "Brainwashing (Tẩy não / Thao túng tâm lý)",
        "type": "tag",
        "icon": "🌀",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tay nao",
          "thao tung tam ly"
        ]
      },
      {
        "id": "Bullying",
        "name": "Bullying (Bạo lực học đường)",
        "type": "tag",
        "icon": "💥",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bao luc hoc duong",
          "bat nat"
        ]
      },
      {
        "id": "Butler",
        "name": "Butler (Quản gia)",
        "type": "tag",
        "icon": "🤵",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "quan gia",
          "butler"
        ]
      },
      {
        "id": "Calligraphy",
        "name": "Calligraphy",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "calligraphy"
        ]
      },
      {
        "id": "Camping",
        "name": "Camping",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "camping"
        ]
      },
      {
        "id": "Cannibalism",
        "name": "Cannibalism",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "cannibalism"
        ]
      },
      {
        "id": "Card Battle",
        "name": "Card Battle (Đấu thẻ bài)",
        "type": "tag",
        "icon": "🃏",
        "category": "SCIFI_GAME",
        "keywords": [
          "dau the bai",
          "the bai",
          "yugioh"
        ]
      },
      {
        "id": "Cars",
        "name": "Cars (Đua xe ô tô / Xe hơi)",
        "type": "tag",
        "icon": "🏎️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "dua xe",
          "o to",
          "initial d"
        ]
      },
      {
        "id": "Centaur",
        "name": "Centaur",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "centaur"
        ]
      },
      {
        "id": "Cheating",
        "name": "Cheating (Ngoại tình / Bắt cá hai tay)",
        "type": "tag",
        "icon": "⚡",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "ngoai tinh",
          "phan boi"
        ]
      },
      {
        "id": "Cheerleading",
        "name": "Cheerleading",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "cheerleading"
        ]
      },
      {
        "id": "Chibi",
        "name": "Chibi",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "chibi"
        ]
      },
      {
        "id": "Chimera",
        "name": "Chimera",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "chimera"
        ]
      },
      {
        "id": "Chuunibyou",
        "name": "Chuunibyou (Hội chứng ảo tưởng tuổi dậy thì)",
        "type": "tag",
        "icon": "👁️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "ao tuong",
          "chuunibyou"
        ]
      },
      {
        "id": "Circus",
        "name": "Circus",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "circus"
        ]
      },
      {
        "id": "Class Struggle",
        "name": "Class Struggle (Đấu tranh giai cấp / Quý tộc)",
        "type": "tag",
        "icon": "⚖️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "dau tranh giai cap",
          "quy toc"
        ]
      },
      {
        "id": "Classic Literature",
        "name": "Classic Literature",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "classic literature"
        ]
      },
      {
        "id": "Classical Music",
        "name": "Classical Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "classical music"
        ]
      },
      {
        "id": "Clone",
        "name": "Clone",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "clone"
        ]
      },
      {
        "id": "Coastal",
        "name": "Coastal",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "coastal"
        ]
      },
      {
        "id": "Cohabitation",
        "name": "Cohabitation (Sống chung một nhà)",
        "type": "tag",
        "icon": "🏠",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "song chung",
          "o chung nha"
        ]
      },
      {
        "id": "College",
        "name": "College (Đại học / Sinh viên)",
        "type": "tag",
        "icon": "🎓",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "dai hoc",
          "sinh vien"
        ]
      },
      {
        "id": "Coming of Age",
        "name": "Coming of Age (Quá trình trưởng thành)",
        "type": "tag",
        "icon": "🌱",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "truong thanh",
          "buoc vao doi"
        ]
      },
      {
        "id": "Conspiracy",
        "name": "Conspiracy (Âm mưu / Thuyết âm mưu)",
        "type": "tag",
        "icon": "🕵️",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "am muu",
          "thuyet am muu"
        ]
      },
      {
        "id": "Cosmic Horror",
        "name": "Cosmic Horror (Kinh dị vũ trụ Cthulhu)",
        "type": "tag",
        "icon": "🐙",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "cthulhu",
          "kinh di vu tru"
        ]
      },
      {
        "id": "Cosplay",
        "name": "Cosplay (Hóa trang Cosplay)",
        "type": "tag",
        "icon": "👗",
        "category": "SPORTS_ARTS",
        "keywords": [
          "cosplay",
          "hoa trang"
        ]
      },
      {
        "id": "Cowboys",
        "name": "Cowboys (Cao bồi miền Tây)",
        "type": "tag",
        "icon": "🤠",
        "category": "ACTION_COMBAT",
        "keywords": [
          "cao boi",
          "western"
        ]
      },
      {
        "id": "Crafts",
        "name": "Crafts",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "crafts"
        ]
      },
      {
        "id": "Creature Taming",
        "name": "Creature Taming (Thuần thú / Nuôi thú cưng)",
        "type": "tag",
        "icon": "🦁",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "thuan thu",
          "huan luyen thu",
          "pokemon"
        ]
      },
      {
        "id": "Crime",
        "name": "Crime",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "crime"
        ]
      },
      {
        "id": "Criminal Organization",
        "name": "Criminal Organization (Tổ chức tội phạm)",
        "type": "tag",
        "icon": "🕶️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "to chuc toi pham",
          "bang dang"
        ]
      },
      {
        "id": "Crossdressing",
        "name": "Crossdressing (Giả gái / Giả trai)",
        "type": "tag",
        "icon": "👗",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gia gai",
          "gia trai"
        ]
      },
      {
        "id": "Crossover",
        "name": "Crossover",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "crossover"
        ]
      },
      {
        "id": "Cult",
        "name": "Cult (Tà giáo / Tà phái)",
        "type": "tag",
        "icon": "🕯️",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "ta giao",
          "giao phai"
        ]
      },
      {
        "id": "Cultivation",
        "name": "Cultivation (Tu tiên / Tu chân)",
        "type": "tag",
        "icon": "🧘‍♂️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tu tien",
          "tu chan",
          "dao gia",
          "phi thang",
          "tien hiep",
          "dan ton",
          "chan nhan",
          "tien ton",
          "kiem tien",
          "luyen khi",
          "kim dan",
          "nguyen anh"
        ]
      },
      {
        "id": "Curses",
        "name": "Curses (Lời nguyền / Trù ếm)",
        "type": "tag",
        "icon": "🧿",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "loi nguyen",
          "tru em"
        ]
      },
      {
        "id": "Cute Boys Doing Cute Things",
        "name": "Cute Boys (Các chàng trai dễ thương)",
        "type": "tag",
        "icon": "✨",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "trai dep",
          "cute boys"
        ]
      },
      {
        "id": "Cute Girls Doing Cute Things",
        "name": "Cute Girls (Các cô gái dễ thương / CGDCT)",
        "type": "tag",
        "icon": "🎀",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gai xinh",
          "cgdct",
          "moe"
        ]
      },
      {
        "id": "Cyberpunk",
        "name": "Cyberpunk (Công nghệ tương lai / Cyber)",
        "type": "tag",
        "icon": "🏙️",
        "category": "SCIFI_GAME",
        "keywords": [
          "cong nghe cao",
          "cyberpunk"
        ]
      },
      {
        "id": "Cyborg",
        "name": "Cyborg (Người máy sinh học)",
        "type": "tag",
        "icon": "🦾",
        "category": "SCIFI_GAME",
        "keywords": [
          "cyborg",
          "nua nguoi nua may"
        ]
      },
      {
        "id": "Cycling",
        "name": "Cycling (Đua xe đạp)",
        "type": "tag",
        "icon": "🚴",
        "category": "SPORTS_ARTS",
        "keywords": [
          "xe dap",
          "dua xe dap"
        ]
      },
      {
        "id": "Dancing",
        "name": "Dancing (Nhảy múa / Khiêu vũ)",
        "type": "tag",
        "icon": "💃",
        "category": "SPORTS_ARTS",
        "keywords": [
          "nhay mua",
          "khieu vu"
        ]
      },
      {
        "id": "Death Game",
        "name": "Death Game (Trò chơi sinh tử)",
        "type": "tag",
        "icon": "🎯",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tro choi sinh tu",
          "death game"
        ]
      },
      {
        "id": "Delinquents",
        "name": "Delinquents (Bất lương / Đầu gấu học đường)",
        "type": "tag",
        "icon": "👊",
        "category": "ACTION_COMBAT",
        "keywords": [
          "bat luong",
          "dau gau",
          "gangster"
        ]
      },
      {
        "id": "Demons",
        "name": "Demons (Yêu ma / Ma tộc)",
        "type": "tag",
        "icon": "😈",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "yeu ma",
          "ma toc",
          "quy",
          "ac ma"
        ]
      },
      {
        "id": "Denpa",
        "name": "Denpa",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "denpa"
        ]
      },
      {
        "id": "Desert",
        "name": "Desert",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "desert"
        ]
      },
      {
        "id": "Detective",
        "name": "Detective (Thám tử / Phá án)",
        "type": "tag",
        "icon": "🔍",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tham tu",
          "pha an",
          "conan"
        ]
      },
      {
        "id": "Dinosaurs",
        "name": "Dinosaurs",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "dinosaurs"
        ]
      },
      {
        "id": "Disability",
        "name": "Disability",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "disability"
        ]
      },
      {
        "id": "Dissociative Identities",
        "name": "Dissociative Identities",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "dissociative identities"
        ]
      },
      {
        "id": "Dragons",
        "name": "Dragons (Long tộc / Rồng)",
        "type": "tag",
        "icon": "🐉",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "long toc",
          "rong",
          "dragon"
        ]
      },
      {
        "id": "Drawing",
        "name": "Drawing (Hội họa / Vẽ tranh / Họa sĩ)",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "hoi hoa",
          "ve tranh",
          "hoa si"
        ]
      },
      {
        "id": "Drugs",
        "name": "Drugs (Chất cấm / Ma túy)",
        "type": "tag",
        "icon": "💊",
        "category": "ACTION_COMBAT",
        "keywords": [
          "chat cam",
          "ma tuy"
        ]
      },
      {
        "id": "Dullahan",
        "name": "Dullahan",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "dullahan"
        ]
      },
      {
        "id": "Dungeon",
        "name": "Dungeon (Hầm ngục / Phó bản)",
        "type": "tag",
        "icon": "🏰",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ham nguc",
          "pho ban",
          "thap",
          "tower",
          "boss",
          "gate"
        ]
      },
      {
        "id": "Dystopian",
        "name": "Dystopian (Xã hội đen tối / Phản địa đàng)",
        "type": "tag",
        "icon": "👁️",
        "category": "SCIFI_GAME",
        "keywords": [
          "phan dia dang",
          "dystopia"
        ]
      },
      {
        "id": "E-Sports",
        "name": "E-Sports (Thể thao điện tử / Đấu giải)",
        "type": "tag",
        "icon": "🏆",
        "category": "SCIFI_GAME",
        "keywords": [
          "esports",
          "dau giai game",
          "tuyen thu"
        ]
      },
      {
        "id": "Eco-Horror",
        "name": "Eco-Horror",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "eco-horror"
        ]
      },
      {
        "id": "Economics",
        "name": "Economics (Kinh tế / Làm giàu)",
        "type": "tag",
        "icon": "💰",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "kinh te",
          "kinh doanh",
          "lam giau",
          "kiem tien"
        ]
      },
      {
        "id": "Educational",
        "name": "Educational",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "educational"
        ]
      },
      {
        "id": "Elderly Protagonist",
        "name": "Elderly Protagonist (Nhân vật chính lớn tuổi / Cụ già)",
        "type": "tag",
        "icon": "👴",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nhan vat chinh gia",
          "cu gia"
        ]
      },
      {
        "id": "Elf",
        "name": "Elf (Yêu tinh Elf / Tộc Elf)",
        "type": "tag",
        "icon": "🧝",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "toc elf",
          "yeu tinh"
        ]
      },
      {
        "id": "Ensemble Cast",
        "name": "Ensemble Cast (Dàn nhân vật đông đảo / Đa góc nhìn)",
        "type": "tag",
        "icon": "👥",
        "category": "POPULAR",
        "keywords": [
          "nhieu goc nhin",
          "tap the"
        ]
      },
      {
        "id": "Environmental",
        "name": "Environmental (Môi trường / Thiên nhiên)",
        "type": "tag",
        "icon": "🌍",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "moi truong",
          "thien nhien"
        ]
      },
      {
        "id": "Episodic",
        "name": "Episodic (Từng mẩu chuyện độc lập)",
        "type": "tag",
        "icon": "📺",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tung mau chuyen"
        ]
      },
      {
        "id": "Ero Guro",
        "name": "Ero Guro",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "ero guro"
        ]
      },
      {
        "id": "Espionage",
        "name": "Espionage (Điệp viên / Gián điệp)",
        "type": "tag",
        "icon": "🕵️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "diep vien",
          "gian diep"
        ]
      },
      {
        "id": "Estranged Family",
        "name": "Estranged Family",
        "type": "tag",
        "icon": "🏷️",
        "category": "POPULAR",
        "keywords": [
          "estranged family"
        ]
      },
      {
        "id": "Exiled",
        "name": "Exiled",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "exiled"
        ]
      },
      {
        "id": "Exorcism",
        "name": "Exorcism (Trừ tà / Trừ ma)",
        "type": "tag",
        "icon": "📿",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "tru ta",
          "tru ma",
          "phong an"
        ]
      },
      {
        "id": "Fairy",
        "name": "Fairy (Tiên nữ nhỏ)",
        "type": "tag",
        "icon": "🧚",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tien nu"
        ]
      },
      {
        "id": "Fairy Tale",
        "name": "Fairy Tale (Truyện cổ tích)",
        "type": "tag",
        "icon": "🧚",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "co tich",
          "than tien"
        ]
      },
      {
        "id": "Fake Relationship",
        "name": "Fake Relationship (Hợp đồng tình yêu / Giả vờ yêu)",
        "type": "tag",
        "icon": "🤝",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hop dong tinh yeu",
          "nguoi yeu gia"
        ]
      },
      {
        "id": "Family Life",
        "name": "Family Life (Gia đình / Nuôi con)",
        "type": "tag",
        "icon": "🏡",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gia dinh",
          "nuoi con",
          "cha con",
          "me con"
        ]
      },
      {
        "id": "Fashion",
        "name": "Fashion",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "fashion"
        ]
      },
      {
        "id": "Female Harem",
        "name": "Harem (Nhiều nữ chính / Hậu cung)",
        "type": "tag",
        "icon": "👑",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "harem",
          "nhieu nu",
          "hau cung",
          "da the",
          "nhieu vo"
        ]
      },
      {
        "id": "Female Protagonist",
        "name": "Female Protagonist (Nữ chính xuất sắc)",
        "type": "tag",
        "icon": "👩",
        "category": "POPULAR",
        "keywords": [
          "nu chinh",
          "nu chu"
        ]
      },
      {
        "id": "Femboy",
        "name": "Femboy (Chàng trai dễ thương / Femboy)",
        "type": "tag",
        "icon": "🎀",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "femboy",
          "de thuong"
        ]
      },
      {
        "id": "Fencing",
        "name": "Fencing",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "fencing"
        ]
      },
      {
        "id": "Filmmaking",
        "name": "Filmmaking",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "filmmaking"
        ]
      },
      {
        "id": "Firefighters",
        "name": "Firefighters (Lính cứu hỏa)",
        "type": "tag",
        "icon": "🚒",
        "category": "ACTION_COMBAT",
        "keywords": [
          "linh cuu hoa",
          "fire force"
        ]
      },
      {
        "id": "Fishing",
        "name": "Fishing (Câu cá)",
        "type": "tag",
        "icon": "🎣",
        "category": "SPORTS_ARTS",
        "keywords": [
          "cau ca",
          "di cau"
        ]
      },
      {
        "id": "Fitness",
        "name": "Fitness (Tập gym / Thể hình)",
        "type": "tag",
        "icon": "💪",
        "category": "SPORTS_ARTS",
        "keywords": [
          "tap gym",
          "the hinh"
        ]
      },
      {
        "id": "Food",
        "name": "Food (Món ngon / Ăn uống)",
        "type": "tag",
        "icon": "🍜",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "mon ngon",
          "an uong"
        ]
      },
      {
        "id": "Football",
        "name": "Football (Bóng đá / Cầu thủ)",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bong da",
          "cau thu",
          "sut bong"
        ]
      },
      {
        "id": "Foreign",
        "name": "Foreign",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "foreign"
        ]
      },
      {
        "id": "Found Family",
        "name": "Found Family (Gia đình tình thương)",
        "type": "tag",
        "icon": "🫂",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gia dinh khong huyet thong"
        ]
      },
      {
        "id": "Fugitive",
        "name": "Fugitive (Đào tẩu / Bị truy nã)",
        "type": "tag",
        "icon": "🏃",
        "category": "ACTION_COMBAT",
        "keywords": [
          "dao tau",
          "truy na",
          "chay tron"
        ]
      },
      {
        "id": "Full Color",
        "name": "Full Color (Truyện tranh màu sắc nét)",
        "type": "tag",
        "icon": "🎨",
        "category": "POPULAR",
        "keywords": [
          "truyen mau",
          "full color",
          "manhwa mau",
          "manhua mau"
        ]
      },
      {
        "id": "Gambling",
        "name": "Gambling (Cờ bạc / Đỏ đen)",
        "type": "tag",
        "icon": "🎰",
        "category": "ACTION_COMBAT",
        "keywords": [
          "co bac",
          "do den",
          "danh bac"
        ]
      },
      {
        "id": "Gangs",
        "name": "Gangs (Băng nhóm đường phố)",
        "type": "tag",
        "icon": "🥊",
        "category": "ACTION_COMBAT",
        "keywords": [
          "bang nhom",
          "giang ho"
        ]
      },
      {
        "id": "Gekiga",
        "name": "Gekiga",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "gekiga"
        ]
      },
      {
        "id": "Gender Bending",
        "name": "Gender Bending (Chuyển đổi giới tính)",
        "type": "tag",
        "icon": "⚧️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "chuyen doi gioi tinh",
          "bien nam thanh nu",
          "bien nu thanh nam"
        ]
      },
      {
        "id": "Ghost",
        "name": "Ghost (Hồn ma / Linh hồn)",
        "type": "tag",
        "icon": "👻",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "hon ma",
          "linh hon",
          "bong ma"
        ]
      },
      {
        "id": "Go",
        "name": "Go (Cờ vây)",
        "type": "tag",
        "icon": "⚪",
        "category": "SCIFI_GAME",
        "keywords": [
          "co vay",
          "hikaru no go"
        ]
      },
      {
        "id": "Goblin",
        "name": "Goblin (Yêu tinh Goblin)",
        "type": "tag",
        "icon": "👺",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "goblin"
        ]
      },
      {
        "id": "Gods",
        "name": "Gods (Thần thánh / Tiên nhân)",
        "type": "tag",
        "icon": "⚡",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "than thanh",
          "tien nhan",
          "than thoai",
          "vi than"
        ]
      },
      {
        "id": "Golf",
        "name": "Golf",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "golf"
        ]
      },
      {
        "id": "Gore",
        "name": "Gore (Máu me / Tàn khốc)",
        "type": "tag",
        "icon": "🩸",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "mau me",
          "tan khoc",
          "kinh di mau"
        ]
      },
      {
        "id": "Guns",
        "name": "Guns (Súng đạn / Xạ thủ)",
        "type": "tag",
        "icon": "🔫",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sung dan",
          "ban sung",
          "xa thu"
        ]
      },
      {
        "id": "Gyaru",
        "name": "Gyaru (Cô nàng cá tính Gyaru)",
        "type": "tag",
        "icon": "💅",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "gyaru",
          "ca tinh"
        ]
      },
      {
        "id": "Handball",
        "name": "Handball",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "handball"
        ]
      },
      {
        "id": "Henshin",
        "name": "Henshin (Biến thân siêu anh hùng)",
        "type": "tag",
        "icon": "✨",
        "category": "ACTION_COMBAT",
        "keywords": [
          "bien than",
          "henshin",
          "sieu nhan"
        ]
      },
      {
        "id": "Heterosexual",
        "name": "Heterosexual (Nam Nữ / Ngôn tình truyền thống)",
        "type": "tag",
        "icon": "👫",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nam nu",
          "ngon tinh"
        ]
      },
      {
        "id": "Hikikomori",
        "name": "Hikikomori (Sống khép kín / Ở nhà)",
        "type": "tag",
        "icon": "🚪",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "o nha",
          "khong ra ngoai",
          "hikikomori"
        ]
      },
      {
        "id": "Hip-hop Music",
        "name": "Hip-hop Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "hip-hop music"
        ]
      },
      {
        "id": "Historical",
        "name": "Historical (Lịch sử / Cổ đại)",
        "type": "tag",
        "icon": "📜",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "lich su",
          "co dai",
          "trieu dinh",
          "hoang gia"
        ]
      },
      {
        "id": "Homeless",
        "name": "Homeless",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "homeless"
        ]
      },
      {
        "id": "Horticulture",
        "name": "Horticulture",
        "type": "tag",
        "icon": "☕",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "horticulture"
        ]
      },
      {
        "id": "Human Experimentation",
        "name": "Human Experimentation (Thí nghiệm trên người)",
        "type": "tag",
        "icon": "🧪",
        "category": "ACTION_COMBAT",
        "keywords": [
          "thi nghiem nguoi"
        ]
      },
      {
        "id": "Ice Sports",
        "name": "Ice Sports",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "ice sports"
        ]
      },
      {
        "id": "Idol",
        "name": "Idol (Thần tượng / Ca sĩ)",
        "type": "tag",
        "icon": "🎤",
        "category": "SPORTS_ARTS",
        "keywords": [
          "than tuong",
          "idol",
          "ca si"
        ]
      },
      {
        "id": "Incest",
        "name": "Incest",
        "type": "tag",
        "icon": "❤️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "incest"
        ]
      },
      {
        "id": "Indigenous Cultures",
        "name": "Indigenous Cultures",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "indigenous cultures"
        ]
      },
      {
        "id": "Inn",
        "name": "Inn",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "inn"
        ]
      },
      {
        "id": "Inseki",
        "name": "Inseki (Quan hệ họ hàng không huyết thống)",
        "type": "tag",
        "icon": "🏡",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "ho hang",
          "con rieng"
        ]
      },
      {
        "id": "Interspecies",
        "name": "Interspecies (Tình yêu dị tộc / Khác loài)",
        "type": "tag",
        "icon": "🐾",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "di toc",
          "khac loai"
        ]
      },
      {
        "id": "Isekai",
        "name": "Isekai (Xuyên không / Thế giới khác)",
        "type": "tag",
        "icon": "🌀",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "chuyen sinh",
          "xuyen khong",
          "di gioi",
          "the gioi khac",
          "tai sinh di gioi"
        ]
      },
      {
        "id": "Iyashikei",
        "name": "Iyashikei (Chữa lành / Thư giãn tâm hồn)",
        "type": "tag",
        "icon": "🌸",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "chua lanh",
          "thu gian",
          "binh yen",
          "iyashikei"
        ]
      },
      {
        "id": "Jazz Music",
        "name": "Jazz Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "jazz music"
        ]
      },
      {
        "id": "Josei",
        "name": "Josei (Phụ nữ trưởng thành)",
        "type": "tag",
        "icon": "👩",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "phu nu",
          "quy co",
          "josei"
        ]
      },
      {
        "id": "Judo",
        "name": "Judo (Võ Nhu đạo / Judo)",
        "type": "tag",
        "icon": "🥋",
        "category": "SPORTS_ARTS",
        "keywords": [
          "judo",
          "nhu dao"
        ]
      },
      {
        "id": "Kabuki",
        "name": "Kabuki",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "kabuki"
        ]
      },
      {
        "id": "Kaiju",
        "name": "Kaiju (Quái vật khổng lồ)",
        "type": "tag",
        "icon": "🦖",
        "category": "ACTION_COMBAT",
        "keywords": [
          "quai vat khong lo",
          "kaiju",
          "godzilla"
        ]
      },
      {
        "id": "Karuta",
        "name": "Karuta (Bài Karuta truyền thống)",
        "type": "tag",
        "icon": "🎴",
        "category": "SCIFI_GAME",
        "keywords": [
          "karuta",
          "chihayafuru"
        ]
      },
      {
        "id": "Kemonomimi",
        "name": "Kemonomimi (Người tai thú / Đuôi thú)",
        "type": "tag",
        "icon": "🦊",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tai thu",
          "duoi thu",
          "kemonomimi"
        ]
      },
      {
        "id": "Kids",
        "name": "Kids (Thiếu nhi / Trẻ em)",
        "type": "tag",
        "icon": "👶",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "tre em",
          "thieu nhi"
        ]
      },
      {
        "id": "Kingdom Management",
        "name": "Kingdom Management (Xây dựng lãnh địa / Lãnh chúa)",
        "type": "tag",
        "icon": "👑",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "xay dung vuong quoc",
          "lanh dia",
          "lanh chua"
        ]
      },
      {
        "id": "Konbini",
        "name": "Konbini",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "konbini"
        ]
      },
      {
        "id": "Kuudere",
        "name": "Kuudere (Lạnh lùng / Ít nói)",
        "type": "tag",
        "icon": "🧊",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "kuudere",
          "lanh lung"
        ]
      },
      {
        "id": "Lacrosse",
        "name": "Lacrosse",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "lacrosse"
        ]
      },
      {
        "id": "Language Barrier",
        "name": "Language Barrier",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "language barrier"
        ]
      },
      {
        "id": "LGBTQ+ Themes",
        "name": "LGBTQ+ (Chủ đề LGBTQ+ đa dạng)",
        "type": "tag",
        "icon": "🏳️‍🌈",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "lgbt",
          "lgbtq"
        ]
      },
      {
        "id": "Long Strip",
        "name": "Long Strip (Đọc dạng cuộn dọc / Webtoon)",
        "type": "tag",
        "icon": "📜",
        "category": "POPULAR",
        "keywords": [
          "cuon doc",
          "webtoon",
          "long strip"
        ]
      },
      {
        "id": "Lost Civilization",
        "name": "Lost Civilization",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "lost civilization"
        ]
      },
      {
        "id": "Love Triangle",
        "name": "Love Triangle (Tình tay ba)",
        "type": "tag",
        "icon": "🔺",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tinh tay ba",
          "tam giac tinh yeu"
        ]
      },
      {
        "id": "Mafia",
        "name": "Mafia (Băng đảng Mafia)",
        "type": "tag",
        "icon": "🕶️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "mafia",
          "xa hoi den"
        ]
      },
      {
        "id": "Magic",
        "name": "Magic (Ma pháp / Phép thuật)",
        "type": "tag",
        "icon": "✨",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ma phap",
          "phep thuat",
          "phap su",
          "ma thuat",
          "phu thuy"
        ]
      },
      {
        "id": "Mahjong",
        "name": "Mahjong (Mạt chược)",
        "type": "tag",
        "icon": "🀄",
        "category": "SCIFI_GAME",
        "keywords": [
          "mat chuoc",
          "saki"
        ]
      },
      {
        "id": "Maids",
        "name": "Maids (Hầu gái / Maid)",
        "type": "tag",
        "icon": "🧹",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hau gai",
          "maid"
        ]
      },
      {
        "id": "Makeup",
        "name": "Makeup",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "makeup"
        ]
      },
      {
        "id": "Male Harem",
        "name": "Harem Nam (Nhiều nam chính / Ngược harem)",
        "type": "tag",
        "icon": "🤴",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "harem nam",
          "nhieu nam",
          "reverse harem"
        ]
      },
      {
        "id": "Male Protagonist",
        "name": "Male Protagonist (Nam chính xuất sắc)",
        "type": "tag",
        "icon": "👦",
        "category": "POPULAR",
        "keywords": [
          "nam chinh",
          "nam chu"
        ]
      },
      {
        "id": "Manzai",
        "name": "Manzai",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "manzai"
        ]
      },
      {
        "id": "Marriage",
        "name": "Marriage",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "marriage"
        ]
      },
      {
        "id": "Martial Arts",
        "name": "Martial Arts (Võ thuật / Đấu khí)",
        "type": "tag",
        "icon": "🥋",
        "category": "ACTION_COMBAT",
        "keywords": [
          "vo thuat",
          "dau khi",
          "vo hiep",
          "kiem hiep",
          "quyen cuoc",
          "chan khi",
          "kungfu"
        ]
      },
      {
        "id": "Matchmaking",
        "name": "Matchmaking (Mai mối / Xem mắt)",
        "type": "tag",
        "icon": "💌",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "mai moi",
          "xem mat"
        ]
      },
      {
        "id": "Matriarchy",
        "name": "Matriarchy",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "matriarchy"
        ]
      },
      {
        "id": "Medicine",
        "name": "Medicine (Y học / Bác sĩ / Trị liệu)",
        "type": "tag",
        "icon": "🩺",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "y hoc",
          "bac si",
          "chua benh"
        ]
      },
      {
        "id": "Medieval",
        "name": "Medieval (Thời Trung Cổ phương Tây)",
        "type": "tag",
        "icon": "🏰",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "trung co",
          "hiep si"
        ]
      },
      {
        "id": "Memory Manipulation",
        "name": "Memory Manipulation (Sửa đổi ký ức)",
        "type": "tag",
        "icon": "🧠",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "sua ky uc",
          "thao tung ky uc"
        ]
      },
      {
        "id": "Mermaid",
        "name": "Mermaid (Người cá / Mỹ nhân ngư)",
        "type": "tag",
        "icon": "🧜‍♀️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "nguoi ca",
          "my nhan ngu"
        ]
      },
      {
        "id": "Meta",
        "name": "Meta",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "meta"
        ]
      },
      {
        "id": "Metal Music",
        "name": "Metal Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "metal music"
        ]
      },
      {
        "id": "Middle East",
        "name": "Middle East (Trung Đông / Xứ nghìn lẻ một đêm)",
        "type": "tag",
        "icon": "🕌",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "trung dong",
          "magi"
        ]
      },
      {
        "id": "Military",
        "name": "Military (Quân sự / Chiến tranh)",
        "type": "tag",
        "icon": "🪖",
        "category": "ACTION_COMBAT",
        "keywords": [
          "quan su",
          "chien tranh",
          "quan doi",
          "vu khi"
        ]
      },
      {
        "id": "Mixed Gender Harem",
        "name": "Mixed Harem (Hậu cung hỗn hợp)",
        "type": "tag",
        "icon": "👥",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "harem hon hop"
        ]
      },
      {
        "id": "Modeling",
        "name": "Modeling",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "modeling"
        ]
      },
      {
        "id": "Monster Boy",
        "name": "Monster Boy (Quái vật nhân hình nam)",
        "type": "tag",
        "icon": "🐺",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "quai vat nam",
          "monster boy"
        ]
      },
      {
        "id": "Monster Girl",
        "name": "Monster Girl (Quái vật nhân hình nữ)",
        "type": "tag",
        "icon": "🐾",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "quai vat nu",
          "monster girl"
        ]
      },
      {
        "id": "Mopeds",
        "name": "Mopeds",
        "type": "tag",
        "icon": "🏷️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "mopeds"
        ]
      },
      {
        "id": "Motorcycles",
        "name": "Motorcycles (Đua mô tô / Xe máy)",
        "type": "tag",
        "icon": "🏍️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "dua xe may",
          "mo to"
        ]
      },
      {
        "id": "Mountaineering",
        "name": "Mountaineering (Leo núi / Chinh phục đỉnh cao)",
        "type": "tag",
        "icon": "🧗",
        "category": "SPORTS_ARTS",
        "keywords": [
          "leo nui"
        ]
      },
      {
        "id": "Musical Theater",
        "name": "Musical Theater",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "musical theater"
        ]
      },
      {
        "id": "Mythology",
        "name": "Mythology (Thần thoại cổ xưa)",
        "type": "tag",
        "icon": "🏛️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "than thoai",
          "huyen thoai"
        ]
      },
      {
        "id": "Natural Disaster",
        "name": "Natural Disaster",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "natural disaster"
        ]
      },
      {
        "id": "Necromancy",
        "name": "Necromancy (Thuật chiêu hồn / Tử linh)",
        "type": "tag",
        "icon": "💀",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "chieu hon",
          "tu linh",
          "xac song",
          "goi hon"
        ]
      },
      {
        "id": "Nekomimi",
        "name": "Nekomimi (Người tai mèo / Neko)",
        "type": "tag",
        "icon": "🐱",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tai meo",
          "nekomimi"
        ]
      },
      {
        "id": "Ninja",
        "name": "Ninja (Nhẫn giả / Ninja)",
        "type": "tag",
        "icon": "🥷",
        "category": "ACTION_COMBAT",
        "keywords": [
          "ninja",
          "nhan gia",
          "naruto"
        ]
      },
      {
        "id": "No Dialogue",
        "name": "No Dialogue",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "no dialogue"
        ]
      },
      {
        "id": "Noir",
        "name": "Noir",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "noir"
        ]
      },
      {
        "id": "Non-fiction",
        "name": "Non-fiction (Phi hư cấu / Chuyện có thật)",
        "type": "tag",
        "icon": "📰",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "phi hu cau",
          "co that"
        ]
      },
      {
        "id": "Nudity",
        "name": "Nudity",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "nudity"
        ]
      },
      {
        "id": "Nun",
        "name": "Nun",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "nun"
        ]
      },
      {
        "id": "Office",
        "name": "Office",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "office"
        ]
      },
      {
        "id": "Office Lady",
        "name": "Office Lady (Nữ nhân viên văn phòng)",
        "type": "tag",
        "icon": "👠",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nu van phong",
          "ol"
        ]
      },
      {
        "id": "Oiran",
        "name": "Oiran",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "oiran"
        ]
      },
      {
        "id": "Ojou-sama",
        "name": "Ojou-sama (Tiểu thư đài các)",
        "type": "tag",
        "icon": "💎",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tieu thu",
          "nha giau"
        ]
      },
      {
        "id": "Orphan",
        "name": "Orphan",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "orphan"
        ]
      },
      {
        "id": "Otaku Culture",
        "name": "Otaku Culture (Văn hóa Otaku / Wibu)",
        "type": "tag",
        "icon": "🤓",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "otaku",
          "wibu",
          "anime manga"
        ]
      },
      {
        "id": "Outdoor Activities",
        "name": "Outdoor Activities",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "outdoor activities"
        ]
      },
      {
        "id": "Pandemic",
        "name": "Pandemic (Đại dịch / Bệnh dịch lây lan)",
        "type": "tag",
        "icon": "☣️",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "dai dich",
          "dich benh"
        ]
      },
      {
        "id": "Parenthood",
        "name": "Parenthood (Làm cha mẹ)",
        "type": "tag",
        "icon": "🍼",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "lam cha me",
          "nuoi em be"
        ]
      },
      {
        "id": "Parkour",
        "name": "Parkour (Chạy vượt chướng ngại vật)",
        "type": "tag",
        "icon": "🏃",
        "category": "SPORTS_ARTS",
        "keywords": [
          "parkour"
        ]
      },
      {
        "id": "Parody",
        "name": "Parody (Nhại lại / Châm biếm hài)",
        "type": "tag",
        "icon": "🎭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nhai lai",
          "parody",
          "gintama"
        ]
      },
      {
        "id": "Philosophy",
        "name": "Philosophy (Triết học / Chiêm nghiệm sâu sắc)",
        "type": "tag",
        "icon": "📖",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "triet hoc",
          "chieu sau"
        ]
      },
      {
        "id": "Photography",
        "name": "Photography",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "photography"
        ]
      },
      {
        "id": "Pirates",
        "name": "Pirates (Hải tặc / Cướp biển)",
        "type": "tag",
        "icon": "🏴‍☠️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "hai tac",
          "cuop bien",
          "one piece"
        ]
      },
      {
        "id": "Poker",
        "name": "Poker (Bài Poker)",
        "type": "tag",
        "icon": "♠️",
        "category": "SCIFI_GAME",
        "keywords": [
          "poker",
          "bai tay"
        ]
      },
      {
        "id": "Police",
        "name": "Police (Cảnh sát / Hình sự)",
        "type": "tag",
        "icon": "👮",
        "category": "ACTION_COMBAT",
        "keywords": [
          "canh sat",
          "hinh su",
          "cong an"
        ]
      },
      {
        "id": "Politics",
        "name": "Politics (Chính trị / Quyền mưu)",
        "type": "tag",
        "icon": "🏛️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "chinh tri",
          "quyen muu",
          "dau da"
        ]
      },
      {
        "id": "Polyamorous",
        "name": "Polyamorous (Đa ái / Nhiều bạn đời)",
        "type": "tag",
        "icon": "💞",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "da ai"
        ]
      },
      {
        "id": "Post-Apocalyptic",
        "name": "Post-Apocalyptic (Hậu tận thế)",
        "type": "tag",
        "icon": "☢️",
        "category": "SCIFI_GAME",
        "keywords": [
          "hau tan the",
          "tan the",
          "ngay tan the"
        ]
      },
      {
        "id": "POV",
        "name": "POV",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "pov"
        ]
      },
      {
        "id": "Poverty",
        "name": "Poverty",
        "type": "tag",
        "icon": "☕",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "poverty"
        ]
      },
      {
        "id": "Pregnancy",
        "name": "Pregnancy",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "pregnancy"
        ]
      },
      {
        "id": "Primarily Adult Cast",
        "name": "Adult Cast (Dàn nhân vật người lớn / Công sở)",
        "type": "tag",
        "icon": "👔",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "nguoi lon"
        ]
      },
      {
        "id": "Primarily Animal Cast",
        "name": "Primarily Animal Cast",
        "type": "tag",
        "icon": "🏷️",
        "category": "POPULAR",
        "keywords": [
          "primarily animal cast"
        ]
      },
      {
        "id": "Primarily Child Cast",
        "name": "Primarily Child Cast",
        "type": "tag",
        "icon": "🏷️",
        "category": "POPULAR",
        "keywords": [
          "primarily child cast"
        ]
      },
      {
        "id": "Primarily Female Cast",
        "name": "Female Cast (Chủ yếu nhân vật nữ)",
        "type": "tag",
        "icon": "👭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "toan nu"
        ]
      },
      {
        "id": "Primarily Male Cast",
        "name": "Male Cast (Chủ yếu nhân vật nam)",
        "type": "tag",
        "icon": "👬",
        "category": "ACTION_COMBAT",
        "keywords": [
          "toan nam"
        ]
      },
      {
        "id": "Primarily Teen Cast",
        "name": "Primarily Teen Cast",
        "type": "tag",
        "icon": "🏷️",
        "category": "POPULAR",
        "keywords": [
          "primarily teen cast"
        ]
      },
      {
        "id": "Prison",
        "name": "Prison",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "prison"
        ]
      },
      {
        "id": "Prophecy",
        "name": "Prophecy",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "prophecy"
        ]
      },
      {
        "id": "Proxy Battle",
        "name": "Proxy Battle",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "proxy battle"
        ]
      },
      {
        "id": "Psychosexual",
        "name": "Psychosexual",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "psychosexual"
        ]
      },
      {
        "id": "Rakugo",
        "name": "Rakugo",
        "type": "tag",
        "icon": "🎨",
        "category": "SPORTS_ARTS",
        "keywords": [
          "rakugo"
        ]
      },
      {
        "id": "Real Robot",
        "name": "Real Robot (Robot cơ khí quân sự)",
        "type": "tag",
        "icon": "🤖",
        "category": "SCIFI_GAME",
        "keywords": [
          "robot thuc te",
          "gundam"
        ]
      },
      {
        "id": "Rehabilitation",
        "name": "Rehabilitation",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "rehabilitation"
        ]
      },
      {
        "id": "Reincarnation",
        "name": "Reincarnation (Trọng sinh / Tái sinh)",
        "type": "tag",
        "icon": "⏳",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "trong sinh",
          "tai sinh",
          "song lai",
          "hoi quy",
          "tro ve qua khu"
        ]
      },
      {
        "id": "Religion",
        "name": "Religion",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "religion"
        ]
      },
      {
        "id": "Rescue",
        "name": "Rescue",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "rescue"
        ]
      },
      {
        "id": "Restaurant",
        "name": "Restaurant",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "restaurant"
        ]
      },
      {
        "id": "Revenge",
        "name": "Revenge (Báo thù / Trả thù)",
        "type": "tag",
        "icon": "🔥",
        "category": "ACTION_COMBAT",
        "keywords": [
          "bao thu",
          "tra thu",
          "phuc thu"
        ]
      },
      {
        "id": "Reverse Isekai",
        "name": "Reverse Isekai (Chuyển sinh về hiện đại)",
        "type": "tag",
        "icon": "🔄",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "xuyen ve hien dai",
          "reverse isekai"
        ]
      },
      {
        "id": "Robots",
        "name": "Robots (Robot thông minh)",
        "type": "tag",
        "icon": "🤖",
        "category": "SCIFI_GAME",
        "keywords": [
          "robot",
          "nguoi may"
        ]
      },
      {
        "id": "Rock Music",
        "name": "Rock Music",
        "type": "tag",
        "icon": "🏷️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "rock music"
        ]
      },
      {
        "id": "Royal Affairs",
        "name": "Royal Affairs",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "royal affairs"
        ]
      },
      {
        "id": "Rugby",
        "name": "Rugby",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "rugby"
        ]
      },
      {
        "id": "Rural",
        "name": "Rural",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "rural"
        ]
      },
      {
        "id": "Samurai",
        "name": "Samurai (Võ sĩ đạo Samurai)",
        "type": "tag",
        "icon": "⚔️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "samurai",
          "vo si dao"
        ]
      },
      {
        "id": "Satire",
        "name": "Satire",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "satire"
        ]
      },
      {
        "id": "School",
        "name": "School (Học đường / Trường học)",
        "type": "tag",
        "icon": "🏫",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "hoc duong",
          "truong hoc",
          "hoc sinh",
          "lop hoc"
        ]
      },
      {
        "id": "School Club",
        "name": "School Club (Câu lạc bộ học đường)",
        "type": "tag",
        "icon": "🎪",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "cau lac bo",
          "clb"
        ]
      },
      {
        "id": "Scuba Diving",
        "name": "Scuba Diving",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "scuba diving"
        ]
      },
      {
        "id": "Seinen",
        "name": "Seinen (Thanh niên / Trưởng thành 18+)",
        "type": "tag",
        "icon": "🧑",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "thanh nien",
          "truong thanh",
          "seinen"
        ]
      },
      {
        "id": "Shapeshifting",
        "name": "Shapeshifting (Biến hình / Hóa hình)",
        "type": "tag",
        "icon": "🦊",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "bien hinh",
          "hoa hinh"
        ]
      },
      {
        "id": "Ships",
        "name": "Ships (Tàu thủy / Hải quân)",
        "type": "tag",
        "icon": "🚢",
        "category": "ACTION_COMBAT",
        "keywords": [
          "tau thuy",
          "hai quan"
        ]
      },
      {
        "id": "Shogi",
        "name": "Shogi (Cờ tướng Nhật Shogi)",
        "type": "tag",
        "icon": "♟️",
        "category": "SCIFI_GAME",
        "keywords": [
          "co shogi"
        ]
      },
      {
        "id": "Short-Form Chapter",
        "name": "Short Chapter (Chương ngắn)",
        "type": "tag",
        "icon": "📄",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "chuong ngan"
        ]
      },
      {
        "id": "Shoujo",
        "name": "Shoujo (Thiếu nữ / Thiếu nữ mộng mơ)",
        "type": "tag",
        "icon": "👧",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "thieu nu",
          "shoujo",
          "nu tinh"
        ]
      },
      {
        "id": "Shounen",
        "name": "Shounen (Thiếu niên nam)",
        "type": "tag",
        "icon": "👦",
        "category": "DEMOGRAPHICS",
        "keywords": [
          "thieu nien",
          "nam",
          "shonen"
        ]
      },
      {
        "id": "Shrine Maiden",
        "name": "Shrine Maiden (Miko / Vu nữ đền thần)",
        "type": "tag",
        "icon": "⛩️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "miko",
          "vu nu"
        ]
      },
      {
        "id": "Skateboarding",
        "name": "Skateboarding",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "skateboarding"
        ]
      },
      {
        "id": "Skeleton",
        "name": "Skeleton (Bộ xương / Cốt tộc)",
        "type": "tag",
        "icon": "💀",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "bo xuong",
          "cot toc"
        ]
      },
      {
        "id": "Slapstick",
        "name": "Slapstick",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "slapstick"
        ]
      },
      {
        "id": "Slavery",
        "name": "Slavery (Nô lệ / Giải phóng nô lệ)",
        "type": "tag",
        "icon": "⛓️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "no le",
          "giai phong"
        ]
      },
      {
        "id": "Snowscape",
        "name": "Snowscape",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "snowscape"
        ]
      },
      {
        "id": "Software Development",
        "name": "Software Development",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "software development"
        ]
      },
      {
        "id": "Space",
        "name": "Space (Vũ trụ / Không gian)",
        "type": "tag",
        "icon": "🪐",
        "category": "SCIFI_GAME",
        "keywords": [
          "vu tru",
          "khong gian",
          "hanh tinh"
        ]
      },
      {
        "id": "Space Opera",
        "name": "Space Opera (Chiến tranh vũ trụ)",
        "type": "tag",
        "icon": "🛸",
        "category": "SCIFI_GAME",
        "keywords": [
          "chien tranh vu tru",
          "ham doi vu tru"
        ]
      },
      {
        "id": "Spearplay",
        "name": "Spearplay (Thương thuật / Dùng thương)",
        "type": "tag",
        "icon": "🔱",
        "category": "ACTION_COMBAT",
        "keywords": [
          "thuong thuat",
          "giao thuat"
        ]
      },
      {
        "id": "Steampunk",
        "name": "Steampunk (Khoa học hơi nước)",
        "type": "tag",
        "icon": "⚙️",
        "category": "SCIFI_GAME",
        "keywords": [
          "hoi nuoc",
          "steampunk"
        ]
      },
      {
        "id": "Succubus",
        "name": "Succubus (Nữ quỷ quyến rũ)",
        "type": "tag",
        "icon": "😈",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nu quy",
          "succubus"
        ]
      },
      {
        "id": "Suicide",
        "name": "Suicide",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "suicide"
        ]
      },
      {
        "id": "Sumo",
        "name": "Sumo (Võ Sumo truyền thống)",
        "type": "tag",
        "icon": "🤼",
        "category": "SPORTS_ARTS",
        "keywords": [
          "sumo"
        ]
      },
      {
        "id": "Super Power",
        "name": "Super Power (Siêu năng lực)",
        "type": "tag",
        "icon": "💥",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sieu nang luc",
          "nang luc dac biet"
        ]
      },
      {
        "id": "Super Robot",
        "name": "Super Robot (Siêu Robot thần bí)",
        "type": "tag",
        "icon": "🦾",
        "category": "SCIFI_GAME",
        "keywords": [
          "sieu robot",
          "gurren lagann"
        ]
      },
      {
        "id": "Superhero",
        "name": "Superhero (Siêu anh hùng)",
        "type": "tag",
        "icon": "🦸",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sieu anh hung",
          "hero"
        ]
      },
      {
        "id": "Surfing",
        "name": "Surfing",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "surfing"
        ]
      },
      {
        "id": "Surreal Comedy",
        "name": "Surreal Comedy",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "surreal comedy"
        ]
      },
      {
        "id": "Survival",
        "name": "Survival (Sinh tồn)",
        "type": "tag",
        "icon": "⛺",
        "category": "ACTION_COMBAT",
        "keywords": [
          "sinh ton",
          "song con",
          "hoang dao"
        ]
      },
      {
        "id": "Swimming",
        "name": "Swimming (Bơi lội)",
        "type": "tag",
        "icon": "🏊",
        "category": "SPORTS_ARTS",
        "keywords": [
          "boi loi",
          "duoi nuoc"
        ]
      },
      {
        "id": "Swordplay",
        "name": "Swordplay (Kiếm đạo / Kiếm thuật)",
        "type": "tag",
        "icon": "🗡️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "kiem thuat",
          "kiem dao",
          "dung kiem",
          "kiem si"
        ]
      },
      {
        "id": "Table Tennis",
        "name": "Table Tennis",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "table tennis"
        ]
      },
      {
        "id": "Tanks",
        "name": "Tanks (Xe tăng / Thiết giáp)",
        "type": "tag",
        "icon": "🎖️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "xe tang",
          "girls und panzer"
        ]
      },
      {
        "id": "Tanned Skin",
        "name": "Tanned Skin",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "tanned skin"
        ]
      },
      {
        "id": "Teacher",
        "name": "Teacher",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "teacher"
        ]
      },
      {
        "id": "Teens' Love",
        "name": "Teens' Love (Tình yêu lãng mạn tuổi teen)",
        "type": "tag",
        "icon": "💖",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "teens love",
          "tinh yeu tuoi tre"
        ]
      },
      {
        "id": "Tennis",
        "name": "Tennis (Quần vợt)",
        "type": "tag",
        "icon": "🎾",
        "category": "SPORTS_ARTS",
        "keywords": [
          "quan vot",
          "tennis"
        ]
      },
      {
        "id": "Terrorism",
        "name": "Terrorism",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "terrorism"
        ]
      },
      {
        "id": "Time Loop",
        "name": "Time Loop (Vòng lặp thời gian)",
        "type": "tag",
        "icon": "🔁",
        "category": "SCIFI_GAME",
        "keywords": [
          "vong lap thoi gian",
          "time loop"
        ]
      },
      {
        "id": "Time Manipulation",
        "name": "Time Manipulation (Thao túng thời gian)",
        "type": "tag",
        "icon": "⌛",
        "category": "SCIFI_GAME",
        "keywords": [
          "thao tung thoi gian",
          "ngung dong thoi gian"
        ]
      },
      {
        "id": "Time Skip",
        "name": "Time Skip (Bỏ qua thời gian / Lớn lên)",
        "type": "tag",
        "icon": "⏩",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "time skip",
          "nhay coc thoi gian"
        ]
      },
      {
        "id": "Tokusatsu",
        "name": "Tokusatsu (Hiệp sĩ mặt nạ / Tokusatsu)",
        "type": "tag",
        "icon": "🦸",
        "category": "ACTION_COMBAT",
        "keywords": [
          "tokusatsu",
          "kamen rider"
        ]
      },
      {
        "id": "Tomboy",
        "name": "Tomboy (Cô nàng cá tính / Tomboy)",
        "type": "tag",
        "icon": "🧢",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tomboy",
          "ca tinh"
        ]
      },
      {
        "id": "Torture",
        "name": "Torture",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "torture"
        ]
      },
      {
        "id": "Tragedy",
        "name": "Tragedy (Bi kịch / Đau thương)",
        "type": "tag",
        "icon": "🥀",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bi kich",
          "nuoc mat",
          "dau thuong"
        ]
      },
      {
        "id": "Trains",
        "name": "Trains (Đường sắt / Tàu hỏa)",
        "type": "tag",
        "icon": "🚂",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tau hoa",
          "duong sat"
        ]
      },
      {
        "id": "Transgender",
        "name": "Transgender",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "transgender"
        ]
      },
      {
        "id": "Travel",
        "name": "Travel",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "travel"
        ]
      },
      {
        "id": "Triads",
        "name": "Triads (Xã hội đen Hồng Kông / Tam Hoàng)",
        "type": "tag",
        "icon": "🐉",
        "category": "ACTION_COMBAT",
        "keywords": [
          "tam hoang",
          "xa hoi den hong kong"
        ]
      },
      {
        "id": "Tsundere",
        "name": "Tsundere (Ngoài lạnh trong ấm)",
        "type": "tag",
        "icon": "😤",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "tsundere",
          "ngoai lanh trong nong"
        ]
      },
      {
        "id": "Twins",
        "name": "Twins",
        "type": "tag",
        "icon": "🏷️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "twins"
        ]
      },
      {
        "id": "Unrequited Love",
        "name": "Unrequited Love (Yêu đơn phương)",
        "type": "tag",
        "icon": "💔",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "yeu don phuong",
          "mot chieu"
        ]
      },
      {
        "id": "Urban",
        "name": "Urban",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "urban"
        ]
      },
      {
        "id": "Urban Fantasy",
        "name": "Urban Fantasy (Kỳ ảo đô thị hiện đại)",
        "type": "tag",
        "icon": "🌆",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "ky ao do thi",
          "tu tien do thi",
          "hien dai"
        ]
      },
      {
        "id": "Vampire",
        "name": "Vampire (Ma cà rồng / Huyết tộc)",
        "type": "tag",
        "icon": "🧛",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "ma ca rong",
          "huyet toc",
          "vampire",
          "hut mau"
        ]
      },
      {
        "id": "Veterinarian",
        "name": "Veterinarian (Bác sĩ thú y)",
        "type": "tag",
        "icon": "🐕",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bac si thu y"
        ]
      },
      {
        "id": "Video Games",
        "name": "Video Games (Hệ thống / Game thủ)",
        "type": "tag",
        "icon": "👾",
        "category": "SCIFI_GAME",
        "keywords": [
          "he thong",
          "game thu",
          "tro choi",
          "level",
          "thang cap",
          "rpg"
        ]
      },
      {
        "id": "Vikings",
        "name": "Vikings (Chiến binh Viking Bắc Âu)",
        "type": "tag",
        "icon": "🪓",
        "category": "ACTION_COMBAT",
        "keywords": [
          "viking",
          "vinland saga"
        ]
      },
      {
        "id": "Villainess",
        "name": "Villainess (Nữ phụ phản diện / Ác nữ)",
        "type": "tag",
        "icon": "👸",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "nu phu",
          "phan dien",
          "ac nu",
          "nhan vat phan dien"
        ]
      },
      {
        "id": "Virtual World",
        "name": "Virtual World (Thế giới ảo / VR)",
        "type": "tag",
        "icon": "🌐",
        "category": "SCIFI_GAME",
        "keywords": [
          "the gioi ao",
          "vr",
          "game online",
          "thuc te ao"
        ]
      },
      {
        "id": "Vocal Synth",
        "name": "Vocal Synth",
        "type": "tag",
        "icon": "🏷️",
        "category": "ALL_TAGS",
        "keywords": [
          "vocal synth"
        ]
      },
      {
        "id": "Volleyball",
        "name": "Volleyball (Bóng chuyền)",
        "type": "tag",
        "icon": "🏐",
        "category": "SPORTS_ARTS",
        "keywords": [
          "bong chuyen",
          "haikyuu"
        ]
      },
      {
        "id": "VTuber",
        "name": "VTuber (YouTuber ảo / VTuber)",
        "type": "tag",
        "icon": "🎙️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "vtuber",
          "livestream"
        ]
      },
      {
        "id": "War",
        "name": "War (Chiến tranh / Khói lửa)",
        "type": "tag",
        "icon": "💣",
        "category": "ACTION_COMBAT",
        "keywords": [
          "chien tranh",
          "xung dot"
        ]
      },
      {
        "id": "Werewolf",
        "name": "Werewolf (Người sói / Lang tộc)",
        "type": "tag",
        "icon": "🐺",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "nguoi soi",
          "lang toc",
          "werewolf"
        ]
      },
      {
        "id": "Wilderness",
        "name": "Wilderness",
        "type": "tag",
        "icon": "🏷️",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "wilderness"
        ]
      },
      {
        "id": "Witch",
        "name": "Witch (Phù thủy / Vu nữ)",
        "type": "tag",
        "icon": "🧙‍♀️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "phu thuy",
          "vu nu",
          "witch"
        ]
      },
      {
        "id": "Work",
        "name": "Work Life (Công sở / Nghề nghiệp)",
        "type": "tag",
        "icon": "💼",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "cong so",
          "lam viec",
          "nghe nghiep"
        ]
      },
      {
        "id": "Wrestling",
        "name": "Wrestling",
        "type": "tag",
        "icon": "⚽",
        "category": "SPORTS_ARTS",
        "keywords": [
          "wrestling"
        ]
      },
      {
        "id": "Writing",
        "name": "Writing (Viết văn / Tác giả / Tiểu thuyết)",
        "type": "tag",
        "icon": "✍️",
        "category": "SPORTS_ARTS",
        "keywords": [
          "viet van",
          "tac gia",
          "tieu thuyet"
        ]
      },
      {
        "id": "Wuxia",
        "name": "Wuxia (Võ hiệp / Cổ phong)",
        "type": "tag",
        "icon": "🗡️",
        "category": "ISEKAI_CULTIVATION",
        "keywords": [
          "vo hiep",
          "giang ho",
          "kiem hiep",
          "co phong",
          "kiem khach"
        ]
      },
      {
        "id": "Yakuza",
        "name": "Yakuza (Yakuza Nhật Bản)",
        "type": "tag",
        "icon": "🗡️",
        "category": "ACTION_COMBAT",
        "keywords": [
          "yakuza",
          "giang ho nhat"
        ]
      },
      {
        "id": "Yandere",
        "name": "Yandere (Yêu cuồng điên / Chiếm hữu)",
        "type": "tag",
        "icon": "🔪",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "yandere",
          "yeu cuong dien",
          "chiem huu"
        ]
      },
      {
        "id": "Youkai",
        "name": "Youkai (Yêu quái Nhật Bản)",
        "type": "tag",
        "icon": "👺",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "yeu quai",
          "youkai"
        ]
      },
      {
        "id": "Yuri",
        "name": "Yuri (GL / Bách hợp)",
        "type": "tag",
        "icon": "👭",
        "category": "ROMANCE_SCHOOL",
        "keywords": [
          "bach hop",
          "yuri",
          "girls love",
          "gl",
          "nu x nu",
          "dong tinh nu"
        ]
      },
      {
        "id": "Zombie",
        "name": "Zombies (Xác sống / Tang thi)",
        "type": "tag",
        "icon": "🧟",
        "category": "MYSTERY_HORROR",
        "keywords": [
          "xac song",
          "zombie",
          "tang thi"
        ]
      }
    ]
  }
};
