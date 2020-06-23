function scrollAppear() {
  var introText = document.querySelector(".intro-text");
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (introPosition < screenPosition) {
    introText.classList.add("intro-appear");
  }
}
window.addEventListener("scroll", scrollAppear);
function development() {
  var modal0 = document.getElementById("feildDev");
  modal0.style.display = "block";
  var span0 = document.getElementById("devSpan");
  span0.onclick = function () {
    modal0.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal0) {
      modal0.style.display = "none";
    }
  };
}

function firstModal() {
  var modal1 = document.getElementById("feild2021");
  modal1.style.display = "block";
  var span1 = document.getElementById("firstSpan");
  span1.onclick = function () {
    modal1.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  };
}

function secondModal() {
  var modal2 = document.getElementById("feild2023");
  modal2.style.display = "block";
  var span2 = document.getElementById("secondSpan");
  span2.onclick = function () {
    modal2.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
}

function thirdModal() {
  var modal3 = document.getElementById("feild2025");
  modal3.style.display = "block";
  var span3 = document.getElementById("thirdSpan");
  span3.onclick = function () {
    modal3.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  };
}
