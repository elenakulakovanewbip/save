window.onscroll = function showheader(){
  var header =document.querySelector('.navbar');
  if(window.pageYOffset> 200){
    header.classList.add('header-fixed');
  }
  else {
    header.classList.remove('header-fixed');
  }
  }
