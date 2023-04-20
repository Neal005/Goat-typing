import { getText, getWords, getWordsHTML } from "./text.js";

$(document).ready(function () {
  let words = getWords();
  let positionType = 0;
  $("#content").html(getWordsHTML(words, 0));
  $("#resetBtn").click(() => {
    words = getWords();
    positionType = 0;
    $("#content").html(getWordsHTML(words, positionType));
  });
  $("#input").keypress((e) => {
    let value = e.target.value.trim();
    switch (e.code) {
      case "Space":
        if (value) {
          words.checkWord(value, positionType);
          e.target.value = "";
          positionType++;
          $("#content").html(getWordsHTML(words, positionType));
          $("#current")[0].scrollIntoView(true);
        }
    }
  });
});
