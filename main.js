const path = document.querySelector(".infinity");
const circleArr = document.querySelectorAll(".circle");
const apples = document.querySelector("#choose-apple");
const applesToPick = document.querySelectorAll(".pick-apple");
const race = document.querySelector("#race");
const showSelected = document.querySelector("#show-selected");
const winnerSection = document.querySelector("#winner-section");
const loserSection = document.querySelector("#loser-section");
let winnerInstance = null
let color = ''
let selected = []

const getInstance = () => {
    console.log(applesToPick)
  winnerInstance = Math.random() < 0.5
  
  const result = document.querySelector("#result");
  result.style.display = 'block'
  result.innerHTML = winnerInstance;
  apples.style.display = 'block'
  
};
const clickHanlder = (e) => {
  const id = e.target.id;
  selected = document.querySelectorAll(`#${id}`);
  selected.forEach((item) => item.setAttribute("id", "selected"));
  console.log(selected[0].classList[1])
  color = selected[1].classList[1]


   showSelected.innerHTML = 'you have chosen the ' + color + ' one'

  race.style.display = 'block'



};
const animateApples = () => {

  apples.style.display = 'none'
  circleArr.forEach((item, index) => {
    const val = { distance: 0 };
    gsap.to(val, {
      distance: path.getTotalLength(),
      duration: winnerInstance ? (item.id === "selected" ? 5 : 5.5 + index) : 5 + index,
      onUpdate: () => {
        const point = path.getPointAtLength(val.distance);
        item.setAttribute("cx", point.x + index);
        item.setAttribute("cy", point.y);
      },
      onComplete: () => {
        winnerInstance ? winnerSection.style.display = 'block' : loserSection.style.display = 'block'
      }
    });
  });

};
