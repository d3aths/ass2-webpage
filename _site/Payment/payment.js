function showLogin() {
  let x = document.getElementById('triangleDiv') //setting triangeDiv as the target
  if (x.style.display === 'none') { //if div is hidden
    x.style.display = 'flex' //then show it
  } else {
    x.style.display = 'none' //if its not, then hide it
  }
}
$(function () {
  $('[data-toggle="popover"]').popover();
  
  $('#cvc').on('click', function(){
    if ( $('.cvc-preview-container').hasClass('hide') ) {
      $('.cvc-preview-container').removeClass('hide');
    } else {
      $('.cvc-preview-container').addClass('hide');
    }    
  });
  
  $('.cvc-preview-container').on('click', function(){
    $(this).addClass('hide');
  });
});