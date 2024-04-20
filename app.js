function baseballGame() {
  // let answer = [
  //   String(Math.floor(Math.random() * 10)),
  //   String(Math.floor(Math.random() * 10)),
  //   String(Math.floor(Math.random() * 10)),
  //   String(Math.floor(Math.random() * 10)),
  // ];
  // console.log(answer); //랜덤 숫자 생성
  let answer = [];

  const makeRandNum = () => {
    let num = String(Math.floor(Math.random() * 10));
    if (answer.includes(num) == false) {
      return answer.push(num);
    } else {
      return makeRandNum();
    }
  };

  for (let i = 0; i < 4; i++) {
    makeRandNum();
  }

  console.log(answer);

  let guessNum = prompt("추측할 숫자를 입력해주세요."); //숫자 입력

  const validateNum = () => {
    if (String(parseInt(guessNum)) !== guessNum) {
      guessNum = prompt(
        "[ERROR] 문자가 포함되어 있습니다. 숫자를 입력해주세요."
      );
      return validateNum();
    }
    if (guessNum.length !== 4) {
      guessNum = prompt(
        "[ERROR] 숫자의 자리수가 4자리와 일치하지 않습니다. 4자리 숫자를 입력해주세요."
      );
      return validateNum();
    }
    if (new Set(guessNum.split("")).size < 4) {
      guessNum = prompt(
        "[ERROR] 중복되는 숫자가 있습니다. 중복되지않는 숫자를 입력해주세요."
      );
      return validateNum();
    }
    return console.log(`입력한 숫자 : ${guessNum}`);
  };

  validateNum();

  let ball = 0;
  let strike = 0;

  while (guessNum !== answer.join("")) {
    //숫자 맞추기 반복문
    ball = 0;
    strike = 0;
    for (const [idx, i] of guessNum.split("").entries()) {
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
    guessNum = prompt(`${ball}볼 ${strike}스트라이크 입니다.`);
    validateNum();
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
