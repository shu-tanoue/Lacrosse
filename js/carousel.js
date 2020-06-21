$(document).ready(function () {
  $(".carousel").carousel({
    shift: 150,
    dist: -100,
  });

  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 4500);
  }
  autoplay();
});
