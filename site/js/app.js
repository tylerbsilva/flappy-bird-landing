$(document).ready(function(){
  $('header')
    .velocity({
      opacity: 1,
      duration: 500
    });
  $('#headline')
    .velocity("transition.slideUpBigIn",{
      duration : 1500,
      delay: 500
    });
});
