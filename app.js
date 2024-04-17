// let answer = String(Math.floor(Math.random() * 10000));
const answer = [
  String(Math.floor(Math.random() * 10)),
  String(Math.floor(Math.random() * 10)),
  String(Math.floor(Math.random() * 10)),
  String(Math.floor(Math.random() * 10)),
];

let ball = 0;
let strike = 0;

console.log(answer);
let guessNum = prompt("숫자를 입력해주세요.");
guessNum = guessNum.split("");

for (const [idx, i] of guessNum.entries()) {
  for (const ans of answer) {
    if (i === ans) {
      if (i === answer[idx]) {
        strike += 1;
        continue;
      }
      ball += 1;
    }
  }
}
/*
정답을 배열로 저장해서, index와 값이 같으면 strike +1
정답 배열안에 내가 입력한 숫자가 있는데 index가 다르면 ball + 1

비교방식
입력 숫자 하나당 정답 배열 돌면서 비교하기.
*/
