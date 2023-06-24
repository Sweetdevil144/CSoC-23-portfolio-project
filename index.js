let darkmode = false;
$(".mode-switch").on("click", function () {
  if(!darkmode) {
    darkmode=true
    $(".first-page").addClass('dark-mode')
    $(".contact-me").addClass('dark-mode')
    $(".first-page").removeClass('light-mode')
    $(".contact-me").removeClass('light-mode')
    $("body").css('color','white')
    $("body").css('background-color','#343434')
    $(".link-1").html('<i class="fa-brands fa-linkedin-in fa-bounce" style="color: #ffffff;"></i>')
    $(".link-2").html('<i class="fa-brands fa-twitter fa-shake" style="color: #ffffff;"></i>')
    $(".link-3").html('<i class="fa-brands fa-github fa-flip " style="color: #ffffff;"></i>')
  } else {
    darkmode=false
    $(".first-page").removeClass('dark-mode')
    $(".contact-me").removeClass('dark-mode')
    $(".first-page").addClass('light-mode')
    $(".contact-me").addClass('light-mode')
    $("body").css('color','black')
    $("body").css('background-color','white')
    $(".link-1").html('<i class="fa-brands fa-linkedin fa-bounce""></i>')
    $(".link-2").html('<i class="fa-brands fa-twitter fa-shake"></i>')
    $(".link-3").html('<i class="fa-brands fa-github fa-flip"></i>')
  }
});
