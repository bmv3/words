window.addEventListener("load", () => {
  const wordsList = [
    { rus: "кулак", eng: "fist", transcription: "[fɪst]", association: "фисташки" },
    { rus: "кирпич", eng: "brick", transcription: "[brɪk]", association: "брикет" },
    { rus: "парик", eng: "wig", transcription: "[wɪg]", association: "вигвам" },
    { rus: "мел", eng: "chalk", transcription: "[tʃɔːk]", association: "чётки" },
    { rus: "спичка", eng: "match", transcription: "[mætʃ]", association: "меч" },
    { rus: "отряд (военный)", eng: "troop", transcription: "[truːp]", association: "труп" },
    { rus: "коготь", eng: "claw", transcription: "[klɔː]", association: "клоун" },
    { rus: "свёкла", eng: "beet", transcription: "[biːt]", association: "бита" },
    { rus: "клещ", eng: "mite", transcription: "[maɪt]", association: "майка" },
    { rus: "ствол дерева", eng: "trunk", transcription: "[trʌŋk]", association: "трактор" },
    { rus: "ручей", eng: "creek", transcription: "[kriːk]", association: "крик" },
    { rus: "причал", eng: "quay", transcription: "[kiː]", association: "кит" },
    { rus: "крыльцо", eng: "porch", transcription: "[pɔːʧ]", association: "почтальон" },
    { rus: "грабить", eng: "rob", transcription: "[rɒ,b]", association: "робот" },
    { rus: "киоск", eng: "stall", transcription: "[stɔːl]", association: "стол" },
    { rus: "сарай", eng: "shed", transcription: "[ʃɛd]", association: "шедевр" },
    { rus: "грабли", eng: "rake", transcription: "[reɪk]", association: "рейка" },
    { rus: "подошва", eng: "sole", transcription: "[səʊl]", association: "соль" },
    { rus: "пряжка", eng: "buckle", transcription: "[ˈbʌkl]", association: "бак" },
    { rus: "гипс", eng: "cast", transcription: "[kɑːst]", association: "кастрюля" },
    { rus: "кран", eng: "tap", transcription: "[tæp]", association: "теплица" },
    { rus: "лопата", eng: "shovel", transcription: "[ˈʃʌvl]", association: "щавель" },
    { rus: "пила", eng: "saw", transcription: "[sɔː]", association: "сок" },
    { rus: "санки", eng: "sled", transcription: "[slɛd]", association: "след" },
    { rus: "шайба", eng: "puck", transcription: "[pʌk]", association: "пакет" },
    { rus: "весло", eng: "paddle", transcription: "[.pжdl]", association: "педаль" },
    { rus: "монах", eng: "monk", transcription: "[m..k]", association: "манго" },
    { rus: "пятно", eng: "stain", transcription: "[ste.n]", association: "стена" },
    { rus: "чердак", eng: "attic", transcription: "['жt.k]", association: "этикетка" },
    { rus: "очередь", eng: "line", transcription: "[la.n]", association: "лайка" },
    { rus: "багажник", eng: "trunk", transcription: "[tr..k]", association: "танк" },
    { rus: "фургон", eng: "van", transcription: "[vжn]", association: "вентилятор" },
    { rus: "грузовик", eng: "lorry", transcription: "['l.r.]", association: "лорд" },
    { rus: "трюм", eng: "hold", transcription: "[h.uld]", association: "холодильник" },
    { rus: "мачта", eng: "mast", transcription: "[ma:st]", association: "мастер" },
    { rus: "весло", eng: "scull", transcription: "[sk.l]", association: "скала" },
    { rus: "шлюпка", eng: "boat", transcription: "[b.ut]", association: "бочка" },
    { rus: "яхта", eng: "yacht", transcription: "[j.t]", association: "йод" },
    { rus: "экипаж", eng: "crew", transcription: "[ kru: ]", association: "кружка" },
    { rus: "краб", eng: "crab", transcription: "[krжb]", association: "Р." },
    { rus: "судья", eng: "judge", transcription: "['...]", association: "джаз" },
    { rus: "забастовка", eng: "strike", transcription: "[stra.k]", association: "страж" },
    { rus: "лапа", eng: "paw", transcription: "[p..]", association: "почка" },
    { rus: "пешка", eng: "pawn", transcription: "[p..n]", association: "пони" },
    { rus: "скунс", eng: "skunk", transcription: "[sk..k]", association: "сканер" },
    { rus: "сундук", eng: "chest", transcription: "t.est", association: "чеснок" },
    { rus: "осадок", eng: "lees", transcription: "[li.z]", association: "линза" },
    { rus: "клюв", eng: "beak", transcription: "[bi.k]", association: "бритва/ручка bic" },
    { rus: "загар", eng: "tan", transcription: "[tжn]", association: "тан" },
    { rus: "прилив и отлив", eng: "tide", transcription: "[ta.d]", association: "Тайд (стиральный порошок)" },
    { rus: "сало", eng: "lard", transcription: "[l..d]", association: "ларец" },
    { rus: "фарш", eng: "mince", transcription: "[m.ns]", association: "миниюбка" },
    { rus: "баржа", eng: "barge", transcription: "[b...]", association: "бадминтон" },
    { rus: "домкрат", eng: "jack", transcription: "[.жk]", association: "джем" },
    { rus: "копьё", eng: "spear", transcription: "[sp..]", association: "спирт" },
    { rus: "обряд, ритуал", eng: "rite", transcription: "[ra.t]", association: "Рай" },
    { rus: "кустарник", eng: "shrub", transcription: "[.r.b]", association: "шрам" },
    { rus: "трясина", eng: "marsh", transcription: "[m...]", association: "машина" },
    { rus: "журавль", eng: "crane", transcription: "[kre.n]", association: "крест" },
    { rus: "угорь", eng: "eel", transcription: "[i.l]", association: "ил" },
    { rus: "финик", eng: "date", transcription: "[de.t]", association: "детектив" },
    { rus: "кожура", eng: "peel", transcription: "[pi.l]", association: "пила" },
    { rus: "колодец", eng: "well", transcription: "[w.l]", association: "велосипед" },
    { rus: "факел", eng: "torch", transcription: "[t...]", association: "точилка" },
    { rus: "завещание", eng: "will", transcription: "[wɪl]", association: "вилка" },
    { rus: "раб", eng: "slave", transcription: "[sleɪv]", association: "с лейкой" },
    { rus: "шпион", eng: "spy", transcription: "[ˈspaɪ]", association: "спальня" },
    { rus: "капкан", eng: "trap", transcription: "[træp]", association: "трап корабля" },
    { rus: "крючок", eng: "hook", transcription: "[hʊk]", association: "художник + удар" },
    { rus: "блоха", eng: "flea", transcription: "[fliː]", association: "флипчарт" },
    { rus: "аист", eng: "stork", transcription: "[stɔːk]", association: "стол" },
    { rus: "мох", eng: "moss", transcription: "[mɒs]", association: "Москва" },
    { rus: "священник", eng: "priest", transcription: "[priːst]", association: "пристань" },
    { rus: "солома", eng: "straw", transcription: "[strɔː]", association: "стройка" },
    { rus: "ничья", eng: "draw", transcription: "[drɔː]", association: "дротик" },
    { rus: "арфа", eng: "harp", transcription: "[hɑːp]", association: "халат" },
    { rus: "тормоз", eng: "brake", transcription: "[breɪk]", association: "брелок" },
    { rus: "холм", eng: "hill", transcription: "[hɪl]", association: "хирург" },
    { rus: "песок", eng: "sand", transcription: "[sænd]", association: "сандали" },
    { rus: "лужа(на улице)", eng: "puddle", transcription: "[ˈpʌdl]", association: "падал в лужу" },
    { rus: "куст", eng: "bush", transcription: "[bʊʃ]", association: "Джордж Буш" },
    { rus: "раскладушка", eng: "cot", transcription: "[kɒt]", association: "кот" },
    { rus: "рана", eng: "wound", transcription: "[wuːnd]", association: "вундеркинд" },
    { rus: "простыня", eng: "sheet", transcription: "[ʃiːt]", association: "щит" },
    { rus: "чаевые", eng: "tip", transcription: "[tɪp]", association: "типография" },
    { rus: "мельница", eng: "mill", transcription: "[mɪl]", association: "миллионер" },
    { rus: "трюк", eng: "stunt", transcription: "[stʌnt]", association: "станция" },
    { rus: "смычок", eng: "bow", transcription: "[baʊ]", association: "бал" },
    { rus: "лагерь", eng: "camp", transcription: "[kæmp]", association: "кемпинг" },
    { rus: "топор", eng: "axe", transcription: "[æks]", association: "экскаватор" },
    { rus: "напильник", eng: "file", transcription: "[faɪl]", association: "файл" },
    { rus: "сантехник", eng: "plumber", transcription: "[ˈplʌməə]", association: "пламя" },
    { rus: "пульт(для ТВ)", eng: "remote", transcription: "[rɪˈməəʊt]", association: "ремонт" },
    { rus: "булыжник", eng: "cobble", transcription: "[ˈkɒbl]", association: "кобыла" },
    { rus: "конюшня", eng: "stable", transcription: "[ˈsteɪbl]", association: "стебель" },
    { rus: "пломба", eng: "filling", transcription: "[ˈfɪlɪŋ]", association: "филин" },
    { rus: "погреб", eng: "cellar", transcription: "[ˈsɛlə]", association: "селёдка" },
    { rus: "потолок", eng: "ceiling", transcription: "[ˈsiːlɪŋ]", association: "силач" },
    { rus: "котел", eng: "cauldron", transcription: "[ˈkɔːldrən]", association: "колдун" },
    { rus: "бочка", eng: "barrel", transcription: "[ˈbærəl]", association: "берлога" },
    { rus: "гамак", eng: "hammock", transcription: "[ˈhæmək]", association: "хомяк" },
    { rus: "дырокол", eng: "puncher", transcription: "[ˈpʌnʧə]", association: "панк" },
    { rus: "тележка", eng: "trolley", transcription: "[ˈtrɒli]", association: "троллейбус" },
    { rus: "жулик", eng: "rogue", transcription: "[rəʊg]", association: "рог" },
    { rus: "штанга", eng: "barrel", transcription: "[ˈbærəl]", association: "берлога" },
    { rus: "мусор", eng: "rubbish", transcription: "[ˈrʌbɪʃ]", association: "раб" },
    { rus: "диванная подушка", eng: "cushion", transcription: "['kuʃ(ə)n]", association: "кувшин" },
    { rus: "вигвам", eng: "tepee", transcription: "['tiːpiː]", association: "типография" },
    { rus: "крепость", eng: "fortress", transcription: "[ˈfɔːtrɪs]", association: "форточка" },
    { rus: "разводной мост", eng: "drawbridge", transcription: "[ˈdrɔːbrɪdʒ ]", association: "дрова + бригада" },
    { rus: "мечеть", eng: "mosque", transcription: "[mɒsk]", association: "мозг" },
    { rus: "ломбард", eng: "pawnshop", transcription: "['pɔːnʃɔp]", association: "пони + шорты" },
    { rus: "капот", eng: "bonnet", transcription: "['bɔnɪt]", association: "банка" },
    { rus: "флот", eng: "marine", transcription: "[mə'riːn]", association: "марионетка" },
    { rus: "паруса", eng: "canvas", transcription: "['kænvəs]", association: "кенгуру + весло" },
    { rus: "моторная лодка", eng: "dinghy", transcription: "['dɪŋgɪ]", association: "деньги" },
    { rus: "паром", eng: "ferry", transcription: "['ferɪ]", association: "фермер" },
    { rus: "танкер", eng: "tanker", transcription: "['tæŋkə]", association: "Р." },
    { rus: "подлокотник", eng: "armrest", transcription: "[ˈɑːmrɛst]", association: "армрестлинг" },
    { rus: "кабина летчика", eng: "cockpit", transcription: "['kɔkpɪt]", association: "кокос" },
    { rus: "пшеница", eng: "wheat", transcription: "[(h)wiːt]", association: "витрина" },
    { rus: "форель", eng: "trout", transcription: "[traut]", association: "траур" },
    { rus: "кальмар", eng: "squid", transcription: "[skwɪd]", association: "скворечник" },
    { rus: "адвокат", eng: "lawyer", transcription: "['lɔɪə]", association: "лошадь" },
    { rus: "доход, прибыль", eng: "income", transcription: "['ɪŋkʌm]", association: "инки" },
    { rus: "мастерская", eng: "workshop", transcription: "['wɜːkʃɔp]", association: "вокзал + шорты" },
    { rus: "рыцарский турнир", eng: "joust", transcription: "[ʤaust]", association: "джаз + усы" },
    { rus: "пот", eng: "sweat", transcription: "[swet]", association: "свет" },
    { rus: "веревка", eng: "rope", transcription: "[rəʊp]", association: "ров" },
    { rus: "винтовка", eng: "rifle", transcription: "[ˈraɪfəl]", association: "Рай + фен" },
    { rus: "предатель", eng: "traitor", transcription: "[ˈtreɪtə]", association: "поднос (eng)" },
    { rus: "уголь", eng: "coal", transcription: "[kəʊl]", association: "кулон" },
    { rus: "колонна", eng: "pillar", transcription: "[ˈpɪlə]", association: "пила" },
    { rus: "стажер", eng: "trainee", transcription: "[treɪˈniː]", association: "тренер" },
    { rus: "соперник", eng: "rival", transcription: "[ˈraɪvəl]", association: "Рай + велосипед" },
    { rus: "гребец", eng: "rower", transcription: "[ˈrəʊə]", association: "ров" },
    { rus: "шина", eng: "tire", transcription: "[ˈtaɪə]", association: "Тайд (стиральный порошок)" },
    { rus: "пушка", eng: "cannon", transcription: "[ˈkænən]", association: "кенгуру" },
    { rus: "пастбище", eng: "pasture", transcription: "[’pæstʃər]", association: "песок + червяк" },
    { rus: "плесень", eng: "mould", transcription: "[məʊld]", association: "молния" },
    { rus: "веснушки", eng: "freckles", transcription: "['freklz]", association: "фреска" },
    { rus: "дуло", eng: "muzzle", transcription: "[ˈmʌzl]", association: "мазь" },
    { rus: "ракета", eng: "missile", transcription: "[ˈmɪsaɪl]", association: "миска" },
    { rus: "крот", eng: "mole", transcription: "[məʊl]", association: "молния" },
    { rus: "чайка", eng: "seagull", transcription: "[ˈsiːgʌl]", association: "сигарета" },
    { rus: "изюм", eng: "raisin", transcription: "[ˈreɪzn]", association: "резина" },
    { rus: "мухобойка", eng: "swatter", transcription: "[ˈswɒtə]", association: "свора (собак)" },
    { rus: "балетная пачка", eng: "tutu", transcription: "['tuːtuː]", association: "поезд" },
    { rus: "гидрокостюм", eng: "wetsuit", transcription: "['wetˌs(j)uːt]", association: "ветка + сюрприз" },
    { rus: "тополь", eng: "poplar", transcription: "[ˈpɒplə]", association: "поплавок" },
    { rus: "цыган(ка)", eng: "gipsy", transcription: "[ˈʤɪpsi]", association: "джип" },
    { rus: "свинарник", eng: "pigsty", transcription: "[ˈpɪgstaɪ]", association: "свинья стоит" },
    { rus: "колдун", eng: "sorcerer", transcription: "[ˈsɔːsərə]", association: "соска" },
    { rus: "убийца", eng: "murderer", transcription: "[ˈmɜːdərə]", association: "мёд" },
    { rus: "домохозяйка", eng: "housewife", transcription: "[ˈhaʊswaɪf ]", association: "жена дома" },
    { rus: "дверной глазок", eng: "spyhole", transcription: "['spaɪhəul]", association: "спальня + холодильник" },
    { rus: "зажигание", eng: "ignition", transcription: "[ɪg'nɪʃ(ə)n]", association: "игрок + ниша" },
    { rus: "смокинг", eng: "tuxedo", transcription: "[tʌk.ˈsiː.dəʊ]", association: "такси" },
    { rus: "дирижёр", eng: "conductor", transcription: "[kən.ˈdʌk.tə]", association: "кондуктор" },
    { rus: "воин", eng: "warrior", transcription: "[ˈwɒ.rɪə]", association: "ворон" },
    { rus: "сосулька", eng: "icicle", transcription: "[ˈaɪsɪkl]", association: "Айболит + секатор" },
    { rus: "антенна", eng: "aerial", transcription: "[ˈeərɪəl]", association: "Ариэль (русалочка)" },
    { rus: "глушитель", eng: "silencer", transcription: "[ˈsaɪlənsə]", association: "сало + лента" },
    { rus: "гусеница", eng: "caterpillar", transcription: "[ˈkætəəˌpɪləə]", association: "кетчуп + пила" },
    { rus: "плен", eng: "captivity", transcription: "[kæpˈtɪvɪti]", association: "коптят" },
    { rus: "наводнение", eng: "flood", transcription: "[flʌd]", association: "флакон" },
    { rus: "палата", eng: "ward", transcription: "[wɔːd]", association: "вода" },
    { rus: "клякса", eng: "blot", transcription: "[blɒt]", association: "блокнот" },
    { rus: "трущобы", eng: "slums", transcription: "[slʌmz ]", association: "сладости" },
    { rus: "кузов", eng: "cab", transcription: "[kæb]", association: "кепка" },
    { rus: "плацкарт", eng: "berth", transcription: "[bəːθ]", association: "босоножки" },
    { rus: "палуба", eng: "deck", transcription: "[dek]", association: "доска" },
    { rus: "плот", eng: "raft", transcription: "[rɑːft]", association: "рефери" },
    { rus: "буксир", eng: "tow", transcription: "[təu]", association: "топор" },
    { rus: "поднос", eng: "tray", transcription: "[treɪ]", association: "тренажёр" },
    { rus: "поход", eng: "hike", transcription: "[haik]", association: "халат" },
    { rus: "щука", eng: "pike", transcription: "[paɪk]", association: "паек" },
    { rus: "затылок", eng: "nape", transcription: "[neɪp]", association: "наперсток" },
    { rus: "семя", eng: "seed", transcription: "[siːd]", association: "сидр" },
    { rus: "пиявка", eng: "leech", transcription: "[liːtʃ]", association: "личинка" },
    { rus: "лезвие", eng: "blade", transcription: "[bleɪd]", association: "блеск (для губ)" },
    { rus: "бородавкa", eng: "wart", translation: "[wɔ:t]", association: "воротник" },
    { rus: "шпаргалка", eng: "crib", translation: "[krɪb]", association: "кристалл" },
    { rus: "кувшин", eng: "jug", translation: "[ʤʌg]", association: "джаз" },
    { rus: "камера(тюремная)", eng: "ward", translation: "[wo:d]", association: "водка" },
    { rus: "иск", eng: "plea", translation: "[pliː]", association: "плитка" },
    { rus: "задвижка", eng: "latch", translation: "[læʧ]", association: "лечо" },
    { rus: "вмятина", eng: "dent", translation: "[dɛnt]", association: "деньги" },
    { rus: "бордюр", eng: "kerb", translation: "[kɜːb]", association: "коробка" },
    { rus: "щит", eng: "shield", translation: "[ʃiːld]", association: "шило" },
    { rus: "добыча", eng: "loot", translation: "[luːt]", association: "лупа" },
    { rus: "источник, родник", eng: "spring", translation: "[sprɪŋ]", association: "спринт" },
    { rus: "штиль", eng: "calm", translation: "[kɑːm]", association: "камин" },
    { rus: "стадо", eng: "herd", translation: "[hɜːd]", association: "хотдог" },
    { rus: "канава", eng: "ditch", translation: "[dɪʧ]", association: "дичь" },
    { rus: "шнур", eng: "cord", translation: "[kɔːd]", association: "код (замок с кодом)" },
    { rus: "глина", eng: "clay", translation: "[kleɪ]", association: "клей" },
    { rus: "стая", eng: "flock", translation: "[flɒk]", association: "фломастер" },
    { rus: "плащ с капюшоном", eng: "cape", translation: "[keɪp]", association: "кепка" },
    { rus: "счёт", eng: "score", translation: "[skɔː]", association: "скоба" },
    { rus: "скала", eng: "cliff", translation: "[klɪf]", association: "клинок" },
    { rus: "сук", eng: "bough", translation: "[baʊ]", association: "балу" },
    { rus: "гнездо", eng: "nest", translation: "[nɛst]", association: "несушка (курица)" },
    { rus: "кобыла", eng: "mare", translation: "[meə]", association: "мел" },
    { rus: "грива", eng: "mane", translation: "[meɪn]", association: "мент" },
    { rus: "сосна", eng: "pine", translation: "[paɪn]", association: "панама" },
    { rus: "шляпка(гриба)", eng: "cap", translation: "[ˈkæp]", association: "кепка" },
    { rus: "ножка(гриба)", eng: "stipe", translation: "[staɪp]", association: "стая" },
    { rus: "окоп, траншея", eng: "trench", translation: "[trɛnʧ]", association: "тренер" },
    { rus: "сорняк", eng: "weed", translation: "[wiːd]", association: "видеокассета" },
    { rus: "поклонник", eng: "fan", translation: "[fæn]", association: "фен" },
    { rus: "наживка", eng: "bait", translation: "[beɪt]", association: "бей наживку" },
    { rus: "китобой", eng: "whaler", translation: "[ˈweɪlə]", association: "вуаль" },
    { rus: "палатка", eng: "tent", translation: "[tɛnt]", association: "тент" },
    { rus: "пружина", eng: "spring", translation: "[sprɪŋ]", association: "спринт" },
    { rus: "люк", eng: "manhole", translation: "[ˈmænhəʊl ]", association: "мент + холодильник" },
    { rus: "якорь", eng: "anchor", translation: "['æŋkə]", association: "энциклопедия" },
    { rus: "сельдь", eng: "herring", translation: "['herɪŋ]", association: "херувим" },
    { rus: "выжимать", eng: "wring", translation: "[rɪŋ]", association: "ринг" },
    { rus: "тереть(щёткой)", eng: "scrub", translation: "[skrʌb]", association: "скраб" },
    { rus: "заворачивать", eng: "wrap", translation: "[ræp]", association: "рэпер" },
    { rus: "бронировать, брать билет", eng: "book", translation: "[buk ]", association: "букварь" },
    { rus: "красть", eng: "steal", translation: "[stiːl]", association: "стикер" },
    { rus: "лизать", eng: "lick", translation: "[lɪk]", association: "ликёр" },
    { rus: "дразнить", eng: "tease", translation: "[tiːz]", association: "тир" },
    { rus: "благословлять", eng: "bless", translation: "[bles]", association: "блеск" },
    { rus: "зубрить", eng: "cram", translation: "[kræm]", association: "крем" },
    { rus: "резать на мелкие кусочки", eng: "chop", translation: "[ʧɔp]", association: "ЧОП (частное охранное предприятие)" },
    { rus: "хромать", eng: "limp", translation: "[lɪmp]", association: "лимон" },
    { rus: "мыть шваброй", eng: "mop", translation: "[mɒp]", association: "маркер" },
    { rus: "лаять", eng: "bark", translation: "[bɑːk]", association: "бак" },
    { rus: "упасть в обморок", eng: "faint", translation: "[feɪnt]", association: "фея" },
    { rus: "моргать", eng: "blink", translation: "[blɪŋk]", association: "блин" },
    { rus: "мигнуть", eng: "wink", translation: "[wɪŋk]", association: "винт" },
    { rus: "сеять", eng: "sow", translation: "[saʊ]", association: "сауна" },
    { rus: "косить", eng: "mow", translation: "[maʊ]", association: "Маугли" },
    { rus: "замочить", eng: "soak", translation: "[səʊk]", association: "сок" },
    { rus: "подметать", eng: "sweep", translation: "[swiːp]", association: "свинья" },
    { rus: "девочка", eng: "girl", translation: "[gɜːl]", association: "гольфы" },
    { rus: "кровать", eng: "bed", translation: "[bɛd]", association: "бедняк" },
    { rus: "стул", eng: "chair", translation: "[ʧeə]", association: "череп" },
    { rus: "отец", eng: "father", translation: "[ˈfɑːðə]", association: "фазан, фавн" },
    { rus: "автомобиль", eng: "car", translation: "[kɑː]", association: "камень" },
    { rus: "стол", eng: "table", translation: "[ˈteɪbl]", association: "таблетка" },
    { rus: "игрушка", eng: "toy", translation: "[tɔɪ]", association: "тостер" },
    { rus: "мальчик", eng: "boy", translation: "[bɔɪ]", association: "бой (драка)" },
    { rus: "стакан", eng: "glass", translation: "[glɑːs]", association: "глаз" },
    { rus: "осьминог", eng: "octopus", translation: "[ˈɒktəpəs]", association: "окно + пистолет" },
    { rus: "автобус", eng: "bus", translation: "[bʌs]", association: "бассейн" },
    { rus: "коробка, ящик", eng: "box", translation: "[bɒks]", association: "боксёр" },
    { rus: "лиса", eng: "fox", translation: "[fɒks]", association: "фокусник" },
    { rus: "церковь", eng: "church", translation: "[ʧɜːʧ]", association: "чётки" },
    { rus: "щетка, кисть", eng: "brush", translation: "[brʌʃ]", association: "браслет" },
    { rus: "птица", eng: "bird", translation: "[bɜːd]", association: "бёдра" },
    { rus: "обувь", eng: "shoes", translation: "[ʃuːz]", association: "Шурик, Шумахер" },
    { rus: "малыш", eng: "baby", translation: "[ˈbeɪbi]", association: "белка + бита" },
    { rus: "конфета", eng: "sweet / candy", translation: "[swiːt] / [ˈkændi]", association: "свитер / кенгуру" },
    { rus: "щенок", eng: "puppy", translation: "[ˈpʌpi]", association: "папка" },
    { rus: "город", eng: "city / town", translation: "[ˈsɪti] / [taʊn]", association: "сито / танцор" },
    { rus: "семья", eng: "family", translation: "[ˈfæmɪli]", association: "фен" },
    { rus: "муха", eng: "fly", translation: "[flai]", association: "флаг" },
    { rus: "ежедневник, дневник", eng: "diary", translation: "[ˈdaɪəri]", association: "Диарея, диадема" },
    { rus: "листок", eng: "leaf", translation: "[liːf]", association: "лифчик" },
    { rus: "жена", eng: "wife", translation: "[waɪf]", association: "вафли" },
    { rus: "нож", eng: "knife", translation: "[naɪf]", association: "навоз" },
    { rus: "рубашка", eng: "shirt", translation: "[ʃɜːt]", association: "щётка" },
    { rus: "футболка", eng: "t-shirt", translation: "[ˈtiːʃɜːt]", association: "тигр + щётка" },
    { rus: "пекарь", eng: "baker", translation: "[ˈbeɪkə]", association: "бекон" },
    { rus: "мышь", eng: "mouse", translation: "[maʊs]", association: "Микки Маус" },
    { rus: "зуб", eng: "tooth", translation: "[tuːθ]", association: "туфли" },
    { rus: "ступня", eng: "foot", translation: "[fʊt]", association: "футбол" },
    { rus: "дети", eng: "children", translation: "[ˈʧɪldrən]", association: "чили" },
    { rus: "дитя, ребёнок", eng: "child", translation: "[ʧaɪld]", association: "чай" },
    { rus: "бык", eng: "ox", translation: "[ɒks]", association: "окей" },
    { rus: "овца", eng: "sheep", translation: "[ʃiːp]", association: "шипы" },
    { rus: "рыба", eng: "fish", translation: "[fɪʃ]", association: "фишки" },
    { rus: "фрукт(ы)", eng: "fruit", translation: "[fruːt]", association: "фрукт" },
    { rus: "олень", eng: "deer", translation: "[dɪə]", association: "диск" },
    { rus: "собака", eng: "dog", translation: "[dɒg]", association: "доктор" },
    { rus: "кошка", eng: "cat", translation: "[kæt]", association: "кетчуп" },
    { rus: "платье", eng: "dress", translation: "[drɛs]", association: "дрессировщик" },
    { rus: "здание", eng: "building", translation: "[ˈbɪldɪŋ]", association: "билет + динозавр" },
    { rus: "море", eng: "sea", translation: "[siː]", association: "синица" },
    { rus: "блокнот", eng: "notepad, notebook", translation: "[ˈnəʊtˌpæd], [ˈnəʊtbʊk]", association: "ноутбук" },
    { rus: "диван", eng: "sofa", translation: "[ˈsəʊfə]", association: "сова" },
    { rus: "ручка", eng: "pen", translation: "[pɛn]", association: "пень" },
    { rus: "яблоко", eng: "apple", translation: "[ˈæpl]", association: "эппл (Айфон)" },
    { rus: "апельсин", eng: "orange", translation: "[ˈɒrɪnʤ]", association: "Оранжевый, орангутан" },
    { rus: "ухо", eng: "ear", translation: "[ɪə]", association: "Иа (ослик)" },
    { rus: "животное", eng: "animal", translation: "[ˈænɪməl]", association: "енот и мел" },
    { rus: "слон", eng: "elephant", translation: "[ˈɛlɪfənt]", association: "ель + фанта" },
    { rus: "час", eng: "hour", translation: "[ˈaʊə]", association: "аура" },
    { rus: "зонт", eng: "umbrella", translation: "[ʌmˈbrɛlə]", association: "армейский брелок" },
    { rus: "парта", eng: "desk", translation: "[dɛsk]", association: "диск" },
    { rus: "орел", eng: "eagle", translation: "[ˈiːgl]", association: "игла" },
    { rus: "друг", eng: "friend", translation: "[frɛnd]", association: "фрегат" },
    { rus: "глаз", eng: "eye", translation: "[aɪ]", association: "Ай-Болит" },
    { rus: "книга", eng: "book", translation: "[bʊk]", association: "букет" },
    { rus: "яйцо", eng: "egg", translation: "[ɛg]", association: "экзамен" },
    { rus: "сова", eng: "owl", translation: "[aʊl]", association: "Акула, аут ( в футболе сбрасывает)" },
    { rus: "картофель", eng: "potato", translation: "[pəˈteɪtəʊ]", association: "потеет" }
    ]

  let score = wordsList.length;

  let startCount = document.getElementById("start_count");
  let leftWords = document.getElementById("left_words");

  startCount.innerText = `${score}`;
  leftWords.innerText = `${score}`;

  const wordsElement = document.getElementById("words");
  const tableElement = document.createElement("table");
  tableElement.setAttribute("class", "table");

  const thead = tableElement.appendChild(document.createElement("thead"));
  thead.setAttribute("class", "thead-dark");
  const theadTr = thead.appendChild(document.createElement("tr"));

  const theadTd0 = theadTr.appendChild(document.createElement("th"));
  const theadTd1 = theadTr.appendChild(document.createElement("th"));
  const theadTd2 = theadTr.appendChild(document.createElement("th"));
  const theadTd3 = theadTr.appendChild(document.createElement("th"));
  const theadTd4 = theadTr.appendChild(document.createElement("th"));

  theadTd0.setAttribute("class", "word-item_close");
  theadTd1.setAttribute("class", "word-item_rus");
  theadTd2.setAttribute("class", "word-item_eng");
  theadTd3.setAttribute("class", "word-item_trans");
  theadTd4.setAttribute("class", "word-item_assoc");

  theadTd0.setAttribute("scope", "col");
  theadTd1.setAttribute("scope", "col");
  theadTd2.setAttribute("scope", "col");
  theadTd3.setAttribute("scope", "col");
  theadTd4.setAttribute("scope", "col");

  // theadTd0.appendChild(document.createTextNode("Русское слово"));
  theadTd1.appendChild(document.createTextNode("Русское слово"));
  theadTd2.appendChild(document.createTextNode("Иностранное слово"));
  theadTd3.appendChild(document.createTextNode("Транскрипция"));
  theadTd4.appendChild(document.createTextNode("Ассоциация"));

  const tbody = tableElement.appendChild(document.createElement("tbody"));

  wordsList.forEach((item) => {
    const tr = tbody.appendChild(document.createElement("tr"));
    const tdClose = tr.appendChild(document.createElement("td"));
    const tdRus = tr.appendChild(document.createElement("td"));
    const tdEng = tr.appendChild(document.createElement("td"));
    const tdTrans = tr.appendChild(document.createElement("td"));
    const tdAssoc = tr.appendChild(document.createElement("td"));
    tdClose.setAttribute("class", "word-item_close");
    tdRus.setAttribute("class", "word-item_rus");
    tdEng.setAttribute("class", "word-item_eng");
    tdTrans.setAttribute("class", "word-item_trans");
    tdAssoc.setAttribute("class", "word-item_assoc");
    // tdClose.appendChild(document.createTextNode("X"));
    tdRus.appendChild(document.createTextNode(item.rus));
    tdEng.appendChild(document.createTextNode(item.eng));
    tdTrans.appendChild(document.createTextNode(item.transcription));
    tdAssoc.appendChild(document.createTextNode(item.association));


    tdClose.addEventListener("click", (event) => {
      event.srcElement.parentElement.classList.toggle("hide");
      score -= 1;
      leftWords.innerText = `${score}`;

    });
  })
  wordsElement.appendChild(tableElement);

})