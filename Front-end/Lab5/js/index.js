$(document).ready(function(){
    $('body').addClass('loaded');
    $('#toggle-nav-btn').click(function(){
        $('#nav-list').toggleClass("d-none")
    })
  });
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bstoggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function
(tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
});