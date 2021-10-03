const dodger = document.getElementById("dodger");

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 985) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 325) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
function moveDodgerUp() {
  const BottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(BottomNumbers, 10);

  if (bottom < 510) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});


function moveDodgerDown() {
  const BottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(BottomNumbers, 10);

  if (bottom > 50) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});