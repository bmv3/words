window.addEventListener("load", ()=>{
  const wordsList = [
      {rus: "кулак",           eng: "fist",   transcription: "[fɪst]",  association: "фисташки"},
      {rus: "кирпич",          eng: "brick",  transcription: "[brɪk]",  association: "брикет"},
      {rus: "парик",           eng: "wig",    transcription: "[wɪg]",   association: "вигвам"},
      {rus: "мел",             eng: "chalk",  transcription: "[tʃɔːk]", association: "чётки"},
      {rus: "спичка",          eng: "match",  transcription: "[mætʃ]",  association: "меч"},
      {rus: "отряд (военный)", eng: "troop",  transcription: "[truːp]", association: "труп"},
      {rus: "коготь",          eng: "claw",   transcription: "[klɔː]",  association: "клоун"},
      {rus: "свёкла",          eng: "beet",   transcription: "[biːt]",  association: "бита"},
      {rus: "клещ",            eng: "mite",   transcription: "[maɪt]",  association: "майка"},
      {rus: "ствол дерева",    eng: "trunk",  transcription: "[trʌŋk]", association: "трактор"},
      {rus: "ручей",           eng: "creek",  transcription: "[kriːk]", association: "крик"},
      {rus: "причал",          eng: "quay",   transcription: "[kiː]",   association: "кит"},
      {rus: "крыльцо",         eng: "porch",  transcription: "[pɔːʧ]",  association: "почтальон"},
      {rus: "грабить",         eng: "rob",    transcription: "[rɒ,b]",  association: "робот"},
      {rus: "киоск",           eng: "stall",  transcription: "[stɔːl]", association: "стол"},
      {rus: "сарай",           eng: "shed",   transcription: "[ʃɛd]",   association: "шедевр"},
      {rus: "грабли",          eng: "rake",   transcription: "[reɪk]",  association: "рейка"},
      {rus: "подошва",         eng: "sole",   transcription: "[səʊl]",  association: "соль"},
      {rus: "пряжка",          eng: "buckle", transcription: "[ˈbʌkl]", association: "бак"},
      {rus: "гипс",            eng: "cast",   transcription: "[kɑːst]", association: "кастрюля"},
      {rus: "кран",            eng: "tap",    transcription: "[tæp]",   association: "теплица"},
      {rus: "лопата",          eng: "shovel", transcription: "[ˈʃʌvl]", association: "щавель"},
      {rus: "пила",            eng: "saw",    transcription: "[sɔː]",   association: "сок"},
      {rus: "санки",           eng: "sled",   transcription: "[slɛd]",  association: "след"},
      {rus: "шайба",           eng: "puck",   transcription: "[pʌk]",   association: "пакет"}
    ]
    
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

    wordsList.forEach((item)=>{
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


      tdClose.addEventListener("click", (event)=>{
        console.log(event.srcElement.parentElement.classList.toggle("hide"));
        // event.srcElement.parentElement.toggle = ""
        
      });
      
      
      // textnode = document.createTextNode("Water");
      // tableElement.appendChild(textnode);
      
      // console.log(item);
    })
    wordsElement.appendChild(tableElement);
  
})