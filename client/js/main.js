/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

/* -------------------------------------------------------------------------- */
// 1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
//     1. 이벤트 위임
// https://javascript.info/event-delegation
//     2. 반복문
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

/* -------------------------------------------------------------------------- */
// 2. 이미지와 색상의 데이터는 data.js 에서 불러와주세요.

/* -------------------------------------------------------------------------- */

// 3.각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.

// 배경색 변경 ( colorB의 기본값은 #000 으로 한다 )
// elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;

// // 이미지 변경
// target.src = `./assets/${data.name}.jpeg`;
// target.alt = data.alt;

/* -------------------------------------------------------------------------- */

// 4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.

//
/* -------------------------------------------------------------------------- */
// 5. 함수를 분리시켜주세요.
//     1. `setBgColor` 함수
//     2. `setImage` 함수
//     3. `setNameText` 함수

// function setBgColor() {}
// function setImage() {}
// function setNameText() {}
/* -------------------------------------------------------------------------- */

const body = document.querySelector("body");
const nickname = document.querySelector(".nickName");
const visualImg = document.querySelector(".visual-img");
const wrapper = document.querySelector(".wrapper");
// const list = document.querySelector(".list");

// function setBgColor() {}
// function setImage() {}
// function setNameText() {}

// z클릴하면;
// - 이미지 변경
// - 배경 색상 변경
// - 텍스트 변경

// function changingEvent(e) {
//   console.log(e.target);
// }

// 나중에 화살표 함수로 바꾸기 (에러고치기)
// wrapper.addEventListener("click", changingEvent(e));
wrapper.addEventListener("click", (e) => {
  // console.log(e.currenTarget.id.name);
  // console.log(data[e.currentTarget.id]);
  const i = e.target.id;
  console.log(i);
  console.log(data[i]);

  // post changing
  // i could be 0, 1, 2,3
  visualImg.src = `./assets/${data[i].name}.jpeg`;
  visualImg.alt = data[i].alt;

  // text changing
  nickname.textContent = data[i].name;

  // background changing
  // container.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
  body.style.background = `linear-gradient(to bottom, ${data[i].color[0]}, ${data[i].color[1]})`;
  // container.style.background = `linear-gradient(to bottom, "#ff6a00", "#720400")`;
  console.log(body);

  // target.src = `./assets/${data.name}.jpeg`;
  // target.alt = data.alt;
});
