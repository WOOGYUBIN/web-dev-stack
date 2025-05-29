const click = document.querySelector("section button:first-child");
const img = document.querySelectorAll("img");
const span = document.querySelector("button span");
const h2 = document.querySelector("h2");
const restart = document.querySelector("section button:last-child");
console.log(img);
// click : 클릭 이벤트를 걸어야 하는 애
// img : 내가 클릭했을 때 바꿔야 하는 애
let count = 0;
const game = () => {
  const random = [
    // 랜덤값 : 1 ~ 3까지의 랜덤값
    Math.floor(Math.random() * 3) + 1, //3개의 값있으니까 *3이고 +1은 1부터라는 의미
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
  ];
  for (let i = 0; i < img.length; i++) {
    img[i].setAttribute("src", `assets/spy${random[i]}.jpg`);
  }
  console.log(count);
  // 클릭할 때마다 카운트 증가
  span.innerHTML = ++count;
  // 이미지 3개가 일치한 경우 버튼 disabled 처리하는 방법 3가지
  //방법1 click.setAttribute("disabled", "disabled");
  // 방법2 click.setAttribute("disabled", true);
  if (random[0] === random[1] && random[1] === random[2]) {
    click.disabled = true; //방법3
    // h2에 visibility: visible로 변경
    h2.style.visibility = "visible";
  }
};
const end = () => {
  //이미지는 처음 그댈 1,2,3 순서대로 보이게 하고

  for (let i = 0; i < img.length; i++) {
    img[i].setAttribute("src", `assets/spy${i + 1}.jpg`);
  }
  // count는 0으로 바꾸고 span은 비우고
  count = 0;
  span.innerHTML = "";
  // h2 visibility = hidden 처리
  h2.style.visibility = "hidden";
  // click 버튼의 disabled false 처리
  click.disabled = false;
};
click.addEventListener("click", game);
restart.addEventListener("click", end);

// 새로고침
/* restart.addEventListener("click", () => {
    location.reload();
 }); */
