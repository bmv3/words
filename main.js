window.addEventListener("load", () => {
  
  
  function insertTableHeader() {
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

    theadTd0.appendChild(document.createTextNode("Русское слово"));
    theadTd1.appendChild(document.createTextNode("Русское"));
    theadTd2.appendChild(document.createTextNode("Иностранное"));
    theadTd3.appendChild(document.createTextNode("Тр."));
    theadTd4.appendChild(document.createTextNode("Асс"));
  }
  
  let storage = window.localStorage;

  if (storage.getItem("myWords")) {
    wordsList = JSON.parse(storage.getItem("myWords"));
  }
  
  let score = wordsList.length;

  let startCount = document.getElementById("start_count");
  let leftWords = document.getElementById("left_words");

  startCount.innerText = `${score}`;
  leftWords.innerText = `${score}`;

  const wordsElement = document.getElementById("words");
  const tableElement = document.createElement("table");
  tableElement.setAttribute("class", "table");

  insertTableHeader();

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
    tdClose.appendChild(document.createTextNode("X"));
    tdRus.appendChild(document.createTextNode(item.rus));
    tdEng.appendChild(document.createTextNode(item.eng));
    tdTrans.appendChild(document.createTextNode(item.transcription));
    tdAssoc.appendChild(document.createTextNode(item.association));

    tdClose.addEventListener("click", (event) => {
      event.srcElement.parentElement.classList.toggle("hide");
      score -= 1;
      leftWords.innerText = `${score}`;
    });
  });
  
  
  wordsElement.appendChild(tableElement);



/**
 * Функционал сохранения данных
 *
 */
  const storeButton = document.getElementById("store_button");
  storeButton.addEventListener("click", (event) => {
    let items = tbody.querySelectorAll("tr:not(.hide)");

    let storedData = [];

    for (let item of items) {
      
      storedData.push({
        rus: item.getElementsByClassName("word-item_rus")[0].innerText,
        eng: item.getElementsByClassName("word-item_eng")[0].innerText,
        transcription: item.getElementsByClassName("word-item_trans")[0].innerText,
        association: item.getElementsByClassName("word-item_assoc")[0].innerText,
      });

    }

    storage.setItem("myWords", JSON.stringify(storedData));

    storedData = [];
  });
})