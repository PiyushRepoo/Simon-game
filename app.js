let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelector(".btn");

let btns = ["yellow", "purple", "red", "green"];

document.getElementById('start').addEventListener('click', function(){
    if (started == false) {
        started = true;
        levelUp();
      }
})

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 500);
}

function levelUp() {
  document.body.classList.remove("bodyRed");
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);

  gameSeq.push(randomColor);
  gameFlash(randomBtn);
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.style.display = 'block';
    h2.innerHTML = `Game over. <b>Your score is ${level}. </br>Press any key to start again.`;

    reset();
  }
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
  document.body.classList.add("bodyRed");
  setTimeout(() => {
    document.body.classList.remove("bodyRed0");
  }, 1000);
}
