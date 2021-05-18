$(document).ready(function () {
  $(window).scroll(function () {
    $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50)
  });
});
