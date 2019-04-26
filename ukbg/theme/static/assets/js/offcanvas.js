$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
  // needed to append the servicebutton viewlet from belowcontent to the right portlet
  $("#servicebuttoncontent").append("#servicebutton");
});

// Use this for a navbar sticky after scrolling down 
//$('#stickyNav').affix({
//});