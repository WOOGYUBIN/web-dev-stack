// DOMContentLoaded 이벤트는 HTML 문서의 구조가 완전히 로드된 후 발생
// ex. html body꺼를 완전히 읽은 후에 DOMContentLoaded 이벤트안에 작성된게 읽힘
window.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  h1.style.color = "blue";

  // 클릭 이벤트
  const click = document.querySelector("#click");
  click.addEventListener("click", () => {
    // 클릭 이벤트가 일어나면 행하고자 하는 코드를 여기에 작성
    alert("클릭 이벤트 발생!");
    // click 색상을 변경
    click.style.background = "hotpink";
  });
  const double = document.querySelector("#double");
  double.addEventListener("dblclick", () => {
    alert("더블 클릭 발생!");
  });
  const right = document.querySelector("#right");
  right.addEventListener("contextmenu", (event) => {
    alert("우클릭 발생!");
    event.preventDefault(); //우클릭 방지
  });

  const hover = document.querySelector("#hover");
  hover.addEventListener("mouseenter", () => {
    console.log("mouseenter!");
    // 배경색상은 lightblue, 텍스트는 Mouse Enter! 변경
    hover.style.background = "lightblue";
    hover.textContent = "mouseenter";
  });

  hover.addEventListener("mouseleave", () => {
    console.log("mouseleave!");
    // 배경색상은 navy, 텍스트는 Mouse Leave! 변경
    hover.style.background = "red";
    hover.textContent = "mouseleave!";
  });

  // 폼 이벤트
  // ()안에 event인데 e로 생략가능
  const input = document.querySelector("#input");
  input.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
});
