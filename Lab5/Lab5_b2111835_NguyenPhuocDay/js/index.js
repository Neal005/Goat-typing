$(document).ready(function () {
  $("body").addClass("loaded");
  $("#toggle-nav-btn").click(function () {
    $("#nav-list").toggleClass(["d-none", "col-12"]);
    $("#nav-list").addClass("nav-mobile");
  });
  $(window).resize(function (e) {
    if (e.target.visualViewport.width > 576) {
      $("#nav-list").removeClass(["nav-mobile", "col-12"]);
      $("#nav-list").addClass(["d-none"]);
    }
  });
});
