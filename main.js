let Phrase = require("m-nsd3-palindrome");

alert(new Phrase("Madam, I'm Adam.").palindrome());
let string = prompt("パリンドロームをテストしたい文字列を入力してください:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}"はパリンドロームです`);
} else {
  alert(`"${phrase.content}"はパリンドロームではありません`)
}