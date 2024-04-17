function baseballGame() {
  let answer = [
    String(Math.floor(Math.random() * 10)),
    String(Math.floor(Math.random() * 10)),
    String(Math.floor(Math.random() * 10)),
    String(Math.floor(Math.random() * 10)),
  ];
  console.log(answer); //랜덤 숫자 생성

  let guessNum = prompt("숫자를 입력해주세요.").split(""); //숫자 입력
  let ball = 0;
  let strike = 0;

  while (guessNum.join("") !== answer.join("")) {
    //숫자 맞추기 반복문
    ball = 0;
    strike = 0;
    for (const [idx, i] of guessNum.entries()) {
      //숫자를 인덱스,값 으로 나눠서 비교
      for (const ans of answer) {
        if (i === ans) {
          ball += 1;
        }
      }
      if (i === answer[idx]) {
        strike += 1;
        ball -= 1;
      }
    }
    guessNum = prompt(`${ball}볼 ${strike}스트라이크 입니다.`).split("");
  }
  alert(`축하드립니다 ! 정답은 ${answer.join("")}이였습니다.`);
  let response = prompt("한 번 더 플레이를 원하시면 Y를 입력해 주세요.");
  if (response.toUpperCase() === "Y") {
    baseballGame(); //재시작
  } else {
    alert("게임이 종료되었습니다.");
  }
}

baseballGame();

/*
정답을 배열로 저장해서, index와 값이 같으면 strike +1
정답 배열안에 내가 입력한 숫자가 있는데 index가 다르면 ball + 1

비교방식
입력 숫자 하나당 정답 배열 돌면서 비교하기.
*/
