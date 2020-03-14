$(document).ready(function(){
    $(".load").css("display","none")
$(".nav-link").click(function(){
      $("body,html").animate({
              scrollTop: $("#" + $(this).data("scroll")).offset().top - 90

      },1000);
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 1000) {
        $(".up").fadeIn(500);
    } else {
        $(".up").fadeOut(500);
    }
});
$(".up").click(function() {
    $("html,body").animate({
        scrollTop:0
    },1000);
})
   // start form validation 
   let capital = /^[A-Z]/
   let emaill = /^[A-Za-z0-9_-]+@(hotmail|gmail|yahoo)\.com$/;
   let required =  /^\s{0,}$/;
  let name = true
  let email = true
  let message = true
   $("#name").blur(function() {
      if (capital.test($(this).val()) === false ) {
         $(this).css("border","3px solid red ").next().removeClass("d-none")
         name = true
      }
       else {
         $(this).css("border","3px solid green ").next().addClass("d-none")
         name = false
       }
   })
   $("#email").blur(function() {
      if (emaill.test($(this).val()) === false ) {
         $(this).css("border","3px solid red ").next().removeClass("d-none")
         email = true
      }
       else {
         $(this).css("border","3px solid green ").next().addClass("d-none")
         email = false
       }
   })
   $("#message").blur(function() {
      if (required.test($(this).val())  ) {
         $(this).css("border","3px solid red ").next().removeClass("d-none")
         message = true
      }
       else {
         $(this).css("border","3px solid green ").next().addClass("d-none")
         message = false
       }
   })
   $("#subb").submit(function(e){
      if (name === true || email === true ||  sub === true || message === true ) {
          e.preventDefault();
          $("#name,#email,#message").blur()
      } 
     
     }) ;
});